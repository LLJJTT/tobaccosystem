<template>
	<div id="homecontent">
			<div class="container">
    		<el-row>
    			<el-col class="center fi" :span="12">
    				<div>订单总数</div>
    				<!-- 已处理订单数 -->
    				<div><i>{{list_number}}</i>单</div>
    			</el-col>
    			<el-col class="center se" :span="12">
    				<div>库存种类</div>
    				<div><i>{{type_number}}</i>种</div>
    			</el-col> 
    		</el-row>
    	</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				already_handle_order_url:'http://localhost/TabaccoSystem/php/already_handle_order.php',
        invertory_goods_list_url:'http://localhost/TabaccoSystem/php/invertory_goods_list.php',
				list_number:'0',
				type_number:'0'

			}
		},
		methods:{
			// 获取订单数
			getListNum(){
				axios({
	    		method:'GET',
	    		url:this.already_handle_order_url,
	    		config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
	    	})
	    	.then((res) =>{
	    		this.list_number = res.data.length
	        // console.log(res.data.length)
	    	})
	    	.catch((error) =>{
	    		console.log(error)
	    	})
			},
			// 获取库存种类
			getInvertoryNum(){
				axios({
          method:'GET',
          url:this.invertory_goods_list_url,
          config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
        })
        .then((res) =>{
        	this.type_number = res.data.length
          // console.log(res.data.length)
        })
        .catch((error) =>{
	    		console.log(error)
	    	})
			}
		},
		created(){
			this.getListNum()
			this.getInvertoryNum()
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