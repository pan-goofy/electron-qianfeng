import { onMounted,inject,toRef } from 'vue'
import useWebsiteStore from "@/store/websiteStore"

 const useWebsites = ()=>{
    const  {keywords} = inject('searchbar-keywords')

    const websiteStore = useWebsiteStore()
    onMounted(() => {
        websiteStore.init()
    })
      return{
        websiteStore,
        keywords
      }
}

export default useWebsites