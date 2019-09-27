<template>
    <div>
        <section class="mod recorda">
            <ul class="record">

                <li>
                    <div class="youshenfen fl">收货地址</div>
                </li>
                <li class="">
                    <div class="shezhi fl">修改密码</div>
                </li>
                <li>
                    <div class="shezhi fl">个人资料</div>
                </li>
                <li class="hehuorena">
                    <div class="hehuoren fl">特步合伙人</div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "UserList3"
    }
</script>

<style scoped>
    section.mod {
        background: #FFF;
        height: auto;
        border-radius: 0.1rem;
        margin: 0 .1rem;
    }
    .record{
        list-style: none;
    }
    .record li {
        height: 1rem;
        border-bottom: 1px solid #E7E7E7;
        padding: .08rem .3rem;
        margin-top: -1px;
        box-sizing: border-box;
        position: relative;
        font-size: 1em;
    }
    .fl {
        position: absolute;
        left: .3rem;
        line-height: .8rem;
     }


</style>