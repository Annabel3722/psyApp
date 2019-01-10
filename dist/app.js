'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = require('./static/utils/system.js');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = App({
  globalData: { userInfo: null,
    hasUserInfo: false },
  onLoad: function onLoad() {
    var that = this;
    _system2.default.attachInfo();
    wx.getSetting({
      success: function success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function success(res) {
              that.globalData.userInfo = res.userInfo;
              that.globalData.hasUserInfo = true;
              console.log(that.globalData);
            }
          });
        }
      }
    });
  }
});