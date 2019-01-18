<template>
  <div class="vant">
    <div class="head">
      <div class="left">{{p.name}}</div>
      <div class="right">
        <svg
          width="20px"
          height="32px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
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
        <input type="text" placeholder="搜索档案">
      </div>
    </div>
    <van-tabs v-model="active" swipeable animated>
      <van-tab title="全部">
        <div class="allsub" v-for="(item,index) in items" :key="index">
          <div class="innnerAll">
            <div class="title">
              <span class="bnam tbg" v-if="item.subname=='体检'">{{item.subname}}</span>
                 <span class="bnam mbg" v-if="item.subname=='门诊'">{{item.subname}}</span>
                    <span class="bnam zbg" v-if="item.subname=='住院'">{{item.subname}}</span>
                    
              <div class="subtitle">{{item.title}}</div>
            </div>
            <div class="content">{{item.content}}</div>
            <div class="status">
              <div class="left">体检时间:{{item.time}}</div>
              <div class="right">

                <span v-if="item.status=='点击查看'" @click="look">{{item.status}}</span>
                <span v-else>{{item.status}}</span>
                <div class="btn" @click="onDownload">下载PDF</div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="体检">
        <div class="allsub" v-for="(item,index) in items" :key="index">
          <div class="innnerAll" v-if="item.subname=='体检'">
            <div class="title">
              <span class="bnam tbg">{{item.subname}}</span>
              <div class="subtitle">{{item.title}}</div>
            </div>
            <div class="content">{{item.content}}</div>
            <div class="status">
              <div class="left">体检时间:{{item.time}}</div>
              <div class="right">
                <span v-if="item.status=='点击查看'" @click="look">{{item.status}}</span>
                <span v-else>{{item.status}}</span>
                <div class="btn" @click="onDownload">下载PDF</div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="门诊">
        <div class="allsub" v-for="(item,index) in items" :key="index">
          <div class="innnerAll" v-if="item.subname=='门诊'">
            <div class="title">
              <span class="bnam mbg">{{item.subname}}</span>
              <div class="subtitle">{{item.title}}</div>
            </div>
            <div class="content">{{item.content}}</div>
            <div class="status">
              <div class="left">体检时间:{{item.time}}</div>
              <div class="right">
                <span v-if="item.status=='点击查看'" @click="look">{{item.status}}</span>
                <span v-else>{{item.status}}</span>
                <div class="btn" @click="onDownload">下载PDF</div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="住院">
        <div class="allsub" v-for="(item,index) in items" :key="index">
          <div class="innnerAll" v-if="item.subname=='住院'">
            <div class="title">
              <span class="bnam zbg">{{item.subname}}</span>
              <div class="subtitle">{{item.title}}</div>
            </div>
            <div class="content">{{item.content}}</div>
            <div class="status">
              <div class="left">体检时间:{{item.time}}</div>
              <div class="right">
                <span v-if="item.status=='点击查看'" @click="look">{{item.status}}</span>
                <span v-else>{{item.status}}</span>
                <div class="btn" @click="onDownload">下载PDF</div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
      sc: "rgba(187, 187, 187, 1)",
      p: {
        name: "李晓东"
      },
      bname: true,
      active: 0,
      items: [
        {
          subname: "体检",
          title: "上海新虹桥和诺门诊部",
          content: "消化道标准四项体检",
          time: "2018-11-05",
          status: "点击查看"
        },
        {
          subname: "体检",
          title: "上海新虹桥和诺门诊部",
          content: "消化道标准四项体检",
          time: "2018-11-05",
          status: "点击查看"
        },
        {
          subname: "体检",
          title: "上海新虹桥和诺门诊部",
          content: "消化道标准四项体检",
          time: "2018-11-05",
          status: "点击查看"
        },
        {
          subname: "门诊",
          title: "上海华山医院",
          content: "耳鼻喉",
          time: "2018-11-05",
          status: "下载中" + "95%"
        },
        {
          subname: "住院",
          title: "上海新虹桥和诺门诊部",
          content: "伤骨科",
          time: "2018-11-05",
          status: "9.2M"
        }
      ]
    };
  },
  methods: {
    onDownload() {},
    look(){console.log('s');
    }
  }
};
</script>

<style scoped lang="less">
.head {
  // position: absolute;
  top: 0;
  padding: 0 0.3rem 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  svg {
    position: relative;
    left: 2rem;
  }
  .left {
  }
  .right {
    display: flex;
    justify-content: flex-start;
    input {
      width: 12.8rem;
      height: 1.8rem;
      border: none;
      color: #bbbbbb;
      border-radius: 1.2rem;
      padding-left: 2.6rem;
    }
    input::-webkit-input-placeholder {
      color: #bbbbbb;
    }
  }
}
.allsub {
  background: #ffffff;
  .innnerAll {
    margin: 0 1rem;
    border-bottom: 1px solid #f2f2f2;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    line-height: 32px;
    .title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .tbg{
        border:1px solid #f6ffed;
        background: #f6ffed;
        color:#52c41a;
      }
      .mbg{
         border:1px solid #fff2e8;
        background: #fff2e8;
        color:#fa632f;
      }
      .zbg{
        background:#f9f0ff;
          border:1px solid #f9f0ff;
          color: #722ed1;
      }
      .bnam {
        margin: 0 0.4rem 0 0;
        border: 1px solid;
        width: 4rem;
        border-radius: 0.3rem;
        height: 1.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
      }
      .subtitle {
        font-size: 18px;
      }
    }
    .content,
    .status {
      color: #999999;
    }
    .status {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .right {
        display: flex;
        justify-content: flex-start;
        span {
          color: rgba(0, 143, 176, 1);
        }
        .btn {
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 143, 176, 1);
          border-radius: 1.2rem;
          margin-left: 0.5rem;
          width: 5rem;
          font-size: 15px;
        }
      }
    }
  }
}
</style>