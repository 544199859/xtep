<template>
    <div class="cart">
        <div class="head">
            <router-link to="home">
                <i class="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                </router-link>
            <h2>购物车</h2>
            <router-link to="home">
                <i class="fa fa-home fa-2x" aria-hidden="true"></i>
            </router-link>
        </div>

        <div class="wrapshopcart">
            <ul class="shopcartlist" v-if="cartItems && cartItems.length > 0">
                <li :key="item.id" v-for="item of cartItems">
                    <input type="checkbox" checked="checked">
                    <img :src="item.url" alt="">
                    <div class="miaoshu">
                        <div class="tit">{{ item.tit }}</div>,
                        {{ item.pro_size}}
                        <b style="color: red">￥{{ item.price }}</b>
                    </div>

                    <div class="pro-number">
                        <button @click="decCount(item)">-</button>
                        {{ item.count}}
                        <button @click="updateCount(item, +1)">+</button>
                    </div>
                    <div class="del">
                        <button @click="del(item.id)">删除</button>
                    </div>
                </li>
            </ul>

            <div v-else>
            <img src="https://m.xtep.com.cn/webcommon/images/image_w/shopCart_null.png" alt="">
            <p>购物车快饿瘪了T·T</p>
            </div>

        </div>

        <div class="buynav">
            <div class="check_box_all">
                <input type="checkbox" id="checkAll">
                <span>全选</span>
            </div>
            <div class="summation">合计:{{ total_price }}</div>
            <button>结算</button>
        </div>
    </div>
</template>

<script>
    // import cartItems from "../cartItems";


    export default {
        name: "ShopCart",
        // data(){
        //     return {
        //         cartItems:cartItems
        //     }
        // },

        methods:{

            decCount(item){
                if (item.count > 1){
                    item.count--
                }
            },

            del(pid){
                this.$store.dispatch('cart/delItems',pid)
            },
            updateCount(carItem, num) {
                this.$store.dispatch('cart/updateCount', {
                    carItem,
                    num
                })
            }
        },

        computed: {
            total_price() {
                return this.$store.getters['cart/total_price']
            },

            cartItems(){
                return this.$store.state.cart.cartItems
            }
        },
        
    }
</script>

<style scoped>
 /*1. 引入 font awesome 字体库*/
    @import "../assets/font-awesome/css/font-awesome.min.css";

    .cart{
        /*position: relative;*/
        font-size: 0.25rem;
        width: 100%;
        height: 100%;
        color: black;
    }
    .head{
        /*position: fixed;*/
        /*top: 0;*/
        height: .88rem;
        width: 100%;
        /*background: lightgray;*/
        /*box-shadow: -0.01rem -0.01rem 0.05rem lightgray;*/
        border-bottom: 0.02rem solid grey;
    }

    .head h2{
        display: inline-block;
        width: 80%;
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        /*background: grey;*/
    }
    .wrapshopcart{
        position: relative;
        width: 100%;
        height: 5.86rem;
        /*background: red;*/
        margin-bottom: 2.08rem;
    }
    .shopcartlist li {
        padding: 0.16rem 0 0.16rem 0.44rem;
        width: 7.06rem;
        height: 1.91rem;
    }
    .shopcartlist li .miaoshu{
        float: left;
        width: 2.54rem;
        height: 1.4rem;
    }
    .shopcartlist li input{
        position: absolute;
        top: .7rem;
        left: 0;
        width: .32rem;
        height: .32rem;
        /*float: left;*/
    }
    .shopcartlist li img{
        float: left;
        margin: 0px 0.16rem 0 0.2rem;
        width: 1.24rem;
        height: 1.24rem;
        border: 0.02rem #F1F1F1 solid;
        padding: 0.06rem;
    }
    .shopcartlist .tit{
        float: left;
        overflow: hidden;
        width: 2.54rem;
        height: .7rem;
    }
    .shopcartlist .del{
        position: absolute;
        right: 0;
        bottom: 0.5rem;
        width: 1.6rem;
        height: .4rem;
    }
    .shopcartlist .del button{
        width: 1.6rem;
        height: .5rem;
        font-size: .32rem;
        line-height: .3rem;
        background: #666666;
        border-radius: 2px;
        padding: 4px;
        color: #fff;
    }
    .pro-number{
        float: right;
        width: 1.8rem;
        height: 1.9rem;
        margin-right: 5px;
    }
    .pro-number button{
        font-size: .32rem;
        color: #727272;
        border: .02rem solid #ccc;
        width: .32rem;
        display: inline-block;
        text-align: center;
        height: .32rem;
        line-height: .32rem;
    }
    .wrapshopcart p{
        position: absolute;
        top: 3.84rem;
        left: 2.1rem;
        color: #646464;
        font-size: 0.4rem;
        padding: 0.4rem 0 0.2rem;
    }
    .wrapshopcart ul li img{
        float: left;
        margin: 0 0.16rem 0 0.2rem;
        width: 1.24rem;
        height: 1.24rem;
        border: 0.02rem #F1F1F1 solid;
        padding: 0.06rem;
    }
    .buynav{
        background: #333;
        height: 1rem;
        width: 100%;
        color: #eee;
        line-height: 1rem;
        text-align: left;
        border-bottom: 1px solid #E3E3E3;
        font-size: 0.32rem;
        position: fixed;
        bottom: 0;
        z-index: 999;
    }
    .buynav .check_box_all {
        float: left;
        left: 0.2rem;
        width: 1.7rem;
        height: 1rem;
    }
    .buynav .check_box_all input {
        left: 0;
        top: 0;
        width: .32rem;
        height: .32rem;
        z-index: 2;
    }
    .check_box_all span {
        font-size: .32rem;
        /*float: left;*/
        line-height: .32rem;
        margin-left: .1rem;
    }
    .buynav button{
        float: right;
        border: 0;
        font-size: .32rem;
        background-color: #b61d1d;
        color: #fff;
        width: 2.4rem;
        border-radius: .02rem;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
    }
    .summation{
        display:inline-block;
        width: 2rem;
        height: 1rem;
    }
</style>