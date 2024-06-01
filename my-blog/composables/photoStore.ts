interface photo {
    name:string,
    url:string
}

interface FetchResponse<T> {
    data: T
}

export const usePhotoStore = defineStore("photoStore", {
    state: () => {
      return {
        photoList:[] as photo[]
      };
    },
    actions: {
        async getPhotoList() {
            const result = await $fetch<FetchResponse<photo[]>>('/webapi/photo/list');
            this.photoList = result.data;
        }
    },
  });