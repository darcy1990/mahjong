<template>
	<view class="container">
		<view>修罗雀庄</view>
		<view class="notice">公告 {{notice}}</view>
		<view class="rooms">
			<view >
				<text class="middle">当前正在进行的组局</text>
				<button class="middle left" > >> </button>
			</view>
			<view v-for="room in rooms">
				<text class="middle">{{ room }}</text>
				<button  class="middle left" >加入</button>
			</view>
		</view>
		<view>房间列表</view>
		<li v-for="rroom in rrooms">
			<view class="rroom">
				<view>{{ rroom.name }}</view>
				<image src="../../static/rooms/room2.png" class="im"></image>
				<view>{{ rroom.desc }}</view>
				<view >
					<button  >预约</button>
					<button  class="left" >查看可用时间段</button>
				</view>
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