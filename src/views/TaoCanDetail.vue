<template>
  <div>
    <div class="head">
      <img src="../../static/assets/QQ截图20190107164942.png" alt>
      <div class="imgright">
        <p class="taocan">孕前常规检查套餐C</p>
        <p class="price">￥{{1900}}</p>
      </div>
    </div>
    <div class="fit">
      <div class="peop">
        <div class="zj">
          <div class="zjc">服务项目</div>
        </div>
      </div>
      <div class="items">
        <div class="item" v-for="(item,index) in items" :key="index">结肠癌</div>
      </div>
    </div>
    <div class="fit">
      <div class="peop">
        <div class="zj">
          <div class="zjc">适应人群</div>
        </div>
      </div>
      <div class="items">
        <div class="fitpeop" v-for="(item,index) in fit" :key="index">高强度工作者</div>
      </div>
    </div>
    <div class="fit">
      <div class="peop">
        <div class="zj">
          <div class="zjc">套餐详情</div>
        </div>
      </div>
      <div class="td" v-for="(item,index) in td" :key="index">
        <div class="innertd">
          <div class="title">{{item.title}}</div>
          <div class="content">{{item.content}}</div>
        </div>
      </div>
    </div>
      <div class="btn" @click="app">预 约</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
      items: [{}, {}, {}, {}, {}, {}, {}, {}],
      fit: [{}, {}, {}, {}, {}, {}],
      td: [
        {
          title: "一般检查",
          content: "身高、体重、体重指数、收缩压、舒张压"
        },
        {
          title: "内科检查",
          content:
            "病史、家族史、心率、心律、心音、肺部听诊、肝脏触诊、脾脏触诊、肾脏叩诊、内科其他"
        },
        {
          title: "外科检查",
          content:
            "皮肤、浅表淋巴结、甲状腺(外科)、乳房、脊柱、四肢关节、外生殖器、肛门、直肠指诊"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
.head {
  font-size: 1.3rem;
  background-color: #ffffff;
  margin: 0 0 0.8rem 0;
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
.fit {
  background-color: #ffffff;
  margin-bottom: 0.8rem;
  .peop {
    margin: 0 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.5rem;
    border-bottom: 1px solid #f2f2f2;
    .zj {
      font-size: 1.2rem;
      border-left: 6px solid rgba(0, 143, 176, 1);
      padding: 0 0.5rem;
      .zjc {
      }
    }
  }
  .items {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    .item {
      width: 5rem;
      background: rgba(248, 248, 248, 1);
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
    }
    .fitpeop {
      width: 6.8rem;
      background: rgba(248, 248, 248, 1);
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 2.5rem;
    }
  }
}
.td:last-child .innertd{
    border:none;
}
.td {
    background-color: #ffffff;
    line-height: 30px;
  .innertd {
    border-bottom: 1px solid #f2f2f2;
    margin: 0 1rem;
    padding: 1rem 0;
    .title {
        font-size: 1.2rem;
    }
    .content {
      color: rgba(153,153,153,1);
    }
  }
}
.btn{
    margin: 1rem;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,143,176,1);
    height: 3rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 8px rgba(0,143,176,1);
}
</style>