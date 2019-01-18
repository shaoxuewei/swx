<template>
  <div class>
    <div class="head">
      <img src="../../static/assets/QQ截图20190107164942.png" alt>
      <div class="imgright">
        <p class="taocan">sssssssssssss</p>
        <p class="price">￥{{1900}}</p>
      </div>
    </div>
    <div class="appmess" @click="toTime">
      <div class="item mar">
        <div class="lefticon">
          <svg
            width="20px"
            height="30px"
            viewBox="0 0 36 36"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="icon"
          >
            <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
            <title>预约时间</title>
            <desc>Created with Sketch.</desc>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                id="体检套餐-copy-3"
                transform="translate(-41.000000, -494.000000)"
                fill="#008FB0"
                fill-rule="nonzero"
              >
                <g id="time-circle-copy" transform="translate(41.000000, 494.000000)">
                  <path
                    d="M18,1.375 C27.1808594,1.375 34.625,8.81914063 34.625,18 C34.625,27.1808594 27.1808594,34.625 18,34.625 C8.81914063,34.625 1.375,27.1808594 1.375,18 C1.375,8.81914063 8.81914063,1.375 18,1.375 Z M18,31.8046875 C25.6222656,31.8046875 31.8046875,25.6222656 31.8046875,18 C31.8046875,10.3777344 25.6222656,4.1953125 18,4.1953125 C10.3777344,4.1953125 4.1953125,10.3777344 4.1953125,18 C4.1953125,25.6222656 10.3777344,31.8046875 18,31.8046875 Z M24.4830078,22.6980469 C24.6166016,22.7908203 24.6462891,22.9763672 24.5498047,23.1136719 L23.4884766,24.5609375 C23.3919922,24.6908203 23.2064453,24.7205078 23.0728516,24.6240234 L16.9349609,20.1486328 C16.8570313,20.0929688 16.8125,20.0039063 16.8125,19.9074219 L16.8125,9.6875 C16.8125,9.52421875 16.9460938,9.390625 17.109375,9.390625 L18.8943359,9.390625 C19.0576172,9.390625 19.1912109,9.52421875 19.1912109,9.6875 L19.1912109,18.8720703 L24.4830078,22.6980469 Z"
                    id="合并形状"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div class="time">预约时间</div>
        </div>
        <div class="apptime"></div>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 26 42"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="next"
        >
          <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
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
    <div class="nurse">
      <div class="nurseList" v-for="(item,index) in items" :key="index">
        <img src alt>
        <div class="imgright">
          <div class="obj">
            <p>{{item.name}}</p>
            <p class="duty">{{item.duty}}</p>
          </div>
          <div class="iconfont">s</div>
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
      num: 1,
      price: 1900,
      items: [
        {
          toux: "",
          name: "张三",
          duty: "妇产科护士"
        },
        {
          toux: "",
          name: "张三",
          duty: "妇产科护士"
        },
        {
          toux: "",
          name: "张三",
          duty: "妇产科护士"
        }
      ]
    };
  },
  methods: {
    toTime() {
      this.$router.push({ path: "/stime" });
    }
  }
}; 
</script>

<style scoped lang="less">
.head {
  font-size: 1.3rem;
  background-color: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  height: 9rem;
  img {
    display: block;
    height: 6rem;
    width: 6rem;
    margin: 0 1rem 0 0;
  }
  .price {
    color: rgba(0, 143, 176, 1);
  }
}
.appmess {
  font-size: 1.3rem;
  margin: 0.8rem 0;
  background-color: #ffffff;
  .item:last-child {
    border: none;
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    height: 4rem;
    .lefticon {
      display: flex;
      justify-content: flex-start;
      .time {
      }
      .icon {
        margin-right: 0.7rem;
      }
    }
  }
}
.mar {
  margin: 0 1rem 0 1rem;
}
.nurse {
  background-color: #ffffff;
  font-family: PingFangSC-Regular;
  .nurseList {
    margin: 0 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    img {
      display: block;
      height: 5rem;
      width: 5rem;
      margin: 0 1rem 0 0;
      border-radius: 50%;
      border: 1px solid #f2f2f2;
    }
    .imgright{
      font-size: 1.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 15rem;
      .duty{
        color: rgba(153,153,153,1);
      }
    }
  }
}
</style>