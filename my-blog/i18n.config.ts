import {default_Lang }from '@/config/index'

//  如果本地存储中有设置的语言，则优先使用本地存储中的语言实现语言持久化 默认为简体中文
const lang = () => {
  if(process.client)  return localStorage.getItem('lang') ||  default_Lang
}

export default defineI18nConfig(() => ({
    legacy: false,
    locale:lang(),
    silentFallbackWarn:true,
    missingWarn:false,
    silentTranslationWarn:true,
    fallbackWarn:false,
    messages: {
      zh_CN: {
        Home: '首页',
        Friend:'友链',
        About:'关于我',
        Archive:'归档',
        Tags:'标签',
        Updateslifeandresources:'更新日常和灵感',
        TypeHere:'在这里输入',
        Share:'分享',
        Utils:'实用工具',
        Copied:'邮箱复制成功.',
        GoBack:"返回首页"
      },
      zh_HK:{
        Home:'首頁',
        Friend:'友鏈',
        About:'關於我',
        Archive:'歸檔',
        Tags:'標籤',
        Updateslifeandresources:'更新日常和靈感',
        TypeHere:'在這裡輸入',
        Share:'分享',
        Utils:'實用工具',
        Copied:'郵箱複製成功了.',
        GoBack:"返回首頁"
      },
      en_GB: {
        Home: 'Home',
        Friend:'Friend',
        About:'About',
        Archive:'Archive',
        Tags:'Tags',
        Updateslifeandresources:'Updates life and resources',
        TypeHere:'Type Here',
        Share:'Share',
        Utils:'Utils',
        Copied:'My email has been copied.',
        GoBack:"Go Back"
      }
    }
  }))