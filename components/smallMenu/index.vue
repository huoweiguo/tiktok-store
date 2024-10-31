<template>
  <div class="small__menu__container">
    <template v-for="(item, index) in smallMenu">
      <a :key="index" :class="{ active: index === currentIndex }">{{ item }}</a>
    </template>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
const smallMenu = ref([]);
const currentIndex = ref(0);
smallMenu.value = ['全部', '居家日用', '食品', '生鲜', '图书', '美妆各护', '母婴', '数码家电', '女装']
</script>

<style scoped>
.small__menu__container {
  width: 1200px;
  margin: 30px auto 0;
  padding: 15px 10px;
  background-color: rgba(0,0,0,0.35);
  border-radius: 10px;
}
.small__menu__container a {
  margin: 0 5px;
  padding: 3px 10px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
}
.small__menu__container a.active {
  background-color: #fff;
  color: rgba(0,0,0,0.5);
  border-radius: 15px;
}
</style>