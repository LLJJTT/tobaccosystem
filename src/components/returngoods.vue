<template>
	<div id="returngoods">
		<el-table
			class="data_db"
	    :data="tableData"
	    border
	    max-height="800"
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
	      label="单价/元"
			 >
	    </el-table-column>
	    <el-table-column
	      prop="orderer"
	      label="订货人"
			 >
	    </el-table-column>
	    <el-table-column
	      prop="order_amount"
	      label="订单总价/元"
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
	      fixed="right"
	      label="操作"
	      >
	      <template slot-scope="scope">
	        <el-button 
	        @click="handleEdit(scope.$index, scope.row)" 
	        type="danger" 
	        size="small">确定退货</el-button>
	      </template>
	    </el-table-column>
	  </el-table>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				return_order_url:'http://localhost/TabaccoSystem/php/return_order.php',
				to_return_goods_url:'http://localhost/TabaccoSystem/php/to_return_goods.php',
				tableData: [],
				type:'退货订单'
			}
		},
		methods: {
			getData:function(){
				axios({
	    		method:'GET',
	    		url:this.return_order_url,
	    		config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
	    	})
	    	.then((res) =>{
	    		if(res.status==200){
	    			this.tableData = res.data
	    		}
	    	})
			},
      handleEdit(index, row) {
				this.$confirm('确定给与退货么？是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	var bodyformdata = new FormData()
          var that = this
          bodyformdata.append('order_number',row.order_num)
          bodyformdata.append('gid',row.gid)
          bodyformdata.append('order_quantity',row.order_quantity)
          bodyformdata.append('order_type',this.type)
          axios({
            method:'POST',
            url:this.to_return_goods_url,
            data:bodyformdata,
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
          })
          .then((res) =>{
            if(res.data.status==1){
              this.$message({
                type: 'success',
                message: '退货办理成功!',
                duration:3000,
                onClose:function(){
                  that.getData()
                }
              });
            }
            else if (res.data.status==0) {
              this.$message({
                type: 'error',
                message: '退货办理失败!!!',
                duration:3000,
              });
            }
          })
        }).catch(() => {
          this.$message({
            type: 'error',
            message: '已取消',
            duration:3000,
          });          
        });
        // console.log(index, row);
      },
    },
    created:function(){
    	this.getData()
    }
	}
</script>
<style scoped>
	#returngoods{
		width: 86%;
		float: left;
	}
</style>