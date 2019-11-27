<template>
  <div class="home">
    <el-container>
      <el-aside :class="{'shou' : isopenHead}">
        <Slide></Slide>
      </el-aside>
      <el-container>
        <el-header style="height: 50px">
          <i class="open-h el-icon-s-fold" @click="openH"></i>
          <div class="header-right">
            <i class="el-icon-files" title="任务管理中心"></i>
            <i class="el-icon-chat-dot-square" title="消息"></i>
            <i class="el-icon-reading" title="帮助"></i>
            
            <el-button @click="drawer = true" type="primary">
              <span class="sch-name">北校区</span><i class="el-icon-caret-bottom sch"></i>
            </el-button>
            <el-drawer
              title="北校区"
              size="220px"
              :modal="false"
              :visible.sync="drawer"
              :direction="direction">

              <div class="sch-content">
                <div class="sch-input">
                  <div>
                    <i class="el-icon-search"></i>
                    <input type="text" placeholder="请输入校区名称">
                  </div>
                </div>
              </div>
              <div class="sch-item">
                <p>北校区</p>
                <p>教学部</p>
              </div>
            </el-drawer>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Slide from "@/components/Slide.vue";

export default {
  name: "home",
  data () {
    return {
      drawer: false,
      direction: 'rtl',
      isopenHead: false
    }
  },
  components: {
    Slide
  },
  methods: {
    openH(e) {
      if (this.isopenHead){
        e.target.classList.remove("el-icon-s-unfold");
        e.target.classList.add("el-icon-s-fold");
      }else{
        e.target.classList.remove("el-icon-s-fold");
        e.target.classList.add("el-icon-s-unfold");
      }
      this.isopenHead = !this.isopenHead;
    }
  }  
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
.el-header {
  color: #333;
  text-align: left;
  height: 50px;
  line-height: 50px;
  padding: 0;
  .open-h {
    display: inline-block;
    width: 44px;
    height: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 50px;
    color: #b7c4db;
    cursor: pointer;
  }
  .header-right {
    float: right;
    i{
      width: 46px;
      height: 26px;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
    }
    .el-button{
      margin-left: 0 !important;
      margin-right: 20px;
      padding: 9px 10px;
      font-size: 14px;
      background: #3673ff;
      border-radius: 18px;
      cursor: pointer;
      .sch-name{
        display: inline-block;
        text-align: right;
        padding-right: 10px;
      }
      .sch{
        width: 14px;
        height: 13px;
      }
    }
  }
}

.el-aside {
  position: relative;
  width: 180px !important;
  color: #333;
  text-align: center;
  transition: width .3s;
}
.shou{
  width: 0 !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 10px 20px 10px 10px;
}

.home > .el-container {
  height: 100%;
}
</style>