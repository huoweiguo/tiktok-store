<template>
  <div class="menu__container">
    <div class="menu__content">
      <a class="menu__item" :class="{ active: $route.name == 'index' }" href="/">实时榜单</a>
      <a class="menu__item" :class="{ active: $route.name == 'sift' }" href="/sift">精选好货</a>
      <a class="menu__item" :class="{ active: $route.name == 'explosive' }" href="/explosive">超级爆品</a>
      <a class="menu__item" :class="{ active: $route.name == 'brand' }" href="/brand">品牌优选</a>
      <a class="menu__item" :class="{ active: $route.name == 'real' }" href="/real">全部商品</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      menuList: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios({
        url: '/cargoMenu/page',
        method: 'post',
        data: {
          name: '',
          pageNum: 1,
          pageSize: -1
        }
      }).then(res => {
        if (res.code === 200) {
          this.menuList = res.rows || []
        }
      })
    }
  }
}
</script>

<style scoped>
.menu__container {
  width: 100%;
  height: 56px;
  background-color: #363741;
}

.menu__content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  height: 56px;
}

.menu__item {
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  cursor: pointer;
  width: 20%;
  padding: 0 40px;
  height: 56px;
  line-height: 56px;
  box-sizing: border-box;
  text-align: center;
}

.menu__item:hover,
.menu__item.active {
  background-color: rgba(242, 242, 244, 0.1);
}
</style>
