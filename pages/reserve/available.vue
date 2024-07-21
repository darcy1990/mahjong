<template>
	<view class="container">
		<view>
			日期：
			<uni-datetime-picker></uni-datetime-picker>
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
		<view style="margin-bottom: 10px;">
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
</style>