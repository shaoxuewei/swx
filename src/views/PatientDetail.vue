<template>
  <div>
    <div class="bg">
      <div class="add mar">
        <div class="title">患者姓名</div>
        <input class="mess" :value="peopleMess.name" @focus="clearName">
      </div>
      <div class="add mar">
        <div class="title">联系电话</div>
        <input class="mess" :value="peopleMess.phone" @focus="clearPhone">
      </div>
      <div class="add mar">
        <div class="title">身份证号</div>
        <input
          class="mess"
          v-model="peopleMess.id"
          maxlength="18"
          @focus="agininput"
          @blur="idblur"
        >
      </div>
      <div class="add mar">
        <div class="title">年龄</div>
        <div class="mess">{{peopleMess.age}}</div>
      </div>
      <div class="add mar">
        <div class="title">性别</div>
        <div class="mess">{{peopleMess.sex}}</div>
      </div>
      <div class="add mar" @click="poup">
        <div class="title">与本人关系</div>
        <div class="righticon">
          <div class="mess">{{rel}}</div>
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
              <g id="我的信息" transform="translate(-664.000000, -248.000000)" fill="#C7C7CC">
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
        <van-popup v-model="MarrShow" position="bottom">
          <div class="pop1">
            <div class="cao">
              <div class="cancel" @click.stop="MarrCancel">取消</div>
              <div class="success" @click.stop="MarrSuccess">完成</div>
            </div>
            <van-picker :columns="columnsMarr" @change="ChangeMarr" ref="picker"/>
          </div>
        </van-popup>
        <van-popup v-model="show" position="bottom">
          <div class="pop">
            <div class="cao">
              <div class="cancel" @click.stop="cancel">取消</div>
              <div class="guanxi">与本人关系</div>
              <div class="success" @click.stop="success">完成</div>
            </div>
            <van-picker :columns="columns" @change="onChange" ref="picker"/>
          </div>
        </van-popup>
      </div>
      <div class="add mar" @click="marr">
        <div class="title">婚姻状况</div>
        <div class="righticon">
          <div class="mess">{{peopleMess.marr}}</div>
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
              <g id="我的信息" transform="translate(-664.000000, -248.000000)" fill="#C7C7CC">
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
    </div>
    <div class="fff">
      <div class="car mar">
        <div class="add" v-for="(item,index) in card" :key="index">
          <div class="tltle">就诊卡{{index+1}}</div>
          <div class="carnum">{{item}}</div>
        </div>
      </div>
    </div>
    <!-- <div class="addcard" @click="addcard">
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 38 38"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="plusmark"
      >
        <title>icon_xinzeng</title>
        <desc>Created with Sketch.</desc>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g
            id="我的信息"
            transform="translate(-260.000000, -716.000000)"
            fill="#008FB0"
            fill-rule="nonzero"
          >
            <g id="jia" transform="translate(260.000000, 716.000000)">
              <path
                d="M20.125,10 L17.875,10 L17.875,17.875 L10,17.875 L10,20.125 L17.875,20.125 L17.875,28 L20.125,28 L20.125,20.125 L28,20.125 L28,17.875 L20.125,17.875 L20.125,10 Z M19,1 C9.05799999,1 1,9.05875001 1,19 C1,28.942 9.05799999,37 19,37 C28.942,37 37,28.942 37,19 C37,9.05875001 28.942,1 19,1 Z M19,34.1875 C10.612,34.1875 3.8125,27.388 3.8125,19 C3.8125,10.612 10.612,3.8125 19,3.8125 C27.388,3.8125 34.1875,10.612 34.1875,19 C34.1875,27.388 27.388,34.1875 19,34.1875 Z"
                id="形状"
              ></path>
            </g>
          </g>
        </g>
      </svg>
      新增就诊人
    </div>
    <van-popup position v-model="ashow" id="add">
      <div class="ac">
        <div class="head">新增就诊卡</div>
        <div class="cardcontent">
          <div class="innercard">
            就诊卡{{card.length+1}}
            <input
              type="number"
              placeholder="请输入就诊卡号"
              class="input"
              v-model="ainput"
            >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 44 44"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>icon_saomiao</title>
              <desc>Created with Sketch.</desc>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g
                  id="会员激活"
                  transform="translate(-646.000000, -356.000000)"
                  fill="#008FB0"
                  fill-rule="nonzero"
                >
                  <g id="扫描二维码" transform="translate(646.000000, 356.000000)">
                    <path
                      d="M0.926315789,0.926315789 L3.56052628,0.926315789 L3.56052628,11.4631579 L0.926315789,11.4631579 L0.926315789,0.926315789 Z M3.56052628,0.926315789 L11.4631579,0.926315789 L11.4631579,3.56052628 L3.56052628,3.56052628 L3.56052628,0.926315789 Z M43.0736842,0.926315789 L40.4394737,0.926315789 L40.4394737,11.4631579 L43.0736842,11.4631579 L43.0736842,0.926315789 Z M40.4394737,0.926315789 L32.5368421,0.926315789 L32.5368421,3.56052628 L40.4394737,3.56052628 L40.4394737,0.926315789 Z M0.926315789,43.0736842 L3.56052628,43.0736842 L3.56052628,32.5368421 L0.926315789,32.5368421 L0.926315789,43.0736842 Z M3.56052628,43.0736842 L11.4631579,43.0736842 L11.4631579,40.4394737 L3.56052628,40.4394737 L3.56052628,43.0736842 Z M43.0736842,43.0736842 L40.4394737,43.0736842 L40.4394737,32.5368421 L43.0736842,32.5368421 L43.0736842,43.0736842 Z M40.4394737,43.0736842 L32.5368421,43.0736842 L32.5368421,40.4394737 L40.4394737,40.4394737 L40.4394737,43.0736842 Z"
                      id="形状"
                    ></path>
                    <path
                      d="M8.10526316,16.2105263 L8.10526316,17.3684211 L35.8947368,17.3684211 L35.8947368,16.2105263 L8.10526316,16.2105263 Z M23.1578947,26.6315789 L21.4315789,26.6315789 L19.6842105,30.1052632 L21.4315789,30.1052632 L23.1578947,26.6315789 Z M26.6315789,26.6315789 L24.9159178,26.6315789 L23.1578947,30.1052632 L24.9159178,30.1052632 L26.6315789,26.6315789 Z M33.5789474,26.6315789 L29.2368421,26.6315789 L27.7894737,30.1052632 L32.1315789,30.1052632 L33.5789474,26.6315789 Z M32.6331584,10.4210526 C33.5083774,10.4317948 34.3437002,10.8091305 34.9553348,11.4700364 C35.5669693,12.1309424 35.9048045,13.0212706 35.8945082,13.9451267 L35.8945082,28.8969786 C35.9048045,29.8208346 35.5669693,30.7111629 34.9553348,31.3720688 C34.3437002,32.0329748 33.5083774,32.4103105 32.6331584,32.4210526 L11.4054375,32.4210526 C10.5235091,32.4211163 9.6782525,32.0485361 9.0582711,31.3864463 C8.4382897,30.7243565 8.09517684,29.8278546 8.10549179,28.8969786 L8.10549179,13.9451267 C8.09519546,13.0212706 8.43303067,12.1309424 9.04466524,11.4700364 C9.6562998,10.8091305 10.4916226,10.4317948 11.3668416,10.4210526 L32.6331584,10.4210526 Z"
                      id="形状"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="zs">
            <p>注:</p>
            <p>如果您是首次来我院就医, &nbsp&nbsp需要现场办理就诊卡</p>
          </div>
        </div>
        <div class="cs">
          <div class="acancel" @click="acancel">取消</div>
          <div class="asuccess" @click="asuccess">确定</div>
        </div>
      </div>
    </van-popup>-->
    <div class="btncontent">
      <div class="btnsave" @click="save">保存修改</div>
    </div>
    <div class="btndel">
      <div class="btnsdel" @click="deletepai">删除就诊人</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
      show: false,
      MarrShow: false,
      ashow: false,
      rel: "本人",
      tempvalue: "",
      tempMarrvale: "",
      idimput: "",
      peopleMess: {
        name: "张晓东",
        phone: 1888888888888,
        id: 123456789987654321,
        age: 32,
        sex: "男",
        marr: "已婚"
      },
      show: false,
      idvalue: "",
      ainput: "",
      card: [123456789, 987654321],
      columns: ["母亲", "父亲", "本人", "女儿", "儿子"],
      columnsMarr: ["已婚", "未婚"]
    };
  },
  mounted() {},
  created() {
    setTimeout(function() {
      this.avalue = "";
    }, 2000);
  },
  methods: {
    //修改婚姻状况
    marr() {
      this.MarrShow = true;
    },
    //修改身份证
    agininput() {
      (this.peopleMess.age = ""), (this.peopleMess.sex = "");
      this.peopleMess.id = "";
    },
    clearName() {
      this.peopleMess.name = "";
    },
    clearPhone() {
      this.peopleMess.phone = "";
    },
    onChange(picker, value, index) {
      this.$refs.picker.setColumnIndex(2);
      this.tempvalue = value;
    },
    ChangeMarr(picker, value, index) {
      this.tempMarrvale = value;
    },
    idinput() {
    
    },
    poup() {
      this.show = true;
    },
    MarrCancel() {
      this.MarrShow = false;
    },
    cancel() {
      this.show = false;
    },
    success() {
      this.show = false;
      this.rel = this.tempvalue;
    },
    //婚姻关系选择完成
    MarrSuccess() {
      this.MarrShow = false;
      this.peopleMess.marr = this.tempMarrvale;
    },
    onClose() {
      this.show = false;
    },
    deletepai() {},
    //身份失去焦点
    idblur() {
      let dateNow = new Date().getFullYear();
      let seventeenth=this.peopleMess.id.substring(0,17)
      let eigth=this.peopleMess.id.substring(17)
      let isman = this.peopleMess.id.substring(vlen - 1, vlen - 2) % 2;
      let vlen = this.peopleMess.id.length;
      let agenum = dateNow - Number(this.peopleMess.id.substring(6, 10));
      let regexp = /\D/gi;
      let reged = seventeenth.match(regexp);
      let reight=eigth.match(regexp)
      if (this.peopleMess.id.length === 18&&!reged) {
        this.peopleMess.age = agenum;
        if (isman == 0) {
          this.peopleMess.sex = "男";
        } else {
          this.peopleMess.sex = "女";
        }
      } else {
        // }
      }
      // else{

      // }
    },
    //新增就诊卡
    addcard() {
      this.ashow = true;
      this.ainput = "";
    },
    //保存修改
    save() {
      if (!this.peopleMess.name) {
      }
      if (!this.peopleMess.id) {
      }
    },
    //新增卡取消
    acancel() {
      this.ashow = false;
    },
    //新增输入
    //新增卡成功
    asuccess() {
      if (this.ainput) {
        this.card.push(this.ainput);
      }
      this.ashow = false;
    }
  },
  //
  deletepai() {}
};
</script>
<style scoped lang="less">
.bg .add:last-child {
  border: none;
}
svg {
  color: rgba(199, 199, 204, 1);
  font-size: 0.2rem;
  position: relative;
  left: 0.35rem;
}
.mar {
  margin: 0 1rem 0 1rem;
}
.bg {
  background: #ffffff;
  margin: 0.8rem 0 0.8rem 0;
  .add {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5rem;
    border-bottom: 1px solid #f2f2f2;
    .righticon {
      display: flex;
      justify-content: flex-start;
    }
    input {
      text-align: right;
      border: none;
    }
    .pop1 {
      height: 12rem;
      .cao {
        display: flex;
        padding: 0.7rem 0.7rem 0 0.7rem;
        justify-content: space-between;
        .guanxi {
          font-size: 1.2rem;
          color: #000;
        }
        .cancel,
        .success {
          color: rgba(0, 143, 176, 1);
        }
      }
    }
    .pop {
      height: 16rem;
      .cao {
        display: flex;
        padding: 0.7rem 0.7rem 0 0.7rem;
        justify-content: space-between;
        .guanxi {
          font-size: 1.2rem;
          color: #000;
        }
        .cancel,
        .success {
          color: rgba(0, 143, 176, 1);
        }
      }
    }
  }
}
.fff {
  background: #ffffff;
  .car {
    .add {
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f2f2f2;
    }
  }
}
.addcard {
  background: #ffffff;
  display: flex;
  justify-content: center;
  padding: 1rem 0 0 0;
  color: rgba(0, 143, 176, 1);
  .plusmark {
    margin: 0.15rem 1rem 0 0;
  }
}
.btncontent {
  background: #ffffff;
  display: flex;
  justify-content: center;
  .btnsave {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92%;
    height: 3rem;
    background-color: rgba(0, 143, 176, 1);
    color: #fff;
    border-radius: 0.4rem;
    margin: 4rem 0 0 0;
    box-shadow: 0px 0px 8px rgba(0, 143, 176, 1);
  }
}
.btndel {
  background: #ffffff;
  display: flex;
  justify-content: center;
  .btnsdel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 92%;
    height: 3rem;
    background-color: rgba(245, 34, 45, 1);
    color: #fff;
    border-radius: 0.4rem;
    margin: 1rem 0 0 0;
    box-shadow: 0px 0px 8px rgba(245, 34, 45, 1);
  }
}
#add {
  border-radius: 0.5rem;
  .ac {
    width: 100%;
    display: flex;
    font-family: PingFangSC-Regular;
    flex-direction: column;
    width: 18rem;
    height: 16rem;
    align-items: center;
    overflow: hidden;
    .cs {
      height: 3.6rem;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      .acancel {
        border-right: 1px solid #f2f2f2;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
      }
      .asuccess {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 143, 176, 1);
        font-size: 18px;
      }
    }
    .head {
      font-family: PingFangSC-Regular;
      font-size: 21px;
      color: #000000;
      letter-spacing: 0;
      line-height: 45px;
    }
    .cardcontent {
      border: 1px solid #f2f2f2;
      width: 100%;

      .innercard {
        align-items: center;
        display: flex;
        justify-content: space-between;
        height: 3.5rem;
        margin: 0 1rem 0 1rem;
        border-bottom: 1px solid #f2f2f2;
        .input {
          border: none;
          color: #bbb;
          font-size: 1rem;
          text-align: right;
        }
      }
    }
  }
}
.zs {
  padding: 1rem 0 1rem 0;
  color: #bbb;
  margin: 0 1rem 0 1rem;

  p {
    margin: 0;
  }
}
</style>