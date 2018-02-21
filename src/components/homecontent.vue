<template>
	<div id="homecontent">
			<div class="container">
    		<el-row>
    			<el-col class="center fi" :span="12">
    				<div>订单总数</div>
    				<div><i>666</i>单</div>
    			</el-col>
    			<el-col class="center se" :span="12">
    				<div>库存种类</div>
    				<div><i>88</i>种</div>
    			</el-col>
    		</el-row>
    	</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		components:{
		}
	}
</script>

<style scoped>
	#homecontent{
		width: 80%;
		float: left;
	}
	.center{
 		padding: 100px 20px;
 		background: #d28649;
 		margin-top: 10px;
 		border-radius: 5px;
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
</style>