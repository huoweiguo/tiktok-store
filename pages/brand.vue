<template>
  <main>
    <div class="banner"></div>
    <div class="container">
      <div class="list-box">
        <div v-for="item in 10" :key="item" class="box-main">
          <div class="box">
            <div class="l">
              <img
                src="https://img14.360buyimg.com/pop/jfs/t1/226595/33/12379/162464/65e98437F2c3180eb/4b52ad900bb58550.jpg?imageMogr2/strip/format/jpg"
              />
            </div>
            <div class="r">
              <div class="title">
                <a href="/detail/">
                  <img
                    src="https://www.jingtuitui.com/static/home_v3/images/pic/20/01.jpg"
                  />
                  <span
                    >【29.9包邮】小牛凯西 原味火山石小鲜肉烤肠1000g (20根)</span
                  >
                </a>
              </div>
              <div class="price">
                <div class="pb">
                  <b>43.9</b>
                  <div>到手价</div>
                </div>
                <div class="pb">
                  <span>8%</span>
                  <div>佣金比</div>
                </div>
                <div class="pb">
                  <span>4399</span>
                  <div>佣金</div>
                </div>
              </div>
              <div class="progress">
                <div class="bar" :style="{ width: `${100}px` }"></div>
              </div>
              <div class="statistic">
                <div>点击量：<span>4399</span></div>
                <div>浏览量：<span>4399</span></div>
              </div>
            </div>
          </div>
          <div class="shop">
            <div class="name">
              <a href="#">
                <img
                  src="https://img14.360buyimg.com/pop/jfs/t1/226595/33/12379/162464/65e98437F2c3180eb/4b52ad900bb58550.jpg?imageMogr2/strip/format/jpg"
                />
                <span>小牛凯西</span>
              </a>
            </div>
            <div class="tabs">
              <img
                src="https://www.jingtuitui.com/static/home_v3/images/icon/brand_tag.png"
              /><span>奥克斯精品厨电旗舰店</span>
            </div>
          </div>
        </div>
      </div>

      <div class="page-box">
        <div>
          <a href="javascript:;">&lt;</a>
          <span class="curr">
            <em class="em"></em>
            <em>1</em>
          </span>
          <a href="javascript:;" data-page="2">2</a>
          <a href="javascript:;" data-page="3">3</a>
          <span class="spr">…</span>
          <a href="javascript:;" class="last" title="尾页" data-page="8">8</a>
          <a href="javascript:;" class="next" data-page="2">&gt;</a>
          <span class="count">共 291 条</span>
          <span class="skip">
            到第<input type="text" min="1" />页
            <button type="button" class="btn">确定</button>
          </span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  // 方法集合
  methods: {},
};
</script>
<style lang="less" scoped>
.banner {
  height: 530px;
  background-image: url("https://www.jingtuitui.com/static/home_v3/images/icon/brand_banner_bj.png");
  background-repeat: no-repeat;
  background-position: center top;
}
.list-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: -300px;
  margin-bottom: 50px;

  .box-main {
    width: calc(50% - 10px);
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }
    .box {
      display: flex;
      gap: 20px;
    }

    .l {
      width: 246px;
      height: 246px;
      border-radius: 20px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .r {
      flex: 1;

      .title {
        margin-bottom: 50px;

        a {
          display: flex;
          align-items: flex-start;
          color: #333;
        }
      }

      .price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        // margin-bottom: 20px;
        background-color: #fafbfc;
        padding: 10px;

        .pb {
          font-size: 12px;
          color: #999;
          text-align: center;

          span {
            font-size: 16px;
            font-weight: bold;
            color: #333;
          }

          b {
            font-size: 16px;
            font-weight: bold;
            color: #333;
          }
        }
      }
      .progress {
        height: 6px;
        border-radius: 6px;
        background-color: #fafafa;
        margin-bottom: 10px;
        .bar {
          display: block;
          height: 100%;
          width: 100%;
          background: rgb(255, 105, 65);
          background: linear-gradient(
            90deg,
            rgba(255, 105, 65, 1),
            rgba(255, 145, 50, 1)
          );
          border-radius: inherit;
        }
      }
      .statistic {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
      }

      .btn {
        text-align: right;

        a {
          display: inline-block;
          padding: 10px 20px;
          background: #f00;
          color: #fff;
          border-radius: 20px;
        }
      }
    }
    .shop {
      border-top: 1px solid #f6f6f6;
      display: flex;
      justify-content: space-between;
      padding: 15px 0px 0;
      margin-top: 10px;
      .name {
        a {
          display: flex;
          align-items: center;
          color: #666;
          img {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }
        }
      }
      .tabs {
        display: flex;
        img {
          display: block;
          width: 12px;
          height: 24px;
        }
        span {
          display: block;
          line-height: 24px;
          color: #fff;
          padding-left: 5px;
          padding-right: 10px;
          -moz-border-radius: 0 4px 4px 0;
          -webkit-border-radius: 0 4px 4px 0;
          border-radius: 0 4px 4px 0;
          position: relative;
          background: rgb(91, 161, 255);
          background: linear-gradient(
            90deg,
            rgba(91, 161, 255, 1),
            rgba(109, 111, 255, 1)
          );
        }
      }
    }
  }
}

.page-box {
  text-align: center;
  margin: 50px auto;

  a,
  .curr {
    display: inline-block;
    height: 36px;
    width: 36px;
    line-height: 34px;
    margin: 0 5px;
    border-radius: 4px;
    font-size: 14px;
    color: #333;

    vertical-align: middle;
    border: 1px solid #ddd;
    background-color: #fff;
    text-align: center;
  }

  .curr {
    background: #5086ff;
    color: #fff;
    border: 0;
  }

  .count {
    margin: 0 10px;
  }

  .skip {
    input {
      width: 30px;
      height: 30px;
      margin: 0 5px;
      text-align: center;
    }

    button {
      font-size: 14px;
    }
  }
}
</style>
