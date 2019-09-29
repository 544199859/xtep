<template>
	<div class="content">
		<div>
			<div ref="categoryItem" @click="select(category)" v-for="(category,index) of category_list" :key="category.id" > <!-- v-show="category.show" -->
			<!-- <div ref="categoryItem" v-for="(category,index) of category_list" :key="category.id" @click="select(type)"> -->
				<ul class="imgList">
					<template v-if="category.id === data.id">
						<li class="singleImg" v-for="goods of category.goods_list" :key="goods.id" >
							<div>
								<img :src="goods.url" alt="">
								<p class="text">{{ goods.desc }}</p>
							</div>
						</li>
					</template>
					
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	// import axios from 'axios';
	export default{
		name: "CategoryContent",
		props: ['category_id','data'],
		data(){
			const category_list = [
				{id: 'FL0002', name: '男鞋', /* show : true, */
				    goods_list: [
				        {id: '1000A', desc: '跑步鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201904301108/2019430118134A3F961704CB9A1CC94B81D7DDE5DAA8F.jpg'},
						{id: '1000B', desc: '综训鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201904301108/201943011837862B33D5820481FD8C7D5CFC586B6E2D93C.jpg'},
						{id: '1000C', desc: '休闲鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201904301108/2019430118282060037D4E0C13132EFF32D22F0E0DADE17.jpg'},
						{id: '1000D', desc: '板鞋',   url : 'http://image.xtep.com.cn/util/Upload/cate/201904301109/201943011954222FF38E22EE77BE988ACDBFB03E3A7748B.jpg'},
						{id: '1000E', desc: '篮球鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201904301108/201943011810503ECCEA370D31E8C31F39D789D990A7BC1.jpg'},
						{id: '1000F', desc: '帆布鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201904301058/2019430105857253E1AA7586D3C604F9BCBA2558798AD530.jpg'},
						{id: '1000G', desc: '户外鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201905101430/201951014301909188F6C493A9625714702E4EA23F12C0A.jpg'},
				    ]
				},
				{id: 'FL0003', name: '女鞋', /* show : true, */
				    goods_list: [
				        {id: '2000A', desc: '跑步鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201904301121/2019430112118862254B8EB7165F57AE5506E2DDD8090F1C.jpg'},
						{id: '2000B', desc: '休闲鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201904301121/20194301121121283744170F80F1E53133F481EFCCEFEAD5.jpg'},
						{id: '2000C', desc: '板鞋',   url : 'http://image.xtep.com.cn/util/Upload/cate/201904301121/201943011213566FA991360E2AF0440EA75A2D101812150.jpg'},
						{id: '2000D', desc: '综训鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201904301120/2019430112049316AF0AE4A0CBC67A2DF97791E688F2C3B7.jpg'},
						{id: '2000E', desc: '帆布鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201904301059/2019430105921956D5E8CDD7A5D5E6F67D3F24C88EA5C7FB.jpg'},
						{id: '2000F', desc: '户外鞋', url : 'http://image.xtep.com.cn/util/Upload/cate/201905101429/2019510142951691C13892A92E96F4F007DF43A80A823383.jpg'},
				    ]
				},
				{id: 'FL0004', name: '男装', /* show : true, */
				    goods_list: [
				        {id: '3000A', desc: '羽绒服', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201812051509/201812515938215EA51F9EFC7E1AF1A3623EF78FBC9078A.jpg'},
						{id: '3000B', desc: '棉服', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201812051509/20181251595615282B7CA5C6D3CCDA3901864FA65D31557.jpg'},
						{id: '3000C', desc: '运动T恤', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201904301134/20194301134381594E9E9965CDD528C3EEE6C00E2AC2914C.jpg'},
						{id: '3000D', desc: '休闲T恤',   url : 'http://image.xtep.com.cn/util/Upload/cate/201904301134/2019430113430519116973B6103D8A2FB4D85D6A67F29708.jpg'},
						{id: '3000E', desc: '短裤', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201904301134/20194301134183000D9F5C7B3A7F8FAC6F4A80C3286FB8CD.jpg'},
						{id: '3000F', desc: '针织衫/卫衣', url : 'http://image.xtep.com.cn/util/Upload/cate/201904301134/2019430113410409E572FE16CA930EB5975E64BFE799D6DE.jpg'},
						{id: '3000G', desc: '长裤', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201812050931/2018125931158711DD7340EEBAF45B5A458B774209B7508.jpg'},
						{id: '3000H', desc: '风衣夹克', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201904301147/20194301147321592F6D12C18CE377057354C1ED26D8875E.jpg'},
						{id: '3000I', desc: '紧身裤', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201812051510/2018125151018581D361986D93261AF3D4688ABA897A838.jpg'},
						{id: '3000J', desc: '运动套装', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201904301133/201943011331939451F63C8A0DCFD787FEA0E7A80326B371.jpg'}
				    ]
				},
				{id: 'FL0005', name: '女装',/* show : true, */
				    goods_list: [
				        {id: '4000A', desc: '羽绒服/马甲', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201811291723/20181129172339967BCF10453A691641ECE3EBD4456D1388.jpg'},
						{id: '4000B', desc: '棉服', 			url : 'http://image.xtep.com.cn/util/Upload/cate/201811281704/201811281742627ED1DA320960D3491DF065A506DF6F6FF.jpg'},
						{id: '4000C', desc: '运动T恤', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201904301147/201943011471914422F40B781F1C38607246730EB8B5EC68.jpg'},
						{id: '4000D', desc: '休闲T恤',   	url : 'http://image.xtep.com.cn/util/Upload/cate/201904301147/20194301147108153FAB15DC3C75C6427E0FBCDF8832A2BD.jpg'},
						{id: '4000E', desc: '短裤', 			url : 'http://image.xtep.com.cn/util/Upload/cate/201901171613/2019117161353761761998DAAA94AA490D1342D4CAF1FC57.jpg'},
						{id: '4000F', desc: '针织衫/卫衣', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201904301146/2019430114659565EDF11F09A365FEBE23F18B69BF18D3E0.jpg'},
						{id: '4000G', desc: '长裤', 			url : 'http://image.xtep.com.cn/util/Upload/cate/201808102235/2018810223548540EB3A04E3E2B46B9344DF32AE6E0D12DE.jpg'},
						{id: '4000H', desc: '风衣夹克', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201901171610/20191171610265431D18827A64888052E46B98E00EF53D77.jpg'},
						{id: '4000I', desc: '紧身裤', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201904301146/2019430114648831A9FC23068093854596C51568158E0A61.jpg'},
						{id: '4000J', desc: '运动套装', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201901171605/201911716535543E2A8B125F7F76652E3F62ECD69ABB83A.jpg'}
				    ]
				},
				{id: 'FL0006', name: '童鞋', /* show : true, */
				    goods_list: [
				        {id: '5000A', desc: '健康鞋', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201901171550/201911715509480A7CCD4373590FA4421BB3C65FFCC75F9.jpg'},
						{id: '5000B', desc: '跑步鞋', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201812051833/20181251833545430E7C87D30422783DC91E10C11E007A5D.jpg'},
						{id: '5000C', desc: '休闲鞋', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201901171549/20191171549579021590A380711DB9B69273DF00D4A15450.jpg'},
						{id: '5000D', desc: '板鞋',   	url : 'http://image.xtep.com.cn/util/Upload/cate/201812041845/2018124184504490456BB37250F823E1F10C559FEC0E549.jpg'},
						{id: '5000E', desc: '凉鞋', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201904301049/2019430104948394D315DA19C1228CCD62E6E1D8C23BE9E9.jpg'}
				    ]
				},
				{id: 'FL0007', name: '童装', /* show : true, */
				    goods_list: [
				        {id: '6000A', desc: '短袖', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201904301150/201943011504764424D579323C80D2F7BCEF72720D1F8B4C.jpg'},
						{id: '6000B', desc: '短裤', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201904301150/2019430115040753738D5A2D802DB22D2666BA1B06FFFCF3.jpg'},
						{id: '6000C', desc: '长裤', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201901171554/20191171554218559B875DC5D6AB2CC6FFFE0F1A21A61B2D.jpg'},
						{id: '6000D', desc: '毛衣/卫衣/..',  url : 'http://image.xtep.com.cn/util/Upload/cate/201901171554/201911715541274C1B3A571CECF6857B769A4884751C377.jpg'},
						{id: '6000E', desc: '外套/夹克', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201904301150/20194301150249874E1CEAD990BE8184F49EF2417F8D217F.jpg'},
						{id: '6000F', desc: '套装', 			url : 'http://image.xtep.com.cn/util/Upload/cate/201904301150/20194301150161125E55206AF78B7F65EB2670B7093840C7.jpg'}
				    ]
				},
				{id: 'FL0008', name: '运动配件',/* show : true, */
				    goods_list: [
				        {id: '7000A', desc: '运动包', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201904301326/201943013261380002ABE6ADC955178A1395C5C67CFD1635.jpg'},
						{id: '7000B', desc: '运动袜', 	url : 'http://image.xtep.com.cn/util/Upload/cate/201812050949/201812594937230B2683F2505A1DAD86675FD616D880045.jpg'},
						{id: '7000C', desc: '帽子', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201904301326/20194301326450DD0FB99447AD1A97682DA96826EC8312.jpg'},
						{id: '7000D', desc: '护具',   	url : 'http://image.xtep.com.cn/util/Upload/cate/201812050948/201812594858637659AEB3957587036F8AF5203E0B9534B.jpg'},
						{id: '7000E', desc: '内裤', 		url : 'http://image.xtep.com.cn/util/Upload/cate/201904301325/2019430132556972F3FD0189C08258C3DCA7E3261F773AE4.jpg'},
						{id: '7000F', desc: '其他',		url : 'http://image.xtep.com.cn/util/Upload/cate/201812050950/2018125950345837ED18DFBB51AD989846C3561A16899E.jpg'}
				    ]
				}
			];
			
			return{
				selectedType : undefined,
				category_list
			}
		},
		watch : {
			category_id(newId,oldID){
				console.log(newId,oldID);
				let position = this.category_list.findIndex((category)=>{
					return category.id = newId;
				})
				this.category_list[position].show = true;
			}
		},
		mounted(){
			console.log(this.$refs.categoryItem);
		},
		methods:{
			select(category){
				for(let category of this.category_list){
					if(category.id){
						this.$router.push('/productList')
					}
				} 
			}
			/* select(type){
				this.selectedType = type;
				this.$emit('changeType',{
					data : {
						type
					}
				})
			} */
		}
	}
</script>

<style scoped>
	/* 右边部分 */
	.content{
		position: absolute;
		right: 0.1rem;
		top: 0;
		width: 5.6rem;
		margin-left: 0.02rem;
		padding: 0.20rem 0 0.40rem;
	}
	.imgList{
		width: 5.6rem;
		display: flex;
		flex-wrap: wrap;
		
	}
	.content .imgList .singleImg{
		padding: 0.1rem;
		margin: 0 0.033rem;
	}
	li{
		list-style: none;
	}
	.imgList li img{
		width: 1.6rem;
		height: 1.6rem;
	}
	.text{
		display: block;
		width: 1.6rem;
		height: 0.34rem;
		line-height: 0.34rem;
		text-align: center;
		font-size: 0.256rem;
		color: #969696;
	}
	
</style>
