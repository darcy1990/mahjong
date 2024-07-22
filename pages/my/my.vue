<template>
	<view class="container">
		<view>
			<image src="../../static/rooms/room2.png" class="im middle"></image>
			<text class="middle" style="margin-left: 20px;">Marqueezzzz</text>
		</view>
		<view style="margin: 7px;">
			<text class="middle">信用评分：90</text>
		</view>
		<view>
			<div class="grid-container">
				<div class="grid-item">
					<navigator url="/pages/current" open-type="redirect" hover-class="other-navigator-hover">
						<button>我的预约</button>
					</navigator>
				</div>
				<div class="grid-item">
					<navigator url="/pages/my/records" open-type="redirect" hover-class="other-navigator-hover">
						<button>我的对局</button>
					</navigator>
				</div>
				<div class="grid-item"><button>公式战</button></div>
				<div class="grid-item"><button>咨询留言</button></div>
			</div>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.im {
		width: 40px;
		height: 40px;
	}

	.grid-container {
		display: grid;
		grid-template-columns: 45% 45%;
		grid-row-gap: 5px;
	}
</style>