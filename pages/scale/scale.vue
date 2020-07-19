<template>
	<view class="tm-every-center">
		<view @touchstart='touchStart' @touchend="touchEnd" style="width: 85%;">
			<view v-if="show_tips" class="tm-tips">请先选择选项!</view>
			<view class="padding margin-top">
				<view class="text-center margin" style="font-size:13px">({{ current_index+1 }}/{{ questions.length }})</view>
				<view class="text-black text-bold text-lg animation- animation-reverse" :class="selected?'animation-fade':''" style="min-height: 100upx;">{{ current_question }}</view>
				<radio-group v-show="!end" class="block animation- animation-reverse" :class="selected?'animation-fade':''" :name="'c'+(current_index+1)" @change="radioChange">
					<view class='text-left'>
						<view class='cu-list' v-for="(item,index) in current_item" :key="index">
							<label class='flex justify-between align-center flex-sub'>
								<view class='flex-sub' style="font-size:14px;">{{item.value}}</view>
								<radio class='round' color="#00a6ac" v-bind:id="'c'+(current_index+1)" :name="'c'+(current_index+1)" :value="item.key"
								 :checked="item.value == 'udefined'"></radio>
							</label>
						</view>
					</view>
				</radio-group>
				<br>

				<view class="margin-top">
					<progress :percent="(current_index+1)/questions.length*100" activeColor="#00a6ac" />
				</view>
				<view v-show="end" class="flex justify-center">
					<button class="cu-btn round bg-cyan margin shadow" @click='formSubmit'>提交测试</button>
				</view>
			</view>
			<view v-show="!end" class="margin flex justify-between" style="width: 90%;">
				<button @tap="lastPage" class="cu-btn round bg-cyan shadow">上一题</button>
				<button @tap="nextPage" class="cu-btn round bg-cyan shadow">下一题</button>
			</view>
		</view>
	</view>

</template>

<script>
	import config from "../../static/data/config.js";
	export default {
		data() {
			return {
				// 是否显示提示
				show_tips: false,
				// 是否勾选选项
				selected: false,
				// 量表名称
				name: "",
				modalName: null,
				// 当前问题
				current_question: [],
				// 当前问题选项
				current_item: [],
				// 当前问题索引
				current_index: 0,
				style: "",
				customSyle: {
					background: "rgba(0, 0, 0, 0.8)",
					display: "flex",
					"align-items": "center",
					"justify-content": "center"
				},
				questions: [],
				total: {},
				animation: '',
				items: [],
				end: false,
			}
		},
		methods: {
			hideModal(e) {
				this.modalName = null
			},
			judgePage(e) {
				const _this = this;
				if (!_this.selected) {
					_this.show_tips = true
					return false;
				} else {
					return true;
				}
			},
			lastPage: function(e) {
				var _this = this;
				var s = _this.current_index - 1;
				if (s >= 0) {
					_this.selected = false,
						_this.show_tips = false,
						_this.current_item = _this.items[s],
						_this.current_question = _this.questions[s],
						_this.current_index = s
				}
			},
			nextPage: function(e) {
				var _this = this;
				// 如果没有选择,则截断
				if (!_this.judgePage()) {
					console.log('试图截断页面跳转');
					return;
				}
				var s = _this.current_index + 1;
				if (s < _this.questions.length) {
					_this.selected = false
					_this.show_tips = false
					_this.current_item = _this.items[s]
					_this.current_question = _this.questions[s]
					_this.current_index = s
				}
			},
			thisPage(e) {
				this.cur = e.detail.current
			},
			radioChange: function(evt) {
				console.log(evt.target.value)
				var _this = this;
				_this.selected = true
				var s = _this.current_index + 1;
				var i = "c" + s;
				_this.total[i] = evt.target.value
				if(s == _this.length){
					setTimeout(() => {
						this.end = true
					}, 500)
					return 
				}
				let data = []
				for (let i = 0; i < _this.items[s].length; i++) {
					data[i] = {
						value: _this.items[s][i].value
					}
				}
				setTimeout(() => {
					this.current_item = data
				}, 500)

				setTimeout(() => {
					_this.nextPage()
				}, 600)
			},
			//滑动开始事件
			touchStart(event) {
				this.startX = event.touches[0].pageX;
			},
			touchEnd(event) {
				let _this = this;
				if (event.changedTouches[0].pageX - _this.startX > 50) {
					//右滑
					_this.lastPage;
				} else if (event.changedTouches[0].pageX - _this.startX < -50) {
					//左滑
					_this.nextPage;
				}
				_this.startX = event.changedTouches[0].pageX
			},
			formSubmit(e) {
				var _this = this;
				console.log(_this.total)
				wx.request({
					url: config.service.scaleUrl + "/" + _this.style + "/",
					data: _this.total,
					method: "POST",
					header: {
						"content-type": "application/x-www-form-urlencoded"
					},
					success(res) {
						console.log("服务器返回的请求:", res.data);
						const obj = JSON.parse(res.data);
						if (_this.style == 'five')
							wx.navigateTo({
								url: '../result/five?f1=' + obj.f1 + '&f2=' + obj.f2 + '&f3=' + obj.f3 +
									'&f4=' + obj.f4 + '&f5=' + obj.f5
							})
						else if (_this.style == 'bai')
							wx.navigateTo({
								url: '../result/bai?total=' + obj.total
							})
						else if (_this.style == 'gses')
							wx.navigateTo({
								url: '../result/gses?total=' + obj.total
							})
						else if (_this.style == 'cdrisc')
							wx.navigateTo({
								url: '../result/cdrisc?jianren=' + obj.jianren + '&jianrene=' + obj.jianrene + '&liliang=' + obj.liliang +
									'&liliange=' + obj.liliange + '&leguan=' + obj.leguan + '&leguane=' + obj.leguane
							})
						else if (_this.style == 'holland')
							wx.navigateTo({
								url: '../result/holland?xianshi=' + obj.result.R + '&yanjiu=' + obj.result.I + '&yishu=' + obj.result.A +
									'&shehui=' + obj.result.S +
									'&guanli=' + obj.result.E  + '&changgui=' + obj.result.C + '&style=' + obj.style
							})
						else if (_this.style == 'mbti')
							wx.navigateTo({
								url: '../result/mbti?qe=' + obj.qe + '&qi=' + obj.qi + '&qn=' + obj.qn + '&qs=' + obj.qs +
									'&qt=' + obj.qt + '&qj=' + obj.qj + '&qp=' + obj.qp + '&qf=' + obj.qf + '&style=' + obj.style
							})
						else if (_this.style == 'pstr')
							wx.navigateTo({
								url: '../result/pstr?total=' + obj.total
							})
						else if (_this.style == 'scl90')
							wx.navigateTo({
								url: '../result/scl90?qutihua=' + obj.qutihua + '&qiangpo=' + obj.qiangpo + '&renjimingan=' + obj.renjimingan +
									'&yiyu=' + obj.yiyu + '&jiaolv=' +
									obj.jiaolv + '&didui=' + obj.didui + '&kongbu=' + obj.kongbu + '&pianzhi=' + obj.pianzhi + '&jinshenbing=' +
									obj.jinshenbing + '&qita=' +
									obj.qita + '&total=' + obj.total
							})
						else if (_this.style == 'sds')
							wx.navigateTo({
								url: '../result/sds?total=' + obj.total
							})
						else if (_this.style == 'iesr')
							wx.navigateTo({
								url: '../result/trauma?total=' + obj.total + '&huibi=' + obj.huibi + '&qinxi=' + obj.qinxi +
									'&gaohuanxing=' + obj.gaohuanxing + '&style=' + _this.style
							})
						else if (_this.style == 'pclc')
							wx.navigateTo({
								url: '../result/trauma?total=' + obj.total + '&style=' + _this.style
							})
						else if (_this.style == 'ptsdss')
							wx.navigateTo({
								url: '../result/trauma?total=' + obj.total + '&style=' + _this.style
							})
						else if (_this.style == 'pcl5')
							wx.navigateTo({
								url: '../result/trauma?total=' + obj.total + '&style=' + _this.style
							})
					}
				});
			},
		},
		onLoad(options) {
			var _this = this;
			// 获取量表名称
			const name = wx.getStorageSync('name')
			wx.request({
				url: config.service.questionsUrl + options.style + ".html",
				method: "GET",
				success(res) {
					_this.questions = res.data.sites[2].questions
					_this.items = res.data.sites[3].items
					_this.current_question = res.data.sites[2].questions[0]
					_this.current_item = res.data.sites[3].items[0]
					_this.length = res.data.sites[2].questions.length
					_this.style = options.style
					_this.name = name
				}
			});
		},

		/**
		 * 生命周期函数--监听页面初次渲染完成
		 */
		onReady() {},

		/**
		 * 生命周期函数--监听页面显示
		 */
		onShow() {},

		/**
		 * 生命周期函数--监听页面隐藏
		 */
		onHide() {},

		/**
		 * 生命周期函数--监听页面卸载
		 */
		onUnload() {},

		/**
		 * 页面相关事件处理函数--监听用户下拉动作
		 */
		onPullDownRefresh() {},

		/**
		 * 页面上拉触底事件的处理函数
		 */
		onReachBottom() {},

		/**
		 * 用户点击右上角分享
		 */
		onShareAppMessage() {}
	};
</script>

<style lang="less">
	.tm-every-center {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1100upx;
	}

	.tm-tips {
		height: 30px;
		background-color: #f00;
		color: #fff;
		align-items: center;
		justify-content: center;
		display: flex;
	}

	page {
		overflow: hidden;
		position: fixed;
		background-image: url("https://app.photo.psyannabel.cn/scale.png");
		margin: 0px;
		background-size: 100% 100%;
	}
</style>
