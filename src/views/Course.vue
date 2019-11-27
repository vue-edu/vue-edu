<template>
  <div class="Course">
    <div class="top">
      <div class="demo-input-suffix top-1-inpute">
        <el-input placeholder="请输入课程名称" suffix-icon="el-icon-search" v-model="input1"></el-input>
      </div>
      <el-button type="primary" class="search-btn">查询</el-button>
      <el-button class="remove-btn">重置</el-button>
        <!-- 多选框 -->
      <div class="top-2">
        <el-select
          style="margin-right: 10px;"
          v-model="value1"
          multiple
          collapse-tags
          placeholder="科目">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select><!-- 科目选择 -->

        <el-select
          v-model="value2"
          multiple
          collapse-tags
          placeholder="类别">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select><!-- 类别选择 -->
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
      options: [{
          value: '选项1',
          label: '语文'
        }, {
          value: '选项2',
          label: '数学'
        }, {
          value: '选项3',
          label: '英语'
        }, ],
        value1: [],
        options2: [{
          value: '选项1',
          label: '基础班'
        }, {
          value: '选项2',
          label: '提高班'
        }, {
          value: '选项3',
          label: '培优班'
        }, ],
        value2: []
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
  .top-2{
    margin-top: 10px;
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
</style>