<template>
  <div class="slide">
    <div class="slide-top">
      <div class="logo-item"></div>

      <div class="user-infro">
        <div class="head-img">
          <img src="../img/header/boy.png" alt="">
        </div>
        <p class="user-port" title="内置管理员">
          <el-popover
            placement="bottom"
            width="100%"
            trigger="click">
            <p class="cur-pass">
              <i class="el-icon-unlock log-mo"></i>修改密码
            </p>
            <p class="logout">
              <i class="el-icon-s-unfold log-mo"></i>退出登录
            </p>
            <el-button slot="reference">
              内置管理员<i class="el-icon-caret-bottom"></i>
            </el-button>
          </el-popover>
        </p>
        <p class="user-department" title="内江师范学院">
          <i class="el-icon-school"></i>内江师范学院
        </p>
      </div>
    </div>

    <el-menu class="eul">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-mouse mo"></i>
          <router-link to="/">工作台</router-link>
        </template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-custom mo"></i>招生管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <router-link to="/Enrollment">意向客户</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-platform mo"></i>前台业务
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            <router-link to="/Student">学员</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/Charge">收费</router-link>
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="/ReturnPremium">退费</router-link>
          </el-menu-item>
          <el-menu-item index="3-4">
            <router-link to="/CarryDown">结转</router-link>
          </el-menu-item>
          <el-menu-item index="3-5">
            <router-link to="/Receipt">收据管理</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-management mo"></i>教务管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">
            <router-link to="/Course">课程</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link to="/Grade">班级</router-link>
          </el-menu-item>
          <el-menu-item index="4-3">
            <router-link to="/CourseSchedul">排课</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-data mo"></i>数据中心
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">
            <router-link to="/Fund">资金</router-link>
          </el-menu-item>
          <el-menu-item index="5-2">
            <router-link to="/Operation">运营</router-link>
          </el-menu-item>
          <el-menu-item index="5-3">
            <router-link to="/OtherTable">其他报表</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-s-order mo"></i>人事管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">
            <router-link to="/Department">部门</router-link>
          </el-menu-item>
          <el-menu-item index="6-2">
            <router-link to="/Staff">员工</router-link>
          </el-menu-item>
          <el-menu-item index="6-3">
            <router-link to="/Jurisdiction">权限组</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-setting mo"></i>
          <router-link to="/Setting">系统设置</router-link>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Slide",
  props: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
.slide {
  width: 100%;
  height: 100%;
  background: #d3dce6;
  .slide-top {
    width: 180px;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.logo-item {
  height: 50px;
  background: url(../img/logo.png) no-repeat 21px -1px;
  background-size: 130px;
}
.user-infro {
  height: 132px;
  padding: 30px 20px 10px;
  background: #2253b0;
  .head-img {
    width: 60px;
    height: 60px;
    display: inline-block;
    border-radius: 50%;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .el-button--small{
    border: none;
    background: #2253b0;
    color: #fff;
    font-size: 14px;
  }
  .user-department {
    font-size: 12px;
    color: #8ba3d0;
  }
}
.eul {
  width: 180px;
  padding-top: 222px;
  height: calc(100% - 222px);
  background: #1a468e;
  position: static;
  .el-submenu {
    text-align: left;
    .mo {
      margin-right: 15px;
    }
  }
  /deep/ .el-submenu__title {
    height: 44px;
    color: #b8c7df;
    cursor: default;
    padding: 15px 10px 15px 15px !important;
    border-left: 6px solid transparent;
    line-height: initial;
    text-align: left;
    i {
      color: #b8c7df;
    }
    a {
      color: #b8c7df;
      cursor: default;
    }
  }
  /deep/ .el-menu-item-group__title {
    padding: 0 !important;
  }
  /deep/ .el-menu-item {
    padding-left: 0 !important;
    height: 44px;
    line-height: 44px;
    min-width: 180px;
    background: #133e7d;
    cursor: default;
    a {
      display: inline-block;
      padding: 0 0 0 60px;
      width: 120px;
      color: #b8c7df;
      cursor: default;
    }
  }
  .el-menu-item.is-active {
    background: #3673ff;
    a {
      color: #fff;
    }
  }
  .is-opened {
    /deep/ .el-submenu__title {
      border-left: 6px solid #3673ff;
      color: #fff;
      i {
        color: #fff;
      }
    }
    i {
      color: #fff;
    }
    a {
      color: #fff;
    }
  }
}
.eul /deep/ .el-submenu__title:hover {
  color: #fff;
  background: initial;
  i {
    color: #fff;
  }
  a {
    color: #fff;
  }
}
.eul /deep/ .el-menu-item:hover a {
  color: #fff;
}

</style>
