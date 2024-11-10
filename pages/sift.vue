<template>
  <div>
    <div class="header-box">
      <div class="container">
        <div class="title">精选好货</div>
        <div class="jxhh__desc">人工严选，精选好货，供你挑选。助您提升转化。</div>
        <div class="types-box">
          <div class="line between">
            <a class="active" href="##">全部</a>
            <a href="##">居家日用</a>
            <a href="##">食品</a>
            <a href="##">生鲜</a>
            <a href="##">图书</a>
            <a href="##">美妆个护</a>
            <a href="##">母婴</a>
            <a href="##">数码家电</a>
            <a href="##">内衣</a>
            <a href="##">配饰</a>
            <a href="##">女装</a>
            <a href="##">男装</a>
            <a href="##">鞋品</a>
            <a href="##">家装家纺</a>
            <a href="##">文娱车品</a>
            <a href="##">箱包</a>
            <a href="##">户外运动</a>
          </div>
          <!-- <div class="line screen">
            <div>￥<input type="text"></div>
            <div>￥<input type="text"></div>
            <div>佣金比例<input type="text">￥</div>
            <button>筛选</button>
          </div> -->
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list-box">
        <div class="box" v-for="item in 10" :key="item">
          <div class="l">
            <img
              src="https://img14.360buyimg.com/pop/jfs/t1/226595/33/12379/162464/65e98437F2c3180eb/4b52ad900bb58550.jpg?imageMogr2/strip/format/jpg" />
          </div>
          <div class="r">
            <div class="title">
              <a href="/detail/">
                <img src="https://www.jingtuitui.com/static/home_v3/images/pic/20/01.jpg" />
                <span>【29.9包邮】小牛凯西 原味火山石小鲜肉烤肠1000g (20根)</span>
              </a>
            </div>
            <div class="price">
              <div class="pb">
                <b>43.9</b>
                <div>到手价</div>
              </div>
              <div class="pb">
                <span>4399</span>
                <div>查看次数</div>
              </div>
              <div class="pb">
                <span>8%</span>
                <div>佣金比</div>
              </div>
            </div>
            <div class="btn-box">
              <div class="btn">
                <a href="/detail/">查看详情</a>
              </div>
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
            到第<input type="text" min="1">页
            <button type="button" class="btn">确定</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang='less' scoped>
.header-box {
  // 背景渐变
  min-height: 382px;
  padding-top: 30px;
  background: url(/_nuxt/assets/images/center-bg.png) no-repeat;
  margin-bottom: 30px;

  .title {
    font-size: 36px;
    text-align: center;
    line-height: 3;
    color: #fff;
  }

  .jxhh__desc {
    font-size: 24px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
  }
}

.types-box {
  width: 1200px;
  margin: 30px auto 0;
  padding: 15px 10px;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 10px;

  .line {
    display: flex;
    align-items: center;
    color: #333;

    &.between {
      justify-content: space-between;
    }

    &.screen {
      gap: 20px;

      input {
        margin: 0 5px;
      }
    }

    a {
      margin: 0 5px;
      padding: 3px 10px;
      color: rgba(255, 255, 255, 0.6);
      cursor: pointer;

      &.active {
        background-color: #fff;
        color: rgba(0, 0, 0, 0.5);
        border-radius: 15px;
      }
    }

  }
}

.list-box {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: -120px;
  margin-bottom: 50px;

  .box {
    width: calc(50% - 10px);
    display: flex;
    gap: 20px;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
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
        margin-bottom: 20px;

        .pb {
          font-size: 16px;
          color: #999;
          text-align: center;

          span {
            font-size: 22px;
            color: #333;
          }

          b {
            font-size: 22px;
            font-weight: bold;
            color: #f00;
          }
        }


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
