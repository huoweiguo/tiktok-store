<template>
  <div class="small__menu__container">
    <template v-for="item in smallMenu">
      <a :key="item.id" :class="{ active: item.id === currentIndex }" @click="handleChange(item.id)">{{ item.name }}</a>
    </template>
  </div>
</template>

<script>
import { EventBus } from '@/utils/event-bus'
export default {
  data () {
    return {
      smallMenu: [],
      currentIndex: ''
    }
  },

  methods: {
    handleChange (id) {
      this.currentIndex = id
      EventBus.$emit('searchGoods', {
        type: id
      })
    },
    getClassifyList () {
      this.$axios.post('/api/CargoType/page', {
        enableFlag: 1,
        pageNum: 1,
        pageSize: -1
      }).then(res => {
        if (res.data.code === 200) {
          if (res.data.rows.length > 0) {
            this.smallMenu = [{ id: '', name: '全部' }, ...res.data.rows]
          } else {
            this.smallMenu = [{ id: '', name: '全部' }]
          }
        }
      })
    }
  },

  mounted () {
    this.getClassifyList()
  }
}
</script>

<style scoped>
.small__menu__container {
  width: 1200px;
  margin: 30px auto 0;
  padding: 15px 10px;
  background-color: rgba(0,0,0,0.35);
  border-radius: 10px;
}
.small__menu__container a {
  margin: 0 5px;
  padding: 3px 10px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
}
.small__menu__container a.active {
  background-color: #fff;
  color: rgba(0,0,0,0.5);
  border-radius: 15px;
}
</style>