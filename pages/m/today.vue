<template>
  <div>
    <div class="top">
      <a class="on" href="##">今日销量</a>
      <a href="##">推广排行榜</a>
    </div>

    <div class="goods-list">
      <div class="goods_item" v-for="(item, index) in goodsList" :key="index">
        <div class="goods_info">
          <div class="goods_photo">
            <img :src="item.fileList[0].fileUrl" />
          </div>
          <div class="goods_right">
            <div class="goods_show">{{ item.name }}</div>
            <div class="goods_price">
              券后价
              <span class="after_price">
                <span>￥</span>
                <span class="price_num">{{ item.price.toFixed(2) }}</span>
              </span>
            </div>
            <div class="rute">
              佣金比例：{{ item.brokerageRatio }}%（￥{{
                item.brokerage.toFixed(2)
              }}）
            </div>
          </div>
        </div>
        <div class="bottom_box">
          <div class="today_send">
            查看人数<span>{{ item.readCount }}</span>
          </div>
          <a :href="`/m/goods?id=${item.id}`" class="btn">查看详情</a>
        </div>
      </div>
    </div>

    <!-- footer -->
    <MFooterBar active="today"></MFooterBar>
  </div>
</template>

<script>
export default {
  layout: "mobile",
  async asyncData({ $axios }) {
    const data = {
      goodsList: [],
      params: {
        param: "",
        featrue: 2,
        type: "",
        pageNum: 1,
        pageSize: 20,
        wipeImageInfo: 1
      },
    };

    const res = await $axios.post("/api/cargo/info/page", data.params);

    if (res.data.code === 200) {
      data.goodsList = res.data.rows || [];
    }

    return data;
  },
};
</script>
<style lang="less" scoped>
.top {
  display: flex;
  justify-content: space-around;

  a {
    flex: 1;
    font-size: 16px;
    color: #333;
    text-align: center;
    padding: 10px 0;
    background: rgba(255, 76, 76, 0.1);
    color: #ff4c4c;

    &.on {
      color: #fff;
      background: #ff4c4c;
    }
  }
}

.goods-list {
  margin: 10px;

  .goods_item {
    border: 1px solid #eee;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 10px;
  }

  .goods_info {
    display: flex;
  }

  .goods_photo {
    width: 96px;
    margin-right: 10px;

    img {
      display: block;
      width: 100%;
    }
  }

  .goods_right {
    flex: 1;

    .goods_show {
      font-size: 14px;
      margin-bottom: 10px;
    }

    .goods_price {
      color: #666;

      .after_price {
        color: #ff4c4c;
      }

      .price_num {
        font-size: 18px;
      }
    }

    .rute {
      color: #666;
    }
  }

  .bottom_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .today_send {
      color: #666;
      font-size: 12px;
    }

    .btn {
      background-color: #4a9bf7;
      color: #fff;
      border-radius: 50px;
      padding: 5px 10px;
      font-size: 12px;
    }
  }
}
</style>
