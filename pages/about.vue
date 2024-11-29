<template>
  <div>
    <div class="banner__news"></div>
    <div class="container__news">
      <div class="news__context">
        <h2>{{ companyInfo.titleName }}</h2>
        <div class="news__content" v-html="companyInfo.textPart"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsDetail',
  data() {
    return {
      companyInfo: {}
    }
  },

  async asyncData({ $axios }) {
    const res = await $axios.get('/api/cargo/companyInfo/detail')
    if (res.data.code === 200) {
      return {
        companyInfo: res.data.data
      }
    }
    return { companyInfo: {} }
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
