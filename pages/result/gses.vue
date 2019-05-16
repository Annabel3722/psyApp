<template>
	<view>
		<view class="cu-card article">
			<view class="cu-item shadow" style="padding:10px 10px;font-size: 14px;">
				<view class="margin-top-sm">分数越高说明自信心越高</view>
				<view class="margin-top-sm">总分{{ total }}分</view>


				<view class="margin-top-sm">
					<view v-if="total <= 10">
						你的自信心很低，甚至有点自卑，建议经常鼓励自己，相信自己是行的，正确地对待自己的优点和缺点，学会欣赏自己。
					</view>
					<view v-else-if="total <= 20">
						你的自信心偏低，有时候会感到信心不足，找出自己的优点，承认它们，欣赏自己。
					</view>
					<view v-else-if="total <= 30">
						你的自信心较高。
					</view>
					<view v-else>你的自信心非常高，但要注意正确看待自己的缺点。
					</view>
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
				total: 0,
			}
		},
		onLoad: function(options) {
			console.log(options)
			var _this = this;
			_this.total = options.total
			console.log(typeof total)
		},
		onShareAppMessage: function() {}
	}
</script>

<style lang="less">
</style>
