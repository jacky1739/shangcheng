<template>
  <div>
    <h1>這是登入頁面</h1>
    <Welcome msg="jacky"></Welcome>
    <router-link to="/">回首頁</router-link>
    <el-button @click="goHome">回首頁2</el-button>
  </div>
</template>

<script>
import Welcome from './Welcome.vue'

  export default {
    name: 'login',
    components: { Welcome },
    mounted() {
      this.$request({
        method: 'get',
        url: '/login'
      }).then((res) => {
        console.log(res)
      })
    },
    methods: {
      goHome() {
        this.$router.push('/welcome')
      }
    },
  }
</script>


<style scoped>
a {
  color: #42b983;
}
</style>