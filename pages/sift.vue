<template>
  <div>
    <div class="header-box">
      <div class="container">
        <div class="title">{{ menuInfo.textHead }}</div>
        <div class="jxhh__desc">{{ menuInfo.textDesc }}</div>
        <div class="types-box">
          <div class="line between">
            <a v-for="item in classifyList" :key="item.id" :class="{ active: item.id === currentIndex }"
              @click="handleChange(item.id)">{{ item.name }}</a>
          </div>
          <!-- <div class="line screen">
            <div>￥<input type="text"></div>
            <div>￥<input type="text"></div>
            <div>佣金比例<input type="text">￥</div>
            <button>筛选</button>
          </div> -->
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list-box">
        <div class="box" v-for="item in goodsList" :key="item.id">
          <div class="l">
            <img :src="item.fileList[0].fileUrl" />
          </div>
          <div class="r">
            <div class="title">
              <a @click="goLink(item.id)">
                <span>{{ item.name }}</span>
              </a>
            </div>
            <div class="price">
              <div class="pb">
                <b>{{ item.price.toFixed(2) }}</b>
                <div>到手价</div>
              </div>
              <div class="pb">
                <span>{{ item.brokerage }}</span>
                <div>佣金</div>
              </div>
              <div class="pb">
                <span>{{ item.brokerageRatio }}%</span>
                <div>佣金比</div>
              </div>
            </div>
            <div class="goods__hits">
              <span><img style="height: 16px" src="../static/assets/images/eye__icon.svg" /><b>{{ item.readCount
                  }}</b></span>
              <span><img style="height: 20px" src="../static/assets/images/click__icon.svg" /><b>{{ item.clickCount
                  }}</b></span>
            </div>
            <div class="btn-box">
              <div class="btn">
                <a @click="goLink(item.id)">查看详情</a>
              </div>
            </div>
          </div>
        </div>
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
            到第<input type="text" min="1">页
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
  data() {
    return {
      params: {
        param: '',
        featrue: 1,
        type: '',
        pageNum: 1,
        pageSize: 20
      },
      menuInfo: {},
      currentIndex: '',
      goodsList: [],
      classifyList: [],
    }
  },

  methods: {
    getClassifyList() {
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

    goLink(id) {
      this.$router.push(`/detail/${id}`)
    },

    getGoodsList() {
      this.$axios.post('/api/cargo/info/page', {
        ...this.params
      }).then(res => {
        if (res.data.code === 200) {
          this.goodsList = res.data.rows || []
          console.log(this.goodsList, 'goodsList')
        }
      })
    },

    handleChange(id) {
      this.currentIndex = id
      this.params.type = id
      this.getGoodsList()
    },

    getMenuInfo() {
      this.$axios.$post('/api/cargoMenu/page', {
        menuKey: '1',
        pageNum: 1,
        pageSize: -1
      }).then(res => {
        if (res.code === 200) {
          this.menuInfo = res.rows[0] || {}
        }
      })
    }
  },

  mounted() {
    this.getClassifyList()
    this.getGoodsList()
    this.getMenuInfo()
    EventBus.$on('searchGoods', data => {
      this.params.param = data.param !== undefined ? data.param : this.params.param
      this.params.type = data.type !== undefined ? data.type : this.params.type
      this.params.salesType = data.salesType !== undefined ? data.salesType : this.params.salesType

      this.getGoodsList()
    })
  }
}
</script>

<style lang='less' scoped>
.header-box {
  // 背景渐变
  min-height: 382px;
  padding-top: 30px;
  background: url(/_nuxt/static/assets/images/center-bg.png) no-repeat;
  margin-bottom: 30px;

  .title {
    font-size: 36px;
    text-align: center;
    line-height: 3;
    color: #fff;
  }

  .jxhh__desc {
    font-size: 24px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
  }
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

    &.between {
      justify-content: flex-start;
    }

    &.screen {
      gap: 20px;

      input {
        margin: 0 5px;
      }
    }

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
  margin-top: -120px;
  margin-bottom: 50px;

  .box {
    width: calc(50% - 10px);
    display: flex;
    gap: 20px;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }

    .l {
      width: 246px;
      height: 246px;
      border-radius: 20px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .r {
      flex: 1;

      .title {
        margin-bottom: 50px;

        a {
          display: flex;
          align-items: flex-start;
          color: #333;
          font-size: 18px;
          cursor: pointer;
        }
      }

      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        .pb {
          font-size: 16px;
          color: #999;
          text-align: center;

          span {
            font-size: 22px;
            color: #333;
          }

          b {
            font-size: 22px;
            font-weight: bold;
            color: #f00;
          }
        }


      }

      .btn {
        text-align: right;

        a {
          display: inline-block;
          padding: 10px 20px;
          background: #f00;
          color: #fff;
          border-radius: 20px;
          cursor: pointer;
        }
      }

    }

  }
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
