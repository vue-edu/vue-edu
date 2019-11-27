<template>
  <div class="Grade">
    <div class="top">
      <div class="top-1"><!-- 第一行查询 -->
        <div class="demo-input-suffix top-1-inpute">
          <el-input placeholder="请输入课程名称" suffix-icon="el-icon-search" v-model="input1"></el-input>
        </div>
        <el-button type="primary" class="search-btn">查询</el-button>
        <el-button class="remove-btn">重置</el-button>
      </div>
      <span>报名日期：</span>
      
        <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
      
      <!-- 课程选择 -->
            <el-input v-model="input4" placeholder="请选择课程" disabled class="course-op"></el-input>
            <el-button type="info" @click="dialogTableVisible1 = true" class="sel-btn">选择</el-button>

      <!-- 课程选择模态框 -->
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
        <el-table
          :data="table-student"
          style="width: 100%" v-model="checked5">
          <el-table-column
            type="selection"
            width="50">
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
    
    <div class="mid">
      <el-button type="primary" icon="el-icon-circle-plus-outline" class="xinz-btn">新增</el-button>
      <el-button class="pil-btn"  disabled>批量修改</el-button>
      <el-button type="danger" class="shanc-btn" icon="el-icon-delete" plain disabled></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      value1: '',
      input4:'',/*  课程*/
      input6:'',/* 课程选择模态框搜索值 */
      dialogTableVisible1: false,/* 第一个模态框显现 */
      }
     
    }
  }

</script>
<style lang="less" scoped>

  *{
    margin: 0;
    padding: 0;
  }
  .top{
    width: 100%;
    border: 1px solid #ccc;
    background-color: #fff;
    padding: 15px 10px;
  }
  .top-1-inpute {
    display: inline-block;
    width: 300px;
    height: 32px;
    margin-right: 10px;
  }
  .search-btn,
  .remove-btn {
    width: 56px;
    height: 30px;
  }
  .xinz-btn{
    width: 70px;
    height: 30px;
  }
  .pil-btn{
    width: 80px;
    height: 30px;
  }
  .shanc-btn{
    width: 40px;
    height: 30px;
  }
  .top-1{
    margin-bottom: 10px;
  }
  .mid{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-top: none;
    background-color: #fff;
    padding-top: 15px;
    padding-right: 10px;
    padding-left: 10px;
  }
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
  //模态框1
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
  }
</style>