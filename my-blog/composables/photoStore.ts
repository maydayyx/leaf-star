interface photo {
  _id: string;
  name: string;
  url: string;
}

interface FetchResponse<T> {
  data: T;
}

import haiou from '~/assets/img/haiou.jpg'
import my from '../assets/img/my.jpg'
import jpFood from '../assets/img/jpfood.jpg'
import stone from '~/assets/img/stone.jpg'
export const usePhotoStore = defineStore("photoStore", {
  state: () => {
    return {
      photoList: [
        { name: "海鸥", url:haiou, _id: "1" },
        { name: "我", url: my, _id: "2" },
        { name: "日料", url: jpFood, _id: "3" },
        {name:'礁石',url:stone,_id:'4'}
      ] as photo[],
    };
  },
  actions: {
    async getPhotoList() {
      const result = await $fetch<FetchResponse<photo[]>>("/webapi/photo/list");
      this.photoList = [...this.photoList, ...result.data];
    },
  },
});
