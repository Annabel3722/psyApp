"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    qutihua: 0,
    qiangpo: 0,
    renjimingan: 0,
    yiyu: 0,
    jiaolv: 0,
    didui: 0,
    kongbu: 0,
    pianzhi: 0,
    jinshenbing: 0,
    qita: 0,
    total: 0
  },
  onLoad: function onLoad(options) {
    console.log(options);
    var _this = this;
    _this.setData({
      qutihua: options.qutihua,
      qiangpo: options.qiangpo,
      renjimingan: options.renjimingan,
      yiyu: options.yiyu,
      jiaolv: options.jiaolv,
      didui: options.didui,
      kongbu: options.kongbu,
      pianzhi: options.pianzhi,
      jinshenbing: options.jinshenbing,
      qita: options.qita,
      total: options.total
    });
  }
});