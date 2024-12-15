<template>
  <div>
    <div class="top">
      <div class="go_back" @click="goBack">
        <img
          src="https://www.jingtuitui.com/static/home/mobile/img/go_back.png"
        />
      </div>
      <div class="go_home" @click="goHome">
        <img
          src="https://www.jingtuitui.com/static/home/mobile/img/go_home.png"
        />
      </div>
    </div>

    <!--  -->
    <div class="this_goods">
      <div class="banner">
        <swiper
          ref="swiperThumbs"
          class="swiper gallery-thumbs"
          :options="swiperOptionThumbs"
        >
          <swiper-slide
            v-for="(item, index) in goodsInfo.fileList"
            :key="index"
          >
            <img class="swiper__img" :src="item.fileUrl" :alt="item.name" />
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
          <div
            slot="button-next"
            class="swiper-button-next swiper-button-white"
          ></div>
          <div
            slot="button-prev"
            class="swiper-button-prev swiper-button-white"
          ></div>
        </swiper>
      </div>
      <div class="this_kind">
        <div class="Piangou">HOT</div>
        <div class="this_time">点击次数：{{ goodsInfo.clickCount || 0 }}</div>
      </div>
      <div class="this_show">{{ goodsInfo.name }}</div>
      <div class="this_price">
        <div class="after_quan">
          到手价
          <span class="price_c">
            ￥<span class="after_price">{{ goodsInfo.price }}</span>
          </span>
        </div>
        <div class="befor_quan">
          在售价<span class="befor_price">￥{{ goodsInfo.price }}</span>
        </div>
      </div>
      <div class="this_bottom">
        <div class="get_price">
          佣金<span class="this_rute">{{ goodsInfo.brokerageRatio }}%</span>
          （￥{{ goodsInfo.brokerage }}）
        </div>
      </div>
      <div class="this_cut"></div>
      <div class="link">
        <!-- <div id="goods_content">
          <div class="link_photo">
            <img :src="goodsInfo.fileList[0].fileUrl" />
          </div>
          <div class="link_show">
            <div v-html="goodsInfo.synopsis"></div>
            <br />
            <span class="gray">抢购：</span>
            <a target="_blank" :href="goodsInfo.shopUrl">
              {{ goodsInfo.shopUrl }}
            </a>
            <p></p>
          </div>
        </div> -->
        <div class="link_butt">
          <a :href="goodsInfo.shopUrl" target="_blank">
            <button class="butt1">立即转链</button>
          </a>
          <!-- <button class="butt2">复制文案</button> -->
        </div>
      </div>
      <div class="this_cut"></div>
    </div>

    <!--  -->
    <div class="goods-box">
      <div class="goods_cut">
        <div class="cut_img">
          <img
            src="https://www.jingtuitui.com/static/home/mobile/img/cut_img.png"
          />
        </div>
        <div class="cut_tit">领券秒杀精选</div>
      </div>
      <div class="goods-list">
        <div class="time_goods" v-for="(item, index) in goodsList" :key="index">
          <a :href="`/m/goods?id=${item.id}`">
            <div class="time_goods_photo">
              <img :src="item.fileList[0].fileUrl" />
            </div>
            <div class="time_goods_bottom">
              <div class="time_goods_top">{{ item.name }}</div>
              <div class="time_goods_price">
                到手价
                <span class="time_after_price">
                  <span>￥</span>
                  <span class="time_price_num">{{
                    item.price.toFixed(2)
                  }}</span>
                </span>
              </div>
              <div class="good_buttom">
                <div class="time_rute">
                  佣金比例：{{ item.brokerageRatio }}%（￥{{
                    item.brokerage.toFixed(2)
                  }}）
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  layout: "mobile",
  components: {
    Swiper,
    SwiperSlide,
  },
  async asyncData({ $axios, app }) {
    const data = {
      goodsInfo: {},
      goodsList: [],
      params: {
        param: "",
        featrue: 2,
        type: "",
        pageNum: 1,
        pageSize: 20,
        wipeImageInfo: 1,
      },
    };

    const id = app.router.currentRoute.query.id || "";
    const res = await $axios.get(`/api/cargo/info/detail?id=${id}`);
    if (res.data.code === 200) {
      data.goodsInfo = res.data.data || {};
    }

    const res2 = await $axios.post("/api/cargo/info/page", data.params);
    if (res2.data.code === 200) {
      data.goodsList = res2.data.rows || [];
    }

    return data;
  },
  data() {
    return {
      swiperOptionThumbs: {
        loop: true,
        centeredSlides: true,
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    goHome() {
      window.location.href = "/m";
    },
  },
};
</script>
<style lang="less" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 20px;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 40px;
    width: 40px;
  }
}

.this_goods {
  width: 100%;
  .banner {
    width: 100%;
    img {
      width: 100%;
    }
  }

  .this_kind {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .Piangou {
      width: 47px;
      height: 23px;
      line-height: 23px;
      background: #fda;
      color: #fc6d23;
      font-size: 13px;
      border-radius: 12px;
      text-align: center;
    }

    .this_time {
      height: 23px;
      font-size: 12px;
      color: #999;
    }
  }

  .this_show {
    font-size: 16px;
    color: #333;
    margin: 0 10px;
  }

  .this_price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .price_c {
      color: #fc6d23;
    }

    .after_price {
      font-size: 22px;
    }

    .befor_quan {
      font-size: 12px;
      text-decoration: line-through;
      color: #999;
    }
  }

  .this_bottom {
    padding: 10px;
    padding-top: 0;
    font-size: 16px;
  }
}

.this_cut {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
}

.link {
  padding: 20px;

  .link_photo {
    height: 100px;
    max-width: 100px;
    margin-bottom: 10px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

.goods-box {
  padding: 10px;

  .goods_cut {
    display: flex;
    font-size: 16px;
    padding: 10px;

    img {
      height: 23px;
      margin-right: 10px;
    }
  }

  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }

  .time_goods {
    width: calc(50% - 5px);
    border: 1px solid #f5f5f5;
    border-radius: 10px;

    a {
      display: block;
      color: #333;
    }

    .time_goods_photo {
      img {
        width: 100%;
      }
    }

    .time_goods_bottom {
      padding: 10px;
    }

    .time_goods_top {
      font-size: 14px;
      color: #333;
      line-height: 20px;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .time_goods_price {
      font-size: 16px;

      .time_after_price {
        color: #fc6d23;
      }

      .time_price_num {
        font-size: 18px;
      }
    }

    .good_buttom {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
