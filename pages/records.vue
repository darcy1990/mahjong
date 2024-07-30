<template>
	<view class="container">
		<view>
			<text class="middle" style="margin-left: 20px;">我的对局</text>
		</view>
		<view>
			<li v-for="record in records">
				<view class="bg1">
					<div class="grid-container" style="font-size: 12px;">
						<div class="grid-item">小林刚：{{record.first}}</div>
						<div class="grid-item green">优酱：{{record.second}}</div>
						<div class="grid-item">太太：{{record.third}}</div>
						<div class="grid-item">高宫：{{record.fourth}}</div>
					</div>
				</view>
			</li>
		</view>
		<view></view>
		<view class="outer" style="margin-top: 100px;">
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
	
	.outer {
		display: flex;
		justify-content: center;
		/* 水平居中 */
	}
</style>