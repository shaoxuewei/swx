<template>
  <div class="body">
    <div class="head">
      <div class="bottom" @click="tab">
        <div class="icon">
          <img src="../../static/assets/icon_jianyan.png" alt>
          <div class="desp">
            生化检验报告
            <span class="dot" v-show="items.length"></span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="icon">
          <img src="../../static/assets/icon_jiancha.png" alt>
          <div class="desp">
            影像检查报告
            <span class="dot" v-show="yx.length"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="elist" v-for="(item,index) in items" :key="index" @click="towhere(index)">
        <div class="left">{{item.title}}</div>
        <div class="right">
          <span class="time">{{item.time}}</span>
          <span class="iconfont">></span>
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
          title: "右腕关节正侧位",
          time: "2018-11-05"
        },
        {
          title: "B超",
          time: "2018-11-05"
        },
        {
          title: "右腿正侧位",
          time: "2018-11-05"
        },
        {
          title: "胸腔镜",
          time: "2018-11-05"
        }
      ],
      //影像
      yx:[
          {

          }
      ]
    };
  },
  methods: {
    towhere: function(index) {
      this.index = index;
      switch (index + 1) {
        case 1:
          this.$router.push({ path: "/about" });
          break;
        case 2:
          this.$router.push({ path: "/about" });
          break;
        case 3:
          this.$router.push({ path: "/about" });
          break;
        case 4:
          this.$router.push({ path: "/about" });
          break;
      }
    }
  }
};
</script>

<style scoped lang="less">
html{
    background: #F2F2F2;
}
.body {
  background-color: #f2f2f2;
  .head {
    display: flex;
    height: 8rem;
    justify-content: space-around;
    background-color: #fff;
    margin: 0 0 0.7rem 0;
    align-items: flex-end;
    .bottom {
      width: 50%;
      // border-bottom: 3px solid rgba(0,143,176,1);
      display: flex;
      justify-content: center;
      img {
      }
      .icon {
        display: flex;
        align-items: center;
        flex-direction: column;
        .desp {
          padding: 0.5rem 0 0.5rem 0;
          .dot {
            border-radius: 50%;
            background-color: rgba(245, 34, 45, 1);
            width: 0.45rem;
            height: 0.45rem;
            position: relative;
            top: -1.3rem;
            left: 6.2rem;
            display: block;
          }
        }
      }
    }
  }
  .item {
    background: #fff;
  }
  .elist {
    background-color: #fff;
    margin: 0 1rem 0 1rem;
    border-bottom: 1px solid #f2f2f2;
    height: 3rem;
    line-height: 3rem;
    vertical-align: middle;
    .right {
      float: right;
      color: #bbb;
      font-size: 0.9rem;
      .time {
        margin-right: 1.2rem;
      }
    }
    .left {
      float: left;
    }
  }
}
</style>