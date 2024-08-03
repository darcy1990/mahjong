<template>
	<view class="container">
		<view class="bg1">
			<div class="flex-container2">
				<div class="flex-item2" style="width: 60%;">
					<image src="../../static/images/xiuluo.jpg" mode="aspectFit "></image>
				</div>
				<div class="flex-item2" style="width: 40%;">
					<text style="white-space: pre-wrap;">
						联系电话：13xxxxxxxx\n
						营业时间：24h\n
						地址：武汉市xxxxxxxxxxxxx
					</text>
				</div>
			</div>
		</view>
		<view class="bg1">
			<view>
				<image class="micon" src="../../static/svg/notice.svg" style="vertical-align: middle;"></image>
				公告 {{notice}}
			</view>
		</view>
		<view class="bg2">
			<div class="flex-container">
				<div class="flex-item" style="width: 20%;">
					<div class="flex-container" style="flex-direction:column">
						<div class="flex-item">
							<image class="icon" src="../../static/svg/discount.svg"></image>
						</div>
						<div class="flex-item">
							<text>超经济</text>
						</div>
					</div>
				</div>
				<div class="flex-item" style="width: 20%;">
					<div class="flex-container" style="flex-direction:column">
						<div class="flex-item">
							<image class="icon" src="../../static/svg/formula.svg"></image>
						</div>
						<div class="flex-item">
							<text>公式战</text>
						</div>
					</div>
				</div>
				<div class="flex-item" style="width: 20%;">
					<div class="flex-container" style="flex-direction:column">
						<div class="flex-item">
							<image class="icon" src="../../static/svg/reserve.svg"></image>
						</div>
						<div class="flex-item">
							<text>低价</text>
						</div>
					</div>
				</div>
				<div class="flex-item" style="width: 20%;">
					<div class="flex-container" style="flex-direction:column">
						<div class="flex-item">
							<image class="icon" src="../../static/svg/reserve.svg"></image>
						</div>
						<div class="flex-item">
							<text>公式战</text>
						</div>
					</div>
				</div>
			</div>
			<div class="flex-container">
				<div class="flex-item" style="width: 20%;">
					<div class="flex-container" style="flex-direction:column">
						<div class="flex-item">
							<image class="icon" src="../../static/svg/wifi.svg"></image>
						</div>
						<div class="flex-item">
							<text>wifi</text>
						</div>
					</div>
				</div>
				<div class="flex-item" style="width: 20%;">
					<div class="flex-container" style="flex-direction:column">
						<div class="flex-item">
							<image class="icon" src="../../static/svg/nosmoke.svg"></image>
						</div>
						<div class="flex-item">
							<text>无烟</text>
						</div>
					</div>
				</div>
				<div class="flex-item" style="width: 20%;">
					<div class="flex-container" style="flex-direction:column">
						<div class="flex-item">
							<image class="icon" src="../../static/svg/wc.svg"></image>
						</div>
						<div class="flex-item">
							<text>洗手间</text>
						</div>
					</div>
				</div>
				<div class="flex-item" style="width: 20%;">
					<div class="flex-container" style="flex-direction:column">
						<div class="flex-item">
							<image class="icon" src="../../static/svg/reserve.svg"></image>
						</div>
						<div class="flex-item">
							<text>停车优惠</text>
						</div>
					</div>
				</div>
			</div>
		</view>


		<view class="rooms bg2">
			<view>
				<view style="height: 30px;">
					<view style="position: relative;">
						<view style="position: absolute;left: 0;">
							<image class="micon" src="../../static/svg/ongoing.svg"></image>
						</view>
						<view style="position: absolute;right: 0;">
							<navigator class="middle" style="margin-left: 150px; " url="/pages/current?title=redirect"
								hover-class="other-navigator-hover">
								<image class="icon" src="../../static/svg/more.svg"></image>
							</navigator>
						</view>
					</view>
				</view>
			</view>
			<view style="padding: 5px;">
				<view v-for="room in rooms" style="padding: 2px;">
					<view>
						<text style="vertical-align: middle">{{ room }}</text>
						<navigator style="margin-left: 30px;" url="/pages/reserve/reserve" open-type="switchTab"
							hover-class="other-navigator-hover">
							<image class="sicon" src="../../static/svg/join.svg"></image>
						</navigator>
					</view>
				</view>
			</view>
		</view>

		<li v-for="rroom in rrooms">
			<view class="rroom bg1">
				<view>
					<view>
						<image class="icon" src="../../static/svg/table.svg" style="vertical-align: middle;"></image>
						{{ rroom.name }}
					</view>
				</view>
				<view>
					<div class="flex-container2" style="height: 200px;">
						<div class="flex-item" style="width: 50%;">
							<image src="../../static/rooms/tangdao.png" class="im" mode="aspectFit"
								style="border-radius: 10px;"></image>
						</div>
						<div class="flex-item2" style="width: 50%; text-align: center;">
							<text style="white-space: pre-wrap; padding: 10px; text-align: left;display: inline-block;">
							{{rroom.desc}}\n每小时价格：8元\n每半庄价格：8.5元\n通宵价格：50元\n
							</text>
						</div>
					</div>
				</view>

				<div class="grid-container">
					<div class="grid-item">
						<navigator url="/pages/reserve/reserve" hover-class="other-navigator-hover">
							<image class="micon" src="../../static/svg/reserve.svg" style="vertical-align: middle;">
							</image>
							<text> 预约</text>
						</navigator>
					</div>
					<div class="grid-item">
						<navigator url="/pages/available" hover-class="other-navigator-hover">
							<image class="micon" src="../../static/svg/available.svg" style="vertical-align: middle;">
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
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				notice: 'xxxxxxxxxxxx',
				rooms: ['金之间, 13:00 ~ 18:00， 1人等待', '金之间, 13:00 ~ 18:00， 2人等待', '金之间, 13:00 ~ 18:00， 3人等待'],
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
	
	.flex-item {
		display: flex;
	}

	.flex-container2 {
		display: -webkit-flex;
		display: flex;
		align-items: center;
	}

	.flex-item2 {
		display: flex;
		justify-content: center;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 45% 45%;
		grid-row-gap: 5px;
	}
</style>