export const useNuxtStore = defineStore('nuxtStore', {
  state: () => {
    return {
      theme: 'nord',
    };
  },
  actions: {
    /* 
   动态的获取本地的theme值 
   因为state:localStorange.get('Theme')在每次刷新的时候不会执行，而是为false或默认值
   所以每次刷新页面的时候动态的从本地获取主题值
   */
    initTheme() {
      // 确保代码旨在浏览器中执行
      if (process.client) {
        // 从本地存储中获取theme
        const storedTheme = localStorage.getItem('Theme');
        // 确保从本地得到了theme值
        if (storedTheme) {
          // 更新state
          this.theme = storedTheme;
          // 实现主题的持久化
          document.documentElement.setAttribute('data-theme', this.theme);
        }
      }
    },
    // 切换主题的方法
    setTheme() {
      this.theme = this.theme === 'nord' ? 'dim' : 'nord';
      document.documentElement.setAttribute('data-theme', this.theme);
      localStorage.setItem('Theme', this.theme);
    },
  },
});
