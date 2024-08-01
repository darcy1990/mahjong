<template>
	<view class="container">
		<view class="bg1">
			<view>
				<image class="icon" src="../../static/svg/notice.svg"></image>
			</view>
			<view class="notice">公告 {{notice}}</view>
		</view>
		<view class="rooms bg2">
			<view>
				<view style="display: inline;">
					<image class="icon" src="../../static/svg/ongoing.svg"></image>
				</view>
				<navigator class="middle" style="margin-left: 150px;" url="/pages/current?title=redirect"
					hover-class="other-navigator-hover">
					<image class="icon" src="../../static/svg/more.svg"></image>
				</navigator>
			</view>
			<view style="padding: 5px;">
				<view v-for="room in rooms" style="padding: 2px;">
					<view>
						<text class="middle">{{ room }}</text>
						<navigator class="middle" style="margin-left: 30px;" url="/pages/reserve/reserve"
							open-type="switchTab" hover-class="other-navigator-hover">
							<image class="icon" src="../../static/svg/join.svg"></image>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		<view class="bg1" style="padding: 5px;">
			<view>
				<li v-for="rroom in rrooms">
					<view class="rroom">
						<view>
							<image class="icon" src="../../static/svg/table.svg" style="vertical-align: middle;"></image>
							<text> {{ rroom.desc }}</text>
						</view>
						<view>{{ rroom.name }}</view>
						<view>
							<image src="../../static/rooms/tangdao.png" class="im" mode="aspectFill" style="border-radius: 10px;"></image>
						</view>
						<div class="grid-container">
							<div class="grid-item">
								<navigator url="/pages/reserve/reserve" hover-class="other-navigator-hover">
									<image class="icon" src="../../static/svg/reserve.svg" style="vertical-align: middle;">
									</image>
									<text> 预约</text>
								</navigator>
							</div>
							<div class="grid-item">
								<navigator url="/pages/available" hover-class="other-navigator-hover">
									<image class="icon" src="../../static/svg/available.svg" style="vertical-align: middle;">
									</image>
									<text> 可用时间段</text>
								</navigator>
							</div>
						</div>
						<!-- <div class="flex-container">
							<div class="flex-item" style="width: 40%;">
								<view>
									<navigator url="/pages/reserve/reserve" open-type="switchTab"
										hover-class="other-navigator-hover">
										<div class="flex-container" style="flex-direction:column">
											<div class="flex-item">
												<image class="icon" src="../../static/svg/reserve.svg"></image>
											</div>
											<div class="flex-item">
												<text>预约</text>
											</div>
										</div>
									</navigator>
								</view>
							</div>
							<div class="flex-item" style="width: 40%;">
								<view>
									<navigator url="/pages/available" hover-class="other-navigator-hover">
										<div class="flex-container" style="flex-direction:column">
											<div class="flex-item">
												<image class="icon" src="../../static/svg/available.svg"></image>
											</div>
											<div class="flex-item">
												<text>可用时间段</text>
											</div>
										</div>
									</navigator>
								</view>
							</div>
						</div> -->
					</view>
				</li>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				notice: 'xxxxxxxxxxxx',
				rooms: ['金之间, 13:00 ~ 18:00', '金之间, 13:00 ~ 18:00', '金之间, 13:00 ~ 18:00'],
				rrooms: [{
						"name": "金之间",
						"img": "../../static/rooms/tangdao.png",
						"desc": "大洋化学，4口，1层"
					},
					{
						"name": "玉之间",
						"img": "../../static/rooms/tangdao.png",
						"desc": "大洋化学，4口，1层"
					},
					{
						"name": "铜之间",
						"img": "../../static/rooms/tangdao.png",
						"desc": "大洋化学，4口，1层"
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.notice {
		height: 48px;
		padding: 5px;
	}

	.im {
		width: 250px;
		height: 200px;
	}

	.tt {
		width: 350px;
	}

	.rooms {
		height: 300px;
	}

	.rroom {
		height: 330px;
		margin-bottom: 10px;
	}

	.flex-container {
		display: -webkit-flex;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	
	.grid-container {
		display: grid;
		grid-template-columns: 45% 45%;
		grid-row-gap: 5px;
	} 
</style>