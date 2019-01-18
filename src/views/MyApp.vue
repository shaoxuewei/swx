<template>
  <div>
    <div class="app" v-if="true">
      <div class="apped">
        <div class="head mar bd">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 36 36"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="app"
          >
            <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
            <title>已预约</title>
            <desc>Created with Sketch</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="我的预约" transform="translate(-41.000000, -186.000000)" fill="#008FB0">
                <g id="check-circle" transform="translate(41.000000, 186.000000)">
                  <path
                    d="M24.9394531,12.0996094 C25.1806641,12.0996094 25.3216797,12.3742188 25.1769531,12.5708984 L17.3617187,23.4068359 C16.8904297,24.0636719 15.9144531,24.0636719 15.4431641,23.4068359 L10.8193359,16.9943359 C10.6783203,16.7976563 10.8193359,16.5230469 11.0605469,16.5230469 L12.8009766,16.5230469 C13.1832031,16.5230469 13.5394531,16.7085938 13.7621094,17.0166016 L16.4042969,20.6830078 L22.2378906,12.5931641 C22.4605469,12.2814453 22.8205078,12.0996094 23.1990234,12.0996094 L24.9394531,12.0996094 Z M18,1.375 C27.1808594,1.375 34.625,8.81914062 34.625,18 C34.625,27.1808594 27.1808594,34.625 18,34.625 C8.81914062,34.625 1.375,27.1808594 1.375,18 C1.375,8.81914062 8.81914062,1.375 18,1.375 Z M18,31.8046875 C25.6222656,31.8046875 31.8046875,25.6222656 31.8046875,18 C31.8046875,10.3777344 25.6222656,4.1953125 18,4.1953125 C10.3777344,4.1953125 4.1953125,10.3777344 4.1953125,18 C4.1953125,25.6222656 10.3777344,31.8046875 18,31.8046875 Z"
                    id="合并形状"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          已预约
        </div>
        <div class="item mar" v-for="(item,index) in items" :key="index" @click="toApp">
          <div class="right">
               <p class="taocan">{{item.tname}}</p>
          <p style="padding:0.4rem 0;color:#bbb">
            {{ item.subject}}/检测人:{{item.jname}}
          </p>
          <p style="color:#bbb">2018-11-05 周五 08:30 七号楼A01</p>
          </div>
          <div class="lefticon">
             <svg
              width="20px"
              height="20px"
              viewBox="0 0 26 42"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="svg"
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
      <div class="shop">
        <div class="head mar bd">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="app"
          >
            <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
            <title>已购未预约</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="我的预约" transform="translate(-43.000000, -767.000000)" fill="#008FB0">
                <g id="edit-square" transform="translate(43.000000, 767.000000)">
                  <path
                    d="M30.546875,16 C30.7101562,16 30.84375,16.1335938 30.84375,16.296875 L30.84375,29.65625 C30.84375,30.3130859 30.3130859,30.84375 29.65625,30.84375 L2.34375,30.84375 C1.68691406,30.84375 1.15625,30.3130859 1.15625,29.65625 L1.15625,2.34375 C1.15625,1.68691406 1.68691406,1.15625 2.34375,1.15625 L15.703125,1.15625 C15.8664063,1.15625 16,1.28984375 16,1.453125 L16,3.53125 C16,3.69453125 15.8664063,3.828125 15.703125,3.828125 L3.828125,3.828125 L3.828125,28.171875 L28.171875,28.171875 L28.171875,16.296875 C28.171875,16.1335938 28.3054687,16 28.46875,16 L30.546875,16 Z M10.2072266,16.8498047 C10.2072266,16.771875 10.240625,16.6976563 10.2925781,16.6419922 L25.7226562,1.24160156 C25.7820312,1.1859375 25.85625,1.15625 25.9341797,1.15625 C26.0121094,1.15625 26.0863281,1.18222656 26.1457031,1.24160156 L30.7583984,5.85058594 C30.8734375,5.965625 30.8734375,6.15488281 30.7583984,6.26992188 L15.3246094,21.6703125 C15.2726562,21.7222656 15.1984375,21.7519531 15.1242187,21.7556641 L10.7453125,21.8632812 L10.7304687,21.8632812 C10.4001953,21.8632812 10.1330078,21.5923828 10.1367187,21.2621094 L10.2072266,16.8498047 Z M12.5636719,17.7255859 L12.5376953,19.4474609 L14.2335937,19.4066406 L27.6115234,6.05839844 L25.9341797,4.38476562 L12.5636719,17.7255859 Z"
                    id="合并形状"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          已购未预约
        </div>
        <div class="con mar" v-for="(item,index) in sub" :key="index" @click="toapp(index)">
          <div class="shopping">
            <div class="sh">
              <div class="innermess">{{item.name}}</div>
              <div class="status">{{item.status}}</div>
            </div>
          </div>
          <div class="zkongjian">
            <div class="toapp" @click.stop="btnapp">预约</div>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 26 42"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              class="shoppedsvg"
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
    </div>
    <div class="unapp" v-else>您还没有预约任何套餐</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
      items: [
        {
          tname: "VIP体检套餐A-全家版",
          subject: "就诊",
          jname: "张晓东"
        },
        
        {
          tname: "VIP体检套餐B-个人版",
          subject: "就诊",
          jname: "张援朝"
        }
      ],
      sub: [
        {
          name: "消化道标准四项体检",
          status: "尚未预约"
        },
        {
          name: "消化道标准四项体检",
          status: "尚未预约"
        }
      ]
    };
  },
  methods: {
    btnapp() {
        this.$router.push({path:'/App?mess'})
    },
    toApp(){
        this.$router.push({path:'/App'})
    }
  }
};
</script>

<style scoped lang="less">
.mar {
  margin: 0 1rem 0 1rem;
}
.bd {
  border-bottom: 1px solid #f2f2f2;
}
.apped {
  background-color: #ffffff;
  margin-bottom: 1rem;
  .head {
    display: flex;
    align-items: center;
    font-family: PingFangSC-Regular;
    // font-size: 34px;
    color: #333333;
    line-height: 51px;
    font-size: 20px;
    .app {
      margin-right: 0.5rem;
    }
  }
  .item:last-child {
    border: none;
  }
  .item {
    padding: 1rem 0 1rem 0;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .taocan {
      font-size: 20px;
    }
    p {
      margin: 0;
      font-size: 20px;
    }
  }
}
.shop {
    
  background-color: #ffffff;
  .head {
    display: flex;
    align-items: center;
    font-family: PingFangSC-Regular;
    // font-size: 34px;
    color: #333333;
    line-height: 51px;
    font-size: 20px;
    .app {
      margin-right: 0.5rem;
    }
  }
  .con:last-child{
      border: none;
  }
  .con {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    font-size: 20px;
    border-bottom: 1px solid #F2F2F2;
    .sh {
      .innermess {
        padding: 0 0 0.5rem 0;
      }
      .status {
        color: #bbb;
      }
    }
    .zkongjian {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .shoppedsvg {
        margin: 0 0 0 1rem;
      }
      .toapp {
        width: 6rem;
        height: 2.5rem;
        background-color: rgba(0, 143, 176, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 2rem;
        font-size: 1.1rem;
        font-family: PingFangSC-Medium;
        box-shadow: 0 0 8px rgba(0, 143, 176, 1);
      }
    }
  }
}
</style>