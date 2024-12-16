<template>
  <div>
    <div class="head">
      <div class="seatch">
        <input type="text" value="" placeholder="搜一下" />
      </div>

      <div class="seatch_butt">搜索</div>
    </div>

    <!--  -->
    <div class="swiper-box" v-if="sliderArr.length > 0">
      <swiper
        ref="swiperThumbs"
        class="swiper gallery-thumbs"
        :options="swiperOptionThumbs"
      >
        <swiper-slide v-for="(item, index) in sliderArr" :key="index">
          <a :href="goLink(item)">
            <img class="swiper__img" :src="item.fileUrl" :alt="item.name" />
          </a>
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

    <!--  -->
    <div class="kind">
      <ul>
        <li class="kind_box" v-for="(item, index) in smallMenu" :key="index">
          <a :href="`/m/sift?id=${item.id}`">
            <div class="kind_photo">
              <img :src="item.typeUrl" />
            </div>
            <div class="kind_name">{{ item.name }}</div>
          </a>
        </li>
      </ul>
    </div>

    <!--  -->
    <div class="cut_box">
      <div class="cut_newgoods">
        <div class="cut_icon">
          <img
            src="https://www.jingtuitui.com/static/home/mobile/img/icon1.png"
          />
        </div>

        新品推荐

        <div class="cut_icon">
          <img
            src="https://www.jingtuitui.com/static/home/mobile/img/icon2.png"
          />
        </div>
      </div>
    </div>

    <!--  -->
    <div class="goods">
      <div class="goods-item" v-for="(item, i) in goodsList" :key="i">
        <a :href="`/m/goods?id=${item.id}`">
          <div class="new_goods">
            <div class="goods_photo">
              <img :src="item.fileList[0].fileUrl" />
            </div>
            <!-- <div class="quan">券￥5</div> -->
            <div class="goods_show">{{ item.name }}</div>
            <div class="price">
              到手价
              <span class="price_c">
                ￥<span class="price_num">{{ item.price.toFixed(2) }}</span>
              </span>
              <span class="price_befor">￥{{ item.price.toFixed(2) }}</span>
            </div>
            <div class="get_num">
              佣金：{{ item.brokerageRatio }}%（￥{{ item.brokerage }}）
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- footer -->
    <MFooterBar></MFooterBar>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { routerType } from "@/utils/tools";
export default {
  layout: "mobile",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliderArr: [],
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
      smallMenu: [],
      goodsList: [],
      params: {
        param: "",
        featrue: 0,
        salesType: 0,
        type: "",
        pageNum: 1,
        pageSize: 100,
        wipeImageInfo: 1,
      },
    };
  },
  created() {
    this.getSliderList();
    this.getClassifyList();
    this.getGoodsList();
  },
  methods: {
    getSliderList() {
      this.$axios
        .$post("/api/cargo/slideshow/page", {
          advertisingFlag: 0,
          pageNum: 0,
          pageSize: -1,
        })
        .then((res) => {
          if (res.code === 200) {
            this.sliderArr = res.rows || [];
          }
        });
    },
    goLink(obj) {
      const { skipType, skipAddr } = obj;
      if (skipType === "0") {
        // 菜单
        return routerType[skipAddr];
      } else {
        // 商品详情
        return `/m/goods/?id=${skipAddr}`;
      }
    },
    getClassifyList() {
      this.$axios
        .post("/api/CargoType/page", {
          enableFlag: 1,
          pageNum: 1,
          pageSize: -1,
        })
        .then((res) => {
          if (res.data.code === 200) {
            if (res.data.rows.length > 0) {
              this.smallMenu = [...res.data.rows];
            } else {
              this.smallMenu = [];
            }
          }
        });
    },
    getGoodsList() {
      this.$axios
        .post("/api/cargo/info/page", {
          ...this.params,
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.goodsList = res.data.rows || [];
          }
        });
    },
  },
};
</script>

<style lang="less" scoped>
.swiper__img {
  // 宽高比不变
  width: 100%;
  object-fit: cover;
}
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  height: 50px;
  background: #4a9bf7;
  font-size: 22px;
}

.seatch {
  flex: 1;
  input {
    width: 100%;
    height: 30px;
    border-radius: 17px;
    background: #fff;
    margin-left: 17px;
  }
}

.seatch_butt {
  height: 33px;
  padding: 0 20px;
  margin-left: 15px;
  line-height: 33px;
  color: #fff;
  font-size: 16px;
  text-align: center;
}

.kind {
  margin: 20px;

  img {
    width: 53px;
    height: 53px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  .kind_box {
    text-align: center;
    width: 20%;
    margin-bottom: 20px;

    a {
      display: inline-block;
      text-align: center;
      color: #333;
    }

    .kind_photo {
      border-radius: 100px;
      overflow: hidden;
    }

    .kind_name {
      font-size: 12px;
    }
  }
}

.cut_box {
  width: 100%;
  height: 35px;

  .cut_newgoods {
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
  }

  .cut_icon {
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 10px;

    img {
      display: block;
      height: 100%;
    }
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px;

  .goods-item {
    position: relative;
    width: calc(100% / 2 - 5px);

    a {
      display: block;
      color: #333;
    }

    .goods_photo {
      img {
        width: 188px;
        height: 188px;
        border-radius: 10px;
      }
    }

    .quan {
      position: absolute;
      top: 155px;
      width: 75px;
      height: 25px;
      line-height: 25px;
      z-index: 4;
      font-size: 12px;
      color: #ffffff;
      text-align: center;
      background-color: #4a9bf7;
    }

    .goods_show {
      height: 40px;
      line-height: 20px;
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 5px 0;
    }

    .price {
      height: 25px;
      line-height: 25px;
      font-size: 14px;
      margin: 0 auto;
      // 禁止换行
      white-space: nowrap;

      .price_c {
        color: #4a9bf7;
        font-size: 18px;
      }

      .price_befor {
        color: #999;
        text-decoration: line-through;
      }

      .get_num {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
