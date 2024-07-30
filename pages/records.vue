<template>
	<view class="container">
		<view>
			<text class="middle" style="margin-left: 20px;">我的对局</text>
		</view>
		<view>
			<li v-for="record in records">
				<view class="bg1">
					<div class="grid-container">
						<div class="grid-item">{{record.first}}</div>
						<div class="grid-item green">{{record.second}}</div>
						<div class="grid-item">{{record.third}}</div>
						<div class="grid-item">{{record.fourth}}</div>
					</div>
				</view>
			</li>
		</view>
		<view></view>
		<view>
			<button>上一页</button>
			<button class="left">下一页</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				records: [{
						"first": "25000",
						"second": "25000",
						"third": "25000",
						"fourth": "25000"
					},
					{
						"first": "25000",
						"second": "25000",
						"third": "25000",
						"fourth": "25000"
					},
					{
						"first": "25000",
						"second": "25000",
						"third": "25000",
						"fourth": "25000"
					},
					{
						"first": "25000",
						"second": "25000",
						"third": "25000",
						"fourth": "25000"
					},
					{
						"first": "25000",
						"second": "25000",
						"third": "25000",
						"fourth": "25000"
					},
					{
						"first": "25000",
						"second": "25000",
						"third": "25000",
						"fourth": "25000"
					}
				]
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
</style>