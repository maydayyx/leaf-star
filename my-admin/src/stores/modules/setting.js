import { defineStore } from "pinia";

let useLayoutSettingStore = defineStore('Setting',{
    state:()=>{
        return {
            fold:false,
            refresh:false
        }
    },
    persist:true
})


export default useLayoutSettingStore