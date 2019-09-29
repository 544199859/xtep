<template>
  <div class="home">
	<!-- <div class="header">
		<p>
			<img src="https://m.xtep.com.cn/webcommon/images/image_w/logoN.png" alt=""><input type="search">
		</p>
	</div> -->
	<HomeHeader></HomeHeader>
	<div class="imgIndex">
		<div>
			<div class="imgSlide">
				<van-swipe :autoplay="2000" indicator-color="white">
					<van-swipe-item><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/24/huodong_640-648.jpg"/></van-swipe-item>
					<van-swipe-item><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/20/rongyanxie_640-648-.jpg"/></van-swipe-item>
					<van-swipe-item><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/02/640-648.jpg"/></van-swipe-item>
					<van-swipe-item><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/02/tebuyun.jpg"/></van-swipe-item>
				</van-swipe>
			</div>
		</div>
		<div class="firstImg">
			<a href="#">
				<img src="https://lidamao.oss-cn-hangzhou.aliyuncs.com/cyl/20190816/pintuanchoujiang.jpg" alt="">
			</a>
		</div>
		<div class="secondImg">
			<ul>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/23/guanwang_640_01.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/23/guanwang_640_02.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/23/guanwang_640_03.jpg" alt=""></li>
			</ul>
		</div>
		<div class="newProducts">
			<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_04.jpg" alt="">
		</div>
		<div class="thirdImg">
			<ul>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_05.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_06.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_07.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_08.jpg" alt=""></li>
			</ul>
		</div>
		<div class="Classification">
			<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_09.jpg" alt="">
		</div>
		<div class="fourImg">
			<ul>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_10.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_11.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_12.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_13.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_14.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_15.jpg" alt=""></li>
			</ul>
		</div>
		<div class="startSeries">
			<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_16.jpg" alt="">
		</div>
		<div class="linshuhao">
			<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_17.jpg" alt="">
		</div>
		<div class="fifthImg">
			<ul>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_18.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_19.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_20.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_21.jpg" alt=""></li>
			</ul>
		</div>
		<div class="goodsAlbum">
			<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_22.jpg" alt="">
		</div>
		<div class="sixImg">
			<ul>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_23.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_24.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_25.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_26.jpg" alt=""></li>
			</ul>
		</div>
		<div class="Member">
			<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_27.jpg" alt="">
		</div>
		<div class="MemberDay">
			<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_28.jpg" alt="">
		</div>
		<div class="sevenImg">
			<ul>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_29.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_30.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_31.jpg" alt=""></li>
				<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_32.jpg" alt=""></li>
			</ul>
		</div>
		<div>
			<div class="firstDesc">
				<ul>
					<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_33.jpg" alt=""></li>
					<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_34.jpg" alt=""></li>
					<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_35.jpg" alt=""></li>
					<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_36.jpg" alt=""></li>
				</ul>
			</div>
			<div class="secondDesc">
				<ul>
					<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_37.jpg" alt=""></li>
					<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_38.jpg" alt=""></li>
					<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_39.jpg" alt=""></li>
					<li><img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/08/22/guanwang_640_40.jpg" alt=""></li>
				</ul>
			</div>
		</div>
		
		<div class="productLists">
			<!-- 气垫系列 -->
			<div class="ProductSeries">
				<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/03/27/qidian.jpg" alt="">
			</div>
			<div class="firstProducts">
				<ul>
					<li v-for="pro_air of airProductSeries" :key="pro_air.id">
						<div class="productBox">
							<div>
								<img :src="pro_air.url" alt="">
							</div>
							<div class="pro_content01">
								<p class="pro_titleText">{{ pro_air.titleText }}</p>
								<p><span class="newPrice">¥{{ pro_air.newPrice }}</span><span class="oldPrice">¥{{ pro_air.oldPrice }}</span></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<!-- 跑步系列 -->
			<div class="ProductSeries">
				<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/03/27/paobu.jpg" alt="">
			</div>
			<div class="firstProducts">
				<ul>
					<li v-for="pro_run of runProductSeries" :key="pro_run.id">
						<div class="productBox">
							<div>
								<img :src="pro_run.url" alt="">
							</div>
							<div class="pro_content01">
								<p class="pro_titleText">{{ pro_run.titleText }}</p>
								<p><span class="newPrice">¥{{ pro_run.newPrice }}</span><span class="oldPrice">¥{{ pro_run.oldPrice }}</span></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			
			<!-- 板鞋系列 -->
			<div class="ProductSeries">
				<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/01/2301/banxie.jpg" alt="">
			</div>
			<div class="firstProducts">
				<ul>
					<li v-for="pro_sneaker of sneakerProductSeries" :key="pro_sneaker.id">
						<div class="productBox">
							<div>
								<img :src="pro_sneaker.url" alt="">
							</div>
							<div class="pro_content01">
								<p class="pro_titleText">{{ pro_sneaker.titleText }}</p>
								<p><span class="newPrice">¥{{ pro_sneaker.newPrice }}</span><span class="oldPrice">¥{{ pro_sneaker.oldPrice }}</span></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			
			<!-- 休息系列01 -->
			<div class="ProductSeries">
				<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/03/27/xiuxianxie.jpg" alt="">
			</div>
			<div class="firstProducts">
				<ul>
					<li v-for="pro_leisure of leisure01ProductSeries" :key="pro_leisure.id">
						<div class="productBox">
							<div>
								<img :src="pro_leisure.url" alt="">
							</div>
							<div class="pro_content01">
								<p class="pro_titleText">{{ pro_leisure.titleText }}</p>
								<p><span class="newPrice">¥{{ pro_leisure.newPrice }}</span><span class="oldPrice">¥{{ pro_leisure.oldPrice }}</span></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			
			
			
			<!-- 休息系列02 -->
			<div class="ProductSeries">
				<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/09/16/xiuxian.jpg" alt="">
			</div>
			<div class="firstProducts">
				<ul>
					<li v-for="pro_leisure02 of leisure02ProductSeries" :key="pro_leisure02.id">
						<div class="productBox">
							<div>
								<img :src="pro_leisure02.url" alt="">
							</div>
							<div class="pro_content01">
								<p class="pro_titleText">{{ pro_leisure02.titleText }}</p>
								<p><span class="newPrice">¥{{ pro_leisure02.newPrice }}</span><span class="oldPrice">¥{{ pro_leisure02.oldPrice }}</span></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			
			<!-- 裤装系列 -->
			<div class="ProductSeries">
				<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/03/27/kuzhuang.jpg" alt="">
			</div>
			<div class="firstProducts">
				<ul>
					<li v-for="pro_trousers of trousersProductSeries" :key="pro_trousers.id">
						<div class="productBox">
							<div>
								<img :src="pro_trousers.url" alt="">
							</div>
							<div class="pro_content01">
								<p class="pro_titleText">{{ pro_trousers.titleText }}</p>
								<p><span class="newPrice">¥{{ pro_trousers.newPrice }}</span><span class="oldPrice">¥{{ pro_trousers.oldPrice }}</span></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			
			<!-- 儿童系列 -->
			<div class="ProductSeries">
				<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/03/27/ertong.jpg" alt="">
			</div>
			<div class="firstProducts">
				<ul>
					<li v-for="pro_children of childrenProductSeries" :key="pro_children.id">
						<div class="productBox">
							<div>
								<img :src="pro_children.url" alt="">
							</div>
							<div class="pro_content01">
								<p class="pro_titleText">{{ pro_children.titleText }}</p>
								<p><span class="newPrice">¥{{ pro_children.newPrice }}</span><span class="oldPrice">¥{{ pro_children.oldPrice }}</span></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			
			<!-- 配件系列 -->
			<div class="ProductSeries">
				<img src="http://xtep.oss-cn-hangzhou.aliyuncs.com/2019/03/27/peijian.jpg" alt="">
			</div>
			<div class="firstProducts">
				<ul>
					<li v-for="pro_accessories of accessoriesProductSeries" :key="pro_accessories.id">
						<div class="productBox">
							<div>
								<img :src="pro_accessories.url" alt="">
							</div>
							<div class="pro_content01">
								<p class="pro_titleText">{{ pro_accessories.titleText }}</p>
								<p><span class="newPrice">¥{{ pro_accessories.newPrice }}</span><span class="oldPrice">¥{{ pro_accessories.oldPrice }}</span></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			
		</div>
		<div class="noContent">
			
		</div>
	</div>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';	

// @ is an alias to /src
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

export default {
	name: 'home',
	data() {
		const airProductSeries = [
				{id: 'SY1001', newPrice: '339.00', oldPrice : '379.00', titleText : '特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020', 		url : 'http://image.xtep.com.cn/util/upload/product/201909111020/2019911102037824F758854238DB6B165062CAC3B8E0882B.jpg'},
				{id: 'SY1002', newPrice: '359.00', oldPrice : '399.00', titleText : '特步 专柜款 男子跑鞋2019秋季新款半掌气垫运动鞋男休闲网鞋981319110295', 			url : 'http://image.xtep.com.cn/util/upload/product/201907031017/20197310178949B01367579018FDBD1F52169AFA93F932.jpg'},
				{id: 'SY1003', newPrice: '319.00', oldPrice : '339.00', titleText : '特步 专柜款 女子休闲鞋 2019秋季新款透气轻便气垫鞋休闲鞋981318320011', 			url : 'http://image.xtep.com.cn/util/upload/product/201907081642/20197816424891875F49AB173359CAC9E37FA190D36A7DD.jpg'},
				{id: 'SY1004', newPrice: '339.00', oldPrice : '359.00', titleText : '特步 女子跑步鞋 2019秋季新款半掌气垫运动鞋女透气鞋981318110295', 				url : 'http://image.xtep.com.cn/util/upload/product/201909191602/201991916252184946606E1695D3E55C298F5111DD41833.jpg'},
				{id: 'SY1005', newPrice: '239.00', oldPrice : '399.00', titleText : '特步 男子休闲鞋 19新款潮流拼接气垫老爹鞋881319329293', 							url : 'http://image.xtep.com.cn/util/upload/product/201907081715/201978171545902DA954D1709601536359E63213197DEB5.jpg'},
				{id: 'SY1006', newPrice: '239.00', oldPrice : '369.00', titleText : '特步 女子休闲鞋 19新款时尚气垫都市潮流老爹鞋881318329293', 						url : 'http://image.xtep.com.cn/util/upload/product/201907081637/2019781637148096E3FBDA84384781EEA3A9B6A0758BF33.jpg'}
			];
		const runProductSeries = [
				{id: 'SY2001', newPrice: '469.00', oldPrice : '469.00', titleText : '【风火鞋22代】谢霆锋同款 特步 专柜款 男子跑鞋2019秋季新品运动跑鞋男981419110528', 	url : 'http://image.xtep.com.cn/util/upload/product/201909021652/201992165229496D284FEBE3A93EAD317EDD6B873F244C2.jpg_800x800q90.jpg'},
				{id: 'SY2002', newPrice: '439.00', oldPrice : '439.00', titleText : '【风火鞋22代】特步 专柜款 女子跑鞋 19新款谢霆锋同款耐磨运动鞋981418110528', 		url : 'http://image.xtep.com.cn/util/upload/product/201908291443/2019829144320387DE9451AB2ACD3E08D952855706C2C0A9.jpg'},
				{id: 'SY2003', newPrice: '439.00', oldPrice : '439.00', titleText : '【氢风·特步云】特步 专柜款 男子跑鞋 19新款透气一体织袜套运动鞋981319110772', 		url : 'http://image.xtep.com.cn/util/upload/product/201908191724/201981917245659D0BF9054BBE92D26B27950789D77CE4A.jpg'},
				{id: 'SY2004', newPrice: '399.00', oldPrice : '399.00', titleText : '【氢风·特步云】特步 专柜款 女子跑鞋 19新款一体织袜套透气运动鞋981318110772', 		url : 'http://image.xtep.com.cn/util/upload/product/201908191721/2019819172159684794FBA5FF51C29CBC03B773F17329F90.jpg'},
				{id: 'SY2005', newPrice: '599.00', oldPrice : '599.00', titleText : '特步 专柜款 男子冬季新款马拉松跑鞋南京成都郑州沈阳长沙纪念跑鞋981419110630', 		url : 'http://image.xtep.com.cn/util/upload/product/201909101016/201991010162857459B134890570B9FBF7E5BFAF94B6C323.jpg'},
				{id: 'SY2006', newPrice: '359.00', oldPrice : '359.00', titleText : '特步 专柜款 男子冬季舒适大底防滑耐磨跑步运动鞋981419110619', 					url : 'http://image.xtep.com.cn/util/upload/product/201909101455/20199101455534027CA537215D15FC46BF902337AEAAA961.jpg'}
			]; 
		const sneakerProductSeries = [
				{id: 'SY3001', newPrice: '319.00', oldPrice : '319.00', titleText : '特步 专柜款 男子冬季时尚百搭潮流都市休闲板鞋981419316227', 						url : 'http://image.xtep.com.cn/util/upload/product/201909191610/201991916101724693903FFE61BB62C64945C47220B58A9B.jpg'},
				{id: 'SY3002', newPrice: '319.00', oldPrice : '319.00', titleText : '特步 专柜款 男子冬季都市革面舒适百搭休闲鞋板鞋981419316226', 					url : 'http://image.xtep.com.cn/util/upload/product/201908221727/20198221727215744EA8B84E046D7CE9973652EF4FD9303E.jpg'},
				{id: 'SY3003', newPrice: '279.00', oldPrice : '299.00', titleText : '特步 专柜款 女子板鞋 19新款时尚条纹滑板鞋981318316355', 						url : 'http://image.xtep.com.cn/util/upload/product/201909101522/20199101522586051BEB5FB786FD4126107C678A6AF8E506.jpg'},
				{id: 'SY3004', newPrice: '239.00', oldPrice : '269.00', titleText : '特步 专柜款 女子板鞋 2019年秋季新款休闲时尚板鞋981318316190', 					url : 'http://image.xtep.com.cn/util/upload/product/201909191617/201991916175291873CA3FD133FF2EB0B280E994E225EA89.jpg'},
				{id: 'SY3005', newPrice: '239.00', oldPrice : '269.00', titleText : '特步 专柜款 女子板鞋2019秋季新款低帮平底休闲鞋板鞋小白鞋981318316189', 			url : 'http://image.xtep.com.cn/util/upload/product/201906271353/2019627135345387B05591920B10A394AA99C8FE5986D290.jpg'},
				{id: 'SY3006', newPrice: '209.00', oldPrice : '339.00', titleText : '特步 男子板鞋 2019秋季新款高帮百搭休闲时尚板鞋881319319123', 					url : 'http://image.xtep.com.cn/util/upload/product/201907301444/2019730144422278239A15FEDEAEAE77CEB15A5692E322D.jpg'}
			];		
		const leisure01ProductSeries = [
				{id: 'SY4001', newPrice: '339.00', oldPrice : '379.00', titleText : '特步 专柜款 男子休闲鞋2019秋季新款休闲鞋网布透气跑步鞋男981319393060',  			url : 'http://image.xtep.com.cn/util/upload/product/201909041135/20199411351912186C3A92947BEA8A09D6B1E63FE43A49A.jpg'},
				{id: 'SY4002', newPrice: '539.00', oldPrice : '569.00', titleText : '【DC蝙蝠侠联名】特步 男子休闲鞋 老爹鞋2019秋季新款蝙蝠侠联名袜套跑鞋881419329603', 	url : 'http://image.xtep.com.cn/util/upload/product/201909031639/201993163916105D6C26B1ADFDD15399920DE6F9C65D1AF.jpg'},
				{id: 'SY4003', newPrice: '299.00', oldPrice : '299.00', titleText : '特步 专柜款 女子冬季休闲鞋 都市时尚百搭潮流拼接革面老爹鞋981418320081', 			url : 'http://image.xtep.com.cn/util/upload/product/201909041012/20199410125674613B18EB3D2E33D824909D409BAFF234C.jpg'},
				{id: 'SY4004', newPrice: '379.00', oldPrice : '379.00', titleText : '【黑曜系列-赤岩】特步 专柜款 男子休闲鞋 19新款机能风叠层老爹鞋981419392991', 		url : 'http://image.xtep.com.cn/util/upload/product/201909061638/2019961638498094430477AD0EFDAC1AE3947EE40CE6D75.jpg'},
				{id: 'SY4005', newPrice: '319.00', oldPrice : '319.00', titleText : '特步 专柜款 男子冬季老爹鞋潮流时尚百搭休闲鞋981419320081', 						url : 'http://image.xtep.com.cn/util/upload/product/201909101601/201991016120418D8185D68BEF97B3D8C554A3502786EA8.jpg'},
				{id: 'SY4006', newPrice: '279.00', oldPrice : '279.00', titleText : '特步 专柜款 女子休闲鞋 2019秋季新款网面透气休闲鞋跑步鞋运动鞋女981318320001', 		url : 'http://image.xtep.com.cn/util/upload/product/201909101658/2019910165810777F1F27EAC2492B389443085856778DAA2.jpg'}
			]; 
		const leisure02ProductSeries = [
				{id: 'SY5001', newPrice: '339.00', oldPrice : '369.00', titleText : '特步 专柜款 男子秋季综训运动针织连帽拉链上衣981329940002',  						url : 'http://image.xtep.com.cn/util/upload/product/201909031630/2019931630274343E247154F176BA32311A7135B6BBAEE7.jpg'},
				{id: 'SY5002', newPrice: '199.00', oldPrice : '219.00', titleText : '【明日之子同款】特步 专柜款 男子活力时尚卫衣 撞色拼接潮流圆领卫衣981329920065', 	url : 'http://image.xtep.com.cn/util/upload/product/201908071414/2019871414518554F43593C8A7EE10A74B9B4F1C91D5B67.jpg'},
				{id: 'SY5003', newPrice: '199.00', oldPrice : '219.00', titleText : '特步 专柜款 女子都市活力时尚百搭新款套头卫衣981328920160', 						url : 'http://image.xtep.com.cn/util/upload/product/201908291041/201982910414215D1276F3BD56E0A3017337EBDEE722509.jpg'},
				{id: 'SY5004', newPrice: '179.00', oldPrice : '279.00', titleText : '特步 男子卫衣 19冬季新款半高领休闲简约套头衫881429059071', 						url : 'http://image.xtep.com.cn/util/upload/product/201908231511/2019823151154434EB7C0286444DCEB1FAD1601CBC5578C7.jpg'},
				{id: 'SY5005', newPrice: '159.00', oldPrice : '219.00', titleText : '特步 女子卫衣 19新款时尚百搭卡通刺绣套头衫881428059238', 						url : 'http://image.xtep.com.cn/util/upload/product/201908231508/201982315833559D13EA893B008037FC3672340C8FB341B.jpg'},
				{id: 'SY5006', newPrice: '149.00', oldPrice : '219.00', titleText : '特步 女子卫衣 19新款半高领保暖简约字母套头衫881428059166', 						url : 'http://image.xtep.com.cn/util/upload/product/201908161406/2019816146312772CEC4321EDF262344ED6B9AF1B662512.jpg'}
			]; 
		const trousersProductSeries = [
				{id: 'SY6001', newPrice: '219.00', oldPrice : '239.00', titleText : '【明日之子同款】特步 专柜款 男子针织九分裤 都市时尚百搭针织裤981329840103',  				url : 'http://image.xtep.com.cn/util/upload/product/201908081038/201988103822793BF1E55DD16665E3C9CF2525386B20409.jpg'},
				{id: 'SY6002', newPrice: '219.00', oldPrice : '239.00', titleText : '【明日之子同款】特步 专柜款 男子拼接撞色九分裤 都市潮流时尚百搭针织九分裤981329840094', 		url : 'http://image.xtep.com.cn/util/upload/product/201906261647/2019626164723741D5C4BD162C72FCF8E66D071F8383A2E.jpg'},
				{id: 'SY6003', newPrice: '219.00', oldPrice : '239.00', titleText : '特步 专柜款 男子运动长裤2019秋季新款时尚舒适收腿针织休闲裤981329630250', 					url : 'http://image.xtep.com.cn/util/upload/product/201908071407/201987147528718C7CB252B69805F5E41506706D0E214E.jpg'},
				{id: 'SY6004', newPrice: '179.00', oldPrice : '199.00', titleText : '【明日之子同款】特步 专柜款 男子活力针织中裤 都市休闲百搭短裤981329610119', 				url : 'http://image.xtep.com.cn/util/upload/product/201906261643/20196261643569343C3DAEA8E6182657B0B0D335CCE0DAB8.jpg'},
				{id: 'SY6005', newPrice: '159.00', oldPrice : '239.00', titleText : '特步 男子长裤 2019夏季新款梭织九分裤潮流撞色男裤透881329A39243', 						url : 'http://image.xtep.com.cn/util/upload/product/201906260947/201962694759590826F2ECAA454F59C2CCC3A964E3C3966.jpg'},
				{id: 'SY6006', newPrice: '139.00', oldPrice : '219.00', titleText : '特步 男子秋季运动长裤 拼接撞色潮流时尚针织长裤881329639273', 							url : 'http://image.xtep.com.cn/util/upload/product/201907041610/201974161056590983D393EC0E4FF60C01A3C68F5391841.jpg'}
			]; 
		const childrenProductSeries = [
				{id: 'SY7001', newPrice: '109.00', oldPrice : '179.00', titleText : '特步 男童针织套装 19夏新款儿童中小童短T短裤两件套681225349146',  			url : 'http://image.xtep.com.cn/util/upload/product/201904231516/2019423151624128F7F3D741BD6CC7EAD406287625C9DB00.jpg'},
				{id: 'SY7002', newPrice: '69.00',  oldPrice : '99.00',  titleText : '特步 男童短袖针织衫 19夏新款儿童中小童圆领休闲T恤681225019141', 				url : 'http://image.xtep.com.cn/util/upload/product/201904231459/20194231459463784C8C60AF7C67E2D77333F31C2EE44ABC.jpg'},
				{id: 'SY7003', newPrice: '129.00', oldPrice : '199.00', titleText : '特步 女童针织套装 19夏新款儿童中大童短袖短裤运动两件套681224349114', 			url : 'http://image.xtep.com.cn/util/upload/product/201904231612/2019423161231128DDF7D161230F3C9167FE100C66C28BC7.jpg'},
				{id: 'SY7004', newPrice: '69.00',  oldPrice : '99.00',  titleText : '特步 女童短袖针织衫 19夏新款儿童中小童时尚T恤681224019121', 					url : 'http://image.xtep.com.cn/util/upload/product/201904291714/20194291714341590F0514F9C88721DDF828182394E74D3E.jpg'},
				{id: 'SY7005', newPrice: '169.00', oldPrice : '259.00', titleText : '特步 男童潮流老爹鞋 春季新款舒适大底都市时尚儿童休闲鞋681215329268', 			url : 'http://image.xtep.com.cn/util/upload/product/201902181447/20192181447266832DD2EF29855D7935F07545DB2E08D9F0.jpg'},
				{id: 'SY7006', newPrice: '219.00', oldPrice : '269.00', titleText : '特步 专柜款 男童都市新品减震耐磨时尚百搭儿童休闲鞋681115323117', 				url : 'http://image.xtep.com.cn/util/upload/product/201901281718/201912817181485573C3F10FFF8787866CD97A1C5CF0010B.jpg'}
			]; 
		const accessoriesProductSeries = [
				{id: 'SY8001', newPrice: '99.00', oldPrice : '99.00',  titleText : '特步 专柜款 运动跑步男女通用腰包武汉马拉松腰包981337140441',  				url : 'http://image.xtep.com.cn/util/upload/product/201904021409/20194214919386E38FF6DFE7EB971BDED62BD811A4BF37.jpg'},
				{id: 'SY8002', newPrice: '99.00', oldPrice : '179.00', titleText : '【Smiley】特步 女子双肩包 19夏新款轻便时尚运动潮流包881238119030', 			url : 'http://image.xtep.com.cn/util/upload/product/201904121337/2019412133751628BF5A438D473F40354BB0C4B6E2F310D9.jpg'},
				{id: 'SY8003', newPrice: '79.00', oldPrice : '119.00', titleText : '【怪诞星球】特步 男女同款渔夫帽 19夏新款潮流时尚百搭帽881237239051', 			url : 'http://image.xtep.com.cn/util/upload/product/201904151516/20194151516142067664A216347507C16129B0C428E18ABF.jpg'},
				{id: 'SY8004', newPrice: '49.00', oldPrice : '69.00',  titleText : '特步 男平板中袜三双装 2019春季新款运动休闲舒适袜881139559073', 				url : 'http://image.xtep.com.cn/util/upload/product/201901271344/2019127134459659EDD39D063F3437541F97DBEA83D1746.jpg'},
				{id: 'SY8005', newPrice: '59.00', oldPrice : '99.00',  titleText : '特步 男短袜混色五双装 2019春季新款舒适保暖简约休闲男袜881139549020', 			url : 'http://image.xtep.com.cn/util/upload/product/201901271102/20191271123644939507C25CA179B500A8EEF5D7C9C0E5B.jpg'},
				{id: 'SY8006', newPrice: '39.00', oldPrice : '69.00',  titleText : '特步 男女运动帽 2019春季新款情侣时尚简约可调节运动棒球帽881137219054', 		url : 'http://image.xtep.com.cn/util/upload/product/201901261114/20191261114253719791F2322834AB91E4E315D1989F6D6E.jpg'}
			]; 
		return {
			airProductSeries,
			runProductSeries,
			sneakerProductSeries,
			leisure01ProductSeries,
			leisure02ProductSeries,
			trousersProductSeries,
			childrenProductSeries,
			accessoriesProductSeries
			
		}
	},
	components:{
		HomeHeader
	}
}
</script>

<style scoped>
	/* <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"> */
	.home{
		width: 100%;
		height: 100%;
		font-size: 0.32rem;
	}
	/* .header{
		position: fixed;
		top: 0;
		width: 6.9rem;
		height: 0.6rem;
		background: #e60012;
		padding: 0.2rem 0.3rem;
		z-index: 1;
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
	} */
	.imgSlide{
		width: 7.5rem;
		height: 7.5rem;
	}
	.imgSlide img{
		width: 7.5rem;
		height: 7.5rem;
	}
	
	.imgIndex{
		position: absolute;
		top: 1.0rem;
	}
	.firstImg img{
		width: 7.5rem;
		height: 3.44rem;
	}
	.secondImg{
		width: 7.5rem;
		height: 3.3rem;
	}
	.secondImg ul{
		width: 7.5rem;
		height: 3.3rem;
		display: flex;
	}
	.secondImg ul li img{
		height: 3.3rem;
		width: 2.5rem;
	}
	.newProducts img{
		width: 7.5rem;
		height: 1.7rem;
	}
	.thirdImg ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.thirdImg ul li img{
		width: 3.7rem;
		height: 6.6rem;
	}
	.Classification img{
		width: 7.5rem;
		height: 1.54rem;
	}
	.fourImg ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.fourImg ul li img{
		width: 3.75rem;
		height: 3.75rem;
	}
	.startSeries img{
		width: 7.5rem;
		height: 1.7rem;
	}
	.linshuhao img{
		width: 7.5rem;
		height: 9.10rem;
	}
	.fifthImg ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.fifthImg ul li img{
		width: 3.75rem;
		height: 4.90rem;
	}
	.goodsAlbum img{
		width: 7.5rem;
		height: 1.32rem;
	}
	.sixImg ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.sixImg ul li img{
		width: 3.75rem;
		height: 4.90rem;
	}
	.Member img{
		width: 7.5rem;
		height: 1.46rem;
	}
	.MemberDay img{
		width: 7.5rem;
		height: 2.60rem;
	}
	.sevenImg ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.sevenImg ul li img{
		width: 1.875rem;
		height: 1.75rem;
	}
	.firstDesc ul{
		display: flex;
	}
	.firstDesc ul li:nth-of-type(1) img{
		width: 2.1rem;
	}
	.firstDesc ul li:nth-of-type(2) img{
		width: 2.02rem;
	}
	.firstDesc ul li:nth-of-type(3) img{
		width: 1.46rem;
	}
	.firstDesc ul li:nth-of-type(4) img{
		width: 1.92rem;
	}
	.secondDesc ul{
		display: flex;
	}
	.secondDesc ul li:nth-of-type(1) img{
		width: 1.52rem;
	}
	.secondDesc ul li:nth-of-type(2) img{
		width: 2.18rem;
	}
	.secondDesc ul li:nth-of-type(3) img{
		width: 1.88rem;
	}
	.secondDesc ul li:nth-of-type(4) img{
		width: 1.92rem;
	}
	
	.airSeries img{
		width: 7.5rem;
		height: 3.1rem;
	}
	
	.productLists{
		width: 7.5rem;
		background: #ccc;
	}
	.firstProducts{
		width: 7.5rem;
		margin-bottom: 0.3rem;
	}
	.firstProducts ul{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.productBox{
		width: 3.60rem;
		height: 5.32rem;
		margin: 0.07rem 0 0.3rem 0.15rem;
	}
	
	.productBox img{
		width: 3.60rem;
		height: 3.50rem;
		float: left;
	}
	.productBox  .pro_content01{
		float: left;
		width: 3.2rem;
		height: 1.62rem;
		background: #fff;
		padding: 0.2rem 0.2rem 0;
	}
	.pro_titleText{
		width: 3.2rem;
		height: 0.8rem;
		line-height: 0.4rem;
		text-decoration: none;
		overflow: hidden;
		font-size: 0.32rem;
		color: #333;
	}
	.pro_content01 p:nth-of-type(2){
		width: 3.1rem;
		height: 0.82rem;
		line-height: 0.82rem;
	}
	.pro_content01 p:nth-of-type(2) .newPrice{
		display: inline-block;
		float: left;
		color: #FF0000;
		font-size: 0.32rem;
	}
	.pro_content01 p:nth-of-type(2) .oldPrice{
		display: inline-block;
		float: right;
		color: #555;
		font-size: 0.32rem;
		text-decoration : line-through;
	}
	.ProductSeries img{
		width: 7.5rem;
		height: 3.05rem;
		margin-bottom: 0.3rem;
	}
	.noContent{
		width: 7.5rem;
		height: 1.8rem;
		background: #FFFFFF;
	}
</style>