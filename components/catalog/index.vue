<template>
  <div class="catalog__item">
    <div v-for="item in cataList" :key="item.id" :class="{'item__active': current === item.id}" @click="handleClick(item.id)">
      <b>{{ item.title }}</b>
      <span>{{ item.smallText }}</span>
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/utils/event-bus' 
export default {
  data () {
    return {
      current: 0,
      cataList: [
        { title: '实时爆单榜', smallText: '今日商品领券排行榜', id: 0 },
        { title: '昨日爆单榜', smallText: '昨日商品领券排行榜', id: 1 },
        { title: '月度销量榜', smallText: '月度实际成交排行榜', id: 2 },
        { title: '月度收益榜', smallText: '月度支出佣金排行榜', id: 3 },
        { title: '出单指数榜', smallText: '推客真实成交指数榜', id: 4 }
      ]
    }
  },

  methods: {
    handleClick (id) {
      this.current = id
      EventBus.$emit('searchGoods', { salesType: id })
    }
  }
}
</script>

<style scoped>
.catalog__item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 1200px;
  background-color: #fff;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.catalog__item>div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 240px;
  height: 90px;
  cursor: pointer;
}

.catalog__item>div b {
  font-size: 20px;
  color: #343434;
}

.catalog__item>div span {
  font-size: 14px;
  color: #9A9A9A;
}

.item__active {
  position: relative;
  background-color: #363741;
  border-radius: 15px;
}

.item__active::after {
  position: absolute;
  left: 50%;
  bottom: -10px;
  content: '';
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #363741;
  transform: translate(-50%, 0);
}

.catalog__item>div.item__active b {
  color: #fff;
}
</style>
