<template>
	<view class="container">
		<view>修罗雀庄</view>
		<view class="notice">公告 {{notice}}</view>
		<view>当前正在进行的组局</view>
		<view v-for="room in rooms">
			{{ room }}
			<button size="mini">加入</button>
		</view>
		<view></view>
		<view>房间列表</view>
		<li v-for="rroom in rrooms">
			<view>
				<view>{{ rroom.name }}</view>
				<image src="../../static/rooms/room2.png" class="im"></image>
				<view>{{ rroom.desc }}</view>
				<button size="mini">预约</button>
				<button size="mini">查看可用时间段</button>
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
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	.notice {
		width: 350px;
		height: 48px;
	}

	.im {
		width: 250px;
		height: 200px;
	}

	.tt {
		width: 350px;
	}
</style>