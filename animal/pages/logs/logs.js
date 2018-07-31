//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    test:'测试setData方法'

  },
  testSetData:function(){
    this.setData({
      test:'改变setData的方法'
    });
  }
  ,
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
