<template>
	<view>
		<view class="cu-card article">
			<view class="cu-item shadow" style="padding:10px 10px;font-size: 14px;">
				<view class="text-bold">您的测试结果</view>
				<view class="text-black">均分最高分4分，最低分0分，得分越高，心理弹性越强，各项表现越强。</view>
				<view class="cu-list menu card-menu margin-top">
					<view class="cu-item">
						<view class="content">
							坚韧型
						</view>
						<view class="action">
							{{ jianren }}分
						</view>
					</view>

					<view class="cu-item">
						<view class="content">
							坚韧型均分
						</view>
						<view class="action">
							{{ jianrene }}分
						</view>
					</view>

					<view class="cu-item">
						<view class="content">
							力量型
						</view>
						<view class="action">
							{{ liliang }}分
						</view>
					</view>


					<view class="cu-item">
						<view class="content">
							力量型均分
						</view>
						<view class="action">
							{{ liliange }}分
						</view>
					</view>

					<view class="cu-item">
						<view class="content">
							乐观型
						</view>
						<view class="action">
							{{ leguan }}分
						</view>
					</view>


					<view class="cu-item">
						<view class="content">
							乐观型均分
						</view>
						<view class="action">
							{{ leguane }}分
						</view>
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
				jianren: 0,
				liliang: 0,
				leguan: 0,
				jianrene: 0,
				liliange: 0,
				leguane: 0,
			}
		},
		onLoad: function(options) {
			console.log(options)
			var _this = this;
			_this.jianren = options.jianren,
				_this.liliang = options.liliang,
				_this.leguan = options.leguan,
				_this.jianrene = options.jianrene,
				_this.liliange = options.liliange,
				_this.leguane = options.leguane
		},
		onShareAppMessage: function() {}
	}
</script>

<style lang="less">
</style>
