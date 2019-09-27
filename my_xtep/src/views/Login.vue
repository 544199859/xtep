<template>
    <div class="login">

        <form action="" id="formlogin">
            <div class="loginImg">
                <img src="https://m.xtep.com.cn/webcommon/images/image_w/login_logo.gif" alt="">
            </div>
            <!-- <p v-show="showTishi">{{tishi}}</p> -->
            <input v-model="phone" class="login_textbox" type="text" placeholder="请输入您的手机号码">
            <input v-model="password" class="login_textbox" type="password" placeholder="请输入您的密码">
            <input @click="login()" class="login_btn" value="确定登录" type="button"/>

            <div class="n_links_area">
                <router-link to="register">注册新用户</router-link>
                <!--<button @click="toLogin">注册新用户</button>-->
                <span> | </span>
                <router-link to="">忘记密码</router-link>
            </div>
        </form>

    </div>

</template>

<script>
    import {setCookie,getCookie} from '../assets/Cookie'
    import axios from "axios";

    export default {
        name: "login",
        data(){
            return{
                // showTishi:false,
                phone:'',
                password:''
            }
        },

        methods:{

            login() {
                // 完成登录操作
                if( this.phone == '' || this.password == ''){
                alert('用户名或密码不能为空！');
                return false;
                }

                setTimeout(()=>{
                alert('请求登录的接口进行登录，登录成功，返回token？（1. cookie 2. jwt json web token）');
                // 跳转到首页
                this.$router.push('/shopcart');

                }, 1000);

            }
            // login() {
            //     if(this.phone == "" || this.password == ""){
            //        alert("请输入用户名或密码")
            //     }else{
            //         let data = {'phone':this.phone,'password':this.password}
            //         /*接口请求*/
            //         this.axios.post('/product/user',data).then((res)=>{
            //             console.log(res)
            //             /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
            //             if(res.data == -1){
            //                 this.tishi = "该用户不存在"
            //                 this.showTishi = true
            //             }else if(res.data == 0){
            //                 this.tishi = "密码输入错误"
            //                 this.showTishi = true
            //             }
            //             // else if(res.data == 'admin'){
            //             // /*路由跳转this.$router.push*/
            //             //     this.$router.push('/userlist')
            //             // }
            //             else{
            //                 /*路由跳转this.$router.push*/
            //                 this.tishi = "登录成功"
            //                 this.showTishi = true
            //                 setCookie('username',this.username,1000*60)
            //                 setTimeout(function(){
            //                     this.$router.push('/home')
            //                 }.bind(this),1000)
            //             }
            //         } )
            //     }
            // }
        },
        
    }
</script>

<style scoped>
    .login{
        position: absolute;
        top: 25%;
        height: 50%;
        width: 100%;
        font-size: 0.32rem;
    }
    #formlogin{
        width: 100%;
        height: 6.96rem;
        margin: 0 auto;
        padding: 0 0.2rem 0;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        /*max-width: 500px;*/
        display: block;
    }
    .loginImg{
        margin: 0 auto 35px;
        width: 28.6%;
        width: 1.92rem;
        height: 1.14rem;
    }
    .loginImg img{
        display: initial;
        border: none;
        width: 1.92rem;
        height: 1.14rem;
    }
    .login_textbox:nth-child(2){
        display: block;
        width: 100%;
        margin: 0 auto;
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: .35rem;
        color: #5f5f5f;
        text-indent: 0.8rem;
        border: 0.02rem solid #ddd;
    }
    .login_textbox:nth-child(3){
        display: block;
        width: 100%;
        margin: 0 auto;
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: .35rem;
        color: #5f5f5f;
        text-indent: 0.8rem;
        border: 0.02rem solid #ddd;
    }
    .login_btn{
        margin: 0.3rem auto 0.2rem;
        display: block;
        width: 100%;
        font-size: 0.34rem;
        color: #fff;
        background: #E53930;
        text-align: center;
        height: 1rem;
        line-height:1rem;
    }
    .n_links_area{
        padding: 0 0 0.4rem;
        text-align: center;
        color: darkgrey;
        font-size: .9em;
    }
    a{
        text-decoration: none;
        color: #969696;
        font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;
    }

</style>