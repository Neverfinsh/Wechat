//app.js
App({
  // 定义全局变量
  globalData: {
  },
  onLaunch: function () {
    try {
         const res = wx.getSystemInfoSync();
         this.globalData.windowHeight = res.windowHeight;
         this.globalData.windowWidth = res.windowWidth;
    } catch (e) {}
  },
})