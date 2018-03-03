<template>
	<div id="nohandle">
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
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
        <el-button 
        	@click="handleClick(scope.row)" 
        	type="text" 
        	size="small">查看详情</el-button>
        <el-button
          size="mini"
          type="success"
          @click="handleEdit(scope.$index, scope.row)">去处理</el-button>
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
				no_handle_order_url:'http://localhost/TabaccoSystem/php/no_handle_order.php',
        to_deal_with_url:'http://localhost/TabaccoSystem/php/to_deal_with.php',
				tableData: [],
				dialogTableVisible: false,
				gridData:[],
				a:[],
        order_number:'',
        type:'正常订单'
			}
		},
		methods: {
      getData:function(){
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
      },
      handleClick(row) {
      	var a = []
      	a.push(row)
      	this.gridData = a
      	this.dialogTableVisible=true
    	},
    	handleEdit(index, row) {
        console.log(row.gid)
        console.log(row.order_quantity)
				this.$confirm('确定订单完成么？是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // console.log(row.order_num)
          var bodyformdata = new FormData()
          var that = this
          bodyformdata.append('order_number',row.order_num)
          bodyformdata.append('gid',row.gid)
          bodyformdata.append('order_quantity',row.order_quantity)
          bodyformdata.append('order_type',this.type)
          axios({
            method:'POST',
            url:this.to_deal_with_url,
            data:bodyformdata,
            config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
          })
          .then((res) =>{
            console.log(res)
            if(res.data.status==1){
              this.$message({
                type: 'success',
                message: '订单处理成功!',
                duration:3000,
                onClose:function(){
                  that.getData()
                }
              });
            }
            else if (res.data.status==0) {
              this.$message({
                type: 'error',
                message: '处理失败!!!',
                duration:3000,
              });
            }
          })
          .catch((error) =>{
            console.log(error)
          })
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消处理',
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
	#nohandle{
		width: 86%;
		float: left;
	}
</style>