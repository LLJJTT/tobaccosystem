<template>
  <div id="foot">
    <el-footer>
      <ul>
        <li>Copyright&nbsp;&nbsp;&copy;&nbsp;&nbsp;黑&nbsp;<span class="hv">2018-1-25-20-52</span></li>
        <li>本网站含有烟草内容，未成年人谢绝访问</li>
        <li><span class="hv">赵辉烟草有限责任公司</span>&nbsp;&nbsp;版权所有</li>
      </ul>
    </el-footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
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
</style>






