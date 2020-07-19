<template>
	<view>
		<view class="weui-cells__title" style="color:#123"></view>
		<text>\n\n</text>
		<view class="light cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']" style="background-color: transparent;">
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
				NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
				items: [],
				show3: false,
				content: [{
								title: "大五人格测试",
								path: "../scale/index?style=five",
								icon: 'xinggeyangcheng iconfont',
								color: 'red'
							},
							{
								title: "MBTI性格测试",
								path: "../scale/index?style=mbti",
								icon: 'xinggeceping iconfont',
								color: 'blue'
							},
							{
								title: "霍兰德职业兴趣测试",
								path: "../scale/index?style=holland",
								icon: 'zhiyexinggeceping1 iconfont',
								color: 'green'
							},
							{
								title: "症状自评量表SCL90",
								path: "../scale/index?style=scl90",
								icon: 'xinlixue iconfont',
								color: 'gray'
							},
							{
								title: "PSTR压力测试问卷",
								path: "../scale/index?style=pstr",
								icon: 'yali iconfont',
								color: 'yellow'
							},
							{
								title: "贝克焦虑量表",
								path: "../scale/index?style=bai",
								icon: 'jiaolv iconfont',
								color: 'orange'
							},
							{
								title: "抑郁自评量表",
								path: "../scale/index?style=sds",
								icon: 'yiyuzhengicon-copy iconfont',
								color: 'cyan'
							},
							{
								title: "心理弹性量表",
								path: "../scale/index?style=cdrisc",
								icon: 'xinli iconfont',
								color: 'cyan'
							},
							{
								title: "一般自我效能感量表",
								path: "../scale/index?style=gses",
								icon: 'peoplefill',
								color: 'blue'
							}],
				gridCol: 3,
				gridBorder: false
				
			}
		},
		methods: {
			navTo(e) {
				wx.setStorageSync('name', e.currentTarget.dataset.title);
				wx.navigateTo({
					url: e.currentTarget.dataset.path,
				})
			}
		}
	};
</script>

<style lang="less">
	page {
		overflow: hidden;
		position: fixed;
		background-image: url('https://app.photo.psyannabel.cn/4.png');
		margin: 0px;
		background-size: 100% 100%;
	}

	.weui-cells__title {
		margin: 1em;
		color: #999;
		font-size: 14px;
	}

	.popup1 {
		padding: 40px 20px 0 20px;
	}

</style>
