<template>
	<div id="register">
		<van-nav-bar
			title="注册"
			left-arrow
			@click-left="onClickLeft"
		/>
        <van-field v-model="username" placeholder="请输入手机号" @blur="checkUsername"/>
        <van-field type="password" v-model="password" placeholder="请输入密码" @blur="checkPassword"/>
        <van-field type="password" v-model="repassword" placeholder="请确认密码" />
        <div class="btns">
            <van-button @click="register" class="register-btn" color="#00c792" round type="primary" size="large">注册</van-button>
            <van-button @click="gotoLogin" color="#00c792" round plain type="primary" size="large">登录</van-button>

        </div>
	</div>
</template>

<script>
import { Toast } from 'vant';
export default {
	data() {
		return {
            username: '',
            password: '',
            repassword: '',
            usernameReg: /^1[0-9]{10}$/,
            passwordReg: /^[a-zA-Z][a-zA-Z0-9]{5,19}$/
        };
    },
    methods: {
        checkUsername(){
            if(this.username.trim() == ''){
                Toast('请输入手机号');
                return;
            }
            if(!this.usernameReg.test(this.username)){
                Toast('手机号不正确');
                return false;
            }
        },
        checkPassword(){
            if(this.password.trim() == ''){
                Toast('请输入密码');
                return;
            }
            if(!this.passwordReg.test(this.password) || /^[a-zA-Z]+$/.test(this.password)){
                Toast('密码必须为字母开头的字母数字组合');
                return false;
            }
        },
        onClickLeft(){
            this.$router.back(-1)
        },
        gotoLogin(){
            this.$router.push('/login?from=register')
        },
        register(){
                var usernameReg = /^1[0-9]{10}$/;
                var passwordReg = /^[a-zA-Z][a-zA-Z0-9]{5,19}$/;
                if(!usernameReg.test(this.username)){
                    
                    Toast('手机号不正确');
                    return false;
                }
                if(!passwordReg.test(this.password) || /^[a-zA-Z]+$/.test(this.password)){
                    Toast('密码必须为字母开头的字母数字组合');
                    return false;
                }
                if(this.repassword != this.password){
                    Toast('输入的密码不一致');
                    return false;
                }
                this.axios.post('/register', {
                    username: this.username,
                    password: this.password
                })
                .then(res=>{
                    if(res.data.code == 0){
                        Toast('注册成功！');
                        this.$router.push('/login')
                        
                    }else{
                        Toast('注册失败！请重试！');
                    }
                })
                .catch(reason=>console.log(reason))
            }
    }
};
</script>

<style scoped>
#register .van-field {
    padding: 20px 20px;
    font-size: 16px;
}

#register .btns {
    padding: 0 20px;
}

#register .register-btn {
    margin: 20px 0;
}

</style>
