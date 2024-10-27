<template>
  <div class="home__container">
    <!--tabbar-->
    <tabbar />

    <!--菜单-->
    <menuAside />

    <!--榜单分类-->
    <div class="catalog__container">
      <catalog />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  background-color: red;
}

.catalog__container {
  min-height: 382px;
  background: url("../assets/images/center-bg.png");
}
</style>
