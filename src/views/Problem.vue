<template>
  <div>
    <div class="problem">
      <p class="p1">常见问题</p>
      <div class="con">
        <p class="conp">
          <span class="scolor">Q:</span>如何使用保险
        </p>
        <p class="p">
          <span class="scolor">A:</span>我们提供多家医疗保险直接结算服务，并致力于与更多的保险公司建立医疗直付合作关系，使支付过程尽可能简单。您每次来就诊时，我们会向您的保险公司查询您的保险福利，在您就诊结束后，按照您的福利情况结算账单。
        </p>
      </div>
      <div class="con">
        <p class="conp">
          <span class="scolor">Q:</span>如何使用保险
        </p>
        <p class="p">
          <span class="scolor">A:</span>我们提供多家医疗保险直接结算服务，并致力于与更多的保险公司建立医疗直付合作关系，使支付过程尽可能简单。您每次来就诊时，我们会向您的保险公司查询您的保险福利，在您就诊结束后，按照您的福利情况结算账单。
        </p>
      </div>
    </div>
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

<style scoped lang="less">
.problem {
  padding: 0 1rem;
  background-color: #ffffff;
  .p1 {
    color: rgba(0, 143, 176, 1);
    font-size: 1.3rem;
    line-height: 1.5rem;
  }
  .con:last-child{
      border:none;
  }
  .con {
    border-bottom: 1px solid #f2f2f2;
    .p {
      color: #666666;
      margin: 0;
      padding: 0 0 1rem 0;
      font-family: PingFangSC-Regular;
     font-size: 16px;
    line-height: 24px;
    }
    .conp {
      font-weight: bold;
    }
    .scolor {
      color: rgba(0, 143, 176, 1);
      font-weight: bold;
      margin: 0 0.8rem 0 0;
    }
  }
}
</style>