<template>
	<view>
		<view class="bg-white padding" v-show="!canvas">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in queList" :key="index">
					<text class="num" :data-index="index + 1"></text>
				</view>
			</view>

			<view class="text-bold text-center margin-top">{{queList[num]}}</view>
			<view class="cu-form-group margin-top border cu-card article ">
				<textarea :maxlength="paragraph" @input="textareaAInput" :value="textareaAValue" :placeholder="'请输入你的想法...(不多于'+ paragraph +'字)'"
				 :show-confirm-bar="false"></textarea>
			</view>
			<view class="flex justify-center bg-white">
				<button v-if="end" class="cu-btn round bg-gradual-blue margin shadow" @click='initPoster'>完成</button>
				<button v-else class="cu-btn round bg-gradual-blue margin shadow" @click='nextStep'>下一步</button>
			</view>
		</view>

		<view v-show="canvas">
			<canvas :style="'height: '+canvasHeight+'px;width:'+canvasWidth+'px;'" canvas-id='myCanvas'></canvas>
			<button class="cu-btn margin lg block  round bg-gradual-green shadow" @click='saveImage'>保存图片</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				queList: [],
				num: 0,
				question: '',
				end: false,
				textareaAValue: '',
				contents: [],
				imgUrl: '',
				modalName: null,
				date: new Date().toLocaleDateString(),
				canvasWidth: 0,
				canvasHeight: 0,
				paragraph: 140,
				canvas: false
			}
		},
		methods: {
			showModal() {
				this.modalName = 'Image'
			},
			hideModal(e) {
				this.modalName = null
			},
			nextStep(e) {
				const _this = this
				this.contents.push(this.textareaAValue)
				setTimeout(function() {
					_this.textareaAValue = ''
				}, 100);
				this.num = this.num == this.queList.length - 1 ? -1 : this.num + 1
				if (this.num == this.queList.length - 1) {
					this.end = true
				}
			},
			initPoster() {
				const _this = this
				this.contents.push(this.textareaAValue)
				_this.textareaAValue = ''
				console.log(this.contents)

				wx.cloud.init()
				wx.cloud.callFunction({
					name: 'check',
					data: {
						"content": this.contents.join()
					}
				}).then(res => {
					console.log(res.result)
					if (res.result.code == 300) {
						uni.showModal({
							title: "温馨提示",
							content: "你所输入的内容可能含有违法违规内容，不支持进行下一步操作"
						})
						return
					} else {

						const ctx = uni.createCanvasContext('myCanvas')
						ctx.drawImage('/static/images/3.png', 0, 0, _this.canvasWidth, _this.canvasHeight)
						ctx.setFontSize(14)
						let fontlength = _this.canvasWidth - 60 // 每一行所占空间
						let textHeight = 15
						for (let i = 0; i < this.contents.length; i++) {
							// ctx.fillText(this.contents[i], 30, 40 + i * 40)
							let allWidth = ctx.measureText(this.contents[i]).width
							let value = Math.ceil(allWidth / fontlength); //行数
							// let textNum = Math.floor(this.contents[i].length/value)
							let textNum = Math.floor(fontlength / 15) + 4 //每一行的字数
							for (let j = 0; j < value; j++) {
								textHeight = textHeight + 20
								ctx.fillText(this.contents[i].substring(textNum * j, textNum * (j + 1)), 15, textHeight)
							}
							textHeight = textHeight + 10
						}
						ctx.setFontSize(16)
						ctx.fillText(this.date, _this.canvasWidth - 130, _this.canvasHeight - 20)
						ctx.draw(false, () => {
							setTimeout(() => {
								uni.canvasToTempFilePath({
									x: 0,
									y: 0,
									width: _this.canvasWidth,
									height: _this.canvasHeight,
									canvasId: 'myCanvas',
									success: function(res) {
										console.log(res.tempFilePath)
										_this.imgUrl = res.tempFilePath
										_this.showModal()
										// _this.saveImage(_this.imgUrl)
									},
									fail: function(res) {
										console.log(res);
									}
								})
							}, 2000);
						})
						this.canvas = true
					}
				})
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			saveImage() {
				let that = this;

				// 获取用户是否开启用户授权相册
				uni.getSetting({
					success(res) {
						// 如果没有则获取授权
						if (!res.authSetting['scope.writePhotosAlbum']) {
							uni.authorize({
								scope: 'scope.writePhotosAlbum',
								success() {
									uni.saveImageToPhotosAlbum({
										filePath: that.imgUrl,
										success() {
											uni.showToast({
												title: '保存成功'
											})
										},
										fail(res) {
											console.log(res)
											uni.showToast({
												title: '保存失败',
												icon: 'none'
											})
										}
									})
								},
								fail() {
									// 如果用户拒绝过或没有授权，则再次打开授权窗口
									//（ps：微信api又改了现在只能通过button才能打开授权设置，以前通过openSet就可打开，下面有打开授权的button弹窗代码）
									that.setData({
										openSet: true
									})
								}
							})
						} else {
							// 有则直接保存
							wx.saveImageToPhotosAlbum({
								filePath: that.imgUrl,
								success() {
									wx.showToast({
										title: '保存成功'
									})
								},
								fail(res) {
									console.log(res)
									wx.showToast({
										title: '保存失败',
										icon: 'none'
									})
								}
							})
						}
					}
				})
			}
		},
		async onLoad(options) {
			const _this = this
			_this.queList = (await this.$api.getThinking(options.style)).questions
			uni.getSystemInfo({
				success: function(res) {
					_this.canvasWidth = res.windowWidth
					_this.canvasHeight = res.windowHeight - 10
				}
			});
			_this.paragraph = Math.floor(_this.canvasHeight * _this.canvasWidth / (400 * _this.queList.length))
		}
	};
</script>

<style>
</style>
