<template>
  <div>
    <div class="header-box">
      <div class="container">
        <div class="title">超级爆品</div>
      </div>
    </div>
    <div class="container center-box">
      <div class="list-top">
        <div><b>今日热卖</b></div>
        <div>明日预告</div>
      </div>
      <div class="list-cen">
        <div class="left">
          <div class="list-box">
            <div class="box" v-for="item in 10" :key="item">
              <div class="l">
                <img
                  src="https://img14.360buyimg.com/pop/jfs/t1/226595/33/12379/162464/65e98437F2c3180eb/4b52ad900bb58550.jpg?imageMogr2/strip/format/jpg"
                />
              </div>
              <div class="r">
                <div class="title">
                  <a href="/detail/">
                    <i class="top">top</i>
                    <span
                      >【29.9包邮】小牛凯西 原味火山石小鲜肉烤肠1000g
                      (20根)</span
                    >
                  </a>
                </div>
                <div class="desc">
                  *肉含量≥90%，肉感十足，醇香四溢，经典老味道，自留送礼都很赞👍
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
        </div>
        <div class="right">
          <div class="rbox" v-for="i in 9" :key="i">
            <img
              src="https://img14.360buyimg.com/pop/jfs/t1/246983/36/19767/134132/67122696F752582c1/e72ec1dd6fc71bfd.jpg?imageMogr2/strip/format/jpg"
            />
            <div class="simg">
              <img
                src="https://img14.360buyimg.com/pop/jfs/t1/246983/36/19767/134132/67122696F752582c1/e72ec1dd6fc71bfd.jpg?imageMogr2/strip/format/jpg"
              />
              <img
                src="https://img14.360buyimg.com/pop/jfs/t1/246983/36/19767/134132/67122696F752582c1/e72ec1dd6fc71bfd.jpg?imageMogr2/strip/format/jpg"
              />
              <img
                src="https://img14.360buyimg.com/pop/jfs/t1/246983/36/19767/134132/67122696F752582c1/e72ec1dd6fc71bfd.jpg?imageMogr2/strip/format/jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.header-box {
  // 背景渐变
  background: linear-gradient(to bottom, #fb5151, #ff7e6f);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 280px;
  color: #fff;
  font-size: 16px;
  border-radius: 0 0 100% 100%;

  .title {
    font-size: 30px;
    text-align: center;
    line-height: 3;
  }
}

.center-box {
  background: #fff;
  border-radius: 20px;
  margin-top: -260px;
  padding: 15px;
}

.list-top {
  display: flex;
  font-size: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  div {
    flex: 1;
    text-align: center;
    font-size: 22px;
    line-height: 3;
    b {
      font-size: 22px;
      font-weight: bold;
      color: #f00;
      padding-bottom: 8px;
      border-bottom: 3px solid #f00;
    }
  }
}
.list-cen {
  display: flex;
  .left {
    flex: 1;
    padding-right: 15px;
    border-right: 1px solid #f0f0f0;
  }
  .right {
    padding-left: 15px;
    width: 236px;
  }
}

.rbox {
  margin-bottom: 30px;
  img {
    display: block;
    width: 100%;
  }
  .simg {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin: 10px 0;
    img {
      flex: 1;
      width: 30%;
    }
  }
}

.list-box {
  margin-bottom: 50px;

  .box {
    display: flex;
    gap: 20px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 10px;
    transition: all 0.3s;

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      transform: translateY(-3px);
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
        .top {
          display: inline-block;
          vertical-align: middle;
          margin-bottom: 2px;
          margin-right: 8px;
          padding: 0 7px;
          height: 24px;
          line-height: 24px;
          font-size: 14px;
          color: #fff;
          border-radius: 12px 12px 12px 0;
          background: #f9362d;
          background-image: linear-gradient(#f9362d, #fe6b18);
        }
        a {
          display: flex;
          align-items: flex-start;
          color: #333;
          span {
            font-size: 18px;
          }
        }
      }

      .desc {
        font-size: 14px;
        color: #666;
        margin: 10px 0 30px;
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
</style>
