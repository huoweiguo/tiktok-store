<template>
  <div class="menu__container">
    <a class="menu__item active">实时榜单</a>
    <a class="menu__item">精选好货</a>
    <a class="menu__item">超级爆品</a>
    <a class="menu__item">出单奖励</a>
    <a class="menu__item">品牌优选</a>
    <a class="menu__item">全部商品</a>
  </div>
</template>

<style scoped>
.menu__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  background-color: #363741;
}

.menu__item {
  margin: 0 20px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  cursor: pointer;
  padding: 0 40px;
  height: 56px;
  line-height: 56px;
}

.menu__item:hover,
.menu__item.active {
  background-color: rgba(242, 242, 244, 0.1);
}
</style>
