<template>
	<view class="container">
		<view class="bg1">
			<view>
				<div class="flex-container2">
					<div class="flex-item2 middle" style="width: 12%;"><text>房间：</text></div>
					<div class="flex-item2 middle" style="width: 40%;">
						<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
					</div>
				</div>
			</view>
			<view>
				<div class="flex-container2">
					<div class="flex-item2" style="width: 12%;">日期：</div>
					<div class="flex-item2 middle" style="width: 80%;">
						<uni-datetime-picker></uni-datetime-picker>~<uni-datetime-picker></uni-datetime-picker>
					</div>
				</div>
			</view>
			<view>
				<div class="grid-container">
					<div class="grid-item">
						<navigator url="/pages/available" hover-class="other-navigator-hover">
							<image class="micon vm" src="../../static/svg/available.svg">
							</image>
							<text> 查看可用时段</text>
						</navigator>
					</div>
					<div class="grid-item">
						<image class="micon vm" src="../../static/svg/moon.svg"></image>
						<text> 设定通宵战</text>
					</div>
				</div>
			</view>
			<view style="margin-bottom: 10px;" class="green">
				存在相同时段组局，点击加入
			</view>
		</view>

		<view class="bg2">
			<div class="grid-container">
				<div class="grid-item"><text class="middle">价格：150 元</text></div>
				<div class="grid-item"><text class="middle green">价格说明</text></div>
			</div>
		</view>
		<view class="bg1">
			<div class="flex-container">
				<div class="flex-item" style="width: 30%;">
					<view>
						<navigator url="/pages/current" hover-class="other-navigator-hover">
							<div class="flex-container fc">
								<div class="flex-item">
									<image class="icon" src="../../static/svg/pay.svg"></image>
								</div>
								<div class="flex-item">
									<text>支付</text>
								</div>
							</div>
						</navigator>
					</view>
				</div>
				<div class="flex-item" style="width: 30%;">
					<view>
						<navigator url="/pages/overtime" hover-class="other-navigator-hover">
							<div class="flex-container fc">
								<div class="flex-item">
									<image class="icon" src="../../static/svg/overtime.svg"></image>
								</div>
								<div class="flex-item">
									<text>加时</text>
								</div>
							</div>
						</navigator>
					</view>
				</div>
				<div class="flex-item" style="width: 30%;">
					<view>
						<navigator url="/pages/records" hover-class="other-navigator-hover">
							<div class="flex-container fc">
								<div class="flex-item">
									<image class="icon" src="../../static/svg/refund.svg"></image>
								</div>
								<div class="flex-item">
									<text>退款</text>
								</div>
							</div>
						</navigator>
					</view>
				</div>
			</div>
			<div class="flex-container">
				<div class="flex-item" style="width: 30%;">
					<view>
						<navigator url="/pages/current" hover-class="other-navigator-hover">
							<div class="flex-container fc">
								<div class="flex-item">
									<image class="icon" src="../../static/svg/lock.svg"></image>
								</div>
								<div class="flex-item">
									<text>锁定房间</text>
								</div>
							</div>
						</navigator>
					</view>
				</div>
				<div class="flex-item" style="width: 30%;">
					<view>
						<navigator url="/pages/records" hover-class="other-navigator-hover">
							<div class="flex-container fc">
								<div class="flex-item">
									<image class="icon" src="../../static/svg/unlock.svg"></image>
								</div>
								<div class="flex-item">
									<text>解锁房间</text>
								</div>
							</div>
						</navigator>
					</view>
				</div>
				<div class="flex-item" style="width: 30%;">
					<view>
						<navigator url="/pages/games" hover-class="other-navigator-hover">
							<div class="flex-container fc">
								<div class="flex-item">
									<image class="icon" src="../../static/svg/records.svg"></image>
								</div>
								<div class="flex-item">
									<text>对局记录</text>
								</div>
							</div>
						</navigator>
					</view>
				</div>
			</div>
		</view>
		<view class="bg1">
			<view style="height: 30px;">
				<view style="position: relative;">
					<view style="position: absolute;left: 0;">
						<image class="icon" src="../../static/svg/partner.svg"></image>
					</view>
					<view @click="chatroom" style="position: absolute;right: 0;">
						<image class="icon vm" src="../../static/svg/room.svg"></image>
						<text> 加入群聊</text>
					</view>
				</view>
			</view>
			<view style="margin-top: 10px;">
				<div class="grid-container2">
					<div class="grid-item">
						<image src="../../static/head.png" class="im" mode="aspectFill" style="border-radius: 10px;">
						</image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im" mode="aspectFill" style="border-radius: 10px;">
						</image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im" mode="aspectFill" style="border-radius: 10px;">
						</image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im" mode="aspectFill" style="border-radius: 10px;">
						</image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im" mode="aspectFill" style="border-radius: 10px;">
						</image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im" mode="aspectFill" style="border-radius: 10px;">
						</image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im" mode="aspectFill" style="border-radius: 10px;">
						</image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im"></image>
					</div>
				</div>
			</view>
			<view style="margin-bottom: 10px;" class="green">
				发送群消息，邀请更多的牌搭子
			</view>
		</view>
		<view class="outer bg2">
			<text> 离开房间</text>
		</view>

		<!-- <view style="margin: 10px">
			<view>上拉加载更多...</view>
			<view>
				<image src="../../static/head.png" class="im2"></image> <text class="left green">下午一点可以吗？</text>
			</view>
			<view>
				<image src="../../static/head.png" class="im2"></image> <text class="left green">下午一点可以吗？</text>
			</view>
			<view>
				<image src="../../static/head.png" class="im2"></image> <text class="left green">下午一点可以吗？</text>
			</view>
			<view>
				<image src="../../static/head.png" class="im2"></image> <text class="left green">下午一点可以吗？</text>
			</view>
			<view>
				<image src="../../static/head.png" class="im2"></image> <text class="left green">下午一点可以吗？</text>
			</view>
			<view>
				<image src="../../static/head.png" class="im2"></image> <text class="left green">下午一点可以吗？</text>
			</view>
			<view>
				<image src="../../static/head.png" class="im2"></image> <text class="left green">下午一点可以吗？</text>
			</view>
		</view>
		<view style="margin-top: 15px;">
			<div class="flex-container">
				<div class="flex-item" style="width: 60%;"><input class="uni-input" maxlength="30"
						placeholder="最大输入长度为10" /> </div>
				<div class="flex-item" style="width: 20%;"><button>发送</button></div>
			</div>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 1,
				range: [{
						value: 0,
						text: "金之间"
					},
					{
						value: 1,
						text: "银之间"
					},
					{
						value: 2,
						text: "铜之间"
					},
				],
			}
		},
		methods: {
			chatroom() {
				let roomToken = {
					roomId: "001",
					roomName: "金之间",
					userId: (Math.random() * 1000).toString(),
					nickname: "张三",
					avatar: "../../static/head.png"
				};

				uni.navigateTo({
					url: `/pages/chatroom/chatroom?query=${JSON.stringify(roomToken)}`
				})
			}
		}
	}
</script>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: 45% 45%;
		grid-row-gap: 5px;
	}

	.grid-container2 {
		display: grid;
		grid-template-columns: 20% 20% 20% 20%;
		grid-row-gap: 5px;
	}

	.im {
		width: 50px;
		height: 40px;
	}

	.im2 {
		width: 25px;
		height: 20px;
	}

	.outer {
		display: flex;
		justify-content: center;
		/* 水平居中 */
		margin: 10px;
	}
	
	
</style>