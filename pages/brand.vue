<template>
  <div>
    <div class="header-box">
      <div class="container">
        <div class="title">{{ menuInfo.textHead }}</div>
        <div class="jxhh__desc">{{ menuInfo.textDesc }}</div>
      </div>
    </div>
    <div class="container">
      <div class="list-box">
        <div v-for="item in goodsList" :key="item.id" class="box-main">
          <div class="box">
            <div class="l">
              <img :src="item.fileList[0].fileUrl" />
            </div>
            <div class="r">
              <div class="title">
                <a href="/detail/">
                  <span>{{ item.name }}</span>
                </a>
              </div>
              <div class="price">
                <div class="pb">
                  <b>{{ item.price.toFixed(2) }}</b>
                  <div>到手价</div>
                </div>
                <div class="pb">
                  <span>{{ item.brokerage.toFixed(2) }}</span>
                  <div>佣金</div>
                </div>
                <div class="pb">
                  <span>{{ item.brokerageRatio }}%</span>
                  <div>佣金比</div>
                </div>
              </div>

              <div class="statistic">
                <div><img style="height: 16px"
                    src="../static/assets/images/eye__icon.svg" /><span>{{ item.readCount }}</span></div>
                <div><img style="height: 20px" src="../static/assets/images/click__icon.svg" /><span>{{ item.clickCount
                    }}</span></div>
              </div>

              <div class="btn-box">
                <div class="btn">
                  <a @click="goLink(item.id)">查看详情</a>
                </div>
              </div>
            </div>
          </div>
          <div class="shop">
            <div class="tabs">
              <img src="../static/assets/images/brand_tag.png" /><span>{{ item.shopName }}</span>
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
  data() {
    return {
      params: {
        param: '',
        featrue: 3,
        type: '',
        pageNum: 1,
        pageSize: 20
      },
      menuInfo: {},
      currentIndex: '',
      goodsList: []
    }
  },
  methods: {
    getGoodsList() {
      this.$axios.post('/api/cargo/info/page', {
        ...this.params
      }).then(res => {
        if (res.data.code === 200) {
          this.goodsList = res.data.rows || []
        }
      })
    },

    goLink(id) {
      this.$router.push(`/detail/${id}`)
    },

    getMenuInfo() {
      this.$axios.$post('/api/cargoMenu/page', {
        menuKey: '3',
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
    this.getMenuInfo()
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

.list-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: -200px;
  margin-bottom: 30px;

  .box-main {
    width: calc(50% - 10px);
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }

    .box {
      display: flex;
      gap: 20px;
    }

    .l {
      width: 220px;
      height: 220px;
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
        margin-bottom: 30px;
        font-size: 16px;

        a {
          display: flex;
          align-items: flex-start;
          color: #333;
        }
      }

      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        // margin-bottom: 20px;
        background-color: #fafbfc;
        padding: 10px;

        .pb {
          font-size: 14px;
          color: #999;
          text-align: center;

          span {
            font-size: 18px;
            font-weight: bold;
            color: #333;
          }

          b {
            font-size: 18px;
            font-weight: bold;
            color: #333;
          }
        }
      }

      .progress {
        height: 6px;
        border-radius: 6px;
        background-color: #fafafa;
        margin-bottom: 10px;

        .bar {
          display: block;
          height: 100%;
          width: 100%;
          background: rgb(255, 105, 65);
          background: linear-gradient(90deg,
              rgba(255, 105, 65, 1),
              rgba(255, 145, 50, 1));
          border-radius: inherit;
        }
      }

      .statistic {
        display: flex;
        align-items: center;
        margin: 20px 0;

        &>div {
          display: flex;
          align-items: center;
          margin-right: 20px;
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

    .shop {
      border-top: 1px solid #f6f6f6;
      display: flex;
      justify-content: space-between;
      padding: 15px 0px 0;
      margin-top: 10px;

      .name {
        a {
          display: flex;
          align-items: center;
          color: #666;

          img {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
        }
      }

      .tabs {
        display: flex;

        img {
          display: block;
          width: 12px;
          height: 24px;
        }

        span {
          display: block;
          line-height: 24px;
          color: #fff;
          padding-left: 5px;
          padding-right: 10px;
          -moz-border-radius: 0 4px 4px 0;
          -webkit-border-radius: 0 4px 4px 0;
          border-radius: 0 4px 4px 0;
          position: relative;
          background: rgb(91, 161, 255);
          background: linear-gradient(90deg,
              rgba(91, 161, 255, 1),
              rgba(109, 111, 255, 1));
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
