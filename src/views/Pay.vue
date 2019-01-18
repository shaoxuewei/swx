<template>
  <div>
    <div class="pay">
      <p class="p1">支付及保险</p>
      <p class="p2">和诺医疗已经与大部分的主流保险公司建立医疗直付的合作关系，为持有高端医疗保险客户提供便捷高效的医疗保险结算服务。</p>
      <p
        class="p3"
      >由于各保险公司政策、险种存在差异，为保证服务品质，确保有效的保险直付及理赔，我们建议您在诊疗前仔细阅读您的保险计划，或联系我们的保险部门确认您的保险福利，并在初诊时携带您的医疗保险证明，以及相关的个人身份证(例如身份证、护照、通行证等)。咨询电话 021-33361668</p>
      <div class="company">
        <img :src="item.src" alt v-for="(item,index) in companies" :key="index" @click="com(index)">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
      companies: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    };
  },
  methods: {
    com(index) {
      this.index = index;
      console.log(index);
      
    }
  }
};
</script>

<style scoped lang="less">
.pay {
  background-color: #ffffff;
  font-family: PingFangSC-Regular;
  padding: 0 1rem;
  .p1 {
    color: rgba(0, 143, 176, 1);
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
  .p2,
  .p3 {
    color: rgba(102, 102, 102, 1);
    font-size: 0.9rem;
    line-height: 1.3rem;
  }
}
.company {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 1.2rem;
  padding: 1.5rem 0 1.2rem 0;
  background-color: #ffffff;
  img {
    display: block;
    border: 1px solid #f2f2f2;
    width: 6rem;
    height: 4rem;
    margin: 0 0 0.4rem 0;
  }
}
</style>