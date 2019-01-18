<template>
  <div class="doctorDetail">
    <div class="doctormess">
      <div class="titleContent">
        <img src alt>
        <div class="desp">
          <p class="name">{{doc.name}}</p>
          <p class="duty">{{doc.duty}}</p>
        </div>
        <div class="job">{{doc.job}}</div>
      </div>
    </div>
    <div class="item">
      <div class="inneritem" style="border-bottom:1px solid #F2F2F2">
        <h6>擅长</h6>
        <div class="content">{{goodat}}</div>
      </div>
    </div>
    <div class="item" >
      <div class="inneritem">
        <h6>简介</h6>
        <div class="content" v-if="itemshow">{{abstract}}</div>
        <div class="shouqi" @click="itemshow=!itemshow">
          <span style="margin-right:0.5/2.34375rem"> 收起</span>
          <svg
          width="18px"
          height="18px"
          viewBox="0 0 26 18"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>up</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="我的医生详情" transform="translate(-682.000000, -1097.000000)" fill="#008FB0">
              <g id="up" transform="translate(682.000000, 1097.000000)">
                <path
                  d="M24.0888672,16.1279297 L13.7587891,1.88671875 C13.3837891,1.37109375 12.6162109,1.37109375 12.2441406,1.88671875 L1.91113281,16.1279297 C1.79980469,16.2832031 1.90820313,16.5 2.1015625,16.5 L4.29882813,16.5 C4.44824219,16.5 4.58886719,16.4267578 4.67675781,16.3066406 L13,4.83398438 L21.3232422,16.3066406 C21.4111328,16.4267578 21.5517578,16.5 21.7011719,16.5 L23.8984375,16.5 C24.0888672,16.5 24.2001953,16.2832031 24.0888672,16.1279297 Z"
                  id="路径"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        </div>
        
      </div>
    </div>
    <div class="picture">
      <div class="t">
        <div class="tuwen" @click="tuwen">
           <icon icon-style="style" icon-class="tuwenzixun"></icon>
            <span class="tm">图文咨询</span>
        </div>
        <div class="guahao" @click="gh">
          <icon icon-style="style" icon-class="yuyueguahao"></icon>
          <span class="gh">预约挂号</span>
        </div>
      </div>
      <div class="price">
        <div class="once">￥0/次</div>
      </div>
    </div>
    <div class="ins">
      <div class="service">服务/说明</div>
      <div class="ziti">文字/图片留言,医生会在24小时内进行回复;</div>
    </div>
    <div class="footer">
      <div class="left">
        <!-- <svg
          width="30px"
          height="52px"
          viewBox="0 0 52 52"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>推荐</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              id="我的医生详情"
              transform="translate(-85.000000, -1606.000000)"
              fill="#008FB0"
              fill-rule="nonzero"
            >
              <g id="分享" transform="translate(85.000000, 1606.000000)">
                <path
                  d="M42.887141,51 L9.06398488,51 C4.61250858,50.9948338 1.00516115,47.3839636 1,42.9281401 L1,9.07195361 C1.00516115,4.61613017 4.61250858,1.00525994 9.06398488,1.00009375 L25.9755629,1.00009375 C26.8376643,1.00009375 27.5365356,1.69964752 27.5365356,2.56259082 C27.5365356,3.42553412 26.8376643,4.12508789 25.9755629,4.12508789 L9.06398488,4.12508789 C6.33852659,4.12508789 4.12194537,6.34383374 4.12194537,9.07195361 L4.12194537,42.9250151 C4.12194537,45.65626 6.33852659,47.8750059 9.06398488,47.8750059 L42.884019,47.8750059 C45.6125993,47.8750059 47.8291805,45.65626 47.8291805,42.9281401 L47.8291805,29.3469156 C47.8291805,28.4839723 48.5280518,27.7844185 49.3901532,27.7844185 C50.2522546,27.7844185 50.9511259,28.4839723 50.9511259,29.3469156 L50.9511259,42.9281401 C50.9459647,47.3839636 47.3386173,50.9948338 42.887141,51 Z M18.8887469,37.2562758 C18.0920791,37.2574323 17.4234475,36.6556159 17.340262,35.8625284 C17.2965548,35.4500292 16.3412395,25.6531725 23.3781044,17.8563122 C28.3576073,12.3375725 35.9782759,9.30007822 46.0590375,8.8063291 L41.5852898,3.57821392 C41.2227966,3.15396182 41.113954,2.56836005 41.2997621,2.04199913 C41.4855701,1.5156382 41.9378001,1.12848486 42.4861013,1.02637603 C43.0344026,0.924267197 43.5954751,1.12271563 43.9579682,1.54696772 L50.5764924,9.27820322 C50.9725572,9.74170644 51.0629776,10.3935285 50.8080582,10.9475124 C50.5531388,11.5014963 49.9994836,11.8563635 49.3901532,11.8563234 L49.0748367,11.8563234 C38.425881,11.8563234 30.5679445,14.5688183 25.7195634,19.9188083 C19.6130383,26.6562957 20.4341099,35.4469042 20.4434758,35.534404 C20.5308426,36.3914874 19.9099977,37.1581767 19.05421,37.2500258 C18.998015,37.2562758 18.944942,37.2562758 18.8887469,37.2562758 Z M42.771629,20.6906818 C42.1798139,20.6918675 41.638224,20.3579428 41.3730267,19.8283543 C41.1078295,19.2987658 41.164638,18.664601 41.5197289,18.1906865 L48.1382531,9.35632808 C48.6555139,8.6651105 49.6346326,8.5245002 50.3251758,9.04226618 C51.015719,9.56003216 51.1561921,10.540107 50.6389313,11.2313246 L44.0204071,20.065683 C43.7256106,20.4591289 43.2629565,20.6906818 42.771629,20.6906818 Z"
                  id="形状"
                ></path>
              </g>
            </g>
          </g>
        </svg> -->
         <icon icon-style="style" icon-class="tuijian"></icon>
        <span>推荐</span>
      </div>
      <div class="right">
        <div class="zixun">立即咨询 ￥ {{num}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import icon from '../components/icon.vue'
export default {
  data() {
    return {
      // key: value
      num: 0,
      doc: {
        name: "何鸣",
        duty: "主任医师",
        job: "国际精神心理"
      },
      itemshow: true,
      goodat:
        "坚持现代、科学循证实践，针对焦虑症、强迫症等神经症、抑郁症、精神分裂症等精神科常见疾病、疑难疾病的早期诊断、规范治疗、全面康复进行心理咨询、心理治疗（认知行为治疗、催眠治疗）。",
      abstract:
        "国内第一位精神病学与精神卫生学专业博士后，导师沈渔邨院士、杨德森教授。现任国家卫计委重性精神疾病管理治疗项目国家指导组成员、国家卫计委突发事件卫生应急专家咨询委员会心理救援组委员、杭州市心理卫生中心精神卫生专业技术顾问。"
    };
  },
   components: {
        'icon':icon
    },
  methods: {
    //收起简介
    sq() {
      console.log("s");
    },
    tuwen() {}
  }
};
</script>

<style scoped lang="less">
.style{
  width:0.5rem;
  height:0.5rem;
}
.doctorDetail{
  background:#F2F2F2;
  padding-bottom:1.3rem;
}
.doctormess {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #F2F2F2;
  font-size: 0.4rem;
  padding:0.2rem 0;
  font-family: PingFangSC-Medium;
  .titleContent {
    background:#fff;
    border-radius: 0.25/2.34375rem;
    box-sizing: border-box;
    width: 90%;
    padding:0.5rem 0;
    margin: 0 auto;
    text-align: center;
    img {
      display: block;
      margin:0 auto;
      width: 5/2.34375rem;
      height: 5/2.34375rem;
      border-radius: 50%;
      border: 1px solid #f2f2f2;
    }
    .desp {
      display: flex;
      justify-content: center;

      p {
        margin: 1/2.34375rem 0.5/2.34375rem 0.5/2.34375rem 0.5/2.34375rem;
      }
      .name {
        color: #008fb0;
      }
      .duty {
      }
    }
  }
}
.item {
  background: #ffffff;
  padding: 1/2.34375rem;
  .inneritem {
    padding: 0 0 1.5/2.34375rem 0;
    h6 {
      font-size: 1/2.34375rem;
      margin: 0 0 0.5/2.34375rem 0;
    }
    .content {
      line-height: 1.5/2.34375rem;
      font-size:0.38rem;
    }
    .shouqi {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size:0.38rem;
      color: rgba(0, 143, 176, 1);
    }
  }
}
.footer {
  width: 100%;
  display: flex;
  font-size:0.4rem;
  position: fixed;
  bottom: 0;
  left:0px;
  justify-content: flex-start;
  height: 3/2.34375rem;
  span {
    margin-left: 0.8/2.34375rem;
    color: #999999;
  }
  .right {
    display: flex;
    flex-grow: 2;
    background-color: rgba(0, 143, 176, 1);
    align-items: center;
    justify-content: center;
    .zixun {
      color: #ffffff;
      font-weight:bold;
    }
  }
  .left {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background: #ffffff;
  }
}
.picture {
  font-family: PingFangSC-Regular;
  font-size: 0.45rem;
  color: #333333;
  background: #ffffff;
  height: 7/2.34375rem;
  margin: 0.7/2.34375rem 0;
  span {
    margin-left: 0.8/2.34375rem;
  }
  .t {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #f2f2f2;
    height: 3/2.34375rem;
    flex-wrap: nowrap;
    .tuwen {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #f2f2f2;
      margin: 0.6/2.34375rem 0;
    }
    .guahao {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4/2.34375rem;
    width: 50%;
    .once {
      border: 1px solid rgba(0, 143, 176, 1);
      text-align: center;
      color: rgba(0, 143, 176, 1);
      width: 8/2.34375rem;
    }
  }
}
.ins {
  height: 6/2.34375rem;
  background: #ffffff;
  padding: 0 1/2.34375rem;
  // position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 0.7/2.34375rem 0;
  padding: 0 1/2.34375rem;
  line-height: 0.4rem;
  font-family: PingFangSC-Regular;
  .service {
    font-size: 0.4rem;
    margin-bottom: 0.8/2.34375rem;
    color:rgba(51,51,51,1);
  }
  .ziti {
    font-size: 0.38rem;
    color: #666666;
  }
}
</style>