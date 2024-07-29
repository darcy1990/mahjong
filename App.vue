<script>
	export default {
		onLaunch: async function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	
	/*每个页面公共css */
	/*  #ifdef  H5  */
	*{
	  font-family: "HanHei SC",PingHei,"PingFang SC","Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;;
	  font-style: normal;
	  font-weight: normal;
	}
	/*  #endif  */
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
	  font-family: uniicons;
	  src: url('/static/uni.ttf');
	}
	
	/* #endif */

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}

	view {
		margin: 2px;
	}

	.container {
		font-family: "Arial", "Helvetica Neue", "Helvetica", sans-serif;
		padding: 20px;
		font-size: 13px;
		line-height: 24px;
	}

	button {
		display: inline-block;
		font-size: 12px;
		line-height: 2.3;
		padding: 0 1.34em;
		border: none;
		outline: none;
	}

	navigator {
		display: inline;
	}

	.green {
		font-size: 12px;
		color: green;
	}

	.left {
		margin-left: 10px;
	}

	.middle {
		vertical-align: middle;
	}
</style>