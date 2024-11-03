<template>
  <div class="home__container">
    <!--tabbar-->
    <tabbar />

    <!--搜索-->
    <searchItem />

    <!--菜单-->
    <menuAside />

    <!--榜单分类-->
    <div class="catalog__container">

      <div class="advert__swiper">
        <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
          <swiper-slide>
            <img class="swiper__img" src="../assets/images/swiper-2.jpg" alt="">
          </swiper-slide>
          <swiper-slide>
            <img class="swiper__img" src="../assets/images/swiper-3.jpg" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
      </div>

      <catalog />

      <!--smallMenu-->
      <smallMenu />
    </div>

    <!--商品列表-->
    <div class="goods__container__list">
      <goodsItem />
    </div>


    <!--底部-->
    <bottom />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { reactive } from 'vue'

const swiperOptionThumbs = reactive({
  loop: true,
  loopedSlides: 5, // looped slides should be the same
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
</script>

<style scoped>
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
}

.swiper__img {
  width: 1200px;
  height: 300px;
  border-radius: 10px;
}

.catalog__container {
  min-height: 382px;
  padding-top: 30px;
  background: url("../assets/images/center-bg.png") no-repeat;
  margin-bottom: 30px;
}

.goods__container__list {
  width: 1200px;
  margin: 0 auto;
}
</style>
