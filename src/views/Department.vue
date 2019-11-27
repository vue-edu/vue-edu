<template>
  <div class="Department">
    <router-view />
    <div class="line1">
      <div class="line1_left">
        <input type="text" class="text" placeholder="部门名" />
        <div class="search">
          <i class="el-icon-search"></i>
        </div>
      </div>
      <div class="line1_right">
        <el-button type="primary" class="find" >查询</el-button>
        <el-button plain class="find">重置</el-button>
      </div>
    </div>
    <div class="buts">
      <el-button plain>
        全部展开
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
    </div>
    <div class="department" >
      <ul class="table">
        <li>
          <div>
            <div class="thead_one def">部门名称</div>
            <div class="thead_two def">负责人</div>
            <div class="thead_tri def" >联系人</div>
          </div>
        </li>
        <li>
          <div class="cj">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            <div class="dot">...</div>
            <div class="dots">
              <div class="pub" v-for="(item,index) in list" :key="index">...</div>
            </div>
            <div class="people">
              <div class="call" v-for="(item,index) in people" :key="index"  >{{item.name}}</div>
            </div>
            <div class="person">
              <div class="call" v-for="(item,index) in people" :key="index">{{item.phone}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
  <el-table
    :data="tableData"
    style="width: 100%;margin-bottom: 20px;line-height:0;color: #657baf;
    
    background-color: #e2e8f4;"
    row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
    <el-table-column
      prop="date"
      label="部门名称"
      sortable
      width="680">
    </el-table-column>
    <el-table-column
      prop="name"
      label="负责人"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="联系方式">
    </el-table-column>
  </el-table>

  
</div>
  </div>
  
</template>
<style>
.dep {
  background-color: rgb(97, 20, 20);
}
.pub {
  width: 28px;
  height: 28px;
  margin-left: -1px;
  letter-spacing: 1px;
  font-weight: bold;
  line-height: 22px;
  text-align: center;
  border-radius: 50%;
  color: #606266;
  font-size: 14px;
  border: 1px solid #e5e8ee;
  margin-bottom: 6px;
  margin-top: 0px;
  cursor: pointer;
}
.line1 {
  height: 60px;
  overflow: hidden;
  border-bottom: 1px solid #e3e1ea;
  display: flex;
  align-items: center;
}
.line1_left {
  width: 300px;
  height: 32px;
  float: left;
  align-items: center;
  display: flex;
  position: relative;
}
.el-tree-node__content {
  padding-left: 6px;
}
.line1_right {
  width: 132px;

  float: left;
  margin-left: 10px;
  overflow: hidden;
}

.line_right .find {
  width: 24px;
  height: 16px;
  float: left;
  text-align: center;
  line-height: 16px;
}
.text {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  width: 300px;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  margin-left: 15px;
  height: 36px;
  line-height: 40px;
  outline: 0;
  text-indent: 16px;
}
::-webkit-input-placeholder {
  color: #dcdfe6;
}
.search {
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  right: 0;
  font-size: 16px;
  color: #dcdfe6;
}
.department {
  text-align: left;
  margin-left: 10px;
  margin-top: -48px;
  margin-left: 15px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.buts {
  text-align-last: left;
  margin-left: 14px;
  margin-top: -53px;
}
.all {
  border: 1px solid #f0f9eb;
}
.el-table--fit {
  border-right: 1px solid #f0f9eb;
  border-bottom: 0;
}

.table {
  width: 96%;
  border: 1px solid #f0f9eb;
}

.def {
  float: left;
  color: #657baf;
  font-weight: 700;
  height: 40px;
  font-size: 13px;
  background-color: #e2e8f4;
  line-height: 40px;
  text-indent: 16px;
}
.thead_one {
  width: 60%;
}
.thead_two {
  width: 20%;
}
.thead_tri {
  width: 20%;
}
.th {
  float: left;
}
.cj {
  width: 100%;
  margin-top: 39px;
  position: relative;
}
.el-tree /deep/ .el-tree-node__content {
  padding-left: 6px !important;
  height: 36px;
}
.dot {
  width: 28px;
  height: 28px;
  letter-spacing: 1px;
  font-weight: bold;
  line-height: 22px;
  text-align: center;
  border-radius: 50%;
  color: #606266;
  font-size: 14px;
  border: 1px solid #e5e8ee;
  position: absolute;
  top: 7px;
  right: calc(35% + 217px);
}
.dots {
  width: 28px;
  height: 161px;
  right: calc(35% + 217px);
  position: absolute;
  top: 40px;
}
.people {
  width: 100px;
  height: 161px;
  right: calc(35% - 60px);
  position: absolute;
  top: 40px;
}
.person{
  width: 100px;
  height: 161px;
  right: calc(10% - 6px);
  position: absolute;
  top: 40px;
}
.call {
  height: 36px;
  line-height: 36px;
}
.el-table td, .el-table th.is-leaf {
    /* border-bottom: 1px solid #EBEEF5; */
    /* color: #657baf; */
    /* background: #657baf; */
    background-color: #e2e8f4;
}
tbody{
  background-color: #fff;
}
.el-table--enable-row-transition .el-table__body td {
  background-color: #fff;
}
</style>
<script>
// @ is an alias to /src

/* export default {
  name: "Department",
  data() {
    return {
      data: [
        {
          label: "xxx",
          children: [
            {
              label: "北校区",
              children: [
                {
                  label: "安全部"
                }
              ]
            },
            {
              label: "南校区",
              children: [
                {
                  label: "教学部"
                }
              ]
            }
          ]
        }
      ],
      list: [{}, {}, {}, {}],
      people: [
        {
          name: "Tempest",
          phone: 13880510618
        },
        {
          name: "Smiles",
          phone: 17738135967
        },
        {
          name: "Lovers",
          phone: 18982265366
        },
        {
          name: "Soul",
          phone: 13660230428
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      isShow: false,
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    change(){
      console.log(isShow=!isShow);
    }
  }
}; */
export default {
    data() {
      return {
        tableData: [{
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }],
        
      }
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }
    },
  }
</script>
