"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("../../static/data/config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = Page({
  data: {
    // 是否显示提示
    show_tips: false,
    // 是否勾选选项
    selected: false,
    // 量表名称
    name: "",
    // 当前问题
    current_question: [],
    // 当前问题选项
    current_item: [],
    // 当前问题索引
    current_index: 0,
    style: "",
    showMask1: true,
    customSyle: {
      background: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      "align-items": "center",
      "justify-content": "center"
    }
  },
  handleShowMask: function handleShowMask(e) {
    console.log(e);
    var show = e.currentTarget.dataset.show;
    this.setData({
      showMask1: show
    });
  },

  judgePage: function judgePage(e) {
    var _this = this;
    if (!_this.data.selected) {
      _this.setData({ show_tips: true });
      return false;
    } else {
      return true;
    }
  },
  lastPage: function lastPage(e) {
    var _this = this;
    var s = this.data.current_index - 1;
    if (s >= 0) {
      this.setData({
        selected: false,
        show_tips: false,
        current_item: _this.data.items[s],
        current_question: _this.data.questions[s],
        current_index: s
      });
    }
  },
  nextPage: function nextPage(e) {
    var _this = this;
    // 如果没有选择,则截断
    if (!_this.judgePage()) {
      console.log('试图截断页面跳转');
      return;
    }
    var s = this.data.current_index + 1;
    if (s < _this.data.questions.length) {
      this.setData({
        selected: false,
        show_tips: false,
        current_item: _this.data.items[s],
        current_question: _this.data.questions[s],
        current_index: s
      });
    }
  },
  thisPage: function thisPage(e) {
    this.setData({
      cur: e.detail.current
    });
  },
  radioChange: function radioChange(e) {
    var _setData;

    var _this = this;
    var s = _this.data.current_index + 1;
    var i = "total.c" + s;
    console.log(e.detail.value[0]);
    this.setData((_setData = {}, _defineProperty(_setData, i, e.detail.value[0]), _defineProperty(_setData, "selected", true), _setData));
    setTimeout(function () {
      _this.nextPage();
    }, 400);
    console.log(_this.data.total);
  },
  //滑动开始事件
  touchStart: function touchStart(event) {
    this.data.startX = event.touches[0].pageX;
  },
  touchEnd: function touchEnd(event) {
    var _this = this;
    if (event.changedTouches[0].pageX - _this.data.startX > 50) {
      //右滑
      _this.lastPage();
    } else if (event.changedTouches[0].pageX - _this.data.startX < -50) {
      //左滑
      _this.nextPage();
    }
    _this.setData({
      startX: event.changedTouches[0].pageX
    });
  },
  formSubmit: function formSubmit(e) {
    var _this = this;
    wx.request({
      url: _config2.default.service.scaleUrl + "/" + _this.data.style + "/",
      data: _this.data.total,
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      success: function success(res) {
        console.log("服务器返回的请求:", res.data);
        var obj = JSON.parse(res.data);
        if (_this.data.style == 'five') wx.navigateTo({ url: '../result/five?f1=' + obj.f1 + '&f2=' + obj.f2 + '&f3=' + obj.f3 + '&f4=' + obj.f4 + '&f5=' + obj.f5 });else if (_this.data.style == 'bai') wx.navigateTo({ url: '../result/bai?total=' + obj.total });else if (_this.data.style == 'gses') wx.navigateTo({ url: '../result/gses?total=' + obj.total });else if (_this.data.style == 'cdrisc') wx.navigateTo({ url: '../result/cdrisc?jianren=' + obj.jianren + '&jianrene=' + obj.jianrene + '&liliang=' + obj.liliang + '&liliange=' + obj.liliange + '&leguan=' + obj.leguan + '&leguane=' + obj.leguane });else if (_this.data.style == 'holland') wx.navigateTo({ url: '../result/holland?xianshi=' + obj.xianshi + '&yanjiu=' + obj.yanjiu + '&yishu=' + obj.yishu + '&shehui=' + obj.shehui + '&guanli=' + obj.guanli + '&changgui=' + obj.changgui + '&style=' + obj.style });else if (_this.data.style == 'mbti') wx.navigateTo({ url: '../result/mbti?qe=' + obj.qe + '&qi=' + obj.qi + '&qn=' + obj.qn + '&qs=' + obj.qs + '&qt=' + obj.qt + '&qj=' + obj.qj + '&qp=' + obj.qp + '&qf=' + obj.qf + '&style=' + obj.style });else if (_this.data.style == 'pstr') wx.navigateTo({ url: '../result/pstr?total=' + obj.total });else if (_this.data.style == 'scl90') wx.navigateTo({ url: '../result/scl90?qutihua=' + obj.qutihua + '&qiangpo=' + obj.qiangpo + '&renjimingan=' + obj.renjimingan + '&yiyu=' + obj.yiyu + '&jiaolv=' + obj.jiaolv + '&didui=' + obj.didui + '&kongbu=' + obj.kongbu + '&pianzhi=' + obj.pianzhi + '&jinshenbing=' + obj.jinshenbing + '&qita=' + obj.qita + '&total=' + obj.total });else if (_this.data.style == 'sds') wx.navigateTo({ url: '../result/sds?total=' + obj.total });else if (_this.data.style == 'iesr') wx.navigateTo({ url: '../result/sds?total=' + obj.total });else if (_this.data.style == 'pclc') wx.navigateTo({ url: '../result/sds?total=' + obj.total });else if (_this.data.style == 'ptsdss') wx.navigateTo({ url: '../result/sds?total=' + obj.total });else if (_this.data.style == 'pcl5') wx.navigateTo({ url: '../result/sds?total=' + obj.total });
      }
    });
  },
  onLoad: function onLoad(options) {
    var _this = this;
    // 获取量表名称
    var name = wx.getStorageSync('name');
    wx.request({
      url: _config2.default.service.questionsUrl + options.style + ".html",
      method: "GET",
      success: function success(res) {
        _this.setData({
          questions: res.data.sites[2].questions,
          items: res.data.sites[3].items,
          current_question: res.data.sites[2].questions[0],
          current_item: res.data.sites[3].items[0],
          length: res.data.sites[2].questions.length,
          style: options.style,
          name: name
        });
      }
    });
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
  onShareAppMessage: function onShareAppMessage() {}
});