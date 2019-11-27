<template>
    <div class="FirstPage ">
        <!-- 导航 -->
        <div class="nav clear">
            <div class="logo">
                <img src="../img/wll/logo.png" alt="">
            </div>
 
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2" >运营管理系统</el-menu-item>
                <el-menu-item index="3" >家教服务系统</el-menu-item>
                <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">帮助中心</a></el-menu-item>
                <el-menu-item index="5" >关于我们</el-menu-item>
        
            </el-menu>

            <div class="btn">
                <button type="button" class="first-login btn-btn">登录</button>
                <button type="button" class="first-please btn-btn">申请使用</button>
            </div>

        </div>
       
        <!-- banner -->
        <div class="banner">
            <template>
                <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="item in 2" :key="item">
                    </el-carousel-item>
                </el-carousel>
            </template>
        </div>

        <!-- 内容第一部分 -->
        <div class="content">
             <div class="title">你是否遇到这些问题？</div>
             <div class="content-container">
                  <div class="content-left">
                      <div class="content-item left-item">招生数据杂乱无章，跟进信息无法同步，白白浪费大笔资源</div>
                      <div class="content-item left-item">招生单页不够详细，介绍挺费劲。线下报名拥挤，影响家长学生体验</div>
                      <div class="content-item left-item">学生排课教室冲突，课消情况与家长记录不符，经常扯皮</div>
                      <div class="content-item left-item">家校服务不够可视化，家长与学校的连接断断续续，转介绍积极性不高</div>
                  </div>
                  <div class="content-middle">
                      <img src="../img/wll/question.png" alt="" class="questionImg">
                      <img src="../img/wll/problem.png" alt="">
                  </div>
                  <div class="content-right">
                      <div class="content-item">完整记录所有客户资料及联系情况，客户状态及跟进情况一目了然</div>
                      <div class="content-item">在线选课报名，家长轻松完成报名与续费，节省人力成本</div>
                      <div class="content-item">信息化管理，轻松排课，解脱教务老师。上课签到情况家校同步，数据清晰</div>
                      <div class="content-item">学生上课动态一键发送，家长清楚地了解孩子在校动态，紧密连接家长</div>
                  </div>
             </div>
        </div>

        <!-- 内容第二部分 -->
        <div class="contentTwo">
            <div class="title">我们能做什么？</div>
            <div class="contentTwo-list">
                <div class="contentTwo-list-item">
                    <div class="item-pic">
                        <img src="../img/wll/customer.png" alt="">
                    </div>
                    <div class="title">客户管理</div>
                    <div class="description">意向客户信息与管理</div>
                    <div class="description">意向客户沟通与轨迹</div>
                    <div class="description">招生日报表</div>
                    <div class="description">销售漏斗管理</div>
                    <div class="description">客户服务记录管理</div>
                    <div class="description">续费提醒与续费管理</div>
                </div>

                <div class="contentTwo-list-item">
                    <div class="item-pic">
                        <img src="../img/wll/studentManage.png" alt="">
                    </div>
                    <div class="title">学员管理</div>
                    <div class="description">学生档案管理</div>
                    <div class="description">到校离校消息推送</div>
                    <div class="description">学生上课考勤管理</div>
                    <div class="description">学生异动管理</div>
                    <div class="description">学生成绩管理</div>
                    <div class="description">学生积分管理</div>
                </div>

                <div class="contentTwo-list-item">
                    <div class="item-pic">
                        <img src="../img/wll/moneyManage.png" alt="">
                    </div>
                    <div class="title">学费管理</div>
                    <div class="description">收费管理</div>
                    <div class="description">收据打印</div>
                    <div class="description">退费管理</div>
                    <div class="description">学费结转</div>
                    <div class="description">电子账户管理</div>
                    <div class="description">收款账号管理</div>
                </div>

                <div class="contentTwo-list-item">
                    <div class="item-pic">
                        <img src="../img/wll/hr.png" alt="">
                    </div>
                    <div class="title">人事管理</div>
                    <div class="description">员工信息管理</div>
                    <div class="description">上班考勤管理</div>
                    <div class="description">绩效业绩统计</div>
                    <div class="description">课时费统计</div>
                </div>

                <div class="contentTwo-list-item">
                    <div class="item-pic">
                        <img src="../img/wll/class.png" alt="">
                    </div>
                    <div class="title">教务管理</div>
                    <div class="description">课程设置</div>
                    <div class="description">班级管理</div>
                    <div class="description">排课管理</div>
                    <div class="description">排课时段查询</div>
                    <div class="description">排课资源冲突检测</div>
                    <div class="description">报名选座</div>
                </div>

                <div class="contentTwo-list-item">
                    <div class="item-pic">
                        <img src="../img/wll/charts.png" alt="">
                    </div>
                    <div class="title">报表管理</div>
                    <div class="description">招生分析报表</div>
                    <div class="description">收费统计报表</div>
                    <div class="description">课消统计报表</div>
                    <div class="description">班级出勤率报表</div>
                    <div class="description">班级满班率报表</div>
                    <div class="description">家校服务分析报表</div>
                </div>
            </div>
        </div>

        <!-- 内容第三部分 -->
        <div class="contentThree">
            <div class="title">匠心，做好产品</div>
            <div class="contentThree-list">
                <div class="contentThree-list-item">
                    <div class="item-container">
                        <div class="icons-pic">
                            <img src="../img/wll/star.png" alt="">
                        </div>
                        <div class="title">简单&nbsp;易用</div>
                    </div>
                    <div class="description">界面更简洁,操作易上手</div>
                </div>
            </div>

            <div class="contentThree-list">
                <div class="contentThree-list-item">
                    <div class="item-container">
                        <div class="icons-pic">
                            <img src="../img/wll/money.png" alt="">
                        </div>
                        <div class="title">高品质&nbsp;低成本</div>
                    </div>
                    <div class="description">基于校管家团队8年积累，精简而成</div>
                </div>
            </div>

            <div class="contentThree-list">
                <div class="contentThree-list-item">
                    <div class="item-container">
                        <div class="icons-pic">
                            <img src="../img/wll/customerService.png" alt="">
                        </div>
                        <div class="title">服务优&nbsp;响应快</div>
                    </div>
                    <div class="description">每周线上操作培训，滚动开班<br>7-12小时在线客服热线</div>
                </div>
            </div>
        </div>

        <!-- 内容第四部分 -->
        <div class="contentFour">
            <div class="tabs-list-item">
                <img src="../img/wll/background-2.png" alt="">
                <div class="content">
                    <div class="title">让运营更简单</div>
                    <div class="description">简化和规范工作流程，同时清晰呈现各项运营指标数据和决策统计数据； 有效提升管理效率，节省管理时间和管理成本30%以上。</div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'FirstPage',
  components: {
   
  },
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="less" scoped>
    .nav{
        width: 100%;
        min-width: 1200px;
        background-color: #2b2b2b;
        color: white;
        padding: 20px 0;
        display:flex;
        justify-content:space-evenly;
        align-items: center;
    }
    .logo{
        float: left;
    }
    .nav /deep/ .el-icon-arrow-down, .el-submenu__icon-arrow{
        display: none;
    }
    .nav /deep/ .el-submenu, .is-opened{
        display: none;
    }
    .nav /deep/ .el-menu-demo{
        background-color: #2b2b2b;
        color: white;
    }
    .nav /deep/ .el-menu-item{
       color: white;
    }
    .nav /deep/ .el-menu-item:hover{
       background-color: #2b2b2b;
       color: #3673ff
    }
    .nav /deep/ .el-menu{
        border-bottom:none;
    }
    .nav /deep/ .el-menu--horizontal>.el-menu-item.is-active{
        border-bottom: 2px solid #3673ff;
    }
    .btn{
        float: left;
    }
    .btn-btn{
        padding: 10px 25px;
        font-size: 16px;
        line-height: 16px;
        border-radius: 20px;
        border: 2px solid #3673ff;
        color: #3673ff;
        display: inline-block;
        margin: 15px 5px;
    }
    .first-login{
        background: #2b2b2b;
    }
    .first-please{
        background-color:#3673ff;
        color:white;
    }
     .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
  
    .banner{
        height: 600px;
        min-width: 1200px;
    }
    .banner /deep/ .el-carousel__item[data-v-25365dd6]:nth-child(2n+1){
        background-image: url(../img/wll/banner01.png)
    } 
    .banner /deep/ .el-carousel__item[data-v-25365dd6]:nth-child(2n){
        background-image: url(../img/wll/banner02.jpg)
    } 
    .banner /deep/ .el-carousel__container{
        height: 600px;
    }
    .banner /deep/ .el-carousel__arrow {
        height: 60px;
        width: 60px;
    }
    .content{
        width: 100%;
        background-color: #ffffff;
        height: 850px;
        padding-top: 90px;
    }
    .content .title{
        text-align: center;
        font-size: 48px;
        color: #666666;
        margin-bottom: 40px;
    }
    .content-container{
        width: 1100px;
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content: space-between;
    }
    .content-left{
        width: 430px;
        margin-top:40px;
    }
    .content-middle{
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -50px;
        width: 140px;
        margin-top: 12px;
    }
    .content-right{
        width: 430px;
        margin-top: 70px;
    }
    .content-container .content-left .left-item{
        color: white;
    }
    .content-container .content-left .left-item:nth-child(1){
        background-color: #f98b29;
    }
     .content-container .content-left .left-item:nth-child(2){
        background-color: #3282dc;
    }
     .content-container .content-left .left-item:nth-child(3){
        background-color: #6eb543;
    }
     .content-container .content-left .left-item:nth-child(4){
        background-color: #48b7c1;
    }
    .content-container .content-left .content-item{
        width: 430px;
        height: 72px;
        position: relative;
        border-radius: 10px;
        font-size:20px;
        line-height: 30px;
        margin-top: 30px;
        padding: 15px 25px;
    }
    .content-item{
        text-align: left;
    }
    .questionImg{
        position: absolute;
        top: 10px;
        left: 48px;
        background: none;
    }
    .content-right .content-item{
        width: 430px;
        height: 72px;
        position: relative;
        border-radius: 10px;
        font-size: 20px;
        line-height:30px;
        color:#4b4b4b;
        margin-top: 30px;
        background-color: #d7dce6;
        padding: 15px 25px;
    }
    .contentTwo{
        width: 100%;
        background-color: #598eda;
        padding: 90px 0;
    }
    .contentTwo > .title{
        font-size: 48px;
        color: white;
        text-align: center;
    }
    .contentTwo-list{
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
    }
    .contentTwo-list-item{
        text-align: center;
        color: white;
        width: 400px;
        float: left;
    }
    .item-pic{
        width: 156px;
        height: 175px;
        margin: 40px auto 0;
    }
    .item-pic img{
        width: 156px;
        height: 175px;
    }
    .contentTwo-list-item .title{
        font-size: 23px;
        margin-top: 23px;
        margin-bottom: 0.39cm;
        font-weight: bold;
    }
    .contentTwo-list-item .description{
        font-size: 14px;
        line-height: 23px;
    }
    .contentThree{
        width: 100%;
        height: 550px;
        background-color: #ffffff;
        padding-top: 90px;
    }
    .contentThree > .title{
        color: #595757;
        font-size: 48px;
        text-align: center;
    }
    .contentThree-list{
        width: 1200px;
        margin: 0 auto;
    }
    .contentThree .contentThree-list .contentThree-list-item{
        width: 400px;
        float: left;
        margin-top: 40px;
    }
    .contentThree .contentThree-list .contentThree-list-item .item-container{
        width: 275px;
        margin-left: 20px;
        line-height: 60px;
        float: left;
    }
    .contentThree .contentThree-list .contentThree-list-item .icons-pic{
        width: 60px;
        height: 60px;
        border-radius: 100%;
        background-color: #79a4f4;
        position: relative;
        float: left;
    }
    .contentThree .contentThree-list .contentThree-list-item .icons-pic img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
     .contentThree .contentThree-list .contentThree-list-item .title{
        color: #333;
        font-size: 20px;
        text-align: left;
        margin-bottom: 5px;
        padding-left: 20px;
        font-weight: bold;
        float: left;
    }
    .contentThree .contentThree-list .contentThree-list-item .description{
        color: #737373;
        font-size: 14px;
        line-height: 26px;
        padding-left: 30px;
        text-align: center;
        float: left;
    }
    .contentFour{
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        width:100%;
        overflow: hidden;
        min-width: 1200px;
    }
    .contentFour .tabs-list-item{
        width: 50%;
        position: relative;
    }
    .contentFour .tabs-list-item:nth-child(1) .content{
        position: absolute;
        top: 100px;
        right: 100px;
        width: 550px;
        left: inherit;
    }
    .contentFour .tabs-list-item:nth-child(1) .content .title{
        color: #f79200;
        border-color: #f79200;
    }
    .contentFour .tabs-list-item .content .title{
        padding-left: 15px;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 10px;
        border-left:6px solid #3673ff;
        font-weight: 600;
    }
</style>
