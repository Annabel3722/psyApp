<template>
	<view>
		<view class="cu-card article">
			<view class="cu-item shadow" style="padding:10px 10px;font-size: 14px;">
				<view class="margin-top-sm">您的得分为{{ total }}。
					<view v-if="total < 53"> 您没有抑郁症状。</view>
					<view v-else-if="total >= 53 && total <= 62"> 您有轻度抑郁。</view>
					<view v-else-if="total > 62 && total < 73"> 您有中度抑郁。</view>
					<view v-else-if="total >= 73"> 您有重度抑郁。</view>
					该测评仅供参考，如有疑问，请向专业咨询师寻求帮助。
				</view>
			</view>
		</view>
		<view style="padding:0px 10px;margin-top:30px;">
			<ad unit-id="adunit-bc6c61b6d0ef96e0" bindload="loadedAd" binderror="loadedError"></ad>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				total: 0
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
