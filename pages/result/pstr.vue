<template>
	<view>
		<view class="cu-card article">
			<view class="cu-item shadow" style="padding:10px 10px;font-size: 14px;">
				<view class="margin-top-sm">总分为{{ total }}分</view>

				<view class="margin-top-sm" v-if="total > 92">
					你确实经受着极度的压力且它正在伤害你的健康。你需要专业的心理治疗师给予一些忠告，他可以帮助你消减你对于压力的知觉，并帮助你改良生活的品质。
				</view>
				<view class="margin-top-sm" v-else-if="total >= 82 && total < 93">
					你正经历太多的压力且它正在损害你的健康，并令你的人际关系发生问题。你的行为会伤害自己，也可能会影响其他人。因此，对你来说，学习如何减少自己的压力反应是非常重要的。你可能必须花很多时间做练习，学习控制压力，也可以寻找专业的帮助。
				</view>
				<view class="margin-top-sm" v-else-if="total >= 71 && total < 82">
					你的压力程度中等，它可能正开始对你的健康不利。你可以仔细反省自己对压力如何反应，并学习在压力出现时控制自己的肌肉紧张，以消除生理激活反应。好的心理咨询师会对你有帮助，或者选择适合的放松训练方式进行放松训练。
				</view>
				<view class="margin-top-sm" v-else-if="total >= 60 && total < 71">
					你生活中的兴奋与压力量也许是相当适中的。偶尔会有一段时间压力太多，但你也许有能力去管理压力，并且很快地回到平静的状态，因此，它对你的健康并不会造成威胁。做一些放松训练是有益的。
				</view>
				<view class="margin-top-sm" v-else-if="total >= 49 && total < 60">
					这个分数表示你能够控制你自己的压力反应，你是一个相当放松的人。也许你对于所遇到的各种压力，并没有将它们解释为威胁，所以你很容易与人相处，可以毫无惧怕地胜任工作，也没有失去自信。
				</view>
				<view class="margin-top-sm" v-else-if="total >= 38 && total < 49">
					你对所遭遇的压力毫不在乎，好像并没有发生过一样。这对你的健康不会有什么负面的影响，但你的生活缺乏适度的兴奋，因此，趣味也有限。
				</view>
				<view class="margin-top-sm" v-else-if="total >= 27 && total < 38">
					你的生活可能是相当沉闷的，即使刺激或有趣的事情发生了，你也很少有反应。可能你必须参与更多的社会活动或娱乐活动，以增加你的压力激活反应。
				</view>
				<view class="margin-top-sm" v-else-if="total >= 16 && total < 27">
					你在生活中所经历的压力经验不够，或者你并没有正确地分析自己。你最好更主动些，在工作、社交、娱乐等活动上多寻求些刺激。做放松训练对你没有很大用处，但一些心理辅导也许会对你有帮助。
				</view>
				<view class="margin-top-sm" v-else>
					如果你的分数在43~65分之间，那么你的压力是适中的，不必寻求改变生活状态；如果你的分数低于43或高于65，那表示你可能须调整生活状态。低分者需要更多刺激，高分者则需要更好的压力管理。
				</view>
				<view class="margin-top-sm">如有疑问，请向专业咨询师寻求帮助。</view>
			</view>
			</view> 
			<view style="padding:0px 10px;margin-top:30px;">
				<ad unit-id="adunit-515329ad8b37f963"></ad>
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
