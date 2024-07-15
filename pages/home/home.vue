<template>
	<view class="container">
		<view>修罗雀庄</view>
		<view>公告 {{notice}}</view>
		<view>当前正在进行的组局</view>
		<li v-for="room in rooms">
		  {{ room }}
		  <text>加入</text>
		</li>
		<view>当前正在进行的组局</view>
		<li v-for="rroom in rrooms">
		  <text>{{ rroom.name }}</text>
		  <image src="{{rroom.img}}"></image>
		  <text>{{ rroom.desc }}</text>
		  <button>预约</button>
		  <button>查看可用时间段</button>
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
				rrooms: [
					{
						"name": "金之间",
						"img": "https://i0.hdslb.com/bfs/archive/c8fd97a40bf79f03e7b76cbc87236f612caef7b2.png",
						"desc": "大洋化学，4口，1层"
					},
					{
						"name": "玉之间",
						"img": "https://i0.hdslb.com/bfs/archive/c8fd97a40bf79f03e7b76cbc87236f612caef7b2.png",
						"desc": "大洋化学，4口，1层"
					},
					{
						"name": "铜之间",
						"img": "https://i0.hdslb.com/bfs/archive/c8fd97a40bf79f03e7b76cbc87236f612caef7b2.png",
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
</style>
