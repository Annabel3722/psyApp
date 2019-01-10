'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    style: '',
    psg1: '',
    psg2: ''
  },
  getShow: function getShow() {
    var that = this;
    wx.request({
      url: 'https://psy-1255693559.cos-website.ap-guangzhou.myqcloud.com/scale/' + that.data.style + '.html',
      method: 'GET',
      success: function success(res) {
        console.log(res);
        that.setData({
          psg1: res.data.sites[0].psg,
          psg2: res.data.sites[1].psg
        });
      }
    });
  },
  onLoad: function onLoad(options) {
    this.setData({
      style: options.style
    });
    this.getShow();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function onShareAppMessage() {},
  goto: function goto(e) {
    wx.navigateTo({
      url: '../scale/scale?style=' + this.data.style
    });
  }
});