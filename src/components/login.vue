<template>
  <div id="hello">
    <div id="header">
      <div class="logo">
        <img :src="logoUrl" alt="">
      </div>
      <div class="title">
        <span>{{title}}</span>
      </div>
    </div>
    <div id="content">
      <div class="div_l">
        <img :src="bgUrl" alt="">
      </div>
      <div class="div_r">
        <el-form id="formdata" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item  label="登录账号">
            <el-input class="inp" type="text" v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="登录密码">
            <el-input class="inp" type="password" v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="inp btn" type="primary">立即登录</el-button>
          </el-form-item>
        </el-form>
        <div class="ft">
          <span>新用户注册</span><span class="space"></span><span>忘记密码</span>
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
    <div id="foot">
      <el-footer>
        <ul>
          <li>Copyright&nbsp;&nbsp;&copy;&nbsp;&nbsp;黑&nbsp;<span class="hv">2018-1-25-20-52</span></li>
          <li>本网站含有烟草内容，未成年人谢绝访问</li>
          <li><span class="hv">赵辉烟草有限责任公司</span>&nbsp;&nbsp;版权所有</li>
        </ul>
      </el-footer>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      logoUrl:'../static/img/logo.jpg',
      title:'辉煌烟草销售系统',
      bgUrl:'../static/img/bg.jpeg',
      labelPosition: 'top',
      formLabelAlign: {
        name: '',
        region: '',
      }
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
  #hello{
    user-select:none;
    color:#333;
    height:100%;
    #header{
      height:80px;
      background: #ffffff;
      .logo{
        float:left;
        margin-left: 40px;
        height:80px;
        img{
          display:block;
          height:80px;
          width:240px;;
        }
      }
      .title{
        margin-left:20px;
        float:left;
        line-height:80px;
        font-size:16px;
        span{
          padding-left:10px;
          border-left:2px solid #eee;
        }
      }
    }
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
            padding:0 20px;
            color:#7b90ec;
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
    #foot{
      margin-top: 40px;
      border-top:1px solid #c7c7c7;
      padding-top:15px;
      ul{
        li{
          display:inline-block;
          line-height:60px;
          margin-left: 30px;
          .hv:hover{
            transition:.6s;
            color:red;
          }
        }
      }
    }
  }
</style>






