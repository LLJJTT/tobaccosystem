<template>
	<div id="query">
		<div class="wrapper">
			<span class="title">请选择、输入条件或者内容</span>
			<el-select 
				@change="oneSelect"
				v-model="one" 
				placeholder="请选择一级分类">
		    <el-option
		      v-for="item in options1"
		      :key="item.value"
		      :value="item.value">
		    </el-option>
	  	</el-select>
	  	<el-select 
	  		@change="twoSelect"
	  		v-model="two" 
	  		placeholder="请选择二级分类">
		    <el-option
		      v-for="item in options2"
		      :key="item.value"
		      :value="item.value">
		    </el-option>
	  	</el-select>
	  	<el-input class="inp" v-model="inpcontent" :placeholder="holder"></el-input>
	  	<el-button @click="goSearch" type="primary" icon="el-icon-search">搜索</el-button>
		</div>
		<div>
			<el-table
				class="data_db"
		    :data="tableData"
		    border
		    max-height="600"
		    style="width: 100%">
		    <el-table-column
		      type="index"
		      label="ID"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="order_num"
		      label="订单号"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="日期"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="goods_name"
		      label="名称"
		      >
		    </el-table-column>
		    <el-table-column
		        prop="gid"
		        label="烟草编号"
		        >
		      </el-table-column>
		    <el-table-column
		      prop="order_quantity"
		      label="订货数量"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="unit_price"
		      label="单价"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="order_amount"
		      label="订单总价"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="orderer"
		      label="订货人"
				 >
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="收货地址"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="contact"
		      label="联系方式"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="remarks"
		      label="备注"
		      >
		    </el-table-column>
		    <el-table-column
		      prop="type"
		      label="类型"
		      >
		    </el-table-column>
		  </el-table>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				options1: [{
          value: '已处理',
        }, {
          value: '未处理',
        }, {
          value: '退货单'
        }],
        options2: [{
          value: '按订单号',
        }, {
          value: '按烟草名',
        }, {
          value: '按订货人'
        }],
        one:'',
        two:'',
        inpcontent: '',
        holder:'请输入内容',
        tableData: [],
        search_url:'http://localhost/TabaccoSystem/php/search.php'
			}
		},
		methods:{
			oneSelect:function(e){
				// console.log(e)
			},
			twoSelect:function(e){
				// console.log(e)
				if (e=='按订单号') {
					this.holder = '请输入订单号'
				}
				else if (e=='按烟草名') {
					this.holder = '请输入烟草名'
				}
				else if(e=='按订货人'){
					this.holder = '请输入订货人'
				}
				
			},
			goSearch:function(){
				if (this.one==''||this.one==null||this.one==undefined) {
					this.$notify({
	          title: '警告',
	          message: '请选择一级分类',
	          type: 'warning',
	          duration:2000,
	        });
				}
				else if (this.two==''||this.two==null||this.two==undefined) {
					this.$notify({
	          title: '警告',
	          message: '请选择二级分类',
	          type: 'warning',
	          duration:2000,
	        });
				}
				else if (this.inpcontent==''){
					this.$notify({
	          title: '警告',
	          message: '请输入内容',
	          type: 'warning',
	          duration:2000,
	        });
				}
				else{
					var formdata = new FormData()
					formdata.append('one',this.one)
					formdata.append('two',this.two)
					formdata.append('inpcontent',this.inpcontent)
					axios({
						method:'POST',
						data:formdata,
						url:this.search_url,
    				config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
					})
					.then((res) =>{
						if (res.data.status==0) {
							this.$message({
			          title: 'success',
			          message: '查询完毕-无数据',
			          type: 'success',
			          duration:1500,
			        });
							this.tableData = []
						}
						else{
							this.$message({
			          title: 'success',
			          message: '查询完毕',
			          type: 'success',
			          duration:1500,
			        });
							this.tableData = res.data
							console.log(res.data[0])
						}
					})
					.catch((error) =>{
						console.log(error)
					})
				}
				
			}
		}
	}
</script>

<style scoped>
	#query{
		width: 86%;
		float: left;
		margin-top: 10px;
		background: #253c3c;
		/*text-align: left;*/
		padding: 10px 10px 10px 10px;
	}
	.wrapper{
		margin-left: 10px;
	}
	.title{
		color: #fff;
		font-size: 18px;
		margin-left: -170px;
		margin-right: 170px;
	}
	.inp{
		width:inherit;
	}
</style>



