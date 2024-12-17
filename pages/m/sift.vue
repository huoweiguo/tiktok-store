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

    <div class="goods_list" id="goods_list-scroll">
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
      <div
        v-if="loading"
        style="
          padding: 20px;
          font-weight: 12px;
          color: #999;
          text-align: center;
        "
      >
        加载中...
      </div>
      <div
        v-if="!ismore"
        style="
          padding: 20px;
          font-weight: 12px;
          color: #999;
          text-align: center;
        "
      >
        没有更多了
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
        featrue: 1,
        type: "",
        pageNum: 1,
        pageSize: 20,
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
  data() {
    return {
      loading: false,
      ismore: true,
    };
  },
  mounted() {
    let timeid = "";
    this.$nextTick(() => {
      // 滚动到底部加载更多
      const goodsListScroll = document.getElementById("goods_list-scroll");
      goodsListScroll.addEventListener("scroll", () => {
        clearTimeout(timeid);
        timeid = setTimeout(() => {
          if (
            goodsListScroll.scrollTop + goodsListScroll.clientHeight >=
            goodsListScroll.scrollHeight - 50
          ) {
            console.log("滚动到底部");
            if (!this.loading && this.ismore) {
              this.params.pageNum++;
              this.getGoodsList();
            }
          }
        }, 500);
      });
    });
  },
  methods: {
    getGoodsList() {
      this.loading = true;
      this.$axios
        .post("/api/cargo/info/page", {
          ...this.params,
        })
        .then((res) => {
          this.loading = false;
          if (res.data.code === 200) {
            const list = res.data.rows || [];
            this.goodsList.push(...list);
            if (list.length < 1) {
              this.ismore = false;
            }
          }
        });
    },
    changeCid(id) {
      this.params.type = id;
      this.params.pageNum = 1;
      this.goodsList = [];
      this.ismore = true;
      this.getGoodsList();
    },
  },
};
</script>

<style lang="less" scoped>
.choice_kind {
  overflow-x: auto;

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
  padding: 10px;
  height: calc(100vh - 102px);
  overflow-y: auto;

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
