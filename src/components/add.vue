<template>
	<div id="add">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
		  <el-form-item label="烟草名称为" prop="name">
		    <el-input class="inp" type="text" v-model="ruleForm.name"></el-input>
		  </el-form-item>
		  <el-form-item label="添加数量/条" prop="amounts">
		    <el-select 
		    	v-model="ruleForm.amounts" 
		    	placeholder="请选择数量"
		    	@change="goProfit1">
		      <el-option
			      v-for="item in ruleForm.number"
			      :key="item"
			      :label="item"
			      :value="item">
			    </el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="烟草进价/条" prop="inprice">
		    <el-select 
		    	v-model="ruleForm.inprice" 
		    	placeholder="请选择价格"
		    	@change="goProfit2">
		      <el-option
			      v-for="item in ruleForm.inprice1"
			      :key="item"
			      :label="item"
			      :value="item">
			    </el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="烟草售价/条" prop="outprice">
		    <el-select 
		    	v-model="ruleForm.outprice" 
		    	placeholder="请选择价格"
		    	@change="goProfit3"
		    >
		      <el-option
			      v-for="item in ruleForm.outprice1"
			      :key="item"
			      :label="item"
			      :value="item">
			    </el-option>
		    </el-select>
		    <span class="profit">利润为&nbsp;<i>{{profit}}</i>&nbsp;条/元</span>
		    <span class="profit">总利润为&nbsp;<i>{{profitall}}</i>&nbsp;元</span>
		  </el-form-item>
		  <el-form-item label="烟草产地为" prop="goods_address">
		    <el-input class="inp" type="text" v-model="ruleForm.goods_address"></el-input>
		  </el-form-item>
		  <el-form-item label="香烟类型为" prop="cuxi">
		    <el-radio-group v-model="ruleForm.cuxi">
		      <el-radio label="粗根"></el-radio>
		      <el-radio label="细根"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		  <el-form-item label="包装类型为" prop="ruanying">
		    <el-radio-group v-model="ruleForm.ruanying">
		      <el-radio label="硬盒"></el-radio>
		      <el-radio label="软盒"></el-radio>
		    </el-radio-group>
		  </el-form-item>
		  <el-form-item label="供应商姓名" prop="supplier_name">
		    <el-input class="inp" type="text" v-model="ruleForm.supplier_name"></el-input>
		  </el-form-item>
		  <el-form-item label="供应商电话" prop="supplier_phone">
		    <el-input class="inp" type="number" v-model="ruleForm.supplier_phone"></el-input>
		  </el-form-item>
		  <el-form-item label="供应商地址" prop="supplier_address">
		    <el-input class="inp" type="text" v-model="ruleForm.supplier_address"></el-input>
		  </el-form-item>
		  <el-form-item label="添加人" prop="add_person">
		    <el-input class="inp" type="text" v-model="ruleForm.add_person"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('ruleForm')">立即添加</el-button>
		    <el-button @click="resetForm('ruleForm')">重置</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				add_list_url:'http://localhost/TabaccoSystem/php/add.php',
      	profit:'0',
      	profitall:'0',
				ruleForm: {
					goods_address:'',
          name: '',
          amounts:'',
          number:200,
          inprice:'',
          inprice1:500,
          outprice:'',
          outprice1:1000,
          cuxi: '',
          ruanying:'',
					supplier_name:'',
					supplier_phone:'',
					supplier_address:'',       
        },
        rules: {
          name: [
            { required: true, message: '请输入烟草名称', trigger: 'blur' },
            { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
          ],
          amounts: [
            { required: true, message: '请选择添加的数量', trigger: 'change' }
          ],
          inprice: [
            { required: true, message: '请选择进价', trigger: 'change' }
          ],
          outprice: [
            { required: true, message: '请选择售价', trigger: 'change' }
          ],
          goods_address: [
            { required: true, message: '请输入烟草产地', trigger: 'blur' },
            { min: 4, max: 20, message: '长度在 4 到 20 个字符', trigger: 'blur' }
          ],
          cuxi: [
            { required: true, message: '请选择香烟粗细', trigger: 'change' }
          ],
          ruanying: [
            { required: true, message: '请选择软硬包装', trigger: 'change' }
          ],
          supplier_name: [
            { required: true, message: '请输入供应商姓名', trigger: 'change' }
          ],
          supplier_phone: [
            { required: true, message: '请输入供应商电话', trigger: 'change' }
          ],
          supplier_address: [
            { required: true, message: '请输入供应商地址', trigger: 'change' }
          ],
          add_person: [
            { required: true, message: '请输入添加人姓名', trigger: 'change' }
          ],
          
        }
			}
		},
		methods: {
			// 利润
			goProfit1:function(e){
				this.profit = this.ruleForm.outprice - this.ruleForm.inprice
				this.profitall = this.profit*e
			},
			goProfit2:function(e){
				this.profit = this.ruleForm.outprice - e
				this.profitall = this.profit*(this.ruleForm.amounts)
			},
			goProfit3:function(e){
				this.profit = e - this.ruleForm.inprice
				this.profitall = this.profit*(this.ruleForm.amounts)
			},
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          	var bodyFormData = new FormData()
	          bodyFormData.append('name',this.ruleForm.name);
	          bodyFormData.append('number1',this.ruleForm.amounts);
	          bodyFormData.append('inprice',this.ruleForm.inprice);
	          bodyFormData.append('sell_price',this.ruleForm.outprice);
	          bodyFormData.append('profit',this.profit);
	          bodyFormData.append('profitall',this.profitall);
	          bodyFormData.append('goods_address',this.ruleForm.goods_address);
	          bodyFormData.append('type1',this.ruleForm.cuxi);
	          bodyFormData.append('type2',this.ruleForm.ruanying);
	          bodyFormData.append('supplier_name',this.ruleForm.supplier_name);
	          bodyFormData.append('supplier_phone',this.ruleForm.supplier_phone);
	          bodyFormData.append('supplier_address',this.ruleForm.supplier_address);
	          bodyFormData.append('add_person',this.ruleForm.add_person);
          	axios({
			    		method:'POST',
			    		url:this.add_list_url,
			    		data:bodyFormData,
			    		config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
			    	})
			    	.then((res) =>{
			    		var that = this
			    		if(res.data.status==1){
			          this.$message({
			            type: 'success',
			            message: '添加成功!',
			            duration:5000,
			            onClose:function(){
			            	that.$refs[formName].resetFields();
			            	that.profit = '0'
			            	that.profitall = '0'

			            }
			          });
			    		}
			    		else if(res.data.status==0){
			    			this.$message({
			            type: 'error',
			            message: '香烟已经存在!',
			            duration:3000,
			          });
			    		}
			    		else if (res.data.status==2) {
			    			this.$message({
			            type: 'error',
			            message: '香烟添加失败！！',
			            duration:2000,
			          });
			    		}
			    	})
			    	.catch((error) =>{
			    		console.log(error)
			    	})
          } 
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
        this.profit = '0'
      	this.profitall = '0'
      }
    }
	}
</script>

<style scoped>
	#add{
		width: 86%;
		float: left;
		text-align: left;
		margin-top: 20px;
	}
	.profit{
		margin-left: 140px;
	}
	.profit i{
		color: red;
		font-size: 24px;
	}
	.inp{
		width: 60%;
	}
	.el-form-item {
    margin-bottom: 25px;
}
</style>