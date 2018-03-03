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
	</div>
</template>
<script>
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
        holder:'请输入内容'
			}
		},
		methods:{
			oneSelect:function(e){
				console.log(e)
			},
			twoSelect:function(e){
				console.log(e)
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
					alert('搜索中')
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
		padding: 10px 10px 700px 10px;
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



