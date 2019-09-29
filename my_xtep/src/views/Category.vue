<template>
	<div class="category">
		<div class="header">
			<p>
				<a href="javascript:;" onclick="history.go(-1)" class="back">&lt;</a><input type="search" placeholder="搜索热门产品">
			</p>
		</div>
		
		<div class="categories">
			<div class="category_left">
				<ul>
					
					<li @click="select(listLeft)" :class="{currentCategory : listLeft === currentCategory }" :key="listLeft.id" v-for="listLeft of listLefts">
						{{ listLeft.text }}
					</li>
				</ul>
			</div>
			<CategoryContent v-bind:data="currentCategory"  @click="change(index)" :category_id="currentCategory.id" ></CategoryContent><!-- v-show="isShow" -->
			<!-- <CategoryContent   @click="change(index)" :category_id="currentCategory.id" ></CategoryContent> -->
			
		</div>
	
		
	</div>
</template>

<script>
	import CategoryContent from '../components/CategoryContent';
	export default {
		name: "Category",
		
		data() {
			const listLefts = [
					{id: 'FL0001', name : 'all' , text : '全部'},
					{id: 'FL0002', name : 'mShoes' , text : '男鞋'},
					{id: 'FL0003', name : 'wShoes' , text : '女鞋'},
					{id: 'FL0004', name : 'mDress' , text : '男装'},
					{id: 'FL0005', name : 'wDress' , text : '女装'},
					{id: 'FL0006', name : 'KidShoes' , text : '童鞋'},
					{id: 'FL0007', name : 'KidDress' , text : '童装'},
					{id: 'FL0008', name : 'sport' , text : '运动配件'}
				];
			return {
				currentCategory: listLefts[1],
				
				listLefts,
				/* isShow:true */
			}
		},
		mounted() {

		},
		methods: {
			select(listLeft){
			    this.currentCategory = listLeft;
				/* this.isShow = !this.isShow */
				if(listLeft.text == '全部'){
					this.$router.push('/productList')
				}
				/* for(let type of this.listLefts){
					if(type.text === '全部'){
						this.$router.push('/productList')
					}
				} */
			},
			
			/* switchType(event){
				this.msg = event.data.type.name;
			} 
			*/	
		},
		components: {
			CategoryContent
		}
	}
</script>

<style scoped>
	.category {
	    width: 100%;
	    height: 100%;
	}
	.header{
		position: fixed;
		top: 0;
		width: 7.5rem;
		height: 0.9rem;
		background: #FFFFFF;
		/* padding: 0.2rem 0.3rem; */
		z-index: 1;
		border-bottom: 0.01rem solid #CCCCCC;
	}
	.header p{
		width: 7.5rem;
		height: 0.9rem;
	}
	.header a{
		display: inline-block;
		width: 0.88rem;
		height: 0.88rem;
		line-height: 0.8rem;
		text-align: center;
		font-size: 0.48rem;
		color: #CCCCCC;
		float: left;
	}
	.header input{
		display: inline-block;
		width: 6.28rem;
		height: 0.6rem;
		float: left;
		outline:none;
		border-radius: 0.10rem;
		font-size: 0.28rem;
		background: #CCCCCC;
		text-align: center;
		margin-top: 0.15rem;
	}
	.categories{
		position: fixed;
		top: 0.9rem;
		bottom: 1.2rem;
		width: 100%;
		overflow: auto;
	}
	.category_left{
		position: absolute;
		top: 0;
		bottom: 0;
		font-size: 0.32rem;
		width: 1.68rem;
		background: #f5f5f5;
	}
	ul li{
		list-style: none;
	}
	.category_left ul li{
		width: 1.68rem;
		height: 0.98rem;
		color: #333;
		line-height: 0.98rem;
		border-bottom: 0.02rem solid #ccc;
		text-align: center;
		/* background: #f5f5f5; */
	}
	.currentCategory{
		background: white;
	}
</style>
