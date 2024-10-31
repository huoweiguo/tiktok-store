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
      <catalog />

      <!--smallMenu-->
      <smallMenu />
    </div>

    <!--商品列表-->
    <div class="goods__container__list">
      <goodsItem />
    </div>
  </div>
</template>

<style scoped>
.home__container {
  width: 100%;
  min-width: 100%;
  background-color: #f6f6f6;
}
.navbar {
  background-color: red;
}

.catalog__container {
  min-height: 382px;
  padding-top: 30px;
  background: url("../assets/images/center-bg.png");
}

.goods__container__list {
  width: 1200px;
  margin: -130px auto 0;
}
</style>
