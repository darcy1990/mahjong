<template>
	<view class="container">
		<view class="bg1">
			<view>
				<div class="flex-container">
					<div class="flex-item middle" style="width: 12%;"><text>房间：</text></div>
					<div class="flex-item middle" style="width: 40%;">
						<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
					</div>
				</div>
			</view>
			<view>
				<div class="flex-container">
					<div class="flex-item" style="width: 12%;">日期：</div>
					<div class="flex-item middle" style="width: 80%;">
						<uni-datetime-picker></uni-datetime-picker>~<uni-datetime-picker></uni-datetime-picker>
					</div>
				</div>
			</view>
			<view style="margin-bottom: 10px;" class="green">
				存在相同时段组局，点击加入
			</view>
			<view>
				<div class="grid-container">
					<div class="grid-item">
						<navigator url="/pages/available" hover-class="other-navigator-hover">
							<button class="green">查看可用时间段</button>
						</navigator>
					</div>
					<div class="grid-item"><button class="green">通宵战</button></div>
				</div>
			</view>
		</view>

		<view class="bg2">
			<div class="grid-container">
				<div class="grid-item"><text class="middle">价格：150 元</text></div>
				<div class="grid-item"><text class="middle green">价格说明</text></div>
				<div class="grid-item"><button>支付</button></div>
				<div class="grid-item">
					<navigator url="/pages/overtime" hover-class="other-navigator-hover">
						<button>加时</button>
					</navigator>
				</div>
				<div class="grid-item"><button>锁定房间</button></div>
				<div class="grid-item"><button>解锁房间</button></div>
				<div class="grid-item">
					<navigator url="/pages/games" hover-class="other-navigator-hover">
						<button>上传/查看对局记录</button>
					</navigator>
				</div>
				<div class="grid-item"><button>申请退款</button></div>
			</div>
		</view>
		<view class="bg1">
			<view>
				<text>牌搭子</text>
				<text @click="chatroom" style="margin-left: 40px; font-size: 15px; color: green;">聊天室</text>
			</view>
			<view style="margin-top: 10px;">
				<div class="grid-container2">
					<div class="grid-item">
						<image src="../../static/head.png" class="im"></image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im"></image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im"></image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im"></image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im"></image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im"></image>
					</div>
					<div class="grid-item">
						<image src="../../static/head.png" class="im"></image>
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
			<p>离开房间</p>
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
					avatar: "../../static/rooms/room1.png"
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

	.flex-container {
		display: -webkit-flex;
		display: flex;
		align-items: center;
	}

	.flex-item {
		display: flex;
	}

	.outer {
		display: flex;
		justify-content: center;
		/* 水平居中 */
	}
</style>