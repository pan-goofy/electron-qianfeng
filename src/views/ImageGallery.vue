<template>
  <div class="image-container">
  
      <img v-for="item in fileList" :src="`/upload/${item}`" alt="">
 
   </div>
</template>

<script setup>
import { onMounted ,ref} from 'vue'
const fileList = ref([])
onMounted(async ()=>{
  const file = await myApi.getFileList()
  fileList.value = file
})
</script>
<style scoped lang='stylus'>
.image-container
  padding 10px
  img
    width 200px
    margin-right 10px
  
    
</style>