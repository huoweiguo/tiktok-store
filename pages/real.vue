<template>
  <div>
    <div class="header-box">
      <div class="container">
        <div class="types-box">
          <div class="line between">
            <a v-for="item in classifyList" :key="item.id" :class="{ active: item.id === currentIndex }" @click="handleChange(item.id)">{{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list-box">
        <goodsItemAll :list="goodsList"/>
      </div>

      <div class="page-box">
        <div>
          <a href="javascript:;">&lt;</a>
          <span class="curr">
            <em class="em"></em>
            <em>1</em>
          </span>
          <a href="javascript:;" data-page="2">2</a>
          <a href="javascript:;" data-page="3">3</a>
          <span class="spr">…</span>
          <a href="javascript:;" class="last" title="尾页" data-page="8">8</a>
          <a href="javascript:;" class="next" data-page="2">&gt;</a>
          <span class="count">共 291 条</span>
          <span class="skip">
            到第<input type="text" min="1" />页
            <button type="button" class="btn">确定</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/utils/event-bus'
export default {
  data () {
    return {
      params: {
        param: '',
        featrue: -1,
        type: '',
        pageNum: 1,
        pageSize: 20
      },
      currentIndex: '',
      goodsList: [],
      classifyList: [],
    }
  },

  methods: {
    getClassifyList () {
      this.$axios.post('/api/CargoType/page', {
        enableFlag: 1,
        pageNum: 1,
        pageSize: -1
      }).then(res => {
        if (res.data.code === 200) {
          if (res.data.rows.length > 0) {
            this.classifyList = [{ id: '', name: '全部' }, ...res.data.rows]
          } else {
            this.classifyList = [{ id: '', name: '全部' }]
          }
        }
      })
    },

    getGoodsList () {
      this.$axios.post('/api/cargo/info/page',{
        ...this.params
      }).then(res => {
        if (res.data.code === 200) {
          this.goodsList = res.data.rows || []
        }
      })
    },

    handleChange (id) {
      this.currentIndex = id
      this.params.type = id
      this.getGoodsList()
    }
  },

  mounted () {
    this.getClassifyList()
    this.getGoodsList()
    EventBus.$on('searchGoods', data => {
      this.params.param = data.param !== undefined ? data.param : this.params.param
      this.params.type = data.type !== undefined ? data.type : this.params.type
      this.params.salesType = data.salesType !== undefined ? data.salesType : this.params.salesType

      this.getGoodsList()
    })
  }
}
</script>

<style lang="less" scoped>
.header-box {
  // 背景渐变
  min-height: 382px;
  padding-top: 30px;
  background: url(/_nuxt/assets/images/center-bg.png) no-repeat;
  margin-bottom: 30px;

  .title {
    font-size: 30px;
    text-align: center;
    line-height: 3;
  }
}

.text-box {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 20px;
}

.types-box {
  width: 1200px;
  margin: 30px auto 0;
  padding: 15px 10px;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 10px;

  .line {
    display: flex;
    align-items: center;
    color: #333;

    a {
      margin: 0 5px;
      padding: 3px 10px;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;

      &.active {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.5);
        border-radius: 15px;
      }
    }
  }
}

.list-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: -240px;
  margin-bottom: 50px;
}

.page-box {
  text-align: center;
  margin: 50px auto;

  a,
  .curr {
    display: inline-block;
    height: 36px;
    width: 36px;
    line-height: 34px;
    margin: 0 5px;
    border-radius: 4px;
    font-size: 14px;
    color: #333;

    vertical-align: middle;
    border: 1px solid #ddd;
    background-color: #fff;
    text-align: center;
  }

  .curr {
    background: #5086ff;
    color: #fff;
    border: 0;
  }

  .count {
    margin: 0 10px;
  }

  .skip {
    input {
      width: 30px;
      height: 30px;
      margin: 0 5px;
      text-align: center;
    }

    button {
      font-size: 14px;
    }
  }
}
</style>
