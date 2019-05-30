<template>
    <div class="login">
        <div class="main_box">
            <div class="img_box">
            </div>
            <div class="info_box">
                <p class="login_title">比爱玛智慧工地云中心</p>
                <div class="login_name_box">
                    <img class="login_name_img" src="../assets/img/login/icon_mima.png" alt="">
                    <input class="login_input" v-model="user.username" placeholder="请输入您的账号" type="text">
                </div>
                <div class="login_name_box">
                    <img class="login_name_img" src="../assets/img/login/icon_zhanghu.png" alt="">
                    <input class="login_input" v-model="user.password" @keyup.enter.native="login()" placeholder="请输入您的密码" type="password">
                </div>
                <p class="login_rember">
                    <span class="login_rember_left">
                        <el-checkbox v-model="user.state" :fill="fill_color" :text-color='checkbox_color'>记住密码</el-checkbox>
                    </span>
                    <span class="login_rember_right">忘记密码</span>
                </p>
                <button @click="login" class="login_button">登录</button>
            </div>
        </div>
    </div>
</template>
<style  lang="less">
// @media screen and (max-width: 1920px) {
.login {
  width: 1920px;
  height: 1080px;
  background: url(../assets/img/login/bg1.png) no-repeat 0px 0px;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  position: relative;
  color: #fff;
  .main_box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 484px;
    height: 380px;
    background-color: #12254b;
    border-radius: 10px;
    padding: 70px 40px 0 40px;
    .img_box {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 101px;
      height: 102px;
      background-color: #ffffff;
      border-radius: 50%;
      background: url(../assets/img/login/logo.png) no-repeat 0px 0px;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
    }
    .login_title {
      height: 50px;
      font-size: 26px;
      letter-spacing: 0px;
      color: #ffffff;
    }
    .login_name_box {
      margin-bottom: 16px;
      position: relative;
      .login_name_img {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        border-right: 1px solid #2b3b5c;
        padding-right: 12px;
      }
    }
    .login_input {
      border: none;
      width: 100%;
      height: 48px;
      padding-left: 50px;
      line-height: 48px;
      font-size: 18px;
      color: #fff;
      background-color: #182c53;
      border-radius: 5px;
    }
    .login_rember {
      height: 50px;
      font-size: 14px;
      line-height: 32px;
      letter-spacing: 0px;
      color: #42506b;
      .login_rember_left {
        float: left;
        .login_check {
          width: 12px;
          height: 12px;
          background-color: #42506b;
        }
      }
      .login_rember_right {
        float: right;
        cursor: pointer;
      }
    }
    .login_button {
      border: none;
      width: 400px;
      height: 48px;
      background-color: #1ca131;
      border-radius: 5px;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #1ca131;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner,
    .el-checkbox__input.is-indeterminate .el-checkbox__inner {
      background-color: #182c53;
      border-color: #182c53;
    }
    .el-checkbox_inner:hover {
      border-color: #182c53;
      background-color: #182c53;
    }
    .el-checkbox__input.is-focus .el-checkbox__inner {
      border-color: #182c53;
      background-color: #182c53;
    }

    .el-checkbox__input.is-checked .el-checkbox__inner::after {
      -webkit-transform: rotate(45deg) scaleY(1);
      transform: rotate(45deg) scaleY(1);
    }
    .el-checkbox__inner::after {
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      content: "";
      border: 1px solid #1ca131;
      border-left: 0;
      border-top: 0;
      height: 7px;
      left: 4px;
      position: absolute;
      top: 1px;
      -webkit-transform: rotate(45deg) scaleY(0);
      transform: rotate(45deg) scaleY(0);
      width: 3px;
      -webkit-transition: -webkit-transform 0.15s ease-in 0.05s;
      transition: -webkit-transform 0.15s ease-in 0.05s;
      transition: transform 0.15s ease-in 0.05s;
      transition: transform 0.15s ease-in 0.05s,
        -webkit-transform 0.15s ease-in 0.05s;
      transition: transform 0.15s ease-in 0.05s,
        -webkit-transform 0.15s ease-in 0.05s;
      -webkit-transform-origin: center;
      transform-origin: center;
    }
  }
}
// }
// @media screen and (min-width: 1930px) {
// }
</style>
<script>
export default {
    components: {
    },
    name: 'login',
    data() {
        return {
            user: {
                username: '',
                password: '',
                state: true
            },
            fill_color: 'red',
            checkbox_color: 'red',
        }
    },
    mounted() {
        this.getCookie();
    },
    methods: {
        login() {
            // 记住密码
            console.log(this.user);
            // this.$router.push({
            //     path: '/index'
            // });
            var obj = {
                username: this.user.username,
                password: this.user.password,
            }
            this.$axios({
                method: "post",
                url: '/login',
                data: this.$qs.stringify(obj),
            })
                .then(response => {
                    console.log(response);
                    if (response.data.res == 'SUCCESS') {
                        if (this.user.state) {
                            //传入账号名，密码，和保存天数3个参数
                            this.setCookie(this.user.username, this.user.password, 7);
                        } else {
                            this.clearCookie();
                        }
                        this.$router.push({
                            path: '/index'
                        });
                    } else {
                        this.$message.error('账户或密码错误');
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        CheckItem(item) {
            console.log(item);
            this.user.state = !item;
        },
        //设置cookie
        setCookie(c_name, c_pwd, exdays) {
            var exdate = new Date(); //获取时间
            exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
            //字符串拼接cookie
            window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
            window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
        },
        //读取cookie
        getCookie: function () {
            if (document.cookie.length > 0) {
                var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
                console.log(arr);
                for (var i = 0; i < arr.length; i++) {
                    var arr2 = arr[i].split('='); //再次切割
                    //判断查找相对应的值
                    if (arr2[0] == 'userName') {
                        this.user.username = arr2[1]; //保存到保存数据的地方
                    } else if (arr2[0] == 'userPwd') {
                        this.user.password = arr2[1];
                    }
                }
            }
        },
        //清除cookie
        clearCookie: function () {
            this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
        }
    }
}
</script>
