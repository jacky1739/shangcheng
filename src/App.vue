<template>
  <router-view></router-view>
</template>

<script>
  import "./utils/storage"

  export default {
    name: 'app',
    mounted() {
      //this.$storage.setItem('userInfo', {age: 30, name: 'jacl'}) // 經過封裝過後，值的部分就可以直接輸入一般的物件，而原來的不好用且格式還有輸入錯誤的風險
      this.$storage.clearAll()
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
