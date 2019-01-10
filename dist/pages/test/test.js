"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    items: [],
    show3: false,
    accordion: [{
      title: "人格心理测试",
      content: [{
        title: "大五人格测试",
        path: "../scale/index?style=five"
      }, {
        title: "MBTI性格测试",
        path: "../scale/index?style=mbti"
      }, {
        title: "霍兰德职业兴趣测试",
        path: "../scale/index?style=holland"
      }]
    }, {
      title: "心理健康管理",
      content: [{
        title: "症状自评量表SCL90",
        path: "../scale/index?style=scl90"
      }, {
        title: "PSTR压力测试问卷",
        path: "../scale/index?style=pstr"
      }, {
        title: "贝克焦虑量表",
        path: "../scale/index?style=bai"
      }, {
        title: "抑郁自评量表",
        path: "../scale/index?style=sds"
      }]
    }, {
      title: "自我认知管理",
      content: [{
        title: "心理弹性量表",
        path: "../scale/index?style=cdrisc"
      }, {
        title: "一般自我效能感量表",
        path: "../scale/index?style=gses"
      }]
    }, {
      title: "创伤心理自评",
      content: [{
        title: "创伤后应激障碍自评量表",
        path: "../scale/index?style=ptsdss"
      }, {
        title: "PTSD自评量表",
        path: "../scale/index?style=pclc"
      }, {
        title: "创伤后压力症候群量表",
        path: "../scale/index?style=pcl5"
      }, {
        title: "事件冲击量表",
        path: "../scale/index?style=iesr"
      }]
    }]
  },
  navTo: function navTo(e) {
    wx.setStorageSync('name', e.currentTarget.dataset.title);
    wx.navigateTo({
      url: e.currentTarget.dataset.path
    });
  }
});