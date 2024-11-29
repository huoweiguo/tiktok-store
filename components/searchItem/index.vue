<template>
  <div class="search__container" v-if="show">
    <div class="search__input">
      <input type="text" placeholder="请输入搜索关键词" v-model="searchValue" />
      <a class="search__button">搜索</a>
      <!-- <div class="search-hot">
        <a>拖鞋</a>
        <a>睡衣</a>
        <a>口罩</a>
        <a>外套</a>
      </div> -->
    </div>
    <div class="search__icon">
      <a><img src="../../static/assets/images/serch-1.png" />人工审核</a>
      <a><img src="../../static/assets/images/serch-2.png" />实时排查</a>
      <a><img src="../../static/assets/images/serch-3.png" />持续上新</a>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/utils/event-bus'
export default {
  data() {
    return {
      searchValue: '',
      timer: null,
      show: true
    }
  },

  watch: {
    searchValue(val) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        EventBus.$emit('searchGoods', {
          param: val
        })
      }, 300)
    },

    '$route': {
      handler(to) {
        const { path } = to;
        if (path === '/news' || path.includes('/newsDetail') || path === '/about') {
          this.show = false;
        } else {
          this.show = true;
        }
      },
      deep: true
    }
  },

  mounted() {
    const { path } = this.$route;
    if (path === '/news' || path.includes('/newsDetail') || path === '/about') {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
</script>

<style scoped>
.search__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0 36px;
  width: 1200px;
  margin: 0 auto;
}

.search__input {
  position: relative;
  display: flex;
}

.search__input input {
  width: 420px;
  height: 40px;
  border: 2px solid #363741;
  border-radius: 20px 0 0 20px;
  font-size: 16px;
  padding: 0 20px;
  box-sizing: border-box;
  color: #666;
}

.search__button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 40px;
  background: linear-gradient(to right, #363741, #666);
  border-radius: 0 20px 20px 0;
  font-size: 16px;
  color: #ccc;
  cursor: pointer;
}

.search__icon {
  display: flex;
}

.search__icon a {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 10px;
  font-size: 12px;
  color: #999;
}

.search__icon img {
  display: block;
  margin-bottom: 7px;
}

.search-hot {
  position: absolute;
  left: 20px;
  top: 43px;
}

.search-hot a {
  margin-right: 10px;
  color: #999;
  font-size: 14px;
  cursor: pointer;
}

.search-hot a:hover {
  color: #666;
}
</style>
