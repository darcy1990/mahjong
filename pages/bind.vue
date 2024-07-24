<template>
	<view class="container">
		<view class="wrapper">
			<view class="bind cell">
				<view class="center">绑定公式战手机号</view>
				<view >
					<input type="text" class="phone center"></input>
				</view>
				<view class="center green" >没有绑定公式战，直接跳过</view>
			</view>
		</view>
		<view class="center" >
			<button >提交</button>
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
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.bind {
		height: 300px;
	}
	.phone {
		height: 30px;
	}
	
	.center {
		text-align: center;
	}
	
	input[type=text] {
	  width: 100%;
	  padding: 12px 20px;
	  margin: 8px 0;
	  display: inline-block;
	  border: 1px solid #ccc;
	  border-radius: 4px;
	  box-sizing: border-box;
	}
	
	.wrapper {display:table;margin:0 auto;}
	.cell{display:table-cell; vertical-align:middle;}
</style>