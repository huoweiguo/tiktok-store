<template>
  <div class="goods__container">
    <div class="goods__inner">
      <div v-for="item in list" :key="item.id" class="goods__container__item" @click="goLink(item.id)">
        <!-- <span class="goods__tag">{{ index + 1 }}</span> -->
        <template v-if="item.fileList?.length">
          <img class="goods__image" :src="item.fileList[0].fileUrl" />
        </template>
        <div class="goods__hits">
          <span><img style="height: 16px" src="../../static/assets/images/eye__icon.svg" /><b>{{ item.readCount
              }}</b></span>
          <span><img style="height: 20px" src="../../static/assets/images/click__icon.svg" /><b>{{ item.clickCount
              }}</b></span>
        </div>
        <div class="goods__name">{{ item.name }}</div>
        <div class="shop__address">
          <img style="height: 16px" src="../../static/assets/images/mall-f.svg" /> <span>{{ item.shopName?.length > 10 ?
            item.shopName?.slice(0, 10) + '...' : item.shopName }}</span>
        </div>
        <div class="goods__item__tag">
          <div>
            <b>{{ item.price?.toFixed(2) }}</b><span>到手价</span>
          </div>
          <div>
            <b>{{ item.brokerageRatio }}%</b><span>佣金比</span>
          </div>
          <div>
            <b>{{ item.brokerage?.toFixed(2) }}</b><span>佣金</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],

  methods: {
    goLink(id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.goods__container {
  width: 1200px;
}

.goods__inner {
  width: 1240px;
  overflow: hidden;
}

.goods__container__item {
  float: left;
  position: relative;
  width: 225px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-right: 18px;
}

.goods__tag {
  position: absolute;
  left: 10px;
  top: 0;
  width: 36px;
  height: 50px;
  padding-top: 20px;
  font-size: 16px;
  font-family: "DIN-Medium";
  background: url("../../static/assets/images/top_small.png") no-repeat;
  color: #fff;
  text-align: center;
}

.goods__tag span {
  display: block;
  line-height: 1;
}

.goods__tag span:first-child {
  font-size: 12px;
}

.goods__tag span:last-child {
  font-size: 20px;
}

.goods__image {
  width: 227px;
  height: 230px;
}

.goods__hits {
  display: flex;
  padding: 10px 15px 0;
  justify-content: space-between;
  color: #666;
  font-size: 14px;
}

.goods__hits span {
  display: flex;
  align-items: center;
  color: #999;
}

.goods__hits span img {
  margin-right: 5px;
}

.goods__hits span b {
  font-size: 14px;
  text-align: center;
  color: #999;
}

.goods__name {
  height: 30px;
  font-size: 15px;
  color: #666;
  padding: 0 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
  font-weight: bold;
}

.shop__address {
  display: flex;
  align-items: center;
  padding: 0 15px;
  color: #666;

  img {
    margin-right: 5px;
  }
}

.goods__item__tag {
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.goods__item__tag div {
  flex: 1;
}

.goods__item__tag div b {
  color: #333;
  font-size: 16px;
  display: block;
  font-weight: bold;
}

.goods__item__tag div span {
  font-size: 12px;
  color: #999;
}
</style>
