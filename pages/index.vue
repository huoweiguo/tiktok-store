<template>
  <div class="home__container">
    <!--榜单分类-->
    <div class="catalog__container">
      <div class="advert__swiper">
        <swiper ref="swiperThumbs" class="swiper gallery-thumbs" :options="swiperOptionThumbs">
          <swiper-slide v-for="(item, index) in sliderArr" :key="index">
            <a :href="toLinks(item)">
              <img class="swiper__img" :src="item.fileUrl" :alt="item.name" />
            </a>
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination"></div>
          <div slot="button-next" class="swiper-button-next swiper-button-white"></div>
          <div slot="button-prev" class="swiper-button-prev swiper-button-white"></div>
        </swiper>
      </div>

      <catalog />

      <!--smallMenu-->
      <smallMenu />
    </div>

    <!--商品列表-->
    <div class="goods__container__list">
      <goodsItem :list="goodsList" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { routerType } from '@/utils/tools'
import { EventBus } from '@/utils/event-bus'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliderArr: [],
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
      params: {
        param: '',
        featrue: 0,
        salesType: 0,
        type: '',
        pageNum: 1,
        pageSize: 100
      },
      goodsList: []
    }
  },

  async asyncData({ $axios }) {
    const ret = await $axios.$post('/api/cargo/info/page', {
      param: '',
      featrue: 0,
      salesType: 0,
      type: '',
      pageNum: 1,
      pageSize: 100
    })
    if (ret.code === 200) {
      return { goodsList: ret.rows || [] }
    }

    return { goodsList: [] }
  },

  methods: {
    getSliderList() {
      this.$axios.$post('/api/cargo/slideshow/page', {
        advertisingFlag: 0,
        pageNum: 0,
        pageSize: -1
      }).then(res => {
        if (res.code === 200) {
          this.sliderArr = res.rows || []
        }
      })
    },

    getGoodsList() {
      this.$axios.post('/api/cargo/info/page', {
        ...this.params
      }).then(res => {
        if (res.data.code === 200) {
          this.goodsList = res.data.rows || []
        }
      })
    },

    toLinks(obj) {
      const { skipType, skipAddr } = obj
      if (skipType === '0') {
        // 菜单
        return routerType[skipAddr]
      } else {
        // 商品详情
        return `/detail/${skipAddr}`
      }
    }
  },

  mounted() {

    this.getSliderList()
    this.getGoodsList()

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
.home__container {
  width: 100%;
  min-width: 100%;
  background-color: #f6f6f6;
}

.navbar {
  background-color: red;
}

.advert__swiper {
  width: 1200px;
  height: 300px;
  margin: 0 auto 30px;

  a {
    display: block;
    cursor: pointer;
    z-index: 1000;
  }
}

.swiper__img {
  display: block;
  width: 1200px;
  height: 300px;
  cursor: pointer;
  border-radius: 10px;
}

.catalog__container {
  min-height: 382px;
  padding-top: 30px;
  background: url("../static/assets/images/center-bg.png") no-repeat;
  margin-bottom: 30px;
}

.goods__container__list {
  width: 1200px;
  margin: 0 auto;
}
</style>
