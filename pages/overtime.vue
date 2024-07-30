<template>
	<view class="container">
		<view class="bg1">
			<view>
				<div class="flex-container">
					<div class="flex-item middle" style="width: 20%;"><text>房间：</text></div>
					<div class="flex-item middle" style="width: 40%;">
						<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
					</div>
				</div>
			</view>
			<view>
				<div class="flex-container">
					<div class="flex-item" style="width: 20%;">结束时间 ：</div>
					<div class="flex-item middle" style="width: 80%;"><uni-datetime-picker></uni-datetime-picker></div>
				</div>
				<div class="flex-container">
					<div class="flex-item" style="width: 20%;">加时到：</div>
					<div class="flex-item middle" style="width: 80%;"><uni-datetime-picker></uni-datetime-picker></div>
				</div>
			</view>

			<view style="margin-top: 10px;">
				<div class="grid-container">
					<div class="grid-item"><button>0.5h</button></div>
					<div class="grid-item"><button>1h</button></div>
					<div class="grid-item"><button>2h</button></div>
					<div class="grid-item"><button>4h</button></div>
				</div>
			</view>
		</view>
		<view class="bg2">
			<view style="margin-bottom: 10px;">
				<text class="middle">价格：150 元</text>
				<text class="left middle green">价格说明</text>
			</view>
			<view>
				<button>支付</button>
			</view>
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
	.grid-container {
		display: grid;
		grid-template-columns: 20% 20% 20% 20%;
	}

	.flex-container {
		display: -webkit-flex;
		display: flex;
		align-items: center;
	}

	.flex-item {
		display: flex;
	}
</style>