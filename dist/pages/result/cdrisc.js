'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    jianren: 0,
    liliang: 0,
    leguan: 0,
    jianrene: 0,
    liliange: 0,
    leguane: 0
  },
  onLoad: function onLoad(options) {
    console.log(options);
    var _this = this;
    _this.setData({
      jianren: options.jianren,
      liliang: options.liliang,
      leguan: options.leguan,
      jianrene: options.jianrene,
      liliange: options.liliange,
      leguane: options.leguane
    });
  }
});