<template>
  <div>
    <h1>這是歡迎頁面 {{ msg }}</h1>
    <router-link to="/">回首頁</router-link>
  </div>
</template>

<script setup>
  import { defineProps, reactive } from 'vue'

  defineProps({
    msg: String
  })

  const state = reactive({ count: 0 })
</script>


<style scoped>
a {
  color: hsl(153, 47%, 49%);
}
</style>