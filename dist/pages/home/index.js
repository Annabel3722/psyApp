'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var app = getApp();
exports.default = Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onShareAppMessage: function onShareAppMessage() {},
  //事件处理函数
  bindViewTap: function bindViewTap() {
    wx.navigateTo({
      url: '../home/index'
    });
  },
  goto: function goto(e) {
    wx.navigateTo({
      url: '../contact/contact'
    });
  },
  onLoad: function onLoad() {
    var _this2 = this;

    var _this = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: function success(res) {
          app.globalData.userInfo = res.userInfo;
          _this2.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },

  getUserInfo: function getUserInfo(e) {
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
    app.globalData.hasUserInfo = true;
    console.log(this.data.userInfo);
  }
});