<template>
	<view>
		<view class="container">
			<view class="userinfo">
				<button v-if="!hasUserInfo && canIUse" open-type="getUserInfo" bindgetuserinfo="getUserInfo"> 登录 </button>
				<block v-else>
					<image bindtap="bindViewTap" class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover" />
					<text class="userinfo-nickname">\n\n这里的专业测试\n会帮助你更好地了解自己\n\n</text>
				</block>
			</view>
		</view>
		<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius" style="width:80%;
margin:auto">
			<view class="cu-item arrow">
				<button class="cu-btn content" open-type="feedback">
					<text class="cuIcon-writefill text-cyan"></text>
					<text class="text-grey">意见反馈</text>
				</button>
			</view>
			<view class="cu-item arrow">
				<button class="cu-btn content" open-type='contact'>
					<text class="cuIcon-writefill text-cyan"></text>
					<text class="text-grey">联系我们</text>
				</button>
			</view>
			<view class="cu-item arrow">
				<button class="cu-btn content" @tap="showModal" data-target="DialogModal1">
					<text class="cuIcon-writefill text-cyan"></text>
					<text class="text-grey">用户须知</text>
				</button>
			</view>

		</view>

		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">使用须知</view>
					<view class="action" @tap="hideModal">
						<text class="icon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl text-content">
					<view class='margin-top-sm'>1. 为了保证测试结果的正确性,我们建议您如实选择</view>
					<view class='margin-top-sm'>2. 为了保护您的隐私,我们不会存储您的选项及任何个人信息</view>
					<view class="cu-btn round bg-gradual-blue shadow" @tap="CopyLink" data-text="wxd7de467f6e6cf741">
						<text>心理公众号可关联</text>
					</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="hideModal">确定</button>
					</view>
				</view>
			</view>
		</view>
	<view class="flex justify-center margin-top">
	<text class="text-center" style="color: #aaa;">Copyright © 2018-{{year}} psyannabel.cn</text>
	</view>

	</view>
</template>

<script>
	const app = getApp()
	export default {
		data() {
			return {
				userInfo: {},
				modalName: null,
				hasUserInfo: false,
				canIUse: false,
				year: new Date().getFullYear()
			}
		},
		onShareAppMessage: function() {

		},
		methods: {
			//事件处理函数
			CopyLink: function(e) {
				uni.setClipboardData({
					data: e.currentTarget.dataset.text,
					success: function(res) {
						wx.getClipboardData({
							success: function(res) {
								wx.showToast({
									title: '复制成功'
								})
							}
						})
					}
				})
			},
			showModal: function(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal: function(e) {
				this.modalName = null
			},
			bindViewTap: function() {
				wx.navigateTo({
					url: '../home/index'
				})
			},
			getUserInfo: function(e) {
				app.globalData.userInfo = e.detail.userInfo;
				this.setData({
					userInfo: e.detail.userInfo,
					hasUserInfo: true
				});
				app.globalData.hasUserInfo = true;
				console.log(this.data.userInfo);
			}
		},
		onLoad() {
			var _this = this;
			_this.canIUse = uni.canIUse('button.open-type.getUserInfo')
			if (app.globalData.userInfo) {
				this.setData({
					userInfo: app.globalData.userInfo,
					hasUserInfo: true
				})
			} else if (this.canIUse) {
				// 在没有 open-type=getUserInfo 版本的兼容处理
				uni.getUserInfo({
					success(res) {
						app.globalData.userInfo = res.userInfo
						_this.userInfo = res.userInfo
						_this.hasUserInfo = true
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.userinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.userinfo-avatar {
		width: 128rpx;
		height: 128rpx;
		margin: 20rpx;
		border-radius: 50%;
	}

	.userinfo-nickname {
		color: #aaa;
		font-size: 15px;
	}

	.comment {
		width: 140rpx;
		height: 140rpx;
		margin: 20rpx;
	}

	.navigator-hover {
		color: blue;
	}

	.container {
		height: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 180rpx 30rpx 30rpx 30rpx;
		box-sizing: border-box;
	}

	page {
		overflow: hidden;
		position: fixed;
		background-image: url('https://kindlestatic-1255693559.cos.ap-guangzhou.myqcloud.com/index.png');
		margin: 0px;
		background-size: 100% 100%;
	}
</style>
