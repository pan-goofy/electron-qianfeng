import { ref } from 'vue'
const useIndex = ()=>{
    const currentIndex = ref(0)
    const handleItemValue = (index,url)=>{
        currentIndex.value=index
       // window.open(url,'_blank')
        myApi.open(url)
      }
      return{
        currentIndex,
        handleItemValue
      }
}

export default useIndex