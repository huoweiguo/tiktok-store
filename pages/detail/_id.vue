<template>
  <div class="page">
    <div class="container bg">
      <div class="goods-box">
        <div class="goods-img">
          <swiper ref="swiperThumbs" class="swiper gallery-thumbs" v-if="goodsInfo.fileList?.length > 0"
            :options="swiperOptionThumbs">
            <swiper-slide v-for="(item, index) in goodsInfo.fileList" :key="index">
              <img class="swiper__img" :src="item.fileUrl" :alt="item.name" />
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination"></div>
            <div slot="button-next" class="swiper-button-next swiper-button-white"></div>
            <div slot="button-prev" class="swiper-button-prev swiper-button-white"></div>
          </swiper>
        </div>

        <div class="goods-info">
          <div class="name">{{ goodsInfo.name }}</div>
          <div class="info-box">
            <div class="top">查看人数 <span>{{ goodsInfo.clickCount }}</span></div>
            <div class="price">
              <div>
                <b>&yen;{{ goodsInfo.price?.toFixed(2) }}</b>
                <div>到手价</div>
              </div>
              <div>
                <b>{{ goodsInfo.brokerageRatio }}%</b>
                <div>佣金比例</div>
              </div>
              <div>
                <b>{{ goodsInfo.brokerage?.toFixed(2) }}</b>
                <div>佣金</div>
              </div>
            </div>
          </div>

          <div class="btns">
            <a :href="goodsInfo.shopUrl" target="_blank">
              <button>进入店铺</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="container bg wenan-box">
      <div class="title">
        <img src="https://www.jingtuitui.com/static/home_v3/images/icon/th_icon.png" />
        <span>营销文案</span>
      </div>
      <div class="cen-box">
        <div class="item">
          <div class="t">常规推广文案</div>
          <div class="c">
            <img
              src="http://img14.360buyimg.com/pop/jfs/t1/178931/29/46481/55192/666ba63dF77536b63/71c77e003ea1a9b3.jpg" />
            <div>
              伍尚ABS强光手电筒led户外USB充电家用便携18650迷你小手
              WS-66数显手电筒+Type-C线（1个装） -----------------------------
              京东价：62.9元 到手价：32.9元
              领券：https://coupon.m.jd.com/coupons/show.action?linkKey=AAROH_xIpeffAs_-naABEFoeW0eeJf01zo6Hdw0VAzh9lxZaThF6D7aJj3DSENEFrMmHWhO0pRDo5de9lvRElj3iVBRMfA
              抢购：https://jingfen.jd.com/detail/fsX4Wguc5g39L7CpZGFU0adJ_3uiINmMrv5dbEz8iPE.html
              -----------------------------
              【推荐理由】京东商城,品质无忧,万里挑一!
            </div>
          </div>
          <div class="bts">
            <button>转链</button>
            <button>复制</button>
          </div>
        </div>
        <div class="item">
          <div class="t">常规推广文案</div>
          <div class="c">
            <img
              src="http://img14.360buyimg.com/pop/jfs/t1/178931/29/46481/55192/666ba63dF77536b63/71c77e003ea1a9b3.jpg" />
            <div>
              伍尚ABS强光手电筒led户外USB充电家用便携18650迷你小手
              WS-66数显手电筒+Type-C线（1个装） -----------------------------
              京东价：62.9元 到手价：32.9元
              领券：https://coupon.m.jd.com/coupons/show.action?linkKey=AAROH_xIpeffAs_-naABEFoeW0eeJf01zo6Hdw0VAzh9lxZaThF6D7aJj3DSENEFrMmHWhO0pRDo5de9lvRElj3iVBRMfA
              抢购：https://jingfen.jd.com/detail/fsX4Wguc5g39L7CpZGFU0adJ_3uiINmMrv5dbEz8iPE.html
              -----------------------------
              【推荐理由】京东商城,品质无忧,万里挑一!
            </div>
          </div>
          <div class="bts">
            <button>转链</button>
            <button>复制</button>
          </div>
        </div>
        <div class="item">
          <div class="t">常规推广文案</div>
          <div class="c">
            <img
              src="http://img14.360buyimg.com/pop/jfs/t1/178931/29/46481/55192/666ba63dF77536b63/71c77e003ea1a9b3.jpg" />
            <div>
              伍尚ABS强光手电筒led户外USB充电家用便携18650迷你小手
              WS-66数显手电筒+Type-C线（1个装） -----------------------------
              京东价：62.9元 到手价：32.9元
              领券：https://coupon.m.jd.com/coupons/show.action?linkKey=AAROH_xIpeffAs_-naABEFoeW0eeJf01zo6Hdw0VAzh9lxZaThF6D7aJj3DSENEFrMmHWhO0pRDo5de9lvRElj3iVBRMfA
              抢购：https://jingfen.jd.com/detail/fsX4Wguc5g39L7CpZGFU0adJ_3uiINmMrv5dbEz8iPE.html
              -----------------------------
              【推荐理由】京东商城,品质无忧,万里挑一!
            </div>
          </div>
          <div class="bts">
            <button>转链</button>
            <button>复制</button>
          </div>
        </div>
      </div>
    </div> -->
    <!-- <div class="container">
      <div class="jingpin-box">
        <div class="title">
          <b>精品推荐</b>
          <div>为你推荐优质好货</div>
        </div>
        <div class="list-box">
          <goodsItem />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },

  data() {
    return {
      goodsInfo: {},
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    }
  },

  head() {
    return {
      title: this.goodsInfo.name || '商品详情'
    }
  },

  async asyncData({ $axios, route }) {
    const { id } = route.params
    const res = await $axios.$get(`/api/cargo/info/detail?id=${id}`)
    console.log(res, 'res++++')
    if (res.code === 200) {
      return { goodsInfo: res.data }
    }

    return { goodsInfo: {} }
  }
}
</script>
<style lang="less" scoped>
.page {
  background: #f6f6f6;
  padding: 30px 0;

  .bg {
    background: #fff;
    border-radius: 10px;
    margin-bottom: 20px;
  }
}

.goods-box {
  display: flex;
  gap: 40px;
  padding: 30px;

  .goods-img {
    display: flex;
    width: 400px;
    height: 300px;
    justify-content: center;
    align-items: center;

    .swiper-button-prev,
    .swiper-button-next {
      color: #ddd;
    }

    .swiper__img {
      display: block;
      max-width: 100%;
      max-height: 300px;
      margin: 0 auto;
    }
  }

  .goods-info {
    flex: 1;

    .name {
      font-size: 20px;
      font-weight: bold;
      color: #333;
    }
  }

  .info-box {
    background: #f6f6f6;
    margin: 30px 0;
    border-radius: 5px;

    .top {
      text-align: right;
      color: rgba(255, 255, 255, 0.5);
      // 渐变背景
      background: linear-gradient(90deg, #ff7d00 0%, #ff5400 100%);
      border-radius: 10px 10px 0 0;
      padding: 10px 20px;

      span {
        color: #fff;
      }
    }

    .price {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      font-size: 16px;
      text-align: center;

      &>div {
        flex: 1;
        line-height: 2;

        b {
          font-size: 24px;
          color: #ff4215;
        }

        span {
          font-size: 14px;
          display: block;
          color: #666;
        }
      }
    }
  }

  .btns {
    a {
      display: flex;
    }

    button {
      height: 45px;
      padding: 0 30px;
      margin-right: 16px;
      cursor: pointer;
    }
  }
}

.wenan-box {
  .title {
    font-size: 18px;
    padding: 15px;
    border-bottom: 1px solid #f6f6f6;

    img {
      display: inline-block;
      vertical-align: middle;
    }
  }

  .cen-box {
    display: flex;
    padding: 20px;
    gap: 20px;
  }

  .item {
    flex: 1;
    border: 1px solid #5f86ff;
    border-radius: 10px;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 0 2px #5f86ff;
      background: rgba(95, 134, 255, 0.1);
    }

    img {
      max-width: 100px;
      margin: 10px auto;
    }

    .t {
      width: 50%;
      line-height: 35px;
      font-size: 14px;
      color: #fff;
      background: #5f86ff;
      text-align: center;
      margin: auto;
      border-radius: 0 0 100% 100%;
    }

    &:nth-child(2) {
      border-color: #ff5400;

      &:hover {
        box-shadow: 0 0 0 2px #ff5400;
        background: rgba(255, 84, 0, 0.1);
      }

      .t {
        background: #ff5400;
      }
    }

    &:nth-child(3) {
      border-color: #13bf6f;

      &:hover {
        box-shadow: 0 0 0 2px #13bf6f;
        background: rgba(19, 191, 111, 0.1);
      }

      .t {
        background: #13bf6f;
      }
    }

    .c {
      width: 100%;
      height: 360px;
      overflow: auto;
      padding: 20px;
      font-size: 14px;
      // 强制换行
      word-break: break-all;
    }

    .bts {
      text-align: center;
      margin-bottom: 30px;

      button {
        height: 35px;
        border-radius: 35px;
        padding: 0 30px;
        margin: 0 10px;
      }
    }
  }
}

.jingpin-box {
  margin: 50px 0;

  .title {
    text-align: center;

    b {
      font-size: 30px;
    }

    div {
      color: #666;
      margin-top: 10px;

      &::before,
      &::after {
        content: "-- -- -- -- -- -- -- --";
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        margin: 0 10px;
        color: #ccc;
      }
    }
  }

  .list-box {
    margin-top: 30px;
  }
}
</style>
