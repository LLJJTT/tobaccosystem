<template>
  <div id="head">
    <div id="header">
      <div class="logo">
        <img :src="logoUrl" alt="">
      </div>
      <div class="title">
        <span>{{title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      logoUrl:'../static/img/logo.jpg',
      title:'辉煌烟草销售系统',
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
  #head{
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
  }
</style>






