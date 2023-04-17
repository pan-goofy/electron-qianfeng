<template>
  <div>
    <p id="no-item" v-if="websiteStore.find(keywords).length ==0">暂无数据。</p>
    <div id="items" v-else>
        <div class="read-item"
        :class="{selected :currentIndex ===index}"
        @click="handleItemValue(index,item.url)"
         v-for="(item, index) in websiteStore.find(keywords)" :key="index">
            <img :src="item.screenshot" :alt="item.title">
            <h2>{{item.title}}</h2>
            <button @click="websiteStore.deleteItem(item.url)">x</button>
        </div>
     
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import useWebsiteStore from  '@/store/websiteStore'  
import useIndex from './useIndex'
import useWebsites from './useWebsites'
const {currentIndex,handleItemValue} = useIndex()
const {websiteStore,keywords} = useWebsites()
 onMounted(()=>{
  console.log(!websiteStore.find(keywords));
 })
</script>
<style scoped lang='stylus'>
#no-item
  font-weight bold 
  color silver
  text-align center
  width 100%
  position absolute
  top 100px
  z-index 1
#items
  .read-item
     display flex
     align-items center
     align-content center
     border-bottom lightgray 2px solid
     border-left lightgray 6px solid
     -webkit-user-select none
     position relative 
     padding 10px
     img
       width 20%
       margin-right 25px
       border solid 1px #ccc
     &:hover
       background #eee
     &:hover button
       display inline-block 
     &.selected
       border-left-color:#1e90ff
    
     button
       position absolute
       display none
       right 10px
       top  10px
       width 30px
       height 30px
       background #f44336
       border none
       border-radius 50%
       color white
       text-align center
       font-size 16px
       cursor pointer
</style>