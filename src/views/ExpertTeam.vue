<template>
  <div class="ExpertTeam">
    <div class="search">
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
        <title>Shape</title>
        <desc>Created with Sketch.</desc>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="体检套餐" transform="translate(-678.000000, -68.000000)" :fill="sc">
            <g id="分组" transform="translate(678.000000, 68.000000)">
              <path
                d="M28.9411759,31 L21.8823524,23.4158234 C19.7666255,25.0661067 16.4418569,26.6869398 13.5753801,26.6869398 C6.63024356,26.6869398 1,20.9366777 1,13.8435985 C1,6.75051939 6.63024356,1 13.5753801,1 C20.5200081,1 26.1502517,6.75000481 26.1502517,13.8433412 C26.1502517,16.6403836 25.2652667,19.221299 23.7785122,21.3298228 L31,28.6825115 L28.9411759,31 Z M13.5754137,3.68511111 C8.08159044,3.68511111 3.62802874,8.2328576 3.62802874,13.8433299 C3.62802874,19.4538022 8.081325,24.0020859 13.5754137,24.0020859 C19.0679098,24.0020859 23.521206,19.4538022 23.521206,13.8433299 C23.521206,8.2328576 19.0679098,3.68511111 13.5754137,3.68511111 L13.5754137,3.68511111 Z"
                id="Shape"
              ></path>
            </g>
          </g>
        </g>
      </svg>
      <div  @click="treat" style="display:flex">
      <div class="super">{{currsub}}</div>
      <div class="arrow-bottom arrow-box" v-if="!show">
        <b class="bottom"><i class="bottom-arrow1"></i><i class="bottom-arrow2"></i></b>
      </div>
       <div class="arrow-top arrow-box" v-if="show" >
        <b class="top"><i class="top-arrow1"></i><i class="top-arrow2"></i></b>
      </div>
      </div>
      <van-popup v-model="show" :overlay="false">
        <ul id="ul">
          <li
            v-for="(item,index) in subject"
            :key="index"
            @click="currli(item,index)"
            :class="bclass"
          >{{item}}</li>
        </ul>
      </van-popup>
      <input :placeholder="ip" @focus="ifocus" @blur="ib">
    </div>
    <div class="exp">
      <div class="peop">
        <div class="zj">
          <div class="zjc">科室专家</div>
        </div>
        <div class="div" @click="getDoctorMess" v-for="(item,index) in items" :key="index">
          <img src alt>
          <div class="iright">
            <p class="name">
              {{ item.name}}
              <svg
                width="10px"
                height="20px"
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
            <p class="king">{{item.sub}}</p>
            <div class="desp">{{item.able}}</div>
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
      items: [
        {
          name: "徐栋",
          sub: "博士、教授、主任医师",
          able:
            "擅长超声精准引导下微创治疗肝癌(肺癌、胰腺癌、肾癌、前列腺癌转移性淋巴结)等恶性肿瘤以及甲状腺结节"
        },
        {
          name: "李明奎",
          sub: "博士、教授、主任医师",
          able:
            "擅长甲状腺、乳腺结节的微创治疗，以及肝脏肿瘤、肝肾囊肿、子宫肌瘤、下肢静脉曲张等多项微创治疗技术。"
        }
      ],
      subject: [
        "英国伦敦皇家全科医学",
        "大白安心美国儿科",
        "中西医结合临床中心",
        "超声诊断介入治疗中心",
        "国际精神心理",
        "细胞医学中心",
        "国际医学美容",
        "国际妇产生殖中心",
        "生物样本库(实验室)",
        "转化医学中心",
        "健康管理中心",
        "日间手术中心",
        "传统特色中医诊疗中心",
        "消化内镜中心"
      ],
      sc: "rgba(187, 187, 187, 1)",
      ip: "搜索科室",
      show: false,
      currsub: "超声诊断介入治疗中心",
      bclass: "",
      isactive: true
    };
  },
  created() {

  },
  mounted() {},

  methods: {
    ifocus() {
      this.sc = "#008FB0";
    },
    ib() {
      this.sc = "rgba(187, 187, 187, 1)";
      console.log("s");
    },
    treat() {
      this.show = !this.show;
      this.$nextTick(function(){
          var ul = document.getElementById("ul");
          var li = document.getElementsByTagName("li");
          for (let i = 0, len = li.length; i < len; i++) {
            if (this.currsub === li[i].innerText) {
              li[i].style.color = "rgba(0, 143, 176, 1)";
            } else {
              li[i].style.color = "black";
            }
          }
      })
    },
    getDoctorMess() {},
    //获取当前科室
    currli(item, index) {
      this.index = index;
      this.show = false;
      this.currsub = item;
    }
  }
};
</script>

<style scoped lang="less">
.active {
  color: rgba(0, 143, 176, 1);
}
.search {
  display: flex;
  background: rgba(239, 239, 244, 1);
  justify-content: space-between;
  align-items: center;
  padding: 0 1/2.34375rem;
  font-size: 0.4rem;
  height: 3/2.34375rem;
  .arrow-box {
    width: 0.2rem;
    height: 0.2rem;
    margin: 0.2rem auto;
    position: relative;
    .top {
      width: 0.25rem;
      height: 0.25rem;
      position: absolute;
      left: 0;
      top: -0.2rem;
      z-index: 2; /*兼容ie8-*/
      // border: 1px solid #000;
    }
    .top-arrow1,
    .top-arrow2 {
      width: 0;
      height: 0;
      display: block;
      position: absolute;
      left: 0.3rem;
      top: 0;
      z-index: 5; /*兼容ie8-*/
      border-top: 8px transparent dashed;
      border-left: 8px transparent dashed;
      border-right: 8px transparent dashed;
      border-bottom: 8px #efeff4 solid;
      overflow: hidden;
    }
    .top-arrow1 {
      border-bottom: 8px #000 solid;
    }
    .top-arrow2 {
      top: 1px; /*重要*/
      // border-bottom: 8px white solid;
    }
    .bottom {
      width: 0.25rem;
      height: 0.25rem;
      position: absolute;
      left: 0;
      // top: 0.25rem;
      z-index: 2; /*兼容ie8-*/
      // border:1px solid blue;
    }
    .bottom-arrow1,
    .bottom-arrow2 {
      width: 0;
      height: 0;
      display: block;
      position: absolute;
      left: 0.3rem;
      top: 0;
      z-index: 5; /*兼容ie8-*/
      border-bottom: 8px transparent dashed;
      border-left: 8px transparent dashed;
      border-right: 8px transparent dashed;
      border-top: 8px #efeff4 solid;
      overflow: hidden;
    }
    .bottom-arrow1 {
      top: 1px; /*重要*/
      border-top: 8px #000 solid;
    }
    .bottom-arrow2 {
      // border-top:10px white solid;
    }
  }
  // .Noactive{
  //   position:absolute;
  //   top:1rem;
  //   left:0px;
  // }
  .van-popup {
    width: 56%;
    position: absolute;
    left: 7.5/2.34375rem;
    // top: 22.5/2.34375rem;
    margin-top: 0.5rem;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
    li {
      margin: 0 0.5/2.34375rem;
      display: flex;
      align-items: center;
      text-align: left;
      border-bottom: 1px solid #f2f2f2;
      height: 2.675/2.34375rem;
      font-size: 1.1/2.34375rem;
    }
    li:last-child {
      border: none;
    }
  }
  input {
    width: 7/2.34375rem;
    border: none;
    height: 2/2.34375rem;
    border-radius: 1.2/2.34375rem;
    padding-left: 2/2.34375rem;
  }
  input::-webkit-input-placeholder {
    color: rgba(187, 187, 187, 1);
  }
  svg {
    position: absolute;
    left: 14/2.34375rem;
    width: 0.42rem;
  }
}
.exp {
  background-color: #fff;
  .peop {
    padding-top: 1.5/2.34375rem;
    margin: 0 1/2.34375rem;
    .zj {
      font-size: 1.2/2.34375rem;
      border-left: 6px solid rgba(0, 143, 176, 1);
      padding: 0 0.5/2.34375rem;
      margin-bottom: 1.5/2.34375rem;
      .zjc {
      }
    }
    .div {
      height: 10/2.34375rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
      //   margin: 1/2.34375rem 0 0 0;
      p {
        margin: 0;
      }
      img {
        display: block;
        height: 6/2.34375rem;
        width: 19/2.34375rem;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin: 0 1/2.34375rem 0 0;
        position: relative;
        top: -1/2.34375rem;
      }
      .iright {
        font-size: 1.02/2.34375rem;
        .name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: bold;
          font-size: 1.2/2.34375rem;
          color: rgba(0, 143, 176, 1);
        }
        .desp {
          color: #666666;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          font-size: 0.4rem;
        }
        .king {
          margin: 0.6/2.34375rem 0;
          font-weight: 600;
        }
      }
    }
  }
}
</style>