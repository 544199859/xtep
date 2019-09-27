<template>
    <div class="register">

        <form action="" id="formlogin">
            <div class="loginImg">
                <img src="https://m.xtep.com.cn/webcommon/images/image_w/login_logo.gif" alt="">
            </div>

            <label class="zc_label">
                <input type="text" v-model="register.name" class="login_textbox2 login_textimg1" placeholder="请输入您的用户名">
            </label>
            <label class="zc_label">
                <input type="password" v-model="register.password" class="login_textbox2 login_textimg1" placeholder="请输入您的密码">
            </label>
            <label class="zc_label">
                <input type="password" v-model="register.passwordt" class="login_textbox2 login_textimg1" placeholder="请确认您密码">
            </label>
            <label class="zc_label">
                <input type="text" v-model="register.phone" class="login_textbox2 login_textimg1" placeholder="请输入您的手机号">
            </label>
            <label style="display:inline-block;margin-top:15px;">
                <input style="vertical-align:middle;margin-top:-3px;" type="checkbox"/>
                我已看过并接受
                <router-link to="">《特步用户协议》</router-link>
                <!--<a href="#">《特步用户协议》</a>-->
            </label>
            <br>
            <input @click="addToRegister(register)" class="login_btn" value="立即注册" type="button"/>
            <router-link to="user" class="Register_backLogin">返回</router-link>
            <!--<a href="/login.aspx" class="Register_backLogin">返回</a>-->
        </form>

    </div>
</template>

<script>
    import axios from "axios";


    export default {
        name: "register",
        data(){
            return{
                register:{
                    name:'',
                    password:'',
                    passwordt:'',
                    phone:''
                }
            }
        },
        methods:{
            // addToRegister(register){
            //     this.$store.dispatch('login/addToRegister',register)
            // }

            // addToRegister:function(){
            //     if(this.name=== '' || password === '' || passwordt === '' || phone === ''){
            //         alert('信息不完整');
            //         return
            //     }
            //     let user = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
            //     let items = {name:this.name,password:this.passwordt,passwordt:this.passwordt,phone:this.phone}
                
            // }
        }
    }
</script>

<style scoped>
    .register{
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
    label.zc_label {
        width: 100%;
        height: 0.9rem;
        display: block;
        color: #333;
        font-size: 0.36rem;
    }
    .login_textbox2{
        width: 7rem;
        height: 0.86rem;
        font-size: 0.34rem;
        border: 0.02rem #dcdcdc solid;
        border-bottom: none;
    }
    .login_textbox2.login_textimg1 {
        border-bottom: 1px solid #dcdcdc;
    }
    a{
        text-decoration: none;
        color: #969696;
        font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;
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
</style>