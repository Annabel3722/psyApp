'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    f1: 0,
    f2: 0,
    f3: 0,
    f4: 0,
    f5: 0
  },
  onLoad: function onLoad(options) {
    console.log(options);
    var _this = this;
    _this.setData({
      f1: options.f1,
      f2: options.f2,
      f3: options.f3,
      f4: options.f4,
      f5: options.f5
    });
  }
});