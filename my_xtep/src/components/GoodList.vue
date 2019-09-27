<template>
    <div>
        商品列表
        <ul>
            <li :key="goods.id" v-for="goods of goods_list">
                <img :src="goods.url" alt="">
                {{goods.tit}},{{goods.pro_size}},{{goods.price}}
                <button @click="addToCart(goods)">添加到购物车</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "GoodList",
        methods:{
            addToCart(goods){
                this.$store.dispatch('cart/addToCart', goods)
            }
        },
        computed:{
            goods_list(){
                return this.$store.state.goods.goods_list
            }
        }
    }
</script>

<style scoped>
    *{
        font-size: 0.32rem;
    }
</style>