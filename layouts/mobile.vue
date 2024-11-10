<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() { },
  head() {
    return {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    };
  },
};
</script>

<style lang="less">
body {
  width: 100%;
  min-width: 100%;
}
</style>
