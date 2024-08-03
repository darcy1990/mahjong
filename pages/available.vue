<template>
	<view class="container">
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
					<uni-datetime-picker></uni-datetime-picker>
				</div>
			</div>
		</view>

		<view style="margin-top: 10px;">
			<div class="grid-container">
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item" style="background-color: gray;">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
				<div class="grid-item">00:00 ~ 01:00</div>
			</div>
		</view>
		<view style="margin-bottom: 10px;" class="green">
			灰色为不可用时段
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
	
	.flex-container2 {
		display: -webkit-flex;
		display: flex;
		align-items: center;
	}
	
	.flex-item2 {
		display: flex;
	}
</style>