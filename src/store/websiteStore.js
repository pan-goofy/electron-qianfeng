import {defineStore} from 'pinia'
import store from "store2"
import _ from "lodash"
const useWebsiteStore = defineStore('websiteStore',{

    state(){
        return {
            websites:[]
        }
    },
    actions:{
        add(item){
            console.log(item);
            if(_.find(this.websites,{url:item.url})){
                myApi.alert("此网站已经被添加")
                return
            }
            this.websites.unshift(item)
            store.set('websites', this.websites)
         },
        init(){
            this.websites = store.get('websites') ?? [] 
        },
        deleteItem(url){
             this.websites = _.remove(this.websites,(value)=>{
                return value.url !=url
             })
             console.log(this.websites);
             store('websites', this.websites)
        },
    },
    getters:{
        find(){
            return (keywords)=>{
                if( keywords ===''){
                    return this.websites
                }
                const result =  _.filter(this.websites,(item)=>{
                    let parent = new RegExp(keywords,'i')
                    return parent.test(item.title)
                })
                return result
            }
        }
    },
})
export default  useWebsiteStore