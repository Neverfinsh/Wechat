
Page({

  data: {
    address: '' ,
    typeInfo:'',
    message: '' ,
    contack:''
  },

  /**
   *   页面开始文件：1 调用接口，获取数据  2 setData方法进行页面的渲染
   */
  onShow: function () {
  

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
    return{
      title:'详情页面',
      path:'/pages/detail/detail',
    }
  }
})