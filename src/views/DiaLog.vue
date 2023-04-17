<template>
  <div class="dialog-warp" v-show="isShow">
    <div class="content">
        <div class="input">
            <input type="text" v-model="url" placeholder="请输入网址"/> 
        </div>
        <div class="button">
            <button @click="handleAdd" :disabled="isSubmit">添加</button>
            <button @click="setIsShow(false)" :disabled="isSubmit">取消</button>
        </div>
    </div>
  </div>
</template>

<script setup>
import { inject,ref } from 'vue'
import useWebsiteStore from  '@/store/websiteStore'  
const {isShow,setIsShow} = inject("dialog-visible")
const url = ref('https://www.baidu.com')
const isSubmit = ref(false)
const websiteStore = useWebsiteStore()
const handleAdd = async()=>{
   isSubmit.value =true
   const result = await myApi.sendUrl(url.value)
   console.log(result);
   websiteStore.add(result)
   isSubmit.value =false
   setIsShow(false)
}
</script>
<style scoped lang='stylus'>
.dialog-warp
  height 100%
  padding-left 20px
  position absolute
  top 0 
  left 0
  right 0
  botton 0
  background rgba(0,0,0,0.8)
  display flex
  justify-content center
  align-items center
  z-index 2
  .content
     width 100%
     pading 0 20px
     input 
       height 30px
       width 100%
       outline none 
       margin-bottom 10px
       font-size 12px
     .btns
       button 
         height 30px
         maring-right 10px
         font-size 12px
         padding 0 20px  

</style>