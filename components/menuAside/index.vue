<template>
  <div class="menu__container">
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
      menukey: {
        '0': '/',
        '1': '/sift',
        '2': '/explosive',
        '3': '/brand',
        '-1': '/real'
      },
      menuList: []
    }
  },
  mounted() {
    this.getData()
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

<style scoped>
.menu__container {
  width: 100%;
  height: 56px;
  background-color: #363741;
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
