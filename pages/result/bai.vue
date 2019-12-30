<template>
	<view>
		<view class="cu-card article">
			<view class="cu-item shadow" style="padding:10px 10px;font-size: 14px;">
				<text class="margin-top-sm" decode="true">你的分值{{ total }}分</text>
				<view v-if="total >= 15 && total <= 25" class="margin-top-sm">属于轻度焦虑</view>
				<view v-else-if="total >= 26 && total <= 35" class="margin-top-sm">属于中度焦虑</view>
				<view v-else-if="total >= 36" class="margin-top-sm">属于重度焦虑</view>
				<view v-else class="margin-top-sm">无焦虑症状</view>
				<view class="margin-top-sm">该测评仅供参考，如有疑问，请向专业咨询师寻求帮助。</view>
			</view>
		</view>
		<view style="padding:0px 10px;margin-top:30px;">
			<ad unit-id="adunit-283a3f6ef182267a" ad-type="grid" grid-opacity="0.8" grid-count="5" ad-theme="white"></ad>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				total: 0,
			}
		},
		onLoad: function(options) {
			console.log(options)
			var _this = this;
			_this.total = options.total
		},
		onShareAppMessage: function() {}
	}
</script>

<style lang="less">
</style>
