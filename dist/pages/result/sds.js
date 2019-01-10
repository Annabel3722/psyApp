'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    total: 0
  },
  onLoad: function onLoad(options) {
    console.log(options);
    var _this = this;
    _this.setData({
      total: options.total
    });
  }
});