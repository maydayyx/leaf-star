import { reqGetArticleList } from "@/api/article";
import { defineStore } from "pinia";

let useArticleStore = defineStore('Article',{
    state:()=>{
        return {
          ArticleList:[]
        }
    },
    actions:{
        async getArticleList() {
            let res = await reqGetArticleList()
            this.ArticleList = res.data
            return 'ok'
        }
    }
})


export default useArticleStore