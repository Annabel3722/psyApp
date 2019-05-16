<template>
	<view>
		<view class="cu-list menu card-menu margin-top">
			<view class="cu-item">
				<view class="content">
					神经质
				</view>
				<view class="action">{{ f1 }}分</view>
			</view>
			<view class="cu-item">
				<view class="content">
					具有焦虑、敌对、压抑、自我意识、冲动、脆弱等特质。
				</view>
			</view>

			<view class="cu-item">
				<view class="content">
					外向性
				</view>
				<view class="action">{{ f2 }}分</view>
			</view>
			<view class="cu-item">
				<view class="content">
					表现出热情、社交、果断、活跃、冒险、乐观等特质。
				</view>
			</view>


			<view class="cu-item">
				<view class="content">
					开放性
				</view>
				<view class="action">{{ f3 }}分</view>
			</view>
			<view class="cu-item">
				<view class="content">
					具有想象、审美、情感丰富、求异、创造、智能等特质。
				</view>
			</view>

			<view class="cu-item">
				<view class="content">
					顺同性
				</view>
				<view class="action">{{ f4 }}分</view>
			</view>
			<view class="cu-item">
				<view class="content">
					具有信任、直率、利他、依从、谦虚、移情等特质。
				</view>
			</view>

			<view class="cu-item">
				<view class="content">
					严谨性
				</view>
				<view class="action">{{ f5 }}分</view>
			</view>
			<view class="cu-item">
				<view class="content">
					显示了胜任、公正、条理、尽职、成就、自律、谨慎、克制等特质。
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
				f1: 0,
				f2: 0,
				f3: 0,
				f4: 0,
				f5: 0,
			}
		},
		onLoad: function(options) {
			console.log(options)
			var _this = this;
			_this.f1 = options.f1,
				_this.f2 = options.f2,
				_this.f3 = options.f3,
				_this.f4 = options.f4,
				_this.f5 = options.f5
		},
		onShareAppMessage: function() {}
	}
</script>

<style lang="less">
</style>
