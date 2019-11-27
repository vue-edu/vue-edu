import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  // {
  /*   path: '/Login',
    name: 'login',
    component: () => import('../views/Login.vue') */
  // }
  {
    path: '/',  //路径
    redirect: "/FirstPage" //重定向
  },
  {
    /* 首页 */
    path: '/home',
    component: Home,
    children:[
       {
         path:'',
         name:'WorkBench',/* 工作台 */
         component:() => import('../views/WorkBench.vue')
       },
       {
         path:'/Enrollment',
         name:'Enrollment',/* 招生管理 */
         component:() => import('../views/Enrollment.vue')
       },
       {
         path:'/Student',
         name:'Student',/* 学员 */
         component:() => import('../views/Student.vue')
       },
       {
         path:'/Charge',
         name:'Charge',/* 收费 */
         component:() => import('../views/Charge.vue')
       },
       {
         path:'/ReturnPremium',
         name:'ReturnPremium',/* 退费 */
         component:() => import('../views/ReturnPremium.vue')
       },
       {
         path:'/CarryDown',
         name:'CarryDown',/* 结转 */
         component:() => import('../views/CarryDown.vue')
       },
       {
         path:'/Receipt',
         name:'Receipt',/* 收据管理 */
         component:() => import('../views/Receipt.vue')
       },
       {
         path:'/Course',
         name:'Course',/* 课程 */
         component:() => import('../views/Course.vue')
       },
       {
         path:'/Grade',
         name:'Grade',/* 班级 */
         component:() => import('../views/Grade.vue')
       },
       {
         path:'/CourseSchedul',
         name:'CourseSchedul',/* 排课 */
         component:() => import('../views/CourseSchedul.vue')
       },
       {
         path:'/Fund',
         name:'Fund',/* 资金 */
         component:() => import('../views/Fund.vue')
       },
       {
         path:'/Operation',
         name:'Operation',/* 运营 */
         component:() => import('../views/Operation.vue')
       },
       {
         path:'/OtherTable',
         name:'OtherTable',/* 其他报表 */
         component:() => import('../views/OtherTable.vue')
       },
       {
         path:'/Department',
         name:'Department',/* 部门 */
         component:() => import('../views/Department.vue')
       },
       {
         path:'/Staff',
         name:'Staff',/* 元工 */
         component:() => import('../views/Staff.vue')
       },
       {
         path:'/Jurisdiction',
         name:'Jurisdiction',/* 权限组 */
         component:() => import('../views/Jurisdiction.vue')
       }, 
      {
        path:'/Setting',
        name:'Setting',/* 系统设置 */
        component:() => import('../views/Setting.vue')
      },
    ]
  },
  {
    path: '/FirstPage',
    name: 'FirstPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/FirstPage.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
