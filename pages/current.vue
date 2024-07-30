<template>
	<view class="container">
		<view class="rooms bg1">
			<view style="margin: 20px;">
				<text class="middle">当前正在进行的组局</text>
			</view>
			<view v-for="room in rooms">
				<view style="margin: 10px;">
					<text class="middle">{{ room }}</text>
					<navigator class="middle left" url="/pages/reserve/reserve" open-type="switchTab" hover-class="other-navigator-hover">
						<text class="green"> 加入 </text>
					</navigator>
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