<template>
  <div class="container__news">
    <div class="banner__news"></div>
    <div class="news__inner">
      <h1>全部 ({{ newsList.length }})</h1>
      <div class="news__item">
        <ul>
          <li v-for="item in newsList" :key="item.id" @click="$router.push(`/newsDetail/${item.id}`)">
            <h2>{{ item.headline }}</h2>
            <div class="news__item__author">作者：{{ item.createByName }}</div>
            <div class="news__item__desc">{{ item.textDesc }}</div>
            <div class="news__item__info">
              <span>浏览量：{{ item.readCount }}</span>
              <span>发布时间：{{ item.updateTime }}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="page-box">
        <Pagination :total-count="totalItems" :limit="params.pageSize" :get-by-page="getByPage" />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  name: 'newsList',
  data() {
    return {
      newsList: [],
      totalItems: 0,
      params: {
        pageNum: 1,
        pageSize: 10,
        headline: '',
        showFlag: 0
      }
    }
  },

  async asyncData({ $axios }) {
    const res = await $axios.post('/api/cargo/news/page', {
      pageNum: 1,
      pageSize: 10,
      headline: '',
      showFlag: 0
    });

    if (res.data.code === 200) {
      return { newsList: res.data.rows, totalItems: res.data.total }
    }

    return { newsList: [], totalItems: 0 }
  },

  methods: {
    getByPage(page) {
      this.params.pageNum = page
      this.getNewsList()
    },

    async getNewsList() {
      const res = await this.$axios.post('/api/cargo/news/page', this.params);
      if (res.data.code === 200) {
        this.newsList = res.data.rows
        this.totalItems = res.data.total
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container__news {
  .page-box {
    display: flex;
    justify-content: center;
    margin: 50px auto;
  }

  .banner__news {
    background: url('../static/assets/images/news_banner.jpg') no-repeat center;
    height: 450px;
  }

  .news__inner {
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
  }

  .banner__news {
    margin-bottom: 20px;

    img {
      width: 1200px;
    }
  }

  h1 {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
    color: #333;
    font-size: 16px;
  }

  .news__item {
    display: flex;
    align-items: center;
    padding: 20px 0;

    ul {
      width: 100%;

      li {
        width: 100%;
        padding: 20px 0;
        border-bottom: 1px dashed #ddd;

        h2 {
          font-size: 18px;
          line-height: 20px;
          margin-bottom: 15px;
          white-space: nowrap;
          text-overflow: ellipsis;

          &:hover {
            color: #1890ff;
            cursor: pointer;
          }
        }

        .news__item__author {
          color: #999;
          margin-bottom: 15px;
        }

        .news__item__desc {
          color: #666;
          line-height: 28px;
          margin-bottom: 15px;
        }

        .news__item__info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #999;
        }
      }
    }
  }
}
</style>
