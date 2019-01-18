<template>
  <div class="a">
    <router-link to="/diagnosisNav">就诊导航</router-link>
    <router-link to="/diagnosisMap">导航地图</router-link>
    <router-link to="/professionMajor">专科诊疗</router-link>
    <router-link to="/officeIntroduce">科室介绍</router-link>
    <router-link to="/ExpertTeam">专家团队</router-link>
    <router-link to="/DoctorDetail">医生详情</router-link>
    <router-link to="/aboutus">走进和诺</router-link>
    <router-link to="/MemberActive">会员激活</router-link>
    <router-link to="/MyReports">我的报告</router-link>
    <router-link to="/aboutMyself">我的档案</router-link>
    <router-link to="/add">新增就诊人</router-link>
    <router-link to="/Patient">就诊人详情</router-link>
    <router-link to="/MyMess">我的信息</router-link>
    <router-link to="/MyApp">我的预约</router-link>
    <router-link to="/MyApp/App">我的预约</router-link>
    <router-link to="/">预约时间</router-link>
    <router-link to="/ExE">体检报告</router-link>
    <router-link to="/tc">体检套餐</router-link>
    <router-link to="/td">套餐详情</router-link>
    <router-link to="/feed">意见反馈</router-link>
    <router-link to="/MyDoctor">我的医生</router-link>
    <router-link to="/heath">健康咨询</router-link>
    <router-link to="/lastactive">近期活动</router-link>
    <router-link to="/sendactive">近期活动</router-link>
    <router-link to="/coo">商保合作</router-link>
    <router-link to="/pay">支付</router-link>
    <router-link to="/problem">常见问题</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
    };
  },
  methods: {
    name() {}
  }
};
</script>

<style scoped>

.a {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>