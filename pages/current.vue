<template>
	<view class="container">
		<view class="rooms">
			<view style="margin: 20px;">
				<text class="middle">当前正在进行的组局</text>
				<button class="middle left"> >> </button>
			</view>
			<view v-for="room in rooms">
				<view style="margin: 10px;">
					<text class="middle">{{ room }}</text>
					<button  class="middle left">加入</button>
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


</style>