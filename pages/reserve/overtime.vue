<template>
	<view class="container">
		<view>
			房间：
			<uni-data-select style="width: 80%;">金之间</uni-data-select>
		</view>
		<view>
			结束时间：
			<uni-datetime-picker></uni-datetime-picker>
		</view>
		<view>
			加时到：
			<uni-datetime-picker></uni-datetime-picker>
		</view>

		<view style="margin-top: 10px;">
			<div class="grid-container">
				<div class="grid-item"><button>0.5h</button></div>
				<div class="grid-item"><button>1h</button></div>
				<div class="grid-item"><button>2h</button></div>
				<div class="grid-item"><button>4h</button></div>
			</div>
		</view>
		<view style="margin-bottom: 10px;">
			<text class="middle">价格：150 元</text>
			<text class="left middle green">价格说明</text>
		</view>
		<view>
			<button>支付</button>
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
</style>