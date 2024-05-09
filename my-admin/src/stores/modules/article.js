import { reqGetArticleList,reqPublish,reqDelArticle } from "@/api/article";
import { defineStore } from "pinia";

let useArticleStore = defineStore('Article',{
    state:()=>{
        return {
          ArticleList:[],
        }
    },
    actions:{
        async getArticleList() {
            let res = await reqGetArticleList()
            this.ArticleList = res.data
            return 'ok'
        },
        async publish(_id,isPublish) {
            let res = await reqPublish(_id,isPublish)
            await this.getArticleList()
            return 'ok'
        },
        async delArticle(id) {
            let res = await reqDelArticle(id)
            await this.getArticleList()
            return 'ok'
        }
    }
})


export default useArticleStore