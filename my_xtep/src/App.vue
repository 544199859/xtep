<template>
  <div id="app">
    <router-view/>
	
	<div class="footer">
		<ul>
			<li @click="gotoPage(page)" v-for="page of pages" :key="page.name" :class="{current : page == currentPage }">
				<div class="tubiao">
					<i :class="page.iconfont"></i>
				</div>
				<div>
					{{ page.text }}
				</div>
			</li>
		</ul>
	</div>
  </div>
</template>
<script>
	export default{
		name: 'app',
		data(){
			return{
				currentPage : undefined,
				pages : [
					{ name : 'home', 	 iconfont : 'iconfont icon-shouye',  	text : '首页', 		path : '/'},
					{ name : 'category', iconfont : 'iconfont icon-fenlei',  	text : '分类', 		path : '/category'},
					{ name : 'cart', 	 iconfont : 'iconfont icon-gouwuche',	text : '购物车', 	path : '/cart'},
					{ name : 'user', 	 iconfont : 'iconfont icon-wode', 		text : '我的', 		path : '/user'}
				]
			}
		},
		mounted(){
			console.log(this.$route)//当前组件的route
			for(let page of this.pages){
				if(page.path === location.pathname){
					this.currentPage = page;
					break;
				}
			}
			
		},
		methods:{
			gotoPage(page){
				this.currentPage = page;
				this.$router.push({name: page.name})
			}
		}
	}
</script>



<style>
@import "./assets/font/iconfont.css";
  /* #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

  } */
  
  .current{
	  color: #E70012;
  }
  
  .footer{
  	position: fixed;
  	bottom: 0;
  	width: 7.5rem;
  	height: 1.08rem;
  	background: #fff;
  	border: 0.01rem solid #CCCCCC;
	font-size: 0.28rem;
  }
  .footer ul{
  	width: 7.5rem;
  	height: 1.08rem;
  	display: flex;
  	justify-content: space-around;
  }
  .footer ul li{
	  display: flex;
	  flex-direction: column;
  }
  .footer .tubiao{
	  text-align: center;
  }
  .footer .tubiao i{
	  display: inline-block;
	  font-size: 0.36rem;
	  line-height: 0.54rem;
	  height: 0.54rem;
	  height: 0.54rem;
  }
</style>
