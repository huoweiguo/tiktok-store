<template>
  <div>
    <div class="choice_kind">
      <div class="slide-box">
        <div class="slide-item">
          <div :class="{ isCollect: params.type == '' }" @click="changeCid('')">
            全部商品
          </div>
        </div>
        <div class="slide-item" v-for="(item, index) in smallMenu" :key="index">
          <div
            :class="{ isCollect: params.type == item.id }"
            @click="changeCid(item.id)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="goods_list">
      <div class="goods_mod" v-for="(item, index) in goodsList" :key="index">
        <a :href="`/m/goods/?id=${item.id}`">
          <div class="goods_photo">
            <img :src="item.fileList[0].fileUrl" />
          </div>
          <div class="goods_right">
            <div class="goods_show">{{ item.name }}</div>
            <div style="height: 30px"></div>
            <div class="goods_price">
              券后价
              <span class="after_price">
                ￥<span class="price_num">{{ item.price.toFixed(2) }}</span>
              </span>
              <span class="price_befor">￥{{ item.price.toFixed(2) }}</span>
            </div>
            <div class="rute">
              佣金比例：{{ item.brokerageRatio }}%（￥{{ item.brokerage }}）
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- footer -->
    <MFooterBar active="sift"></MFooterBar>
  </div>
</template>

<script>
export default {
  layout: "mobile",
  async asyncData({ $axios, app }) {
    const data = {
      smallMenu: [],
      goodsList: [],
      params: {
        param: "",
        featrue: 0,
        salesType: 0,
        type: "",
        pageNum: 1,
        pageSize: 100,
        wipeImageInfo: 1,
      },
    };

    // 获取小菜单
    const res = await $axios.post("/api/CargoType/page", {
      enableFlag: 1,
      pageNum: 1,
      pageSize: -1,
    });
    if (res.data.code === 200) {
      if (res.data.rows.length > 0) {
        data.smallMenu = [...res.data.rows];
      } else {
        data.smallMenu = [];
      }
    }

    // 获取商品列表
    data.params.type = app.router.currentRoute.query.id || "";
    const res2 = await $axios.post("/api/cargo/info/page", data.params);
    if (res2.data.code === 200) {
      if (res2.data.code === 200) {
        data.goodsList = res2.data.rows || [];
      }
    }

    return data;
  },
  methods: {
    getGoodsList() {
      this.$axios
        .post("/api/cargo/info/page", {
          ...this.params,
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.goodsList = res.data.rows || [];
          }
        });
    },
    changeCid(id) {
      this.params.type = id;
      this.params.pageNum = 1;
      this.getGoodsList();
    },
  },
};
</script>

<style lang="less" scoped>
.choice_kind {
  overflow: auto;

  .slide-box {
    display: flex;
    align-items: center;

    .slide-item {
      flex: 0 0 auto;
      padding: 10px;

      & > div {
        padding: 5px 0;
        // border-bottom: 2px solid #4A9BF7;

        &.isCollect {
          border-bottom: 2px solid #4a9bf7;
          font-weight: bold;
        }
      }
    }
  }
}

.goods_list {
  margin: 10px;

  .goods_mod {
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #eee;

    a {
      display: flex;
      gap: 10px;
      padding: 10px;
      color: #333;
    }

    .goods_photo {
      width: 122px;

      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .goods_right {
      flex: 1;
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

    .goods_price {
      height: 25px;
      line-height: 25px;
      font-size: 14px;
      margin: 0 auto;

      .after_price {
        color: #4a9bf7;
        font-size: 18px;
      }

      .price_befor {
        color: #999;
        text-decoration: line-through;
      }
    }

    .rute {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
