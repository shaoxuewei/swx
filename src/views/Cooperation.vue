<template>
  <div>
    <div class="coo" @click="detail">
      <div class="head">
        <img src="../../static/assets/img_baoxian.png" alt>
        <span class="tag1">支付及保险</span>
        <div class="link">
          详情
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 26 42"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>next</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="我的信息" transform="translate(-664.000000, -248.000000)" fill="#008fb0">
                <g id="list/singleline/right/icon" transform="translate(664.000000, 248.000000)">
                  <polygon
                    id="Chevron"
                    points="7.92592593 9 6 10.9596266 17.0740741 21.7375731 6 32.5155196 7.92592593 34.4751462 21.4074074 21.7375731"
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="cbody">
        <p>和诺医疗已经与大部分的主流保险公司建立医疗直付的合作关系，为持有高端医疗保险客户提供便捷高效的医疗保险结算服务。</p>由于各保险公司政策、险种存在差异，为保证服务品质，确保有效的保险直付及理赔，我们建议您在诊疗前仔细阅读您的保险计划，或联系我们的保险部门确认您的保险福利，并在初诊时携带您的医疗保险证明，以及相关的个人身份证(例如身份证、护照、通行证等)。咨询电话
        021-33361668
      </div>
      <div class="company">
        <img :src="item.src" alt v-for="(item,index) in companies" :key="index">
      </div>
    </div>
    <div class="coo" @click="detail">
      <div class="head">
        <img src="../../static/assets/img_baoxian.png" alt>
        <span class="tag">常见问题</span>
        <div class="link">
          详情
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 26 42"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>next</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="我的信息" transform="translate(-664.000000, -248.000000)" fill="#008fb0">
                <g id="list/singleline/right/icon" transform="translate(664.000000, 248.000000)">
                  <polygon
                    id="Chevron"
                    points="7.92592593 9 6 10.9596266 17.0740741 21.7375731 6 32.5155196 7.92592593 34.4751462 21.4074074 21.7375731"
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
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
      // key:
      companies: [{}, {}, {}, {}, {}, {}]
    };
  }
};
</script>

<style scoped lang="less">
.coo {
  background: #ffffff;
  line-height: 1.5rem;
  margin: 1rem 1rem;

  .link {
    color: rgba(0, 143, 176, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 1.7rem;
    // svg{
    //      color: rgba(0,143,176,1);
    // }
  }
  .con:last-child{
    border: none;
  }
  .con {
    margin: 0 1.5rem;
    border-bottom: 1px solid #f2f2f2;
    .p {
      color: #bbb;
        margin: 0;
      padding: 0 0 1rem 0;
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
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    img {
      position: relative;
      left: -0.6rem;
      margin: 0.7rem 0 0 0;
    }
    .tag {
      color: #ffffff;
      position: relative;
      left: -10rem;
    }
    .tag1 {
      color: #ffffff;
      position: relative;
      left: -9.5rem;
    }
  }
  .cbody {
    margin: 0 1.2rem;
    text-align: right;
    text-align: left;
  }
  .company {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 1.2rem;
    padding: 1.5rem 0 1.2rem 0;
    img {
      display: block;
      border: 1px solid #F2F2F2;
      width: 6rem;
      height: 4rem;
      margin: 0 0 0.4rem 0;
    }
  }
}
</style>