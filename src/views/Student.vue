<template>
  <div class="student-item">
    <div class="wrap-item">
      <div class="search-item">
      <span>报名日期：</span>
      <div class="search-item-one">
        <div class="block search-begin">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期" class="search-input">
          </el-date-picker>
        </div>
        <div class="block search-end">
          <span class="demonstration">至</span>
          <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions" class="search-input">
          </el-date-picker>
        </div>
      </div>
      <el-input v-model="input1" placeholder="学生姓名/学号/学生电话" class="In-student"></el-input>
      <el-button type="primary" class="search-btn">查询</el-button>
      <el-button class="remove-btn">重置</el-button>
      <el-checkbox v-model="checked1" class="check-btn">包含跨校区学员</el-checkbox>
      <div class="advance-query" @click="getrotate" :class="{on: rob}"><i class="el-icon-d-arrow-left"></i></div>
      </div>
        <div class="options-item" v-show="rob">
          <!-- 学员状态 -->
          <el-select v-model="value" placeholder="学员状态" class="state-options">
            <el-option
              v-for="item in options1"
              :key="item.state1"
              :label="item.label"
              :value="item.state1">
            </el-option>
          </el-select>
          <!-- 招生来源 -->
          <el-select v-model="value" placeholder="招生来源" class="state-options">
            <el-option
              v-for="item in options2"
              :key="item.state2"
              :label="item.label"
              :value="item.state2">
            </el-option>
          </el-select>
          <!-- 学员类别 -->
          <el-select v-model="value" placeholder="学员类别" class="state-options">
            <el-option
              v-for="item in options3"
              :key="item.state3"
              :label="item.label"
              :value="item.state3">
            </el-option>
          </el-select>
          <!-- 年级 -->
          <el-select v-model="value" placeholder="年级" class="state-options">
            <el-option
              v-for="item in options4"
              :key="item.state4"
              :label="item.label"
              :value="item.state4">
            </el-option>
          </el-select>
          <el-input v-model="input2" placeholder="公立学校" class="state-options"></el-input>
          <el-input v-model="input3" placeholder="公立学校班级" class="state-options"></el-input>
          <!-- 出生年月 -->
          <div class="search-item">
            <span>出生日期：</span>
            <div class="search-item-one">
              <div class="block search-begin">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="value3"
                  type="date"
                  placeholder="选择日期" class="search-input">
                </el-date-picker>
              </div>
              <div class="block search-end">
                <span class="demonstration">至</span>
                <el-date-picker
                  v-model="value4"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions" class="search-input">
                </el-date-picker>
              </div>
            </div>
            <!-- 课程选择模态框 -->
            <el-input v-model="input4" placeholder="请选择课程" disabled class="course-op"></el-input>
            <el-button type="info" @click="dialogTableVisible1 = true" class="sel-btn">选择</el-button>
            <el-input v-model="input5" placeholder="请选择班级" disabled class="course-op"></el-input>
            <el-button type="info" @click="dialogTableVisible2 = true" class="sel-btn">选择</el-button>
            <div class="model-item">
              <el-dialog title="选择课程" :visible.sync="dialogTableVisible1" class="first-model">
                <div class="model-filter">
                  <el-input v-model="input6" placeholder="请输入内容" class="model-input"></el-input>
                  <el-button type="primary" class="search-btn">查询</el-button>
                  <el-button class="remove-btn">重置</el-button>
                  <el-checkbox v-model="checked2" class="check-btn">集体班</el-checkbox>
                  <el-checkbox v-model="checked3" class="check-btn">一对一</el-checkbox>
                  <div class="box-wrap-item">
                    <el-table
                      :data="CourseSel"
                      style="width: 100%">
                      <el-table-column
                        prop="course"
                        label="课程"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="subject"
                        label="科目"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="sort"
                        label="类别">
                      </el-table-column>
                      <el-table-column
                        prop="price"
                        label="价格">
                      </el-table-column>
                    </el-table>
                  </div>
                  <div class="course-model-footer">
                    <span class="al-sel">已选:</span>
                    <el-button class="remove-btn">取消</el-button>
                    <el-button type="primary" class="search-btn">确定</el-button>
                  </div>
                </div>
              </el-dialog>
              <el-dialog title="选择班级" :visible.sync="dialogTableVisible2" class="first-model">
                <el-input v-model="input7" placeholder="请输入内容" class="model-input"></el-input>
                <el-button type="primary" class="search-btn">查询</el-button>
                <el-button class="remove-btn">重置</el-button>
                <el-checkbox v-model="checked4" class="check-btn">包含已结业班级</el-checkbox>
                <div class="box-wrap-item">
                  <el-table
                    :data="gradeSel"
                    style="width: 100%">
                    <el-table-column
                      prop="grade"
                      label="班级"
                      width="90">
                    </el-table-column>
                    <el-table-column
                      prop="course"
                      label="课程"
                      width="90">
                    </el-table-column>
                    <el-table-column
                      prop="teacher"
                      label="老师">
                    </el-table-column>
                    <el-table-column
                      prop="num"
                      label="人数">
                    </el-table-column>
                    <el-table-column
                      prop="classroom"
                      label="教室">
                    </el-table-column>
                    <el-table-column
                      prop="Bdate"
                      label="开始时间">
                    </el-table-column>
                    <el-table-column
                      prop="Edate"
                      label="结束时间">
                    </el-table-column>
                  </el-table>
                </div>
                <div class="course-model-footer">
                  <span class="al-sel">已选:</span>
                  <el-button class="remove-btn">取消</el-button>
                  <el-button type="primary" class="search-btn">确定</el-button>
                </div>
              </el-dialog>
            </div>
          </div>
      </div>
    </div>
    <div class="content-item">
      <div class="tools-bar">
        <el-button type="primary" class="tools-btn">新学员报名</el-button>
        <el-button disabled class="tools-btn">批量修改</el-button>
        <el-button type="danger" class="del-btn"><i class="el-icon-delete"></i></el-button>
        <el-button type="success" class="del-btn"><i class="el-icon-upload2"></i></el-button>
        <el-button type="primary" class="del-btn"><i class="el-icon-download"></i></el-button>
        <el-button class="sel-list">选择列</el-button>
        <!-- <table class="table-item">
          <tr class="first-tr">
            <th v-for="(item,index) in list" :key='index'>{{item}}</th>
          </tr>
        </table> -->
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            v-model="checked5"
            type="selection">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="num"
            label="学号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态">
        </el-table-column>
        <el-table-column
            prop="tel"
            label="手机号码">
        </el-table-column>
        <el-table-column
            prop="classes"
            label="在读班级数">
        </el-table-column>
        <el-table-column
            prop="remaining"
            label="剩余学费">
        </el-table-column>
        <el-table-column
            prop="arrearage"
            label="欠费金额">
        </el-table-column>
        <el-table-column
            prop="integral"
            label="积分">
        </el-table-column>
        <el-table-column
            prop="Bdate"
            label="报名日期">
        </el-table-column>
    </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1:'',/* 起始时间 */
      value2:'',/* 结束时间 */
      input1:'',/* 学生姓名/学号/学生电话 */
      checked1:'',/* 包含跨校区学员 */
      checked2: '',/* 课程选择模态框集体班 */
      checked3:'',/* 课程选择模态框一对一 */
      checked4:'',/* 班级选择模态框 */
      checked5:'',/* 学员表的多选框 */
      options1: [{ /* 学生状态 */
          state1: '选项1',
          label: '在读'
        }, {
          state1: '选项2',
          label: '退学'
      }],
      state1:'',
      options2: [{ /* 招生来源 */
          state2: '选项1',
          label: '预约试听'
        }, {
          state2: '选项2',
          label: '在线报名'
        }, {
          state2: '选项3',
          label: '退学转入'
        }, {
          state2: '选项4',
          label: '老生推荐'
      }],
      state2:'',
      /* 翻滚图标 */
      rob:false,
      options3: [{ /* 学员类别 */
          state3: '选项1',
          label: '会员'
        }, {
          state3: '选项2',
          label: '非会员'
      },],
      state3:'',
      options4: [{ /* 年级 */
          state4: '选项1',
          label: '小班'
        }, {
          state4: '选项2',
          label: '中班'
        },{
          state4: '选项2',
          label: '大班'
        },{
          state4: '选项2',
          label: '一年级'
        },{
          state4: '选项2',
          label: '二年级'
        },{
          state4: '选项2',
          label: '三年级'
        },{
          state4: '选项2',
          label: '四年级'
        },{
          state4: '选项2',
          label: '五年级'
        },{
          state4: '选项2',
          label: '六年级'
        },{
          state4: '选项2',
          label: '初一'
        },{
          state4: '选项2',
          label: '初二'
        },{
          state4: '选项2',
          label: '初三'
        },{
          state4: '选项2',
          label: '高一'
        },{
          state4: '选项2',
          label: '高二'
        },{
          state4: '选项2',
          label: '高三'
        },{
          state4: '选项2',
          label: '高中毕业'
        },{
          state4: '选项2',
          label: '大学'
        },{
          state4: '选项2',
          label: '成人'
        },{
          state4: '选项2',
          label: '其他'
      },],
      state4:'',
      input2:'',/* 公立学校 */
      input3:'',/* 公立学校班及 */
      value3:'',/* 出生年月 */
      value4:'',/* 今年 */
      input4:'',/*  课程*/
      input5:'',/* 请选择班级 */
      input6:'',/* 课程选择模态框搜索值 */
      input7:'',/* 班级选择模态框搜索值 */
      dialogTableVisible1: false,/* 第一个模态框显现 */
      dialogTableVisible2:false,
      formLabelWidth: '120px',
      CourseSel: [{
          course: '数学',
          subject: '数学',
          sort: '基础班',
          price:'100.00'
        },],
      gradeSel: [{
        grade: '数学',
        course: '数学',
        teacher: '基础班',
        num:'100.00',
        classroom:'1',
        Bdate:'1',
        Edate:'1'
      },],
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods:{
    getrotate() {
      this.rob = !this.rob
    }
  }
}
</script>

<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0
  }
  .wrap-item {
    padding: 16px 0 16px 0;
    background: white;
  }
  /* 整个DIV */
  .student-item {
    padding: 10px;
    width: 98%;
    height: 700px;
    overflow: auto;
    background: #DCDFE6
  }
  /* 搜索的DIV */
  .search-item-one {
    height: 32px;
    border: 1px solid #DCDFE6;
    display: inline-block;
    padding: 3px 10px;
    border-radius: 5px
  }
  .search-begin,
  .search-end {
    display: inline-block;
  }
  .search-input {
    width: 140px;
    border: none;
    outline: 0
  }
  .In-student {
    display: inline-block;
    width: 200px;
    height: 32px;
    padding: 0 0 0 20px
  }
  .search-btn,
  .remove-btn {
    width: 56px;
    height: 32px;
  }
  .check-btn {
    padding: 0 20px 
  }
  /* 下拉的DIV块 */
  .advance-query {
    float: right;
    width: 50px;
    height: 30px;
    transform: rotate(-90deg);
    text-align: center;
    line-height: 30px;
    font-size: 24px
  }
  .on {
    transform: rotate(90deg);
  }
  .options-item {
    margin: 10px 0
  }
  .state-options {
    width: 187px;
    height: 32px;
    margin: 0 10px 10px 0
  }
  .model-item,
  .course-op {/* 模态框1 */
    display: inline-block
  }
  /* 选择BTN */
  .sel-btn {
    width: 54px;
    height: 32px;
  }
  .course-op {
    width: 185px;
    height: 35px;
    padding-left:15px
  }
  .first-model {
    .model-input {
      width: 187px;
      height: 32px;
    }
    .al-sel {
      width: 500px;
      display: inline-block;
    }
    .course-model-footer {
      padding: 10px 20px;
      margin-top: 10px;
    }
    .model-filter {
      padding: 16px 10px 16px;
      background: white
    }
  }
  .content-item {
    margin-top: 1px;
    background: white;
    height: 500px;
    padding: 10px;
    overflow: auto;
    .tools-bar {
      height: 42px;
      padding: 0 0 10px
    }
    .tools-btn {
      width: 90px;
      height: 32px;
    }
    .del-btn {
      width: 44px;
      height: 32px;
    }
    .sel-list {
      float: right;
      width: 80px;
      height: 32px;
    }
    .table-item {
      width: 100%;
      .first-tr {
        height: 57px;
        padding: 8px 0;
        background: #E2E8F4;
        color: #657baf;
        text-align: left;
      }
    }
  }
</style>