<template>
  <div id="hello">
    <Head></Head>
    <div id="content">
      <div class="div_l">
        <img :src="bgUrl" alt="">
      </div>
      <div class="div_r">
        <el-form id="formdata" :label-position="labelPosition" label-width="80px" :model="formdata">
          <el-form-item  label="登录账号">
            <el-input class="inp" type="text" v-model="formdata.account" placeholder="请输入要登录的账号"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input class="inp" type="password" v-model="formdata.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="Login" class="inp btn" type="primary">立即登录</el-button>
          </el-form-item>
        </el-form>
        <div class="ft">
          <span @click="goResetPassword">忘记密码</span>
          <!-- <span @click="goRegister">新用户注册</span> -->
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Head from '@/components/head'
import Foot from '@/components/foot'
import axios from 'axios'
export default {
  components:{
    Head,Foot
  },
  data () {
    return {
      bgUrl:'../static/img/bg.jpeg',
      labelPosition: 'top',
      formdata: {
        account: '',
        password: '',
      },
      loginUrl:'http://localhost/TabaccoSystem/php/login.php'
    }
  },
  methods:{
    Login:function(){
      if (this.formdata.account=='') {
        this.$notify({
          message:'请输入账号',
          type:'error',
          duration:1000,
          offset: 200
        })
      }
      else if (this.formdata.password=='') {
        this.$notify({
          message:'请输入密码',
          type:'error',
          duration:1000,
          offset: 200
        })
      }
      else{
        var bodyFormData = new FormData()
          bodyFormData.append('username',this.formdata.account);
          bodyFormData.append('pwd',this.formdata.password);
          var acc = this.formdata.account
          axios({
            method:"POST",
            url:this.loginUrl,
            data:bodyFormData,
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
          })
          .then((res) =>{
            // console.log(res.data)
            if (res.data.status==2) {//密码错误
              this.$notify({
                message:'密码错误',
                type:'warning',
                center:true,
                duration:1000,
                offset:200
              })
            }
            else if(res.data.status==1){//登录成功
              this.$notify({
                message:'登录成功',
                type:'success',
                center:true,
                duration:1000,
                offset:200,
                onClose:function(){
                 window.location.href="http://localhost:8080/#/index/home"
                sessionStorage.setItem('username',acc)
                }
              })
            }
            else{//用户还没注册
              this.$notify({
                message:'没有此管理者',
                type:'error',
                center:true,
                duration:1000,
                offset:200
              })
            }
          })
          .catch((error) =>{
            console.log(error)
          })
      }
    },
    goRegister:function(){
      this.$router.push({path:'/register'})
    },
    goResetPassword:function(){
      this.$router.push({path:'/resetpassword'})
    },
    
  }
}
</script>
<style lang="scss" scoped>
  #hello{
    user-select:none;
    color:#333;
    height:100%;
    
    #content{
      margin-top: 10px;
      padding:10px 20px;
      .div_l{
        width:60%;
        float:left;
        img{
          width:100%;
          height:580px;
        }
      }
      .div_r{
        background: #eaeaea;
        float:left;
        width:30%;
        margin-left: 5%;
        height:580px;
        #formdata{
          margin-top: 80px;
          font-size:16px !important;
        }
        .ft{
          margin-top: 60px;
          span{
            padding:5px 20px;
            color:#7b90ec;
          }
          span:first-child:hover,span:last-child:hover{
            transition:1s;
            border-bottom: 1px solid #acacad;
            cursor:pointer;
          }
        }
        .inp{
          width:80%;
        }
        .btn{
          margin-top: 40px;
        }
      }

    }
    
  }
</style>






