<template>
	<view class="container">
		<view class="bg1">
			<view>
				<image src="../../static/head.png" class="im middle" style="border-radius: 10px;"></image>
				<text class="middle" style="margin-left: 20px;">Marqueezzzz</text>
			</view>
			<view style="margin: 7px;">
				<text class="middle">信用评分：90</text>
			</view>
		</view>
		<view class="bg2">
			<div class="flex-container">
				<div class="flex-item" style="width: 40%;">
					<view>
						<navigator url="/pages/current" hover-class="other-navigator-hover">
							<div class="flex-container" style="flex-direction:column">
								<div class="flex-item">
									<image class="icon" src="../../static/svg/reserve.svg"></image>
								</div>
								<div class="flex-item">
									<text>我的预约</text>
								</div>
							</div>
						</navigator>
					</view>
				</div>
				<div class="flex-item" style="width: 40%;">
					<view>
						<navigator url="/pages/records" hover-class="other-navigator-hover">
							<div class="flex-container" style="flex-direction:column">
								<div class="flex-item">
									<image class="icon" src="../../static/svg/records.svg"></image>
								</div>
								<div class="flex-item">
									<text>我的对局</text>
								</div>
							</div>
						</navigator>
					</view>
				</div>
			</div>
			<div class="flex-container">
				<div class="flex-item" style="width: 40%;">
					<view>
						<navigator url="/pages/current" hover-class="other-navigator-hover">
							<div class="flex-container" style="flex-direction:column">
								<div class="flex-item">
									<image class="icon" src="../../static/svg/formula.svg"></image>
								</div>
								<div class="flex-item">
									<text>公式战</text>
								</div>
							</div>
						</navigator>
					</view>
				</div>
				<div class="flex-item" style="width: 40%;">
					<view>
						<navigator url="/pages/records" hover-class="other-navigator-hover">
							<div class="flex-container" style="flex-direction:column">
								<div class="flex-item">
									<image class="icon" src="../../static/svg/consult.svg"></image>
								</div>
								<div class="flex-item">
									<text>咨询留言</text>
								</div>
							</div>
						</navigator>
					</view>
				</div>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.im {
		width: 40px;
		height: 40px;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 45% 45%;
		grid-row-gap: 5px;
	}
	
	.flex-container {
		display: -webkit-flex;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
</style>