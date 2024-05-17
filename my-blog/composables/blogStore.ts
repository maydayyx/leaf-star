export const useBlogStore = defineStore("blogStore", {
  state: () => {
    return {
      artcileList: [],
      tagList:[],
      artcileListByTag:[],
      loading: true,
    };
  },
  actions: {
  },
});
