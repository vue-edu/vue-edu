<template>
    <div class="main">
      <div class="main-nav">
        <div class="main-nav-img">
          <span class="del" @click="del"><img src="../img/management/del.png" alt=""></span>
          <span class="import"><img src="../img/management/in.png" alt=""></span>
          <span class="export"><img src="../img/management/out.png" alt=""></span>
        </div>
        <div class="main-nav-condition">
          <el-select v-model="label" placeholder="请选择" class="select pos" style="width :100px">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" class="option">
            </el-option>
          </el-select>
          <div class="model pos" @click="centerDialogVisible = true">{{'请选择'+label}}</div>
           <el-dialog title="选择员工" :visible.sync="centerDialogVisible" width="40%" center>
            <div class="sousuo">
              <input type="text" placeholder="姓名">
              <button>查询</button>
            </div>
            <div class="choose-worker">

            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
           </el-dialog>
          <span class="search pos">
            <input type="text" placeholder="请输入用户名称" class="search_userName">
            <span><img src="../img/management/search.png" alt="搜索图"></span>
          </span>
          
          <el-popover placement="bottom" width="560" trigger="click">
            <el-table :data="conditionData" class="ad">
              <el-table-column width="80">客户状态：</el-table-column>
              <el-table-column width="80" @click="choose = 1" :class="{item:choose==1}" id="item" property="all"></el-table-column>
              <el-table-column width="80" @click="choose = 2" :class="{item:choose==2}" property="success"></el-table-column>
              <el-table-column width="80" @click="choose = 3" :class="{item:choose==3}" property="audition"></el-table-column>
              <el-table-column width="80" @click="choose = 4" :class="{item:choose==4}" property="thinking"></el-table-column>
              <el-table-column width="80" @click="choose = 5" :class="{item:choose==5}" property="sign" ></el-table-column>
            </el-table>
            <el-table :data="conditionData">
              <el-table-column width="80">意向级别：</el-table-column>
              <el-table-column width="80" property="all" ></el-table-column>
              <el-table-column width="80" property="one"></el-table-column>
              <el-table-column width="80" property="two"></el-table-column>
              <el-table-column width="80" property="three"></el-table-column>
              <el-table-column width="80" property="four"></el-table-column>
              <el-table-column width="80" property="five" ></el-table-column>
              
            </el-table>
            <el-button slot="reference" class="pos sizer">筛选条件</el-button>
          </el-popover>
           
        </div>
      </div>
      <div class="data">
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark"  @selection-change="handleSelectionChange">
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column label="客户状态">
            <template slot-scope="scope">{{ scope.row.userstate }}</template>
          </el-table-column>
          <el-table-column prop="disposition" label="意向级别" ></el-table-column>
          <el-table-column prop="leader" label="主负责人"></el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        centerDialogVisible: false,
        tableData: [
         {
          id:'',
          name: '王小虎',
          phone:1355555555,          
          leader:"付中",
          disposition:"一星",
          userstate:"已试听"
         },
         {
          id:'',
          name: '王小虎',
          phone:1355555555,          
          leader:"付中",
          disposition:"一星",
          userstate:"已试听"
         },
         {
          id:'',
          name: '王小虎',
          phone:1355555555,          
          leader:"付中",
          disposition:"一星",
          userstate:"已试听"
         },
         {
          id:'',
          name: '王小虎',
          phone:1355555555,          
          leader:"付中",
          disposition:"一星",
          userstate:"已试听"
         }                     
        ],
        
        multipleSelection: [],
        conditionData:[
          {
            all:"全部",
            success:"转化成功",
            audition:"已试听",
            thinking:"考虑中",
            sign:"待签约",
            none:"无",
            one:"一星",
            two:"二星",
            three:"三星",
            four:"四星",
            five:"五星",
          }
        ],
        choose:1,
        options: [{
          value: '主负责人',
          label: '主负责人'
          }],
          label: ''
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      negation(state){
        this.state = !state;
        console.log("state");
      },
      del(){  
        if(this.multipleSelection.length == 0){
            this.$confirm('你没有选择任何客户，无法操作!', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
        }
        else{
          this.$confirm('此操作将永久删除该客户, 是否继续?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',           
          });
        })
        .then(()=>{
          this.multipleSelection.forEach((item)=>{
          this.tableData.splice(this.tableData.indexOf(item),1)
        }) 
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
            
        }
      },
      
    }
}
</script>

<style lang="less" scoped>
  body{
    background: #EEF1F6;
    
    ul li{
      list-style-type: none;
      display: inline;
      margin-left: 20px;
    }
    
    .main{
      width: 95%;
      margin: auto;
      background: #fff;
      border-radius: 10px;
      .main-nav{
        width: 98%;
        height: 60px;
        margin:20px auto;
        
        .main-nav-img{
          width: 200px;
          height: 60px;
          margin-left: 50px;
          float: left;
          
          span{
            display: block;
            cursor: pointer;
            width: 35px;
            height: 35px;
            background: #FB6666;
            float: left;
            border-radius:5px;
            margin-left: 10px;
            margin-top: 15px;
          }
          .del{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .import{
            display: flex;
            justify-content: center;
            align-items: center;
            background: #3AD1BA;
          }
          .export{
            display: flex;
            justify-content: center;
            align-items: center;
            background: #F9CE3B;
          }
        }
        .main-nav-condition{
          float: right;
          margin-top: 15px;
          margin-right: 30px;
          overflow: hidden;
          .pos{
            float:left;
          }
          
          .model{
            width: 110px;
            height: 28px;
            border:2px solid #EEF1F6;  
            border-left: 0;
            color: rgb(206, 203, 203); 
            text-align: center;
            line-height: 28px;
          }
          .model:hover{
            border:1px solid #5991FF;
            color: #5991FF;
            cursor: pointer;
          }
          input{
            height: 32px;
            width: 110px;
            border-left: 0;
            border:2px solid #EEF1F6;
          }
          .search{
            display:inline-block;
            width: 143px;
            height: 30px;
            margin-left: 20px;
            border:2px solid #EEF1F6;
            border-collapse: collapse;
            input{
              float: left;
              height: 30px;
              border-left:0;
             
            }
            span{
              display:inline-block;
              height: 30px;
              width: 31px;
              background: #F2F2F2;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            span:hover{
              background: rgba(89, 144, 255, 0.699);
              color: #fff;
              cursor: pointer;
            }
            .search_userName{
              border-top: 0;
              border-bottom: 0;
            }
          }
         .sizer{
           display: block;
           height: 32px;
           width: 90px;
           border: 2px solid #EEF1F6;
           display: flex;
           justify-content: center;
           align-items: center;
           margin-left: 20px;
           border-radius: 5px;
         }
         .sizer:hover{
           cursor: pointer;
           border: 1px solid #5991FF;
           color: #5991FF;
           background: #EDF2FF;
         }
        }
      }
      .data{
        width: 98%;
        margin: 5px;
        line-height: 0;
      }
    }

  }
    .select{
      line-height: 0;
    }
    
    
    
  
// 模态框导航样式
 /deep/ .el-dialog__header{
  height: 50px;
  line-height: 50px;
  background: #5991FF;
}



// 模态框关闭按钮大小
 /deep/ .el-icon-close:before {
   font-size: 40px;
}
 /deep/.el-dialog__body{
   padding: 0,0,0,0;
 }
 /deep/ .el-dialog__body {
    text-align: initial;
    padding: 0;
}
// 模态框搜索
.sousuo{
  height: 50px;
  line-height: 50px;
  width: 100%;
  background: #EEF1F6;
  input{
    margin-left: 20px;
    width: 200px;
  }
  button{
    width: 60px;
    height: 35px;
    border-radius: 5px;
    border: 0;
    background: #5991FF;
    color: #fff;
    margin-left: 10px;
  }
  
}

.choose-worker{
  height: 400px;
}

/deep/ .el-dialog__footer{
  height: 60px;
  line-height: 60px;
  padding: 0;
  background: #EEF1F6;
}
    
</style>