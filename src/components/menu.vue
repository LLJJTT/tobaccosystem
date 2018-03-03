<template>
	<div id="menu">
		  <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
		    <el-menu :default-openeds="[]">
		    	<span @click="goHome" id="yibiao"><i class="el-icon-menu"></i>&nbsp;  仪表盘</span>
		      <el-submenu index="1">
		        <template slot="title"><i class="el-icon-document"></i>订单管理</template>
		        <el-menu-item-group>
		          <el-submenu index="1-1">
			          <template slot="title">销售</template>
			          <el-menu-item @click="goNoHandle" index="1-1-1">未处理</el-menu-item>
			          <el-menu-item @click="goAlreadyHandle" index="1-1-2">已处理</el-menu-item>
			        </el-submenu>
		        </el-menu-item-group>
		        <el-menu-item-group title="">
		          <el-menu-item @click="goReturn" index="1-2">退货</el-menu-item>
		        </el-menu-item-group>
		        <el-menu-item-group title="">
		          <el-menu-item @click="goQuery" index="1-3">查询</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="2">
		        <template slot="title"><i class="el-icon-tickets"></i>库存管理</template>
		        <el-menu-item-group>
		        	<el-menu-item @click="goLookStock" index="2-1">库存</el-menu-item>
		          <el-menu-item @click="goAdd" index="2-2">添加</el-menu-item>
		        </el-menu-item-group>
		      </el-submenu>
		      <el-submenu index="3">
		        <template slot="title"><i class="el-icon-setting"></i>基本设置</template>
		        <el-menu-item-group>
		          <el-menu-item @click="goQuit" index="3-1">立即退出</el-menu-item>
		          <!-- <el-menu-item index="3-2">选项3</el-menu-item> -->
		        </el-menu-item-group>
		      </el-submenu>
		    </el-menu>
		  </el-aside>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			goHome:function(){
				this.$router.push({
					path:'home'
				})
			},
			goNoHandle:function(){
				this.$router.push({
					path:'nohandle'
				})
			},
			goAlreadyHandle:function(){
				this.$router.push({
					path:'alreadyhandle'
				})
			},
			goReturn:function(){
				this.$router.push({
					path:'returngoods'
				})
			},
			goQuery:function(){
				this.$router.push({
					path:'query'
				})
			},
			goAdd:function(){
				this.$router.push({
					path:'add'
				})
			},
			goLookStock:function(){
				this.$router.push({
					path:'lookstock'
				})
			},
			goQuit:function(){
        const h = this.$createElement;
        this.$msgbox({
          title: '提示',
          message: h('p', null, [
            h('span', null, '你是否要 '),
            h('i', { style: 'color: red' }, '退出？')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '退出中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 2000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
          	duration:2000,
            type: 'success',
            message: '退出成功',
            onClose:function(){
            	window.location.href="http://localhost:8080/#/login"
            	sessionStorage.removeItem('username')
            }
          });
        });
      }

		}
	}
</script>

<style scoped>
	#menu{
		width: 14%;
		float: left;
	}
	.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
 	.el-submenu{
 		/*border-bottom: 1px solid #b3c0d2;*/
 	}
 	.el-menu-item{
 		border-bottom: 1px solid #ecf0f1;
 	}
 	.center{
 		padding: 100px 20px;
 		background: #87b59d;
 		margin-top: 10px;
 	}
 	.center div{
 		padding: 30px 0;
 		color: #fff;
 		font-size: 30px;
 	}
 	.fi{
 		border-right: 20px solid #f5f5f5;
 	}
 	.se{
 		border-left: 20px solid #f5f5f5;
 	}
 	#yibiao{
 		display: block;
 		font-size: 18px;
 		color: #467eaf;
 		padding: 18px;
 		cursor: pointer;
 	}
 	#yibiao:hover{
 		transition: 1.7s;
 		background: #eef5fe; 
 	}
</style>



