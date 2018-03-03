<template>
	<div id="alreadyhandle">
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
    <el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog title="订单详情" 
  	:visible.sync="dialogTableVisible"
  	width="80%"
  >
	  <el-table :data="gridData">
	    <el-table-column prop="order_num" label="订单号"></el-table-column>
	    <el-table-column prop="date" label="日期"></el-table-column>
	    <el-table-column prop="goods_name" label="名称"></el-table-column>
	    <el-table-column prop="order_quantity" label="订货数量"></el-table-column>
	    <el-table-column prop="unit_price" label="单价"></el-table-column>
	    <el-table-column prop="order_amount" label="订单总价"></el-table-column>
	    <el-table-column prop="orderer" label="订货人"></el-table-column>
	    <el-table-column prop="address" label="收货地址"></el-table-column>
	    <el-table-column prop="contact" label="联系方式"></el-table-column>
	    <el-table-column prop="remarks" label="备注"></el-table-column>
	  </el-table>
	</el-dialog>

	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				no_handle_order_url:'http://localhost/TabaccoSystem/php/already_handle_order.php',
				tableData: [],
				dialogTableVisible: false,
				gridData:[],
				a:[]
			}
		},
		methods: {
      handleClick(row) {
      	var a = []
      	a.push(row)
      	this.gridData = a
      	this.dialogTableVisible=true
    	}
    },
    created:function(){
    	axios({
    		method:'GET',
    		url:this.no_handle_order_url,
    		config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
    	})
    	.then((res) =>{
    		if(res.status==200){
    			this.tableData = res.data
    		}
    	})
    }
	}
</script>
<style scoped>
	#alreadyhandle{
		width: 86%;
		float: left;
	}
</style>