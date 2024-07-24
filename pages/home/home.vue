<template>
	<view class="container">
		<view>修罗雀庄</view>
		<view class="notice">公告 {{notice}}</view>
		<view class="rooms">
			<view>
				<text class="middle">当前正在进行的组局</text>
				<navigator class="middle left" url="/pages/current?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
					<text class="green"> >> </text>
				</navigator>
			</view>
			<view v-for="room in rooms">
				<text class="middle">{{ room }}</text>
				<navigator class="middle left" url="/pages/reserve/reserve" open-type="switchTab" hover-class="other-navigator-hover">
					<text class="green"> 加入 </text>
				</navigator>
			</view>
		</view>
		<view>房间列表</view>
		<view>
			<li v-for="rroom in rrooms">
				<view class="rroom">
					<view>{{ rroom.name }}</view>
					<image src="../../static/rooms/room2.png" class="im"></image>
					<view>{{ rroom.desc }}</view>
					<view>
						<navigator url="/pages/reserve/reserve" open-type="switchTab" hover-class="other-navigator-hover">
							<button>预约</button>
						</navigator>
						<navigator url="/pages/reserve/available" open-type="redirect" hover-class="other-navigator-hover">
							<button class="left green">查看可用时间段</button>
						</navigator>
					</view>
				</view>
			</li>
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
						"img": "../../static/rooms/room1.png",
						"desc": "大洋化学，4口，1层"
					},
					{
						"name": "玉之间",
						"img": "../../static/rooms/room1.png",
						"desc": "大洋化学，4口，1层"
					},
					{
						"name": "铜之间",
						"img": "../../static/rooms/room1.png",
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
	}
</style>