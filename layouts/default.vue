<template>
  <div>
    <!--tabbar-->
    <tabbar />

    <!--搜索-->
    <searchItem />

    <!--菜单-->
    <menuAside />

    <nuxt />

    <!--底部-->
    <bottom />
  </div>
</template>

<script>
export default {
  data() {},
  head() {
    return {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ],
    };
  },
};
</script>

<style lang="less">
@import url("~/assets/css/resets.css");
@import url("~/assets/css/common.css");
</style>
