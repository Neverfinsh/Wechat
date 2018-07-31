// pages/publish/publish.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    address: '点击选择，记得勾选类型喔',
    longitude: '',
    latitude: '',
    success:  true
  },
  /**
   * 静态变量
   */
  staticData: {
    typeInfo: 'buy'
  },
  /**
   *  我的地址进行选择  :调用wx的api
   *   1  更改地址的只
   */
  handleAddressClick(e) {
    wx.chooseLocation({
      success:this.handleChooseLocationSuccess.bind(this)
    })
  },
  handleChooseLocationSuccess(res){
    this.setData({
      address: res.address,
    });
    this.data.longitude = res.longitude;
    this.data.latitude = res.latitude;
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '发布萌宠信息',
      path: '/pages/publish/publish'
    }
  },
  //  返回首页的点击事件
  handleBackToHome(){
    wx.navigateBack()
  },
  //  类型' 事件
  handleRadioChange(e) {
    this.staticData.typeInfo = e.detail.value;
  },
  // '说明' 事件
  handleNeedInfo(e) {
    this.staticData.message = e.detail.value;
  },
  //  '联系方式' 事件
  handleContack(e){
    this.staticData.contack = e.detail.value;
    console.log(this.staticData.contack )
  },
   // 提交事件 ： 1 进行校验  2.  访问后台接口url 
  handleSubmit(){
    
    //  '我的地址' 验证  
    if (this.data.address ==='点击选择，记得勾选类型喔~' || !this.data.address){
      // 提示框 
      wx.showToast({
        title: '请选择我的地址',
        icon: 'loading',
        duration: 2000
      }) ;
      return ;
    }
    // ‘说明’  验证
    if (!this.staticData.message){
      wx.showToast({
        title: '请填写具体的需求',
        icon: 'loading',
        duration: 2000
      });
       return ;
    }
    // '联系方式' 验证 
    if (!this.staticData.contack) {
     
      wx.showToast({
        title: '请填写具体的联系方式',
        icon: 'loading',
        duration: 2000
      });
      return;
    } 
    // ---2  验证结束，
    wx.request({
      url: 'https://nuanwan.wekeji.cn/student/index.php/trade/add_item', //仅为示例，并非真实的接口地址
      data: {
        address:this.data.address,
        longitude: this.data.longitude,
        latitude: this.data.latitude,
        message:this.staticData.message,
        contack: this.staticData.contack,
        typeInfo:this.staticData.type
      },
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 2000
        });
      },
      // 发送失败
      fail: function(){
        wx.showToast({
          title: '发布失败，请检查网络',
          icon: 'loading',
          duration: 2000
        });
      }

    })


  }

}) //  函数结束