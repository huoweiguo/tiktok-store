<template>
  <div>
    <div class="banner__news"></div>
    <div class="container__news">
      <div class="news__context">
        <h2>关于我们</h2>
        <div class="news__content">

          上海名致唯京信息技术有限公司（百果厨），专注为零售企业提供互联网技术解决方案，是一款主打新零售模式的电商到家系统。全面助力企业打通线上+线下全渠道，实现网店和门店一体化运营，打造社区零售+服务新模式，帮助零售产业链转型升级。
          百果厨新零售SAAS系统，赋能智慧零售，推动店铺业绩高速增长，主打三个新：新模式、新框架、新技术。结合线上线下互通，LBS定位，打通最后一公里配送，完美打造到店+到家+配送，是一体化的零售与服务平台。

          百果厨致力于带动传统行业的销售模式变革，推进互联网+产业的渠道模式升级。
          百果厨将不断优化内部员工管理，强化员工的服务意识。责任到人赏罚分明，努力提高服务质量。快速解决客户需求，积极主动帮助客户妥善解决问题，让公司的新产品新应用及时、全面地到达市场和用户。
          公司愿景：成为实体门店转型升级的最佳伙伴！
          地址：上海市张江科技园郭守敬路498号21号楼

          ADD：No.498 Guo Shou Jing Road,Zhangjiang Software Park, Shanghai, China.

          服务热线：400-1075-404

          建议邮箱：service@baiguochu.com
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsDetail',
  data() {
    return {
      newsInfo: {}
    }
  },

  methods: {
    getNewsDetail(id) {
      this.$axios.get(`/api/cargo/news/detail?id=${id}`).then(res => {
        if (res.data.code === 200) {
          this.newsInfo = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    }
  },

  mounted() {
    const id = this.$route.params.id
    this.getNewsDetail(id)
  }
}
</script>

<style lang="less" scoped>
.banner__news {
  background: url('../static/assets/images/about_banner.jpg') no-repeat center;
  height: 450px;
}

.container__news {
  width: 1200px;
  margin: 30px auto;
  padding: 20px;
  box-shadow: 0 0 10px #ccc;
  box-sizing: border-box;

  .news__context {
    h2 {
      font-size: 20px;
      text-align: center;
      margin-bottom: 20px;
    }

    .news__head {
      display: flex;
      justify-content: center;
      font-size: 14px;
      color: #999;
      margin-bottom: 20px;

      span {
        padding: 0 20px;
      }
    }

    .news__content {
      width: 100%;
      font-size: 16px;
      line-height: 30px;
      color: #454545;

      img {
        max-width: 100%;
      }
    }
  }
}
</style>
