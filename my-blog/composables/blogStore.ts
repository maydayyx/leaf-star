export const useBlogStore = defineStore("blogStore", {
  state: () => {
    return {
      artcileList: [],
      tagList:[],
      artcileListByTag:[],
      friendList:[],
      loading: true,
    };
  },
  actions: {
  },
});
