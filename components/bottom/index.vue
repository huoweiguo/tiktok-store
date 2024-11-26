<template>
  <div class="bottom__container">
    <div class="bottom__content">
      <div class="bottom__content__left">
        <div class="bottom__inner__item">
          <h3>商品库</h3>
          <ul>
            <li>实时榜单</li>
            <li>精选好货</li>
            <li>超级爆品</li>
            <li>全部商品</li>
          </ul>
        </div>

        <div class="bottom__inner__item">
          <h3>帮助中心</h3>
          <ul>
            <li>常见问题</li>
            <li>导购相关</li>
            <li>意见反馈</li>
          </ul>
        </div>

        <div class="bottom__inner__item">
          <h3>关于我们</h3>
          <ul>
            <li>公司简介</li>
          </ul>
        </div>
      </div>
      <div class="bottom__content__right">
        <h3>联系我们</h3>
        <div class="bottom__info">
          <div class="bottom__item"><img src="../../static/assets/images/14-1.jpg" /><span>公众号</span></div>
          <div class="bottom__item"><img src="../../static/assets/images/14-4.png" /><span>联系人</span></div>
        </div>
      </div>
    </div>
    <div class="bottom__content__copyright">
      Copyright © 2022-2023 深圳市某某科技有限公司 版权所有
    </div>
  </div>
</template>

<style lang="css" scoped>
.bottom__container {
  width: 100%;
  padding-top: 50px;
  background-color: #363741;
}

.bottom__content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 1200px;
  margin: 0 auto;
  padding-bottom: 30px;
}

.bottom__content__left {
  display: flex;
  color: #ccc;
}

.bottom__content__right {
  color: #fff;
}

.bottom__content__right h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.bottom__info {
  display: flex;
  align-items: flex-start;
}

.bottom__item {
  margin-right: 10px;
}

.bottom__item img {
  width: 90px;
  height: 90px;
  border-radius: 5px;
}

.bottom__item span {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #aaa;
  margin-top: 5px;
}

.bottom__inner__item {
  width: 140px;
}

.bottom__inner__item h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.bottom__inner__item ul li {
  font-size: 14px;
  color: #aaa;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}

.bottom__content__copyright {
  height: 50px;
  line-height: 50px;
  background-color: #131313;
  text-align: center;
  color: #ccc;
}
</style>
