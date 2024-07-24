<template>
	<view class="container">
		<view>
			<navigator open-type="navigateBack" delta="2" hover-class="navigator-hover">
				<button>返回</button>
			</navigator>
		</view>
		<view class="rooms">
			<view style="margin: 20px;">
				<text class="middle">当前正在进行的组局</text>
			</view>
			<view v-for="room in rooms">
				<view style="margin: 10px;">
					<text class="middle">{{ room }}</text>
					<text class="middle left green"> 加入 </text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rooms: ['金之间, 13:00 ~ 18:00', '金之间, 13:00 ~ 18:00', '金之间, 13:00 ~ 18:00']
			}
		},
		methods: {

		}
	}
</script>
	
<style>
	.navigator-hover {
	    color: #666;
	  }
</style>