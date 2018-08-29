//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    culturalRelic: {
      "s_20160307044802z7fcBa": {
        id: 's_20160307044802z7fcBa',
        name: '越王勾践剑（带座）',
        price: '18000',
        img: 's_20160307044802z7fcBa.jpg',
        url: '111'
      },
      "s_20160307044857gOXeKM": {
        id: 's_20160307044857gOXeKM',
        name: '十二件套编钟',
        price: '1800',
        img: 's_20160307044857gOXeKM.jpg',
        url: '222'
      },
      "s_20160307044716N9j6vU": {
        id: 's_20160307044716N9j6vU',
        name: '人骑骆驼灯',
        price: '860',
        img: 's_20160307044716N9j6vU.jpg',
        url: '333'
      },
      "s_20160307044545WwDvYw": {
        id: 's_20160307044545WwDvYw',
        name: '青铜人擎灯',
        price: '840',
        img: 's_20160307044545WwDvYw.jpg',
        url: '444'
      },
      "s_201603070450011e8VrN": {
        id: 's_201603070450011e8VrN',
        name: '龙瓶',
        price: '8800',
        img: 's_201603070450011e8VrN.jpg'
      },
      "s_20160307044942yD7R5d": {
        id: 's_20160307044942yD7R5d',
        name: '四爱图梅瓶',
        price: '9800',
        img: 's_20160307044942yD7R5d.jpg'
      },
      "s_20160307044802z7fcBa1": {
        id: 's_20160307044802z7fcBa',
        name: '越王勾践剑（带座）',
        price: '18000',
        img: 's_20160307044802z7fcBa.jpg'
      },
      "s_20160307044857gOXeKM2": {
        id: 's_20160307044857gOXeKM',
        name: '十二件套编钟',
        price: '1800',
        img: 's_20160307044857gOXeKM.jpg'
      },
      "s_20160307044716N9j6vU3": {
        id: 's_20160307044716N9j6vU',
        name: '人骑骆驼灯',
        price: '860',
        img: 's_20160307044716N9j6vU.jpg'
      },
      "s_20160307044545WwDvYw4": {
        id: 's_20160307044545WwDvYw',
        name: '青铜人擎灯',
        price: '840',
        img: 's_20160307044545WwDvYw.jpg'
      },
      "s_201603070450011e8VrN5": {
        id: 's_201603070450011e8VrN',
        name: '龙瓶',
        price: '8800',
        img: 's_201603070450011e8VrN.jpg'
      },
      "s_20160307044942yD7R5d6": {
        id: 's_20160307044942yD7R5d',
        name: '四爱图梅瓶',
        price: '9800',
        img: 's_20160307044942yD7R5d.jpg'
      }
    },
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })

   
  },
  clickTo: function(event){
    let item;
    console.log(event.currentTarget.dataset.item);
    item = event.currentTarget.dataset.item
      wx.navigateTo({
        url: '../detail/detail?item='+JSON.stringify(item),
      })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
