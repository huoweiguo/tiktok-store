<template>
  <div>
    <div class="header-box">
      <div class="container">
        <div class="title">{{ menuInfo.textHead }}</div>
        <div class="jxhh__desc">{{ menuInfo.textDesc }}</div>
      </div>
    </div>
    <div class="container center-box">
      <div class="list-top">
        <div><b>{{ menuInfo.activityName }}</b></div>
      </div>
      <div class="list-cen">
        <div class="left">
          <div class="list-box">
            <div class="box" v-for="item in goodsList" :key="item.id">
              <div class="l">
                <img :src="item.fileList[0].fileUrl" />
              </div>
              <div class="r">
                <div class="title">
                  <a @click="goLink(item.id)">
                    <i class="top">top</i>
                    <span>{{ item.name }}</span>
                  </a>
                </div>
                <!-- <div class="desc">
                  *肉含量≥90%，肉感十足，醇香四溢，经典老味道，自留送礼都很赞👍
                </div> -->
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
                  <div class="pb">
                    <span>{{ item.readCount }}</span>
                    <div>浏览量</div>
                  </div>
                  <div class="pb">
                    <span>{{ item.clickCount }}</span>
                    <div>点击量</div>
                  </div>
                </div>
                <div class="shop__name">店铺：{{ item.shopName }}</div>
                <div class="btn-box">
                  <div class="btn">
                    <a @click="goLink(item.id)">查看详情</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page-box">
            <Pagination :total-count="totalItems" :limit="params.pageSize" :get-by-page="getByPage" />
          </div>
        </div>
        <div class="right">
          <div class="rbox" v-for="item in advList" :key="item.id">
            <img :src="item.advertisingUrl" @click="toRouter(item)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { EventBus } from '@/utils/event-bus'
import { routerType } from '@/utils/tools'
export default {
  components: { Pagination },
  data() {
    return {
      menuInfo: {},
      goodsList: [],
      advList: [],
      totalItems: 0,
      params: {
        param: '',
        featrue: 2,
        type: '',
        pageNum: 1,
        pageSize: 20,
        wipeImageInfo: 1
      },
    }
  },

  async asyncData({ $axios }) {
    const res = await $axios.$post('/api/cargo/info/page', {
      param: '',
      featrue: 2,
      type: '',
      pageNum: 1,
      pageSize: 20,
      wipeImageInfo: 1
    })
    if (res.code === 200) {
      return {
        goodsList: res.rows,
        totalItems: res.total
      }
    }

    return {
      goodsList: [],
      totalItems: 0
    }
  },

  methods: {
    getGoodsList() {
      this.$axios.post('/api/cargo/info/page', {
        ...this.params
      }).then(res => {
        if (res.data.code === 200) {
          this.goodsList = res.data.rows || []
          this.totalItems = res.data.total || 0
        }
      })
    },

    getMenuInfo() {
      this.$axios.$post('/api/cargoMenu/page', {
        menuKey: '2',
        pageNum: 1,
        pageSize: -1
      }).then(res => {
        if (res.code === 200) {
          this.menuInfo = res.rows[0] || {}
        }
      })
    },

    goLink(id) {
      this.$router.push(`/detail/${id}`)
    },

    getAdvert() {
      this.$axios.$post('/api/CargoAdvertising/page', {
        advertisingFlag: 0,
        pageNum: 1,
        pageSize: -1
      }).then(res => {
        if (res.code === 200) {
          this.advList = res.rows || []
        }
      })
    },

    toRouter(obj) {
      const { advertisingType, advertisingAddr } = obj
      if (advertisingType === 0) {
        // 菜单
        this.$router.push(routerType[advertisingAddr])
      } else {
        // 商品详情
        this.$router.push(`/detail/${advertisingAddr}`)
      }
    }
  },

  mounted() {
    this.getMenuInfo()
    this.getAdvert()
    EventBus.$on('searchGoods', data => {
      this.params.pageNum = 1
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
  background: url(../static/assets/images/center-bg.png) no-repeat;
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

.center-box {
  background: #fff;
  border-radius: 20px;
  margin-top: -200px;
  padding: 15px;
}

.shop__name {
  font-size: 14px;
  color: #aaa;
  margin: 20px;
}

.list-top {
  display: flex;
  font-size: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;

  div {
    flex: 1;
    font-size: 22px;
    line-height: 3;

    b {
      font-size: 22px;
      font-weight: bold;
      color: #f00;
      padding-bottom: 8px;
      border-bottom: 3px solid #f00;
    }
  }
}

.list-cen {
  display: flex;

  .left {
    flex: 1;
    padding-right: 15px;
    border-right: 1px solid #f0f0f0;
  }

  .right {
    padding-left: 15px;
    width: 236px;
  }
}

.rbox {
  margin-bottom: 30px;

  img {
    display: block;
    width: 100%;
    cursor: pointer;
  }

  .simg {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin: 10px 0;

    img {
      flex: 1;
      width: 30%;
    }
  }
}

.list-box {
  margin-bottom: 50px;

  .box {
    display: flex;
    gap: 20px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 10px;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      transform: translateY(-3px);
    }

    .l {
      width: 200px;
      height: 200px;
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
        margin-bottom: 20px;

        .top {
          display: inline-block;
          vertical-align: middle;
          margin-bottom: 2px;
          margin-right: 8px;
          padding: 0 7px;
          height: 24px;
          line-height: 24px;
          font-size: 14px;
          color: #fff;
          border-radius: 12px 12px 12px 0;
          background: #f9362d;
          background-image: linear-gradient(#f9362d, #fe6b18);
        }

        a {
          display: flex;
          align-items: flex-start;
          color: #333;
          cursor: pointer;

          span {
            font-size: 18px;
          }
        }
      }

      .desc {
        font-size: 14px;
        color: #666;
        margin: 10px 0 30px;
      }

      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .pb {
          font-size: 16px;
          color: #999;
          text-align: center;
          margin: 0 20px;

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
  display: flex;
  justify-content: center;
  margin: 50px auto;
}
</style>
