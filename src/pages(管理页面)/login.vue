<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="login-body">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">账号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username">
          </div>
          <div class="input">
            <input type="text" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn">登录</a>
          </div>
          <div class="tips">
            <div class="sms">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码</div>
          </div>
        </div>
      </div>
    </div>
    <div class="login-footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank">我的主页</a><span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank">商城之家</a><span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">家庭影院</a><span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank">智能家居</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username:'',
      password:''
    }
  },
  methods: {
    login() {
      let {username, password} = this
      this.axios.post('/user/login', {
        username,
        password
      }).then((res) => {
        this.$cookie.set('userId', res.id, {expires: '1M'})
        this.$router.push('/index')
      })
    }
  }
}
</script>

<style lang="scss">
  .login {
    // & 表示当前元素，&>表示当前元素的子元素, 不过其实在这里直接写.container也行
    // &>.container {
    .container {
      height: 113px;
      img {
        width: auto;
        height: 100%;
      }
    }
    .login-body {
      background: url('/imgs/login-bg.jpg') no-repeat center;
      .container {
        height: 576px;
        position: relative;
        .login-form {
          width: 410px;
          height: 510px;
          background-color:#ffffff;
          position: absolute;
          bottom: 29px;
          right: 0;
          padding-left: 31px;
          padding-right: 31px;
          box-sizing: border-box;
          h3 {
            line-height: 23px;
            text-align: center;
            font-size: 24px;
            margin: 40px auto 49px;
            .checked {
              color: #ff6600;
            }
            .sep-line {
              margin: 0 23px;
            }
          }
          .input {
            display: inline-block;
            width: 348px;
            height: 50px;
            border: 1px solid #e5e5e5;
            margin-bottom: 20px;
            input {
              width: 100%;
              height: 100%;
              border: none;
              padding: 18px;
            }
          }
          .btn {
            width: 100%;
            height: 50px;
            line-height: 50px;
            font-size: 16px; 
            margin-top: 10px;
          }
          .tips {
            display: flex;
            justify-content: space-between;
            margin-top: 14px;
            font-size: 14px;
            .sms {
              color: #ff6600;
            }
            .reg {
              color: #999999;
              span {
                margin: 0 7px;
              }
            }
          }
        }
      }
    }
    .login-footer {
      height: 100px;
      padding-top: 60px;
      color: #999999;
      text-align: center;
      .footer-link {
        a {
          color: #999999;
          display: inline-block;
        }
        span {
          margin: 0 10px;
        }
      }
      .copyright {
        margin-top: 13px;
      }
    }
  }
</style>