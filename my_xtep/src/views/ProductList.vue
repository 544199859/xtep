<template>
	<div class="productList" style="background : #f7f7f">
		<header class="header">
			<div class="header_nav">
				<div class="box01">
					<select class="select">
						<option value="分类">分类</option>
						<option value="活动商品">活动商品</option>
						<option value="热卖推荐">热卖推荐</option>
						<option value="男鞋">男鞋</option>
						<option value="女鞋">女鞋</option>
						<option value="男装">男装</option>
						<option value="女装">女装</option>
						<option value="童鞋">童鞋</option>
						<option value="童装">童装</option>
						<option value="运动配件">运动配件</option>
					</select>
				</div>
				<div class="search">
					<input type="search" placeholder="商品关键字">
				</div>
				<div class="search02">
					<button>搜索</button>
				</div>
			</div>
		</header>
		<div id="color" style="background : #f7f7f">
			<div class="product_lists">
				<ul class="navList">
					<!-- <li @click="select(product)" v-for="product of product_lists" :key="product.id" :class="{currentProduct : product === currentProduct }">
						{{ product.text }}
					</li> -->
					<li @click="rank_comprehensive()">{{product_lists[0].text}}</li>
					<li @click="rank_sales()">{{product_lists[1].text}}</li>
					<li @click="rank_price()">{{product_lists[2].text}}</li>
					<li @click="rank_time()">{{product_lists[3].text}}</li>
					<li @click="rank_comment()">{{product_lists[4].text}}</li>
				</ul>
			</div>
			
			<div class="product_total">
				<div>
					<ul>
						<li v-for="goods of goods_lists" v-bind:key="goods.id" @click="purchase(goods)">
							<div class="imgNav">
								<img :src="goods.url" alt="">
							</div>
							<div class="imgText">
								<h2>{{ goods.textH2 }}</h2>
								<p class="memp">
									<b>¥ {{ goods.salePrice }}</b>
									<span class="coupico">劵</span>
								</p>
								<p class="market">市场价:¥ {{ goods.marketPrice }}</p>
								<p class="noship">
									<span class="listship">{{ goods.shopping }}</span>
									<span class="salecount">销量：{{ goods.sales }}</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div >
		
	</div>
</template>

<script>
	export default {
		name: "ProductList",
		data() {
			const product_lists = [
				{id: '10011', 	name: 'all',	text: '综合排名'},
				{id: '10012', 	name: 'mShoes',	text: '按销量'},
				{id: '10013',	name: 'wShoes',	text: '按价格'},
				{id: '10014',	name: 'mDress',	text: '按时间'},
				{id: '10015',	name: 'wDress',	text: '按评价'}
			];
			return {
				currentProduct: product_lists[0],
				product_lists,
				goods_lists : [
					{id: '20011', textH2: '【风火鞋22代】谢霆锋同款 特步 专柜款 男子跑鞋2019秋季新品运动跑鞋男981419110528',  	salePrice : '669.00', marketPrice : '669.00', shopping : '免运费', sales : '86',  url : 'http://image.xtep.com.cn/util/upload/product/201909021652/201992165229496D284FEBE3A93EAD317EDD6B873F244C2.jpg_800x800q90.jpg'},
					{id: '20012', textH2: '特步 专柜款 女子跑鞋 19新款网面透气动力巢运动鞋981318110322',  					salePrice : '239.00', marketPrice : '239.00', shopping : '免运费', sales : '59',  url : 'http://image.xtep.com.cn/util/upload/product/201908161430/201981614305935571EBC0F407692DB3FBC695A4FC1BDD31.jpg'},
					{id: '20013', textH2: '【风火鞋22代】特步 专柜款 女子跑鞋 19新款谢霆锋同款耐磨运动鞋981418110528',  		salePrice : '259.00', marketPrice : '259.00', shopping : '免运费', sales : '27',  url : 'http://image.xtep.com.cn/util/upload/product/201908291443/2019829144320387DE9451AB2ACD3E08D952855706C2C0A9.jpg'},
					{id: '20014', textH2: '【氢风·特步云】特步 专柜款 男子跑鞋 19新款透气一体织袜套运动鞋981319110772',  		salePrice : '279.00', marketPrice : '279.00', shopping : '免运费', sales : '54',  url : 'http://image.xtep.com.cn/util/upload/product/201908191724/201981917245659D0BF9054BBE92D26B27950789D77CE4A.jpg'},
					{id: '20015', textH2: '特步 专柜款 男子冬季舒适减震耐磨运动跑步鞋981419110523',  							salePrice : '299.00', marketPrice : '299.00', shopping : '免运费', sales : '52',  url : 'http://image.xtep.com.cn/util/upload/product/201909241722/20199241722494027AA357BD46B54A7B421619D9EB00F78F.jpg'},
					{id: '20016', textH2: '【动力巢X2】特步 专柜款 男子跑鞋 19夏新款网面动力巢缓震运动鞋981319110361', 	 		salePrice : '399.00', marketPrice : '499.00', shopping : '免运费', sales : '72',  url : 'http://image.xtep.com.cn/util/upload/product/201906211115/20196211115369809038EDC92EA48156C436045C39401363.jpg'},
					{id: '20017', textH2: '【氢风·特步云】特步 专柜款 女子跑鞋 19新款一体织袜套透气运动鞋981318110772',  		salePrice : '379.00', marketPrice : '399.00', shopping : '免运费', sales : '46',  url : 'http://image.xtep.com.cn/util/upload/product/201908191721/2019819172159684794FBA5FF51C29CBC03B773F17329F90.jpg'},
					{id: '20018', textH2: '【动力巢X2】特步 专柜款 女子跑鞋 19夏新款网面休闲动力巢缓震运动鞋981318110361',  	salePrice : '359.00', marketPrice : '399.00', shopping : '免运费', sales : '53',  url : 'http://image.xtep.com.cn/util/upload/product/201906211115/2019621111513091779203B396708CF1AB97F36BC5DC573.jpg'},
					{id: '20019', textH2: '特步 专柜款 男子冬季都市休闲鞋 潮流撞色时尚休闲鞋981419320095',  					salePrice : '339.00', marketPrice : '439.00', shopping : '免运费', sales : '25',  url : 'http://image.xtep.com.cn/util/upload/product/201909041527/20199415273527EF952AB9E55C65BB43D79D60A78275DF.jpg'},
					{id: '20020', textH2: '特步 专柜款 男子休闲鞋2019秋季新款休闲鞋网布透气跑步鞋男981319393060',  			salePrice : '319.00', marketPrice : '379.00', shopping : '免运费', sales : '0',   url : 'http://image.xtep.com.cn/util/upload/product/201909041135/20199411351912186C3A92947BEA8A09D6B1E63FE43A49A.jpg'},
					{id: '20021', textH2: '特步 专柜款 女子单风衣 沈阳马拉松纪念款可折叠外套981328140566',  					salePrice : '209.00', marketPrice : '299.00', shopping : '免运费', sales : '10',  url : 'http://image.xtep.com.cn/util/upload/product/201909241500/20199241502462101AE541490D60E2ACD7B568CC72418B9.jpg'},
					{id: '20022', textH2: '特步 专柜款 男子单风衣 南京马拉松纪念款跑步外套981329140582',  					salePrice : '229.00', marketPrice : '329.00', shopping : '免运费', sales : '20',  url : 'http://image.xtep.com.cn/util/upload/product/201909241456/201992414565699684CC7DC5F98C6A00C1D3E11F368D6641.jpg'},
					{id: '20023', textH2: '特步 专柜款 女子单风衣 南京马拉松纪念款跑步外套981328140554', 	 					salePrice : '289.00', marketPrice : '299.00', shopping : '免运费', sales : '12',  url : 'http://image.xtep.com.cn/util/upload/product/201909241453/2019924145367774140DE8F83539412CC4AE12FBCEBFC27.jpg'},
					{id: '20024', textH2: '特步 男子篮球鞋 19新款革面潮流街头高帮运动鞋881419129682',  						salePrice : '329.00', marketPrice : '399.00', shopping : '免运费', sales : '46',  url : 'http://image.xtep.com.cn/util/upload/product/201909241123/201992411232749664910BE2A5BB872BE62550B7F71BD512.jpg'},
					{id: '20025', textH2: '特步 女子休闲鞋 19冬新款革面百搭运动鞋881418329668',  							salePrice : '269.00', marketPrice : '279.00', shopping : '免运费', sales : '36',  url : 'http://image.xtep.com.cn/util/upload/product/201909241750/2019924175052340D362B43F942C55758DF602D367BA37AA.jpg'},
					{id: '20026', textH2: '特步 男子针织套装 19新款拉链外套运动长裤两件套881329969283',  						salePrice : '249.00', marketPrice : '299.00', shopping : '免运费', sales : '31',  url : 'http://image.xtep.com.cn/util/upload/product/201909241022/201992410229996B015A4043DF822128217A1A43E7BF7E0.jpg'},
					{id: '20027', textH2: '特步 男子卫衣 19新款时尚背后印花宽松百搭套头衫881329059369',  						salePrice : '309.00', marketPrice : '339.00', shopping : '免运费', sales : '61',  url : 'http://image.xtep.com.cn/util/upload/product/201909241018/2019924101851387529788574245B1DE1EB6BE2BC4FAB230.jpg'},
					{id: '20028', textH2: '特步 男子卫衣 19新款迷彩连帽宽松街头运动套头衫881329059335',  						salePrice : '389.00', marketPrice : '399.00', shopping : '免运费', sales : '50',  url : 'http://image.xtep.com.cn/util/upload/product/201909241015/20199241015284030754ED4775B575D65ABC3EAB1868442.jpg'},
					{id: '20029', textH2: '【这就是街舞】特步 女子卫衣  19新款背后印花宽松套头衫881328059349',  				salePrice : '369.00', marketPrice : '399.00', shopping : '免运费', sales : '43',  url : 'http://image.xtep.com.cn/util/upload/product/201909241008/20199241084874631EBB786BF7F47AF14836E07D9B2A56C.jpg'},
					{id: '20030', textH2: '特步 男子梭织套装 19新款外套收口小脚裤运动两件套881329A69389',  					salePrice : '479.00', marketPrice : '569.00', shopping : '免运费', sales : '14',  url : 'http://image.xtep.com.cn/util/upload/product/201909241002/201992410218918954E370F6D919236151FE30A297232F3.jpg'},
					{id: '20031', textH2: '【DC蝙蝠侠联名】特步 男子休闲鞋 老爹鞋2019秋季新款蝙蝠侠联名袜套跑鞋881419329603',  	salePrice : '439.00', marketPrice : '569.00', shopping : '免运费', sales : '7',   url : 'http://image.xtep.com.cn/util/upload/product/201909031639/201993163916105D6C26B1ADFDD15399920DE6F9C65D1AF.jpg'},
					{id: '20032', textH2: '特步 专柜款 男子冬季都市时尚活力百搭简约连帽卫衣981429930023',  					salePrice : '449.00', marketPrice : '449.00', shopping : '免运费', sales : '33',  url : 'http://image.xtep.com.cn/util/upload/product/201909031644/201993164433902B5E92DB792FDE5456C777621E8C061F.jpg'},
					{id: '20033', textH2: '【这就是街舞】特步 男子秋季都市潮流时尚百搭联名款卫衣881329059359',  				salePrice : '159.00', marketPrice : '159.00', shopping : '免运费', sales : '24',  url : 'http://image.xtep.com.cn/util/upload/product/201908221107/201982211718652C39A280ABC81E493D798890394357453.jpg'},
					{id: '20034', textH2: '特步 专柜款 女子卫衣 19新款时尚侧边条纹套头衫981328920235',  						salePrice : '169.00', marketPrice : '199.00', shopping : '免运费', sales : '26',  url : 'http://image.xtep.com.cn/util/upload/product/201908271710/2019827171047773D6E1F24C46A44C734BD9C702745CFBD.jpg'},
					{id: '20035', textH2: '【景甜同款】特步 专柜款 运动卫衣女2019秋季新款连帽健身透气上衣套头衫981328930186',  	salePrice : '189.00', marketPrice : '259.00', shopping : '免运费', sales : '5',  url : 'http://image.xtep.com.cn/util/upload/product/201908151133/201981511335190281BBDAC74FAA6C9803FC2A7EBE4376C6.jpg'},
					{id: '20036', textH2: '特步 专柜款 女子休闲鞋 19冬季新款豹纹斑马纹减震跑鞋981318393089',  					salePrice : '409.00', marketPrice : '539.00', shopping : '免运费', sales : '41',  url : 'http://image.xtep.com.cn/util/upload/product/201909241643/201992416433280992C44BE5E60C61DA16B218E77FC30B84.jpg'},
					{id: '20037', textH2: '特步 专柜款 女子跑鞋 19冬季新款时尚运动耐磨轻便运动鞋981418110523',  				salePrice : '509.00', marketPrice : '599.00', shopping : '免运费', sales : '33',  url : 'http://image.xtep.com.cn/util/upload/product/201909241639/201992416394223191FC8412C0448DD6AF27AD02A0743595.jpg'},
					{id: '20038', textH2: '特步 专柜款 男子单风衣 郑州马拉松纪念款可折叠外套981329140599',  					salePrice : '629.00', marketPrice : '729.00', shopping : '免运费', sales : '21',  url : 'http://image.xtep.com.cn/util/upload/product/201909241535/2019924153531902D8CA2E12459D40551364E1D8F88A8AA0.jpg'},
					{id: '20039', textH2: '特步 专柜款 女子单风衣 郑州马拉松纪念款可折叠外套981328140571',  					salePrice : '499.00', marketPrice : '599.00', shopping : '免运费', sales : '9',  url : 'http://image.xtep.com.cn/util/upload/product/201909241529/2019924152931418F9313CA69E3A1BD7601DD622D9EC78F9.jpg'},
					{id: '20040', textH2: '特步 专柜款 男子单风衣 长沙马拉松纪念款可折叠外套981329140602',  					salePrice : '489.00', marketPrice : '499.00', shopping : '免运费', sales : '16',  url : 'http://image.xtep.com.cn/util/upload/product/201909241514/20199241514176845D90B13D421E6481DDEF9CEFD5C40BE6.jpg'},
					{id: '20041', textH2: '特步 专柜款 男子单风衣 成都马拉松纪念款可折叠外套981329140585',  					salePrice : '529.00', marketPrice : '529.00', shopping : '免运费', sales : '21',  url : 'http://image.xtep.com.cn/util/upload/product/201909241508/201992415845590F8E8DD7E2A860B502F8680D4852229BC.jpg'},
					{id: '20042', textH2: '特步 专柜款 女子单风衣 成都马拉松纪念款可折叠外套981328140556',  					salePrice : '599.00', marketPrice : '599.00', shopping : '免运费', sales : '15',  url : 'http://image.xtep.com.cn/util/upload/product/201909241505/201992415539731BA2E4098C301946AA4DB3A29785482FF.jpg'},
					{id: '20043', textH2: '特步 专柜款 男子单风衣 沈阳马拉松纪念款跑步外套981329140594',  					salePrice : '549.00', marketPrice : '549.00', shopping : '免运费', sales : '26',  url : 'http://image.xtep.com.cn/util/upload/product/201909241602/2019924162379652A167B99B75DF13D28F4AD010D4B9B09.jpg'},
					{id: '20044', textH2: '特步 男子篮球鞋 19新款革面潮流街头高帮运动鞋881419129682',  						salePrice : '559.00', marketPrice : '559.00', shopping : '免运费', sales : '48',  url : 'http://image.xtep.com.cn/util/upload/product/201909241123/201992411232749664910BE2A5BB872BE62550B7F71BD512.jpg'},
					{id: '20045', textH2: '特步 男子梭织套装 19新款外套收口小脚裤运动两件套881329A69389',  					salePrice : '419.00', marketPrice : '569.00', shopping : '免运费', sales : '32',  url : 'http://image.xtep.com.cn/util/upload/product/201909241002/201992410218918954E370F6D919236151FE30A297232F3.jpg'},
					{id: '20046', textH2: '特步 专柜款 男子休闲鞋 2019秋冬新款都市系列时尚休闲男鞋981419392986',  				salePrice : '429.00', marketPrice : '429.00', shopping : '免运费', sales : '3',   url : 'http://image.xtep.com.cn/util/upload/product/201909201623/201992016232730968CCF4E5ED4A5C35275B6C55400E9474.jpg'},
					{id: '20047', textH2: '特步 专柜款 女子休闲鞋 2019秋冬新款运动鞋女跑鞋旅游鞋981418320193',  				salePrice : '459.00', marketPrice : '459.00', shopping : '免运费', sales : '29',  url : 'http://image.xtep.com.cn/util/upload/product/201909201616/2019920161632668D4628A528747F2F928E543F88380EFC7.jpg'},
					{id: '20048', textH2: '特步 男子休闲鞋 2019秋冬季新款轻便减震复古运动跑步鞋881419329668',  				salePrice : '469.00', marketPrice : '499.00', shopping : '免运费', sales : '39',  url : 'http://image.xtep.com.cn/util/upload/product/201909201554/2019920155452981B906ED068B90CCF8A88A702AB3332329.jpg'},
					{id: '20049', textH2: '特步 专柜款 男子户外鞋 2019秋季新款网面透气户外运动鞋981319171619',  				salePrice : '589.00', marketPrice : '589.00', shopping : '免运费', sales : '37',  url : 'http://image.xtep.com.cn/util/upload/product/201909241652/2019924165252621034039780643DD06ABF401796C813263.jpg'},
					{id: '20050', textH2: '特步 专柜款 男子冬季时尚百搭潮流都市休闲板鞋981419316227',  						salePrice : '519.00', marketPrice : '519.00', shopping : '免运费', sales : '17',  url : 'http://image.xtep.com.cn/util/upload/product/201909191610/201991916101724693903FFE61BB62C64945C47220B58A9B.jpg'}
				]
			}
		},
		methods: {
			select(product) {
				this.currentProduct = product;
			},
			purchase(goods){
				if(goods.id === '20011'){
					this.$router.push('/details');
				}
			},
			rank_comprehensive(){
				for(let goods of this.goods_lists){
					this.goods_lists.sort(function(a,b){
						if( b.sales - a.sales || b.salePrice - a.salePrice){
							return  b.sales - a.sales;
						}
					})
				}
			},
			rank_sales(){
				for(let goods of this.goods_lists){
					this.goods_lists.sort(function(a,b){
						return  b.sales - a.sales; 
					})
				}
			},
			rank_price(){
				for(let goods of this.goods_lists){
					this.goods_lists.sort(function(a,b){
						return  b.salePrice - a.salePrice; 
					})
				}
			},
			rank_time(){
				for(let goods of this.goods_lists){
					this.goods_lists.sort(function(){
						return  Math.random() - 0.5;
					})
				}
			},
			rank_comment(){
				for(let goods of this.goods_lists){
					this.goods_lists.sort(function(){
						return  Math.random() - 0.6;
						
					})
				}
			}
		}
	}
</script>

<style scoped>
	.productList {
		width: 100%;
		height: 100%;
		font-size: 0.32rem;
		
	}

	.header {
		position: fixed;
		top: 0;
		width: 100%;
		height: 1.0rem;
		background: #f7f7f7;
		z-index: 1;
	}

	.header_nav {
		display: flex;
		position: absolute;
		left: 0.18rem;
		top: 0.16rem;
		height: 0.84rem;
		width: 7.32rem;
	}

	.select {
		width: 1.08rem;
		height: 0.68rem;
		background: #f7f7f7;
		color: #909090;
		border-radius: 0.08rem;
		font-size: 0.24rem;
		padding-left: 0.08rem;
	}

	input,
	select,
	button {
		outline: none;
	}

	.search input {
		width: 4.94rem;
		height: 0.68rem;
		padding: 0 0.21rem 0 0.75rem;
		border: none;
		font-size: 0.24rem;
		color: #909090;
		border-radius: 0.08rem;
		margin: 0 0.2rem;
	}

	.search02 button {
		width: 0.80rem;
		height: 0.68rem;
		background: #f7f7f7;
		color: #909090;
		border-radius: 0.08rem;
		font-size: 0.24rem;
		line-height: 0.68rem;
		text-align: center;
	}

	ul li {
		list-style: none;
	}

	/* 排序部分 */
	#color{
		background: #f7f7f7;
	}
	.product_lists {
		width: 100%;
		height: 0.7rem;
		background: white;
		font-size: 0.24rem;
		position: absolute;
		top: 1.0rem;
		border-bottom : 0.01rem solid #ccc;
	}

	.navList {
		display: flex;
	}

	.navList li {
		width: 1.5rem;
		height: 0.7rem;
		line-height: 0.7rem;
		color: #969696;
		text-align: center;
	}
	.navList li:hover{
		background: #E94853;
		color: #fff;
		font-size: 0.28rem;
	}
	/* .currentProduct {
		background: #E94853;
		color: #fff;
		font-size: 0.28rem;
	} */


	/* 产品信息页面 */
	.product_total {
		position: absolute;
		top: 1.7rem;
		bottom: 1.2rem;
		width: 7.5rem;
		background: red;
	}

	.product_total li {
		width: 7.3rem;
		height: 3.32rem;
		margin: 0.1rem;
		padding: 0.24rem 0;

	}

	.imgNav {
		float: left;
	}

	.imgNav img {
		width: 3.285rem;
		height: 3.285rem;
		margin: 0 0.16rem;
	}

	.imgText {
		float: right;
		width: 3.655rem;
		height: 3.32rem;
	}

	.imgText h2 {
		font-size: 0.32rem;
		margin-top: 0.08rem;
		color: #4e4735;
		font-weight: normal;
		line-height: 0.4rem;
		height: 0.80rem;
		text-decoration: none;
		overflow: hidden;
	}
	.memp{
		width: 3.655rem;
		height: 0.68rem;
		padding: 0.30rem 0 0;
		color: #fd0707;
		font-size: 0.36rem;
		font-weight: bold;
		margin-top: 0.2rem;
	}
	.memp b{
		font-size: 0.36rem;
	}
	.coupico {
		display: inline-block;
		width: 0.52rem;
		height: 0.36rem;
		margin-left: 0.24rem;
	    border: 0.01rem solid #ea0707;
	    border-radius: 0.18rem;
	    font-size: 0.24rem;
	    color: #ea0707;
		text-align: center;
		line-height: 0.36rem;
	}
	.market {
		margin-top: -0.2rem;
		text-decoration: line-through;
		color: #969696;
		font-size: 0.24rem;	
	}
	.noship {
	    margin-top: 0.4rem;
		color: #969696;
		font-size: 0.30rem;
	}
	.listship{
		float: left;
	}
	.salecount{
		float: right;
		margin-right: 0.2rem;
	}
</style>
