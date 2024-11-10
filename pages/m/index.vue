<template>
  <div>
    <div class="head">
      <div class="seatch">
        <input type="text" value="" placeholder="搜一下">
      </div>

      <div class="seatch_butt">
        搜索
      </div>
    </div>

    <!--  -->
    <div class="swiper-box">
      <img class="swiper__img" src="http://img.jingtuitui.com/web/images_qn4_141_944ba_20241109165621_5306.png"
        style="height: auto;width: 100%;" />
    </div>

    <!--  -->
    <div class="kind">
      <ul>
        <li class="kind_box">
          <a href="/m/sift">
            <div class="kind_photo">
              <img src="https://www.jingtuitui.com/static/home/mobile/img/boy_c.png">
            </div>
            <div class="kind_name">
              男装
            </div>
          </a>
        </li>
        <li class="kind_box">
          <a href="/m/sift">
            <div class="kind_photo">
              <img src="https://www.jingtuitui.com/static/home/mobile/img/girl_c.png">
            </div>
            <div class="kind_name">
              女装
            </div>
          </a>
        </li>
        <li class="kind_box">
          <a href="/m/sift">
            <div class="kind_photo">
              <img src="https://www.jingtuitui.com/static/home/mobile/img/baby.png">
            </div>
            <div class="kind_name">
              母婴用品
            </div>
          </a>
        </li>
        <li class="kind_box">
          <a href="/m/sift">
            <div class="kind_photo">
              <img src="https://www.jingtuitui.com/static/home/mobile/img/box.png">
            </div>
            <div class="kind_name">
              鞋品箱包
            </div>
          </a>
        </li>
        <li class="kind_box">
          <a href="/m/sift">
            <div class="kind_photo">
              <img src="https://www.jingtuitui.com/static/home/mobile/img/orm.png">
            </div>
            <div class="kind_name">
              内衣配饰
            </div>
          </a>
        </li>
        <li class="kind_box">
          <a href="/m/sift">
            <div class="kind_photo">
              <img src="https://www.jingtuitui.com/static/home/mobile/img/food.png">
            </div>
            <div class="kind_name">
              食品保健
            </div>
          </a>
        </li>
        <li class="kind_box">
          <a href="/m/sift">
            <div class="kind_photo">
              <img src="https://www.jingtuitui.com/static/home/mobile/img/car.png">
            </div>
            <div class="kind_name">
              文具车品
            </div>
          </a>
        </li>
        <li class="kind_box">
          <a href="/m/sift">
            <div class="kind_photo">
              <img src="https://www.jingtuitui.com/static/home/mobile/img/emmm.png">
            </div>
            <div class="kind_name">
              数码家电
            </div>
          </a>
        </li>
        <li class="kind_box">
          <a href="/m/sift">
            <div class="kind_photo">
              <img src="https://www.jingtuitui.com/static/home/mobile/img/home.png">
            </div>
            <div class="kind_name">
              居家生活
            </div>
          </a>
        </li>
        <li class="kind_box">
          <a href="/m/sift">
            <div class="kind_photo">
              <img src="https://www.jingtuitui.com/static/home/mobile/img/makeup.png">
            </div>
            <div class="kind_name">
              美妆个护
            </div>
          </a>
        </li>
      </ul>
    </div>

    <!--  -->
    <div class="cut_box">
      <div class="cut_newgoods">
        <div class="cut_icon">
          <img src="https://www.jingtuitui.com/static/home/mobile/img/icon1.png">
        </div>

        新品推荐

        <div class="cut_icon">
          <img src="https://www.jingtuitui.com/static/home/mobile/img/icon2.png">
        </div>
      </div>
    </div>

    <!--  -->
    <div class="goods">
      <div class="goods-item" v-for="i in 20" :key="i">
        <a href="/m/goods">
          <div class="new_goods">
            <div class="goods_photo">
              <img
                src="https://img14.360buyimg.com/pop/jfs/t1/198876/6/44020/143866/66f3e2a4F0d63ed06/b01745a024bada40.jpg?imageView2/2/w/260/h/260/q/100/imageMogr2/strip/format/jpg"
                data-img="https://img14.360buyimg.com/pop/jfs/t1/198876/6/44020/143866/66f3e2a4F0d63ed06/b01745a024bada40.jpg?imageView2/2/w/260/h/260/q/100/imageMogr2/strip/format/jpg"
                class="" _400x400="">
            </div>
            <div class="quan">
              券￥5 </div>
            <div class="goods_show">
              【补贴到手49.9元】GUO LIAN 国联水产 生虾仁 245g*4袋共（大号93-118只） </div>
            <div class="price">
              到手价<span class="price_c">￥<span class="price_num">49.9</span></span>
              <span class="price_befor">￥54.9</span>
            </div>
            <div class="get_num">
              佣金：10%（￥4.99）
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- footer -->
    <MFooterBar></MFooterBar>
  </div>
</template>

<script>
export default {
  layout: "mobile",
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  align-items: center;
  margin: 0 auto;
  height: 50px;
  background: #4A9BF7;
  text-align: center;
  font-size: 22px;
}



.seatch input {
  width: 270px;
  height: 30px;
  border-radius: 17px;
  background: #fff;
  margin-left: 17px;

}

.seatch_butt {
  width: 80px;
  height: 33px;
  line-height: 33px;
  color: #fff;
  font-size: 16px;
}

.kind {
  margin: 20px;

  img {
    width: 53px;
    height: 53px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .kind_box {
    width: 53px;

    a {
      display: block;
      text-align: center;
      color: #333;

    }

    .kind_name {
      font-size: 12px;
    }
  }
}

.cut_box {
  width: 100%;
  height: 35px;

  .cut_newgoods {
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
  }

  .cut_icon {
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 10px;

    img {
      display: block;
      height: 100%;
    }
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
  margin: 10px;

  .goods-item {
    position: relative;
    width: calc(100% / 2 - 5px);

    a {
      display: block;
      color: #333;
    }

    .goods_photo {
      img {
        width: 100%;
        max-height: 188px;
        border-radius: 10px;
      }
    }

    .quan {
      position: absolute;
      top: 155px;
      width: 75px;
      height: 25px;
      line-height: 25px;
      z-index: 4;
      font-size: 12px;
      color: #FFFFFF;
      text-align: center;
      background-color: #4A9BF7;
    }

    .goods_show {
      height: 40px;
      line-height: 20px;
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin: 5px 0;
    }

    .price {
      height: 25px;
      line-height: 25px;
      font-size: 14px;
      margin: 0 auto;

      .price_c {
        color: #4A9BF7;
        font-size: 18px;
      }

      .price_befor {
        color: #999;
        text-decoration: line-through;
      }

      .get_num {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
