'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var wxCharts = require('../../static/utils/wxcharts.js');
exports.default = Page({
  data: {
    qe: 0,
    qi: 0,
    qn: 0,
    qs: 0,
    qf: 0,
    qt: 0,
    qj: 0,
    qp: 0,
    style: ''
  },
  onLoad: function onLoad(options) {
    console.log(options);
    var _this = this;
    _this.setData({
      qe: options.qe,
      qi: options.qi,
      qn: options.qn,
      qs: options.qs,
      qf: options.qf,
      qt: options.qt,
      qj: options.qj,
      qp: options.qp,
      style: options.style
    });
    new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      categories: ['外向(E)', '内向(I)', '直觉(N)', '感觉(S)', '情感(F)', '思考(T)', '判断(J)', '知觉(P)'],
      series: [{
        name: '性格维度',
        data: [this.data.qe, this.data.qi, this.data.qn, this.data.qs, this.data.qf, this.data.qt, this.data.qj, this.data.qp]
      }],
      width: 320,
      height: 150
    });
  }
});