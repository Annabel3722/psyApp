<template>
	<view>
		<view class="light cu-list grid col-3 margin-top-xl no-border" style="background-color: transparent;">
			<view class="cu-item" v-for="(item,index) in content" :key="index">
				<navigator :url="item.path">
					<view :class="['icon-' + item.icon ,'text-' + item.color]">
					</view>
					<text class="text-sm">{{item.title}}</text>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: []
			}
		},
		async onLoad() {
			this.content = await this.$api.getDic()
		}
	};
</script>

<style>
	page {
		overflow: hidden;
		position: fixed;
		background-image: url('https://app.photo.psyannabel.cn/6.png');
		margin: 0px;
		background-size: 100% 100%;
	}
</style>
