<template>
   <Header></Header>
    <router-view>
    </router-view>
</template>

<script setup>
import Header from '@/views/Header.vue'

import { reactive, toRefs, onBeforeMount, onMounted,ref,provide } from 'vue'
const isShow = ref(false)
const setIsShow = (value)=>{
  isShow.value = value
}
provide('dialog-visible',{
  isShow,
  setIsShow
})
const keywords = ref('')
const setKeywords = (val)=>{
  keywords.value =val
}
provide('searchbar-keywords',{
  keywords,
  setKeywords
})
</script>
<style scoped lang='less'>
</style>