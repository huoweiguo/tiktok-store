<template>
  <div v-if="totalCount" class="page-wrap">
    <span v-if="currentPage != 1" class="li-page" @click="goPrePage">
      上一页
    </span>
    <ul>
      <li v-for="(i, index) in showPageBtn" :key="index" :class="{ active: i === currentPage }" @click="pageOffset(i)">
        <span v-if="i">{{ i }}</span>
        <span v-else>···</span>
      </li>
    </ul>
    <span v-if="totalCount > limit" class="li-page" @click="goNextPage">
      下一页
    </span>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  props: {
    // 数据总数
    totalCount: {
      type: Number,
      default: 0,
    },
    // 每页显示的数据量
    limit: {
      type: Number,
      default: 25,
    },
    // 翻页调用 api 获取数据
    getByPage: {
      type: Function,
      default: () => { },
    },
  },
  data() {
    return {
      currentPage: 1,
      nextPage: 1,
      prePage: 1
    }
  },
  computed: {
    ...mapState('pagination', ['offset']),
    totalPage() {
      return Math.ceil(this.totalCount / this.limit)
    },
    showPageBtn() {
      const pageNum = this.totalPage
      const index = this.currentPage
      if (pageNum <= 5) return [...new Array(pageNum)].map((v, i) => i + 1)
      if (index <= 2) return [1, 2, 3, 0, pageNum]
      if (index >= pageNum - 1) return [1, 0, pageNum - 2, pageNum - 1, pageNum]
      if (index === 3) return [1, 2, 3, 4, 0, pageNum]
      if (index === pageNum - 2)
        return [1, 0, pageNum - 3, pageNum - 2, pageNum - 1, pageNum]
      return [1, 0, index - 1, index, index + 1, 0, pageNum]
    },
  },
  created() {
    const page = Number(this.$route.query.page)
    if (page) {
      this.GO_PAGE((page - 1) * this.limit)
    }
  },
  methods: {
    ...mapMutations('pagination', ['GO_PAGE', 'PRE_PAGE', 'NEXT_PAGE']),
    pageOffset(i) {
      if (i === 0 || i === this.currentPage) return
      this.currentPage = i
      this.GO_PAGE(i)
      this.getByPage(i)
    },
    goPrePage() {
      if (this.currentPage > 1) {
        this.PRE_PAGE(this.currentPage)
        this.currentPage--
        this.getByPage(this.currentPage)
      }
    },
    goNextPage() {
      if (this.currentPage < this.totalPage) {
        this.NEXT_PAGE(this.currentPage)
        this.currentPage++
        this.getByPage(this.currentPage)
      }
    },
  },
}
</script>

<style lang="less" scoped>
.page-wrap {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  user-select: none;

  .li-page {
    cursor: pointer;
    width: 65px;
    height: 32px;
    line-height: 32px;
    border: 1px solid rgba(204, 204, 204, 1);
    border-radius: 2px;
    text-align: center;
    margin-left: 12px;
  }

  .li-page:hover {
    color: #fff;
    background: rgba(67, 137, 255, 1);
  }

  ul {
    li {
      position: relative;
      float: left;
      width: 40px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      border: 1px solid rgba(204, 204, 204, 1);
      border-radius: 2px;
      text-align: center;
      margin-left: 12px;
      cursor: pointer;

      div {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 2;
      }

      a:hover {
        color: #fff;
      }
    }

    li:hover,
    li.active {
      color: #fff;
      background: rgba(67, 137, 255, 1);

      a {
        color: #fff;
      }
    }
  }
}
</style>
