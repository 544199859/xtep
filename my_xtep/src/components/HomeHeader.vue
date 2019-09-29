<template>
	<div class="header">
		<p>
			<img src="https://m.xtep.com.cn/webcommon/images/image_w/logoN.png" alt=""><i class="iconfont icon-sousuo"></i><input type="search">
		</p>
	</div>
</template>

<script>
	export default {
		name: "HomeHeader"
	}
</script>

<style scoped>
@import "../assets/font/iconfont.css";	
	.header{
		position: fixed;
		top: 0;
		width: 6.9rem;
		height: 0.6rem;
		background: #e60012;
		padding: 0.2rem 0.3rem;
		z-index: 1;
		position: relative;
	}
	.header p{
		width: 6.9rem;
		height: 0.6rem;
	}
	.header img{
		width: 1.8rem;
		height: 0.6rem;
		float: left;
	}
	.header input{
		width: 5.0rem;
		height: 0.6rem;
		float: right;
		outline:none;
		border-radius: 0.10rem;
		padding-left: 0.6rem;
	}
	.header p .iconfont{
		position: absolute;
		top : 0.1rem;
		left: 2.0rem;
		color: #CCCCCC;
		font-size: 0.4rem;
		width: 0.6rem;
		height: 0.6rem;
		z-index: 2;
	}
</style>
