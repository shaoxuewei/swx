import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/diagnosisNav',
      name:'就诊导航',
      component:() => import('./views/diagnosisNav.vue')
    },
    {
      path:'/diagnosisMap',
      name:'导航地图',
      component:()=>import('./views/diagnosisMap.vue')
    },
    {
      path:'/professionMajor',
      name:'专科诊疗',
      component:()=>import('./views/professionMajor.vue')
    },
    {
      path:'/officeIntroduce',
      name:'科室介绍',
      component:()=>import('./views/officeIntroduce.vue')
    },
    {
      path:'/ExpertTeam',
      name:'专家团队',
      component:()=>import('./views/ExpertTeam.vue')
    },
    {
      path:'/DoctorDetail',
      name:'医生详情',
      component:()=>import('./views/DoctorDetail.vue')
    },

    {
      path:'/aboutus',
      name:'走进和诺',
      component:()=>import('./views/AboutHn.vue')
    },
 
    {
      path:'/MemberActive',
      name:'会员激活',
      component:()=>import('./views/MemberActive.vue')
    },
    {
      path:'/MyReports',
      name:'我的报告',
      component:()=>import('./views/MyReports.vue')
    },
    {
      path:'/exportDetail',
      name:'报告详情',
      component:()=>import('./views/ExportDetail.vue')
    },
    {
      path:'/aboutMyself',
      name:'我的档案',
      component:()=>import('./views/AboutMyself.vue')
    },
    {
      path:'/MyMess',
      name:'我的信息',
      component:()=>import('./views/MyMessage.vue')
    },
    {
      path:'/add',
      name:'新增就诊人',
      component:()=>import('./views/Add.vue')
    },
    {
      path: '/memactive',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path:'/Myexport',
      name:'会员激活',
      component:()=>import('./views/Myexport.vue'),
      children:[
        {
          path:'/',
          name:'',
        }
      ]
    },
    {
      path:'/MyApp',
      name:'我的预约',
      component:()=>import('./views/MyApp.vue'),
      children:[
        {
          path:'App',
          name:'预约',
          component:()=>import('./views/App.vue')
        },
      ]
    },
    {
      path:'/Patient',
      name:'就诊人',
      component:()=>import('./views/PatientDetail.vue')
    },
  
    {
      path:'/ExE',
      name:'我的体检报告',
      component:()=>import('./views/ExamExport.vue')
    },
    {
      path:'/Stomat',
      name:'检查详情',
      component:()=>import('./views/Stomat.vue')
    },
    {
      path:'/MyDoctor',
      name:'我的医生',
      component:()=>import('./views/MyDoctor.vue')
    },
    {
      path:'/tc',
      name:'体检套餐',
      component:()=>import('./views/TaoCan.vue')
    },
    {
      path:'/td',
      name:'套餐详情',
      component:()=>import('./views/TaoCanDetail.vue')
    },
    {
      path:'/feed',
      name:'意见反馈',
      component:()=>import('./views/Feedback.vue')
    },
    {
      path:'/feedsuccess',
      name:'提交成功',
      component:()=>import('./views/FeedSuccess.vue')
    },
  
    {
      path:'/heath',
      name:'',
      component:()=>import('./views/Heath.vue')
    },
    {
      path:'/lastactive',
      name:'',
      component:()=>import('./views/LastActive.vue')
    },
   {
     path:'/sendactive',
     name:'健康咨询',
     component:()=>import('./views/SendLastActive.vue')
   },
   {
     path:'/coo',
     name:'商保',
     component:()=>import('./views/Cooperation.vue')
   }, 
   {
     path:'/pay',
     name:'支付',
     component:()=>import('./views/Pay.vue')
   },
   {
     path:'/problem',
     name:'',
     component:()=>import('./views/Problem.vue')
   },
   {
     path:'/stime',
     name:'选择时间',
     component:()=>import('./views/SelectTime.vue')
   }
  ]
})
