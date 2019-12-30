<template>
  <view>
    <view class="cu-list menu card-menu margin-top">
    	<view class="cu-item">
    		<view class="content">
            躯体化
        </view>
        <view class="action">{{ qutihua }}分</view>
		</view>

    <view class="cu-item">
    	<view class="content">
            强迫症状
        </view>
        <view class="action">{{ qiangpo }}分</view>
    </view>


    <view class="cu-item">
    	<view class="content">
            人际关系敏感
        </view>
        <view class="action">{{ renjimingan }}分</view>
    </view>


    <view class="cu-item">
    	<view class="content">
            抑郁
        </view>
        <view class="action">{{ yiyu }}分</view>
    </view>


    <view class="cu-item">
    	<view class="content">
            焦虑
        </view>
        <view class="action">{{ jiaolv }}分</view>
    </view>


    <view class="cu-item">
    	<view class="content">
            敌对
        </view>
        <view class="action">{{ didui }}分</view>
    </view>

    <view class="cu-item">
    	<view class="content">
            恐怖
        </view>
        <view class="action">{{ kongbu }}分</view>
    </view>

    <view class="cu-item">
    	<view class="content">
            偏执
        </view>
        <view class="action">{{ pianzhi }}分</view>
    </view>

    <view class="cu-item">
    	<view class="content">
            精神病性
        </view>
        <view class="action">{{ jinshenbing }}分</view>
    </view>

    <view class="cu-item">
    	<view class="content">
            其它
        </view>
        <view class="action">{{ qita }}分</view>
    </view>

    <view class="cu-item">
    	<view class="content">
            总分
        </view>
        <view class="action">{{ total }}分</view>
    </view>
</view>
<view v-if="total > 250" style='font-color:red;font-size:14px;'class="margin-left margin-top-sm">您处于重度症状，请及时寻找咨询老师</view>
<view v-else-if="total > 200" style='font-color:red;font-size:14px;'>您处于中度症状，详细情况可以寻找咨询老师</view>
<view v-else-if="total > 160" style='font-color:red;font-size:14px;'>您处于轻度症状，详细情况可以寻找咨询老师</view>
<view v-else></view>
<view style="padding:0px 10px;margin-top:30px;">
      <ad unit-id="adunit-facd873b17ecdeac"></ad>
    </view>
  </view>
</template>

<script>
export default {
  data() {
	  return {
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
	  }
  },
  onLoad: function(options) {
    console.log(options);
    var _this = this;
    _this.qutihua= options.qutihua,
    _this.qiangpo= options.qiangpo,
    _this.renjimingan= options.renjimingan,
	_this.yiyu=options.yiyu,
    _this.jiaolv= options.jiaolv,
    _this.didui= options.didui,
    _this.kongbu=options.kongbu,
    _this.pianzhi=options.pianzhi,
    _this.jinshenbing= options.jinshenbing,
    _this.qita=options.qita,
    _this.total=options.total
  },
  onShareAppMessage: function() {}
};
</script>

<style lang="less">
</style>
