<template>
    <div>
        <section class="mod dingdan">
            <ul>
                <li>
                    <div class="youlibao fl">我的拼团</div>
                </li>
                <li>
                    <div class="youlibao fl">邀请有礼</div>
                </li>
                <li>
                    <div class="youlibao fl">优惠券</div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: "UserList2"
    }
</script>

<style scoped>
    section.mod {
        background: #FFF;
        height: auto;
        border-radius: 0.1rem;
        margin: 0 .1rem;
    }
    ul{
        list-style: none;
    }
    .dingdan li {
        height: 1rem;
        border-bottom: 1px solid #E7E7E7;
        padding: .08rem .3rem;
        margin-top: -1px;
        box-sizing: border-box;
        position: relative;
        font-size: 1em;
    }
    .fl{
        position: absolute;
        left: .3rem;
        line-height: .8rem;
    }
</style>