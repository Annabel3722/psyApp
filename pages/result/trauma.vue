<template>
  <view>
    <ui-row space-top=20 style="box-shadow: 0 0 10px #d0d0d0">
      <ui-col align="left" >
    <view class="title" v-if="style == 'pclc'">PTSD自评量表</view>
    <view class="title" v-else-if="style == 'pcl5'">创伤后压力症候群量表</view>
    <view class="title" v-else-if="style == 'ptsdss'">创伤后应激障碍自评量表</view>
    <view class="title" v-else-if="style == 'iesr'">事件冲击量表</view>
    <view class="title"> 您的得分为{{ total }}。
    <view v-if="style == 'pclc'">
      <view v-if="total >= 17 && total <=37 ">根据测量显示，您无明显PTSD症状。</view>
      <view v-else-if="total >= 38 && total <= 49 "> 根据测量显示，有一定程度的PTSD症状。</view>
      <view v-else-if="total > 50 && total < 85 "> 根据测量显示，有较明显PTSD症状，可能被诊断为PTSD。</view>
    </view>
    <view v-else-if="style == 'iesr'">
      回避量表:{{ huibi }}分，侵袭量表:{{ qinxi }}分，高唤醒量表:{{ gaohuanxing }}分。
      <view v-if="total >= 0 && total <=8">根据测量显示，您的程度处于亚临床。</view>
      <view v-else-if="total >= 9 && total <= 25"> 根据测量显示，您的程度处于轻度。</view>
      <view v-else-if="total > 26 && total < 43"> 根据测量显示，您的程度处于中度。</view>
      <view v-else-if="total > 44 && total < 48"> 根据测量显示，您的程度处于重度。</view>
    </view>
    <view>该测评非诊断性，仅供参考，如有疑问，请向专业咨询师寻求帮助。</view></view>
    </ui-col>
    </ui-row>
    <view style="padding:0px 10px;margin-top:30px;">
      <ad unit-id="adunit-bc6c61b6d0ef96e0" bindload="loadedAd" binderror="loadedError"></ad>
    </view>
  </view>
</template>

<script>
export default {
  data() {
		return{
			total:0,
			style:'',
			huibi:0,
			qinxi:0,
			gaohuanxing:0
		}
  },
  onLoad: function(options) {
    console.log(options)
    var _this=this;
    _this.total=options.total
    _this.style=options.style
    if(_this.data.style=='iesr'){
			 _this.qinxi=options.qinxi
       _this.huibi=options.huibi
       _this.gaohuanxing=options.gaohuanxing
    }
  },
  onShareAppMessage: function() {}
}
</script>

<style lang="less">
.title{
  margin:1em;font-size:15px;
}
</style>
