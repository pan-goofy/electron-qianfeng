<template>
  <main>
    <SearchBar :action="action" ref="searchbarRef"></SearchBar>
    <teleport to="body">  
       <DiaLog></DiaLog>
    </teleport>
    <List></List>
  </main>
</template>

<script setup>
import { watch,ref, toRefs, onBeforeMount, onMounted  } from 'vue'
import SearchBar from './SearchBar.vue'
import DiaLog from './DiaLog.vue';
import List from './list/List.vue';
const action = ref('')
const watchClick = ref('')
const searchbarRef =ref('')
const cb = ()=>{
  searchbarRef.value.handleClick()
}
onMounted( ()=>{
  myApi.openDialog()
  const result =  myApi.onRenderEvent(cb)
  // searchbarRef.value.handleClick()
})

 

</script>
<style scoped lang='stylus'> 
</style>