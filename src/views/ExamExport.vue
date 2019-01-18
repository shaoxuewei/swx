<template>
  <div id="app">
    <div class="elist">
      <div class="item mar" v-for="(item,index) in items" :key="index" @click="tosub(index)">
        <div class="left">
          <svg class="icon">
            <use xlink:href="item.icon"></use>
          </svg>
          <div class="sub">{{item.subject}}</div>
        </div>
        <div class="right">
          <div v-if="item.subcount">
            <span class="span">{{item.subcount}}</span>项需要重点关注
          </div>
          <div class="mess"></div>
          <svg class="iconright" width='20px;' height="20px">
            <use xlink:href="#mymess"></use>
          </svg>
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
          icon: "#ex",
          subject: "一般检查项",
          subcount: 1,
          righticon: ""
        },
        {
          icon: "#nk",
          subject: "内科",
          righticon: ""
        },
        {
          icon: "#wk",
          subject: "外科",
          righticon: ""
        },
        {
          icon: "#fk",
          subject: "妇科",
          righticon: ""
        },
        {
          icon: "#kk",
          subject: "口腔科",
          subcount: 1,
          righticon: ""
        },
        {
          icon: "#bg",
          subject: "血常规",
          righticon: ""
        },
        {
          icon: "#ng",
          subject: "尿常规",
          righticon: ""
        },
        {
          icon: "#sj",
          subject: "实验室检查",
          righticon: ""
        },
        {
          icon: "#ssj",
          subject: "超声科检查",
          righticon: ""
        },
        {
          icon: "#xdt",
          subject: "心电图室",
          righticon: ""
        }
      ]
    };
  },
  methods: {
    tosub(index) {
      this.index = index;
      switch (index + 1) {
        case 1:
          break;
        case 5:
            this.$router.push({path:'/Stomat'})
          break;
      }
    }
  }
};
</script>

<style scoped lang="less">
#app {
  background: #ffffff;
}
.mar {
  margin: 0 1rem;
}
.elist {
  background: #ffffff;

  svg {
    display: block;
    width: 27px;
    height: 42px;
  }
  .icon {
    height: 2.2rem;
    width: 3.2rem;
  }
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.34rem;
    border-bottom: 1px solid #f2f2f2;
    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .right {
      display: flex;
      align-items: center;
      .span {
        color: rgba(245, 34, 45, 1);
      }
    }
  }
}
</style>