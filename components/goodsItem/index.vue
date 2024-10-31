<template>
<div class="goods__container">
  <div v-for="item in list" :key="item.id" class="goods__container__item">
    <img class="goods__image" :src="item.imgUrl" />
    <div class="goods__hits">
      <span><img style="height: 16px;" src="../../assets/images/eye__icon.svg" /><b>{{ item.preview }}</b></span>
      <span><img style="height: 20px;" src="../../assets/images/click__icon.svg" /><b>{{ item.hits }}</b></span>
    </div>
    <div class="goods__name">{{ item.name }}</div>
    <div class="goods__item__tag">
      <div><b>{{ item.price }}</b><span>到手价</span></div>
      <div><b>{{ item.commissionRatio }}</b><span>佣金比</span></div>
      <div><b>{{ item.commission }}</b><span>佣金</span></div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { 
    imgUrl: 'https://img14.360buyimg.com/pop/jfs/t1/249370/33/11424/15034/666c1115Ff355f106/9aa531975c284072.jpg?imageMogr2/strip/format/jpg',
    name: '电视机纸巾盒轻奢塑料客厅茶几多功能收纳盒卫生间厕所桌面抽纸盒 樱花粉（1个装） 跨境爆款',
    price: '18.9',
    commissionRatio: '30%',
    commission: '5.67',
    preview: 234,
    hits: 213,
    id: 1234
  },
  { 
    imgUrl: 'https://img14.360buyimg.com/pop/jfs/t1/177646/2/20026/404027/611cc8e6E7eca7b63/3acb56a1631eb55f.jpg?imageMogr2/strip/format/jpg',
    name: '电视机纸巾盒轻奢塑料客厅茶几多功能收纳盒卫生间厕所桌面抽纸盒 樱花粉（1个装） 跨境爆款',
    price: '18.9',
    commissionRatio: '30%',
    commission: '5.67',
    preview: 234,
    hits: 213,
    id: 2334
  },
  { 
    imgUrl: 'https://img14.360buyimg.com/pop/jfs/t1/74140/22/26938/83168/66bdcd6eFaea1fe9a/f8de06990f108aef.jpg?imageMogr2/strip/format/jpg',
    name: '电视机纸巾盒轻奢塑料客厅茶几多功能收纳盒卫生间厕所桌面抽纸盒 樱花粉（1个装） 跨境爆款',
    price: '18.9',
    commissionRatio: '30%',
    commission: '5.67',
    preview: 234,
    hits: 213,
    id: 1232
  },
  { 
    imgUrl: 'https://img14.360buyimg.com/pop/jfs/t1/249370/33/11424/15034/666c1115Ff355f106/9aa531975c284072.jpg?imageMogr2/strip/format/jpg',
    name: '电视机纸巾盒轻奢塑料客厅茶几多功能收纳盒卫生间厕所桌面抽纸盒 樱花粉（1个装） 跨境爆款',
    price: '18.9',
    commissionRatio: '30%',
    commission: '5.67',
    preview: 234,
    hits: 213,
    id: 3234
  },
  { 
    imgUrl: 'https://img14.360buyimg.com/pop/jfs/t1/148330/23/37661/37509/65e534c0F3644c838/460cad9853d41cfd.jpg?imageMogr2/strip/format/jpg',
    name: '电视机纸巾盒轻奢塑料客厅茶几多功能收纳盒卫生间厕所桌面抽纸盒 樱花粉（1个装） 跨境爆款',
    price: '18.9',
    commissionRatio: '30%',
    commission: '5.67',
    preview: 234,
    hits: 213,
    id: 5634,
  },
  { 
    imgUrl: 'https://img14.360buyimg.com/pop/jfs/t1/232457/34/24532/338236/66ad99b5Fe05b9f3b/ca78359dff30bc3d.jpg?imageMogr2/strip/format/jpg',
    name: '电视机纸巾盒轻奢塑料客厅茶几多功能收纳盒卫生间厕所桌面抽纸盒 樱花粉（1个装） 跨境爆款',
    price: '18.9',
    commissionRatio: '30%',
    commission: '5.67',
    preview: 234,
    hits: 213,
    id: 1224,
  }
])
</script>

<style scoped>
.goods__container {
  width: 1220px;
  overflow: hidden;
}
.goods__container__item {
  float: left;
  width: 227px;
  border-radius: 10px;
  background-color: #fff;
  margin-right: 15px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  overflow: hidden;
}
.goods__image {
  width: 227px;
  height: 230px;
}
.goods__hits {
  display: flex;
  padding: 0 15px;
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
  font-size: 16px;
  text-align: center;
  color: #333;
}
.goods__name {
  height: 30px;
  font-size: 14px;
  color: #666;
  padding: 0 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 10px;
}
.goods__item__tag {
  padding: 0 15px;
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
}
.goods__item__tag div span {
  font-size: 12px;
  color: #999;
}
</style>