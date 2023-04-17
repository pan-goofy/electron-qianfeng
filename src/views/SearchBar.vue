<template>
  <div class="search-container">
    <div class="button" @click="handleClick">
      <span>+</span>
    </div>
    <div class="input">
        <input type="text" @keyup="search" placeholder="请输入关键字">
    </div>
  </div>
</template>

<script setup>
import {watch, reactive, toRefs, onBeforeMount, onMounted,inject } from 'vue'
import _ from 'lodash'
const {setIsShow} = inject("dialog-visible")
const {setKeywords} = inject("searchbar-keywords")
const props = defineProps(['action']) 
const emits =defineEmits(['handleClick'])
 
const handleClick = ()=>{
    setIsShow(true)
} 
const search =  _.debounce((e)=>{
  setKeywords(e.target.value)
},500)
defineExpose({
  handleClick,
})
// watch(()=>props.action,
// (action)=>{
//    if(action=='add'){
//     handleClick()
//    }
// }
// )
</script>
<style scoped lang='stylus'>
div.search-container
  height 60px
  background #d3d3d3
  display  flex
  align-items center
  justify-content center
  padding-left 10px
  .button
    width 40px
    height 40px
    background-color #1e90ff
    padding-left 0
    font-size 30px
    font-weight bold
    color #fff
    align-items center 
    display flex
    justify-content:center
    cursor default
    border-radius 5px
    position relative
    span
      bottom 2px
      position absolute
  .input
     flex 1  
     height 36px
     padding 0 10px
     border solid 1px #ccc
     border-radius 5px
     input
       height 100%
       width 100%
       outline none
       border solid 1px #ccc
       border-radius 5px
       padding 0 10px

</style>