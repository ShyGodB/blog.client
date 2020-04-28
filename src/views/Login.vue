<template>
    <div id="login" class="h-100">
        <div class="login-box">
            <h3 class="login-box-title">密码登录</h3>

            <div class="login-box-username">
                <i class="el-icon-user-solid"></i>
                <input type="text" v-model="form.phone" @keyup.enter="login" placeholder=" 手机" />
            </div>

            <div class="login-box-password">
                <i class="el-icon-lock"></i>
                <input type="password" v-model="form.password" @keyup.enter="login" placeholder=" 密码" />
            </div>

            <div class="login-button">
                <button type="button" name="login-button" @click="login">登陆</button>
            </div>

            <div class="prompt">
                <span class="password-forgot">任意用户名、密码</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "login",
    data () {
        return {
            form: {
                phone: "",
                password: ""
            }
        }
    },
    methods: {
        async login () {
            if (this.form.phone.length !== 11) {
                this.$message.error('手机号码必须位11位')
                return
            }
            if (!this.form.password || this.form.password.length < 6) {
                this.$message.error('密码长度必须在6位及以上')
                return
            }
            const res = await this.$api.post("/index/login", this.form)
            if (!res.data.success) {
                this.$message.error(res.data.msg)
            } else {
                this.$store.state.userinfo = res.data.data.userinfo || null
                this.$store.state.menus = res.data.data.menus || []
                this.$router.push("/")
            }
        }
    },
    created () {

    }
}
</script>


<style scoped>
#login {
    height: 100%;
    width: 100%;
    min-height: 940px;
    background: url(../../public/bg.png) no-repeat;
    overflow: hidden;
    background-size: cover;
}
.login-box {
    width: 418px;
    height: 328px;
    margin: 0 auto;
    background: #fff;
    padding: 35px 35px 15px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    box-shadow: 0 0 25px #000000;
    position: relative;
    top: 180px;
}
.login-box h3 {
    display: block;
    text-align: center;
    margin-bottom: 30px;
    height: 30px;
}
.login-box i {
    margin-right: 10px;
}
input {
    width: 320px;
    height: 30px;
}
i {
    width: 16px;
    height: 16px;
}

.login-box div {
    margin-bottom: 30px;
    height: 30px;
}
.login-box button {
    width: 100%;
    height: 40px;
    border: 1px solid #ff4400;
    border-radius: 6px;
    background: #ff4400;
    margin: 0 auto;
}
.login-box .prompt {
    float: right;
}
.login-box .register-free:hover {
    cursor: pointer;
    color: #ff4400;
}
.login-box .prompt .password-forgot {
    margin: 10px;
    color: #888888;
}
</style>
