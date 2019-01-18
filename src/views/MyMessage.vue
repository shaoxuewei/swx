<template>
  <div class="s">
    <div class="plist pad" v-for="(item,index) in plist" :key="index" @click="toMymess(index)">
      <div class="svgright">
        <img class="img" src="../../static/assets/pho_nan.png" v-if="item.sex=='男'">
        <img class="img" src="../../static/assets/pho_nv.png" v-if="item.sex=='女'">
        <div class="right">
          <div class="name">{{item.name}} 
            <span class="g c">{{item.guanx}}</span>
          </div>
          <div class="sex c">{{item.sex}}
             <span class="g c">{{item.age}}</span>
          </div>
        </div>
      </div>
      <svg
        width="20px"
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
    <div class="btn">
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 38 38"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- Generator: Sketch 52.1 (67048) - http://www.bohemiancoding.com/sketch -->
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
    <div class="add pad" @click="add">您还可以新增{{num}}位就诊人</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // s: value
      num: 5,
      plist: [
        {
          name: "张晓东",
          guanx: "本人",
          sex: "男",
          age: 32
        },
        {
          name: "李琴",
          guanx: "母亲",
          sex: "女",
          age: 64
        }
      ]
    };
  },
  methods: {
    add() {},
    toMymess(index) {
      this.index = index;
      //   console.log(this);
    }
  }
};
</script>

<style scoped lang="less">
html {
  background: #f2f2f2;
}
.pad {
  margin: 1rem 1rem 0 1rem;
}
#app {
  height: 10rem;
}
.plist {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
 height: 8rem;
 border-radius: 0.4rem;
  .svgright {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .right{
    font-size: 1.2rem;
    .name{
          margin: 0 0 1.5rem 0;
    }
    .c{
      color:#bbb;
    }
    .g{
      margin-left: 0.8rem;
    }
  }
  .img {
    width: 5rem;
    height: 5rem;
    margin: 0 1.5rem;
  }
}
.btn {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  color: rgba(0, 143, 176, 1);
  height: 3rem;
  justify-content: center;
  border-radius: 0.4rem;
  border: 1px solid rgba(0, 143, 176, 1);
  margin: 2.5rem 1.3rem 1rem 1rem;
}
svg {
  display: block;
  margin: 0 1rem 0 0;
}
.add {
  color: #b7b7b7;
}
</style>