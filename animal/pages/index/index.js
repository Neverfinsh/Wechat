
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    latitude:'',
    longitude:'',
   //  地图控件进行显示
    markers: [{
      iconPath: "/resouces/image/location.png",
      id: 0,
      latitude: 28.24529,
      longitude: 112.93134,
      width: 80,
      height: 80
    },
    

    ],
  //  不随地图移动而移动的
    controls: [{
      iconPath: '/resouces/image/location.png',
      position: {
        left: (app.globalData.windowWidth/2)-20,
        top:  (app.globalData.windowHeight/2-30)-20,
        width: 40,
        height: 40, 
      }
    },
     //    点击回到中心点的操作
    {
      id: 1,
      iconPath: '/resouces/image/home.png',
      position: {
        left:10,
        top:400,
        bottom:20,
        width: 40,
        height: 40, 
    },
      clickable: true
    }]
    }, // ----data 结束

    //点击标注事件

    BindMarkerTap(e){
      wx.navigateTo({
        url: '/pages/detail/detail'
      })
    }
  ,
  // 获取当前位置的API接口: 每次打开页面获取吗，当前的位置
    onShow() {
    this.getLocation()
  },
   getLocation(){
      // 调用获取当前的接口
      wx.getLocation({
        type: 'gcj02 ',
        success:this.getLocationSuccess.bind(this)
      })
    },
   getLocationSuccess(res){
     console.log(res)
    this.setData({
      latitude:res.latitude,
      longitude:res.longitude
    });
  }
    ,
  
  //  分享的函数
  onShareAppMessage:function(){
    return{
        title: '萌宠交友平台',
         path: '/page/index/index'
    }
  },

//  监听点击事件
controltap:function(e){
  this.mapCtx.moveToLocation();
},
onReady(){
  this.mapCtx=wx.createMapContext("map");
}

})  //---end---
