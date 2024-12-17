<template>
  <div class="nav">
    <ul>
      <li id="time">
        <a href="/m" :class="{ active: active == 'home' }">
          <div class="nav_icon">
            <img
              src="https://www.jingtuitui.com/static/home/mobile/img/nav_1.png"
            />
          </div>
          <div class="nav_name">首页</div>
        </a>
      </li>
      <li id="good">
        <a href="/m/all" :class="{ active: active == 'all' }">
          <div class="nav_icon">
            <img
              src="https://www.jingtuitui.com/static/home/mobile/img/nav_2.png"
            />
          </div>
          <div class="nav_name">商品</div>
        </a>
      </li>
      <li id="good">
        <a href="/m/sift" :class="{ active: active == 'sift' }">
          <div class="nav_icon">
            <img
              src="https://www.jingtuitui.com/static/home/mobile/img/nav_2.png"
            />
          </div>
          <div class="nav_name">精选好货</div>
        </a>
      </li>
      <li id="list">
        <a href="/m/today" :class="{ active: active == 'today' }">
          <div class="nav_icon">
            <img
              src="https://www.jingtuitui.com/static/home/mobile/img/nav_4.png"
            />
          </div>
          <div class="nav_name">排行榜</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footerBar",
  props: {
    active: {
      type: String,
      default: "home",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.nav {
  height: 50px;

  ul {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background: #fff;
    border-top: 1px solid #eee;
  }

  li {
    text-align: center;

    a {
      color: #333;
    }

    .active {
      color: #4a9bf7;
    }
  }

  .nav_icon {
    text-align: center;
    height: 21px;

    img {
      display: inline-block;
      height: 100%;
    }
  }

  .nav_name {
    font-size: 12px;
    margin-top: 5px;
  }
}
</style>
