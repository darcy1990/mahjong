<template>
	<view class="container">
		<view class="rooms bg2">
			<view>
				<view style="height: 30px;">
					<view style="position: relative;">
						<view style="position: absolute;left: 0;">
							<image class="icon" src="../static/svg/ongoing.svg"></image>
						</view>
					</view>
				</view>
			</view>
			<view style="padding: 5px;">
				<view v-for="room in rooms" style="padding: 2px;">
					<view>
						<text style="vertical-align: middle">{{ room }}</text>
						<navigator  style="margin-left: 30px;" url="/pages/reserve/reserve"
							open-type="switchTab" hover-class="other-navigator-hover">
							<image class="sicon" src="../static/svg/join.svg"></image>
						</navigator>
					</view>
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