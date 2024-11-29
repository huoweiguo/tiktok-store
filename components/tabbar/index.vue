<template>
  <div class="tabbar__container">
    <div class="tabbar">
      <div class="tabbar__links">
        <a>您好，欢迎访问替客拓客</a>
      </div>
      <div class="tabbar__links">
        <a @click="$router.push('/about')">关于我们</a>
        <a href="#bottom_cont">联系我们</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  components: {},
  data() {
    return {}
  },
  methods: {
  },
}
</script>

<style scoped>
.tabbar__container {
  height: 32px;
  background-color: #e6e6e6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 32px;
  margin: 0 auto;
}

.tabbar__links a {
  color: #888;
  margin-right: 20px;
  cursor: pointer;
}

.tabbar__links a:hover {
  color: #1890ff;
}
</style>
