<template>
  <div id="resetpassword">
    <Head></Head>
    <div id="content">
      <div class="div_l">
        <img :src="bgUrl" alt="">
      </div>
      <div class="div_r">
        <el-form id="formdata" :label-position="labelPosition" label-width="80px">
          <el-form-item>
            <el-button @click="findPassword" class="inp btn" type="primary">立即找回</el-button>
          </el-form-item>
        </el-form>
        <div class="ft">
          <span @click="goLogin">立即登录</span><span class="space"></span><span @click="goRegister">新用户注册</span>
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
  export default {
    components:{
      Head,Foot
    },
    data () {
      return {
        bgUrl:'../static/img/bg.jpeg',
        labelPosition: 'top',
      }
    },
    methods:{
      findPassword:function(){
        this.$notify({
          message:'请联系客服,0451-866-866-66',
          type:'warning',
          duration:1500,
          offset:200
        })
      },
      goLogin:function(){
        this.$router.push({path:'/login'})
      },
      goRegister:function(){
        this.$router.push({path:'/register'})
      }
    }
  }
</script>
<style lang="scss" scoped>
  #resetpassword{
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
          margin-top: 180px;
          font-size:16px !important;
        }
        .ft{
          margin-top: 100px;
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
          width:60%;
        }
        .btn{
          margin-top: 40px;
        }
      }
    }
  }
</style>






