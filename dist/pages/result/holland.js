'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var wxCharts = require('../../static/utils/wxcharts.js');
exports.default = Page({
  data: {
    changgui: 0,
    xianshi: 0,
    yanjiu: 0,
    guanli: 0,
    shehui: 0,
    yishu: 0,
    style: ''
  },
  onLoad: function onLoad(options) {
    console.log(options);
    this.setData({
      changgui: options.changgui,
      xianshi: options.xianshi,
      yanjiu: options.yanjiu,
      guanli: options.guanli,
      shehui: options.shehui,
      yishu: options.yishu,
      style: options.style
    });
    var arr = [this.data.changgui, this.data.xianshi, this.data.yanjiu, this.data.yishu, this.data.shehui, this.data.guanli];
    arr.sort();

    new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: ['常规型(C)', '现实型(R)', '研究型(I)', '艺术型(A)', '社会型(S)', '管理型(E)'],
      series: [{
        name: '你的性格',
        data: [this.data.changgui, this.data.xianshi, this.data.yanjiu, this.data.yishu, this.data.shehui, this.data.guanli]
      }],
      width: 300,
      height: 150,
      extra: {
        radar: {
          max: 10
        }
      }
    });
  }
});