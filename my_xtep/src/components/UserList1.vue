<template>
    <div>
        <section class="myorder_all">
            <div class="myorder">
                <span class="myorder1">我的订单</span>
                <span class="myorder2"><a href="">查看全部订单</a></span>
            </div>
            <div class="payMethod">
                <ul>
                    <li><a href="">

                        待付款
                    </a></li>
                    <li><a href="">

                        待发货
                    </a></li>
                    <li><a href="">

                        待收货
                    </a></li>
                    <li><a href="">

                        已完成
                    </a></li>
                    <li><a href="">
                        退款/售后
                    </a></li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "Userlist1"
    }
</script>

<style scoped>
    .myorder_all {
        background: #FFF;
        border-radius: 0.1rem;
        margin: 0.2rem 0.1rem;
        height: 2.04rem;
    }
    .myorder {
        background: #FFF;
        border-bottom: #f1f1f1 0.02rem solid;
        height: 0.7rem;
        line-height: 0.7rem;
        font-size: 1em;
        color: #101010;
        margin: 0 0.3rem;
    }
    .myorder1 {
        float: left;
    }
    .myorder2 {
        float: right;
    }
    .myorder2 a{
        text-decoration: none;
        color: #969696;
        font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;
    }
    .payMethod {
        height: 1.34rem;
        background: #FFF;
        width: 100%;
        left: 0;
        bottom: auto;
        border-radius: 0.1rem;
    }
    .payMethod ul {
        overflow: hidden;
        text-align: center;
    }
    .payMethod li {
        float: left;
        padding-top: .72rem;
        position: relative;
        width: 20%;
        box-sizing: border-box;
        list-style: none;
    }
    .payMethod li a {
        color: #2b2b2b;
        font-size: .8em;
        text-decoration: none;
    }
</style>