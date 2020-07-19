<template>
	<view>
		<view class="margin-xl bg-white radius shadow-lg" style="padding: 10px;">
			<text decode="true">{{ desc }}</text>
		</view>
		<navigator class="text-center" :url="'../train/progress?style='+style">
			 <button class='cu-btn margin bg-cyan lg block'>开始与自己对话</button>
		</navigator> 
	</view>
</template>

<script>
	export default {
		data() {
			return {
				desc: '',
				style: ''
			}
		},
		async onLoad(options) {
			this.desc = (await this.$api.getThinking(options.style)).index
			this.style = options.style
		}
	};
</script>

<style>
	page {
		overflow: hidden;
		position: fixed;
		background-image: url('https://app.photo.psyannabel.cn/5.png');
		margin: 0px;
		background-size: 100% 100%;
	}
</style>
