<template>
	<view class="container">
		<view>
			房间：
			<uni-data-select style="width: 50%;">金之间</uni-data-select>
		</view>
		<view>
			<view>
				日期：
				<uni-datetime-picker></uni-datetime-picker>
				~
				<uni-datetime-picker></uni-datetime-picker>
			</view>
			<view style="margin-bottom: 10px;" class="green">
				存在相同时段组局，点击加入
			</view>
		</view>

		<view>
			<div class="grid-container">
				<div class="grid-item">
					<navigator url="/pages/reserve/available" open-type="redirect" hover-class="other-navigator-hover">
						<button class="green">查看可用时间段</button>
					</navigator>
				</div>
				<div class="grid-item"><button class="green">通宵战</button></div>
				<div class="grid-item"><text class="middle">价格：150 元</text></div>
				<div class="grid-item"><text class="middle green">价格说明</text></div>
				<div class="grid-item"><button>支付</button></div>
				<div class="grid-item">
					<navigator url="/pages/reserve/overtime" open-type="redirect" hover-class="other-navigator-hover">
						<button>加时</button>
					</navigator>
				</div>
				<div class="grid-item"><button>锁定房间</button></div>
				<div class="grid-item"><button>解锁房间</button></div>
				<div class="grid-item">
					<navigator url="/pages/reserve/games" open-type="redirect" hover-class="other-navigator-hover">
						<button>上传/查看对局记录</button>
					</navigator>
				</div>
				<div class="grid-item"><button>申请退款</button></div>
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
	.grid-container {
		display: grid;
		grid-template-columns: 45% 45%;
		grid-row-gap: 5px;
	}
</style>