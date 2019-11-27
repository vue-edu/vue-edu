<template>
  <div class="Course">
    <div class="all-item">
      <div class="header-item">
        <span style="color:red">*</span>
        <span>姓名</span>
        <el-input v-model="input1" placeholder="请输入" class="name-item"></el-input>
        <el-button type="primary" class="name-btn"><i class="el-icon-user-solid"></i></el-button>
        <span style="color:red">*</span>
        <span>手机号</span>
        <el-input v-model="input2" placeholder="请输入" class="name-item"></el-input>
        <span style="color:red">*</span>
        <span>性别</span>
        <el-radio v-model="radio" label="1" class="sex-radio">男</el-radio>
        <el-radio v-model="radio" label="2">女</el-radio>
        <!-- 更多信息模态框 -->
        <el-button type="text" @click="dialogFormVisible = true" class="more-btn">填写更多信息</el-button>
        <el-dialog title="新增学员" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <div class="model-form-item">
              <p class="part-title">基本信息</p>
              <!-- 姓名 -->
              <span class="label-in"><span style="color:red">*</span>姓名</span>
              <el-input v-model="input1" placeholder="请输入" class="name-item-in"></el-input>
              <!-- 英文名 -->
              <span class="label-in">英文名</span>
              <el-input v-model="input2" placeholder="请输入" class="name-item-in"></el-input>
              <!-- 手机号 -->
              <span class="label-in"><span style="color:red">*</span>手机号</span>
              <el-input v-model="Mtelphone" placeholder="请输入" class="name-item-in"></el-input>
              <!-- 性别 -->
              <span class="label-in"><span style="color:red">*</span>性别</span>
              <el-radio v-model="radio" label="1" class="sex-radio">男</el-radio>
              <el-radio v-model="radio" label="2">女</el-radio>
              <!-- 学员类别 -->
              <span class="label-in">学员类别</span>
              <el-select v-model="stusort" placeholder="请选择" class="name-item-in">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <!-- 公立学校 -->
              <span class="label-in">公立学校</span>
              <el-input v-model="Wschool" placeholder="请输入" class="name-item-in"></el-input>
              <!-- 年级 -->
              <span class="label-in">年级</span>
              <el-select v-model="grade" placeholder="请选择" class="name-item-in">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <!-- 公立学校班级 -->
              <span class="label-in">公立学校班级</span>
              <el-input v-model="Pubcg" placeholder="请输入" class="name-item-in"></el-input>
              <!-- 所属校区 -->
              <span class="label-in"><span style="color:red">*</span>校区</span>
              <el-select v-model="scharea" placeholder="请选择" class="name-item-in">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <!-- 招生来源 -->
              <span class="label-in">招生来源</span>
              <el-select v-model="source" placeholder="请选择" class="name-item-in">
                <el-option
                  v-for="item in options4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <!-- 报名日期 -->
              <div class="block">
                <span class="demonstration"><span style="color:red">*</span>报名日期</span>
                <el-date-picker
                  v-model="Dtime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
              <!-- 招生人员 -->
              <span class="demonstration">招生人员</span>
              <el-input v-model="recruitStaff" placeholder="请输入" class="recruitStaff"></el-input>
              <el-button type="primary" style="height:35px">选择</el-button>
              <!-- 身份证 -->
              <span class="label-in">身份证</span>
              <el-input v-model="idcard" placeholder="请输入" class="name-item-in"></el-input>
              <!-- 出生日期 -->
              <div class="block">
                <span class="demonstration"><span style="color:red">*</span>报名日期</span>
                <el-date-picker
                  v-model="birthday"
                  type="date"
                  placeholder="选择日期"
                  class="name-item-in">
                </el-date-picker>
              </div>
              <!-- 备注 -->
              <span class="label-in">备注</span>
              <el-input v-model="remarks" placeholder="请输入" class="remarks"></el-input>
              <!-- 联系信息板块 -->
              <div>
                <p class="baseIn">基本信息</p>
              </div>
              <!-- 亲人名字 -->
              <el-select v-model="relative" placeholder="请选择" class="relative">
                <el-option
                  v-for="item in options5"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input v-model="relativename" placeholder="请输入内容" class="basic"></el-input>
              <!-- 亲人电话 -->
              <span class="relativetel">电话</span>
              <el-input v-model="relativetel" placeholder="请输入内容" class="basic"></el-input>
              <!-- 亲人职业 -->
              <span class="relativetel">职业</span>
              <el-input v-model="relativework" placeholder="请输入内容" class="basic"></el-input>
              <!-- QQ -->
              <span class="label-in">QQ</span>
              <el-input v-model="qq" placeholder="请输入" class="name-item-in"></el-input>
              <!-- 家庭地址 -->
              <span class="label-in">家庭地址</span>
              <el-input v-model="address" placeholder="请输入" class="name-item-in"></el-input>
            </div>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1:'',
      input2:'',
      radio:'1',
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        dialogFormVisible: false,
        Mtelphone:'',/* 模态框里面的电话 */
        /* 学员类别 */
        options1: [{
            value: '选项1',
            label: '会员'
          }, {
            value: '选项2',
            label: '非会员'
        },],
        stusort: '',
        /* 公立学校 */
        Wschool:'',
        /* 年级 */
        grade:'',
        options2: [{ /* 年级 */
            value: '选项1',
            label: '小班'
          }, {
            value: '选项2',
            label: '中班'
          },{
            value: '选项3',
            label: '大班'
          },{
            value: '选项4',
            label: '一年级'
          },{
            value: '选项5',
            label: '二年级'
          },{
            value: '选项6',
            label: '三年级'
          },{
            value: '选项7',
            label: '四年级'
          },{
            value: '选项8',
            label: '五年级'
          },{
            value: '选项9',
            label: '六年级'
          },{
            value: '选项10',
            label: '初一'
          },{
            value: '选项11',
            label: '初二'
          },{
            value: '选项12',
            label: '初三'
          },{
            value: '选项13',
            label: '高一'
          },{
            value: '选项14',
            label: '高二'
          },{
            value: '选项15',
            label: '高三'
          },{
            value: '选项16',
            label: '高中毕业'
          },{
            value: '选项17',
            label: '大学'
          },{
            value: '选项18',
            label: '成人'
          },{
            value: '选项19',
            label: '其他'
      },],
        Pubcg:'',/* 公立学校班级 */
        /* 所属校区 */
        options3:[{
          value: '选项1',
            label: '北校区'
          }, {
            value: '选项2',
            label: '教学部'
        }],
        scharea:'',
        /* 招生来源 */
        options4: [{ /* 招生来源 */
            value: '选项1',
            label: '预约试听'
          }, {
            value: '选项2',
            label: '在线报名'
          }, {
            value: '选项3',
            label: '退学转入'
          }, {
            value: '选项4',
            label: '老生推荐'
        }],
        source:'',
        /* 报名日期 */
        Dtime:'',
        /* 招生人员 */
        recruitStaff:'',
        /* 身份证 */
        idcard:'',
        /* 生日 */
        birthday:'',
        /* 亲人姓名 */
        relative:'',
        relativename:'',
        relativetel:'',
        relativework:'',
        options5:[{
            value:'爸爸',
            label:'爸爸'
          },{
            value:'妈妈',
            label:'妈妈'
          },{
            value:'爷爷',
            label:'爷爷'
          },{
            value:'奶奶',
            label:'奶奶'
        },],
        /* qq */
        qq:'',
        address:''
    }
  }
}
</script>

<style lang="less" scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .all-item {
    padding: 10px;
    width: 98%;
    height: 700px;
    overflow: auto;
    background: #DCDFE6;
    .header-item {
      background: white;
      padding: 20px 30px 0 0;
      padding: 10px;
      .name-item {
        width: 160px;
        height: 32px;
        margin:0 12px
      }
      .name-btn {
        width: 44px;
        height: 32px;
        margin: 0 30px 0 10px;
      }
      .sex-radio {
        margin: 0 15px
      }
      .more-btn {
        font-size: 14px;
        float: right;
      }
      .model-form-item {
        border: 1px solid #DCDFE6;
        height: 450px;
        overflow: auto;
        .name-item-in {
          width: 175px;
          height: 32px;
        }
        .part-title {
          border-bottom: 1px solid #DCDFE6;
          padding: 10px 0
        }
        .label-in {
          display: inline-block;
          width: 145px;
          padding-right: 10px;
          text-align: right;
          margin-bottom: 20px
        }
        .demonstration {
          width: 145px;
          text-align: right;
          display: inline-block;
          padding-right: 10px;
          margin: 0 0 20px
        }
        .recruitStaff {
          width: 450px;
        }
        .remarks {
          width: 500px;
        }
        .baseIn {
          border: 1px solid #DCDFE6;
          padding:10px 0;
        }
        .relative {
          width: 80px;
          height: 32px;
          margin: 10px 0 10px 10px
        }
        .basic {
          width: 150px;
          display: inline-block;
          height: 32px;
        }
        .relativetel {
          width: 50px;
          display: inline-block;
          text-align: center;

        }
      }
    }
  }
</style>