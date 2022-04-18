const CONFIG_HEXO = {
  HOME_BANNER_ENABLE: false,
  HOME_BANNER_GREETINGS: ['Hi，我是一个程序员', 'Hi，我是一个打工人', 'Hi，我是一个干饭人', '欢迎来到我的博客🎉'], // 首页大图标语文字
  
  NAV_TYPE: 'normal', // ['fixed','autoCollapse','normal'] 分别是固定屏幕顶部、屏幕顶部自动折叠，不固定

  POST_LIST_TYPE: 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_COVER: false, // 文章列表显示封面图
  POST_LIST_PREVIEW: true, // 显示文章预览
  POST_LIST_SUMMARY: false, // 显示用户自定义摘要，有预览时优先只展示预览
  
  // 菜单配置
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 文章封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: true, // 读取文章预览

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐
  ARTICLE_SHARE: false, // 文章分享功能

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
  
  // 右侧组件
  RIGHT_BAR: true, // 是否显示右侧栏
  RIGHT_LATEST_POSTS: false, // 右侧栏最新文章
  RIGHT_CATEGORY_LIST: true, // 右侧边栏文章分类列表
  RIGHT_TAG_LIST: true, // 右侧边栏标签分类列表
  RIGHT_AD: false, // 右侧广告
}
export default CONFIG_HEXO
