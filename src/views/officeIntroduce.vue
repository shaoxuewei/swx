<template>
  <div class="officeIntroduce">
    <div class="in mar">
      <div class="sub">
        <div class="head">
          <div class="jis">
            <p>英国伦敦皇家全科医学</p>
            <p>London Global Practice</p>
          </div>
        </div>
        <div class="content">
          英国伦敦皇家全科医学，来自全科医学发源地英国,坐落于世界顶尖医疗机构云集的哈雷街(The Harley Street)。
          作为英国皇室的健康医疗服务机构, LGP为全球客户制作个性化服务方案，并提供综合医疗保健服务、医疗管家服务和专业预防性健康检查。
        </div>
      </div>
      <div class="peop">
        <div class="zj">
          <div class="zjc">科室专家</div>
        </div>
        <div class="div" @click="doctor">
          <img src alt>
          <div class="iright">
            <p class="name">
            
              Dr.Paul Ettlinger
            
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 26 42"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
                <title>next</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="我的信息" transform="translate(-664.000000, -248.000000)" fill="#C7C7CC">
                    <g
                      id="list/singleline/right/icon"
                      transform="translate(664.000000, 248.000000)"
                    >
                      <polygon
                        id="Chevron"
                        points="7.92592593 9 6 10.9596266 17.0740741 21.7375731 6 32.5155196 7.92592593 34.4751462 21.4074074 21.7375731"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
            </p>
            <p class="king">英国伦敦皇家全科医学</p>
            <div class="desp">
              Ettlinger医生是英国皇家全科医学团队创始人,拥有妇科和职业健康硕士学位，
              是英国皇家全科医学院医师学会
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
    //   items:[

    //   ]
    };
  },
  methods: {
    doctor() {}
  }
};
</script>

<style scoped lang="less">
.officeIntroduce{
  padding-top:0.4rem;
}
.mar {
  padding: 0 1/2.34375rem;
}
.in {
  background: #fff;
  .sub {
    margin-bottom: 2/2.34375rem;
    font-size: 0.95/2.34375rem;
    border-bottom: 1px solid #f2f2f2;
    .head {
      font-size: 1.2/2.34375rem;
      margin-bottom:0.4rem;
      border-left: 6px solid rgba(0, 143, 176, 1);
      .jis {
        font-size:0.47rem;
        padding: 0 0.5/2.34375rem;
      }
    }
    .content {
      padding-bottom: 2/2.34375rem;
      font-size:0.39rem;
      line-height:0.62rem;
    }
  }
  .peop {
    .zj {
      font-size: 1.2/2.34375rem;
      border-left: 6px solid rgba(0, 143, 176, 1);
      padding: 0 0.5/2.34375rem;
      margin-bottom: 2/2.34375rem;
      .zjs {
      }
    }
    .div {
      height: 10/2.34375rem;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      border-bottom: 1px solid #f2f2f2;
      p {
        margin: 10px 0 0 0;
      }
      img {
        display: block;
        height: 6/2.34375rem;
        width: 15/2.34375rem;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin: 0 1/2.34375rem 0 0;
      }
      .iright {
        font-size: 1.02/2.34375rem;
        .name {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight:bold;
          font-size: 1.2/2.34375rem;
          color: rgba(0, 143, 176, 1);
        }
        .desp {
          color: rgba(153,153,153,1);
          font-size:0.34rem;
          display: -webkit-box;
         -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .king {
          margin-bottom: 0.6/2.34375rem;
          font-size:0.4rem;
        }
      }
    }
  }
}
</style>