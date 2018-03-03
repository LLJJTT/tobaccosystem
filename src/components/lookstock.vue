<template>
	<div id="lookstock">
		<el-table
		class="data_db"
    :data="tableData"
    border
    max-height="808"
    style="width: 100%">
      <el-table-column
        type="index"
        label="ID"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        >
      </el-table-column>
      <el-table-column
        prop="id"
        label="烟草ID"
        >
      </el-table-column>
      <el-table-column
        prop="number1"
        label="剩余(条)"
        >
      </el-table-column>
      <el-table-column
        prop="in_price"
        label="进价(元)"
        >
      </el-table-column>
      <el-table-column
        prop="sell_price"
        label="售价(元)"
        >
      </el-table-column>
      <el-table-column
        prop="profit"
        label="利润(元)"
        >
      </el-table-column>
      <el-table-column
        prop="profit_all"
        label="总利润(元)"
        >
      </el-table-column>
      <el-table-column
        prop="good_address"
        label="产地"
        >
      </el-table-column>
      <el-table-column
        prop="type1"
        label="类型1"
  		 >
      </el-table-column>
      <el-table-column
        prop="type2"
        label="类型2"
       >
      </el-table-column>
      <el-table-column
        prop="supplier_name"
        label="供应商姓名"
        >
      </el-table-column>
      <el-table-column
        prop="supplier_phone"
        label="供应商电话"
        >
      </el-table-column>
      <el-table-column
        prop="supplier_address"
        label="供应商地址"
        > 
      </el-table-column>
      <el-table-column
        prop="add_person"
        label="添加人"
        >
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">更改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改库存" 
      top="100px"
      :visible.sync="dialogTableVisible"
      width="55%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
        <el-form-item label="烟草名称为" prop="name">
          <el-input disabled class="inp" type="text" v-model="ruleForm.name"></el-input>
          <span class="tabcco_id">ID:&nbsp;<i>{{ruleForm.id}}</i></span>
        </el-form-item>
        <el-form-item label="添加数量/条" prop="amounts">
          <el-select 
            @change="goProfit1" 
            v-model="ruleForm.amounts" 
            placeholder="请选择数量">
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
            @change="goProfit2" 
            v-model="ruleForm.inprice" 
            placeholder="请选择价格">
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
          <el-input class="inp" type="text" v-model="ruleForm.supplier_phone"></el-input>
        </el-form-item>
        <el-form-item label="供应商地址" prop="supplier_address">
          <el-input class="inp" type="text" v-model="ruleForm.supplier_address"></el-input>
        </el-form-item>
        <el-form-item label="添加人" prop="add_person">
          <el-input disabled class="inp" type="text" v-model="ruleForm.add_person"></el-input>
        </el-form-item>
        <el-form-item style="text-align:center;">
          <el-button type="primary" @click="submitForm('ruleForm')">立即修改</el-button>
          <el-button type="danger" @click="goDeleteStart(ruleForm)">删除数据</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="警告"
      :visible.sync="goDelete"
      width="30%"
      center>
      <span>确定删除此条数据？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="goDelete = false">取 消</el-button>
        <el-button type="primary" @click="deleteData">确 定</el-button>
      </span>
    </el-dialog>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
        Data:[],
        ID:'',
				tableData: [],
        dialogTableVisible: false,
        goDelete: false,
        invertory_goods_list_url:'http://localhost/TabaccoSystem/php/invertory_goods_list.php',
        modify_list_url:'http://localhost/TabaccoSystem/php/modify_invertory_goods_list.php',
        delete_row_url:'http://localhost/TabaccoSystem/php/delete_row.php',
        profit:'0',
        profitall:'0',
        ruleForm: {
          id:'',
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
      // 更改
    	handleEdit(index, row) {
				this.dialogTableVisible=true
        this.ruleForm.name = row.name
        this.ruleForm.amounts = row.number1
        this.ruleForm.inprice = row.in_price
        this.ruleForm.outprice = row.sell_price
        this.profit = row.profit
        this.profitall = row.profit_all
        this.ruleForm.goods_address = row.good_address
        this.ruleForm.cuxi = row.type1
        this.ruleForm.ruanying = row.type2
        this.ruleForm.supplier_name = row.supplier_name
        this.ruleForm.supplier_phone = row.supplier_phone
        this.ruleForm.supplier_address = row.supplier_address
        this.ruleForm.add_person = row.add_person
        this.ruleForm.id = row.id
      },
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
              url:this.modify_list_url,
              data:bodyFormData,
              config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
            })
            .then((res) =>{
              // console.log(res.data)
              var that  = this
              if(res.data.status==1){
                this.$message({
                  type: 'success',
                  message: '修改成功!',
                  duration:3000,
                  onClose:function(){
                    that.dialogTableVisible = false
                    that.getData()
                  }
                });
              }
              else if (res.data.status==2) {
                this.$message({
                  type: 'warning',
                  message: '您没有修改',
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
      goDeleteStart:function(FormData){
        this.goDelete = true
        this.ID = FormData.id
        // console.log(this.ID)
      },
      deleteData:function(){
        var bodyFormData = new FormData()
        bodyFormData.append('gid',this.ID)
        var that  = this
        axios({
          method:'POST',
          url:this.delete_row_url,
          data:bodyFormData,
          config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
        })
        .then((res) =>{
          if (res.data.status==1) {
            this.$message({
              type: 'success',
              message: '删除成功!',
              duration:2000,
              onClose:function(){
                that.goDelete = false
                that.dialogTableVisible = false
                that.getData()
              }
            });
          }
          else if(res.data.status==0){
            this.$message({
              type: 'error',
              message: '删除失败!',
              duration:2000,
            });
          }
        })
        .catch((error) =>{
          console.log(error)
        })
      },
      getData:function(){
        axios({
          method:'GET',
          url:this.invertory_goods_list_url,
          config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
        })
        .then((res) =>{
          if(res.status==200){
            this.tableData = res.data
            // console.log(res.data)
          }
        })
      }
    },
    created:function(){
    	this.getData()
    }
	}
</script>

<style scoped>
	#lookstock{
		width: 86%;
		float: left;
	}
  .profit{
    margin-left: 100px;
  }
  .profit i{
    color: red;
    font-size: 24px;
  }
  .inp{
    width: 60%;
  }
  .el-form-item {
    text-align: left;
    margin-bottom: 25px;
  }
.tabcco_id{
  margin-left: 80px;
  font-size: 28px;
}
.tabcco_id i{
  color: red;
}
</style>


