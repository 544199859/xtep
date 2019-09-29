 <template>
    <div class="userlist">
        <section class="mod">
            <div class="userMes">
                <div style="float: left;" class="suiyi">
                    <div class="headface">
                        <img src="https://m.xtep.com.cn/util/images/my/userlogo.jpg" alt="">
                    </div>
                    <div class="nameTel">
                        梁小龙
                    </div>
                    <div class="nameTel">
                        积分：688
                    </div>
                </div>
                <div class="qiandao" style="float: right">
                    <a href="https://m.xtep.com.cn/my/signin.aspx">每日签到</a>
                </div>
            </div>
        </section>

        <UserList1></UserList1>
        <UserList2></UserList2>
        <UserList3></UserList3>
    </div>
</template>

<script>
    import UserList1 from "../components/UserList1";
    import UserList2 from "../components/UserList2";
    import UserList3 from "../components/UserList3";


    export default {
        name: "UserList",
        components:{
            UserList1,
            UserList2,
            UserList3
        }
    }
</script>

<style scoped>
    .userlist{
        background: #F2F2F2;
        margin-bottom: 0px;
        width: 100%;
        height: 100%;
        font-size: 0.32rem;
    }
    section.mod {
        background: #FFF;
        width: 100%;
        height: 2.82rem;
        border-radius: 5px;
    }
    section.mod .userMes {
        width: 7.1rem;
        height: 1.2rem;
        padding: 0.8rem 0 0.8rem 0.4rem;
        background: url(https://lidamao.oss-cn-hangzhou.aliyuncs.com/xtep/guanwang/20190417/beijing.jpg) no-repeat;
        border-bottom: none;
        -webkit-background-size: cover;
        position: relative;
    }
    .suiyi{
        width: 3.32rem;
        height: 1.2rem;
    }
    .headface {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        overflow: hidden;
        float: left;
    }
    img {
        display: block;
        max-width: 100%;
        height: 1.2rem;
        width: 1.2rem;
        -ms-interpolation-mode: bicubic;
    }
    .nameTel{
        font-size: 0.32rem;
        font-weight: normal;
        color: #fff;
        text-align: left;
        padding-left: 1.8rem;
        /*line-height: 0.6rem;*/
    }
    .qiandao{
        width: 1.86rem;
        height: 0.9rem;
    }
    .qiandao a{
        display: block;
        margin: .3rem auto;
        font-size: .32rem;
        height: 0.6rem;
        line-height: 0.6rem;
        color: #fdfbfb;
        border-radius: 1rem 0rem 0rem 1rem;
        text-align: right;
        width: 1.71rem;
        background-size: 1.5rem;
        background-color: #ef1f1f;
        padding: 0 .5rem 0 0;
        box-shadow: 0.9rem 0.2rem 0.5rem #a01212;
        font-weight: bold;
        text-decoration: none;
    }


</style>