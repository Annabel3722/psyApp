<template>
  <view>
    <view class="text-content margin">
    <text decode="true">{{ psg1 }}</text>
    <text decode="true">{{ psg2 }}</text>
    </view>
		<navigator class="text-center" :url="'../scale/scale?style='+style">
			 <button class='cu-btn margin bg-cyan lg block'>开始测试</button>
		</navigator> 
   
  </view>
</template>

<script>
export default {
  data() {
  	return {
    style: '',
    psg1: '',
    psg2: '',
		}
  },
	methods:{
		getShow: function () {
		  var that = this
		  wx.request({
		    url: 'https://psy-1255693559.cos-website.ap-guangzhou.myqcloud.com/scale/'+that.style+'.html',
		    method: 'GET',
		    success: function (res) {
		      console.log(res);
		      that.psg1 = res.data.sites[0].psg
		      that.psg2 = res.data.sites[1].psg
		    }
		  })
		}
	},
  onLoad: function (options) {
    this.style = options.style
    this.getShow();
  },  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
}
</script>

<style lang="less">
page { 
  overflow:hidden; 
  position:fixed; 
  background-image: url('https://psy-1255693559.cos.ap-guangzhou.myqcloud.com/2.png'); 
  margin: 0px; 
  background-size: 100% 100%; 
	font-size: 14px;
}
</style>
