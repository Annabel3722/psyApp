'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
    console.log(typeof total === 'undefined' ? 'undefined' : _typeof(total));
  }
});