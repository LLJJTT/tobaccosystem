<template>
  <div id="register">
    <Head></Head>
    <div id="content">
      <div class="div_l">
        <img :src="bgUrl" alt="">
      </div>
      <div class="div_r">
        <el-form id="formdata" :label-position="labelPosition" label-width="80px" :model="registerData">
          <el-form-item  label="注册账号">
            <el-input class="inp" type="text" v-model="registerData.account" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="输入密码">
            <el-input class="inp" type="password" v-model="registerData.pwd1" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input class="inp" type="password" v-model="registerData.pwd2" placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="register" class="inp btn" type="primary">立即注册</el-button>
          </el-form-item>
        </el-form>
        <div class="ft">
          <span @click="goLogin">已有账号</span>
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
      registerData: {
        account: '',
        pwd1: '',
        pwd2:''
      },
      registerUrl:'http://localhost/TabaccoSystem/php/register.php'
    }
  },
  methods:{
    register:function(){
      if (this.registerData.account=='') {
        this.$notify({
          message:'请输入账号',
          type:'error',
          duration:1000,
          offset: 200
        })
      }
      else if(this.registerData.account.length<6||this.registerData.account.length>12){
        this.$notify({
          message:'账号长度6-12位',
          type:'error',
          duration:1000,
          offset: 200
        })
      }
      else if (this.registerData.pwd1=='') {
        this.$notify({
          message:'请输入密码',
          type:'error',
          duration:1000,
          offset: 200
        })
      }
      else if (this.registerData.pwd1.length<6||this.registerData.pwd1.length>16) {
        this.$notify({
          message:'密码长度6-16位',
          type:'error',
          duration:1000,
          offset: 200
        })
      }
      else if (this.registerData.pwd2=='') {
        this.$notify({
          message:'请在输入密码',
          type:'error',
          duration:1000,
          offset: 200
        })
      }
      else if(this.registerData.pwd1!=this.registerData.pwd2){
        this.$notify({
          message:'两次密码不一致',
          type:'error',
          duration:1000,
          offset: 200
        })
      }
      else{
        
        var bodyformdata = new FormData()
        bodyformdata.append('username',this.registerData.account)
        bodyformdata.append('pwd',this.registerData.pwd2)
        axios({
          method:"POST",
            url:this.registerUrl,
            data:bodyformdata,
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
        })
        .then((res) =>{
          if (res.data.status==1) {
            this.$notify({
              message:'注册成功',
              type:'success',
              duration:2000,
              offset: 200,
              onClose:function(){
                window.location.href="http://localhost:8080/#/login"
              }
            })
          }
          else if (res.data.status==0) {
            this.$notify({
              message:'用户已存在',
              type:'error',
              duration:2000,
              offset: 200
            })
          }
          else{
            this.$notify({
              message:'注册失败',
              type:'error',
              duration:2000,
              offset: 200
            })
          }
        })
        .catch((res)=>{
          console.log(res)
        })
      }
    },
    goLogin:function(){
      this.$router.push({path:'/login'})
    },

  }
}
</script>
<style lang="scss" scoped>
  #register{
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
          margin-top:40px;
          font-size:16px !important;
        }
        .ft{
          text-align:right;
          margin-right: 40px;
          margin-top:30px;
          span{
            padding:5px 20px;
            color:#7b90ec;
          }
          span:first-child:hover{
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






