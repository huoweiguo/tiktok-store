<template>
  <div class="menu__container" :class="{ 'menu__news__container': show == false }">
    <div class="menu__content">
      <a class="menu__item" v-for="item in menuList" :key="item.id" :class="{ active: isCurrent(item.menuKey) }"
        @click="toLink(item.href)">{{ item.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      menukey: {
        '0': '/',
        '1': '/sift',
        '2': '/explosive',
        '3': '/brand',
        '-1': '/real',
        '4': '/news'
      },
      menuList: []
    }
  },
  watch: {
    '$route': {
      handler(to) {
        const { path } = to;
        if (path === '/news' || path.includes('/newsDetail') || path === '/about') {
          this.show = false;
        } else {
          this.show = true;
        }
      },
      deep: true
    }
  },
  mounted() {
    this.getData()
    const { path } = this.$route;
    if (path === '/news' || path.includes('/newsDetail') || path === '/about') {
      this.show = false;
    } else {
      this.show = true;
    }
  },
  methods: {
    toLink(link) {
      this.$router.push(link)
    },
    isCurrent(menuKey) {
      const { path } = this.$route;
      if (menuKey === '0' && path === '/') {
        return true
      } else if (menuKey === '1' && path === '/sift') {
        return true
      } else if (menuKey === '2' && path === '/explosive') {
        return true
      } else if (menuKey === '3' && path === '/brand') {
        return true
      } else if (menuKey === '4' && (path === '/news' || path.includes('/newsDetail'))) {
        return true
      } else if (menuKey === '-1' && path === '/real') {
        return true
      }

      return false
    },
    getData() {
      this.$axios.$post('/api/cargoMenu/page', {
        name: '',
        pageNum: 1,
        pageSize: -1
      }).then(res => {
        if (res.code === 200) {
          const list = res.rows || []
          const sortList = list.sort((a, b) => a.sortNum - b.sortNum)
          this.menuList = sortList.map(item => (
            { ...item, href: this.menukey[item.menuKey] }
          ))
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.menu__container {
  width: 100%;
  height: 56px;
  background-color: #363741;
}

.menu__news__container {
  position: absolute;
  left: 0;
  top: 32px;
  background-color: rgba(0, 0, 0, 0.25);

  .menu__item {
    color: #fff;
  }

  .menu__item:hover,
  .menu__item.active {
    background-color: transparent;
    font-weight: bolder;
    color: #aaa;
  }
}

.menu__content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 1200px;
  margin: 0 auto;
  height: 56px;
}

.menu__item {
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  cursor: pointer;
  width: 20%;
  padding: 0 40px;
  height: 56px;
  line-height: 56px;
  box-sizing: border-box;
  text-align: center;
}

.menu__item:hover,
.menu__item.active {
  background-color: rgba(242, 242, 244, 0.1);
}
</style>
