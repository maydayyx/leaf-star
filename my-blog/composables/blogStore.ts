interface FetchResponse<T> {
  data: T;
}
interface Article {
  _id: String;
  title: String;
  tags: [];
  desc: String;
  updateTime: Date;
  viewCount: Number;
}

interface Tag {
  _id: String;
  name: String;
}

interface FriendLink {
  _id: String;
  sitename: String;
  sitelink: String;
  siteavatar: String;
  sitedesc: String;
}

export const useBlogStore = defineStore("blogStore", {
  state: () => {
    return {
      artcileList: [] as Article[],
      artcileListByTag:[] as Article[],
      archiveList:[] as Article[],
      tagList: [] as Tag[],
      friendList: [] as FriendLink[],
      loading: true,
    };
  },
  actions: {
    async getArtileList() {
      const res = await $fetch<FetchResponse<Article[]>>(
        "/webapi/articleList",
        { query: { order: -1 } }
      );
      this.artcileList = res.data;
    },
    async getArticleListByTag(tagId: String) {
      const res = await $fetch<FetchResponse<Article[]>>(
        `/webapi/articleListByTag/${tagId}`
      );
      this.artcileListByTag = res.data;
    },
    async getTagList() {
      const res = await $fetch<FetchResponse<Tag[]>>("/webapi/tag/list");
      this.tagList = res.data;
    },
    async getArchiveList() {
      const res = await $fetch<FetchResponse<Article[]>>("/webapi/articleList", { query: { order: 1 } });
      this.archiveList = res.data;
    },
    async getFriendLinkList() {
      const res = await $fetch<FetchResponse<FriendLink[]>>(
        "/webapi/friend/list"
      );
      this.friendList = res.data;
    }
  },
});

/*
获取文章列表
 $fetch("/webapi/articleList",{query:{order:-1}}),
 获取标签列表
 $fetch("/webapi/tag/list"),
 获取友链列表
 $fetch('/webapi/friend/list')
*/
