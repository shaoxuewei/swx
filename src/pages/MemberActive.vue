<template>
  <div>
       <div class="bg">
      <img src="../../static/assets/innerlogo@2x.png">
    </div>
    <div class="form">
      <div class="formitem">
        <div class="left">VIP激活码:</div>
        <div class="right">
          <input type="text" placeholder="请输入VIP激活码">
        </div>
      </div>
      <div class="formitem">
        <div class="left">姓名:</div>
        <div class="right">
          <input type="text" placeholder="(必填)请输入会员姓名">
        </div>
      </div>
      <div class="formitem">
        <div class="left">身份证号:</div>
        <div class="right">
          <input type="text" placeholder="请输入会员身份证号">
        </div>
      </div>
      <div class="formitem">
        <div class="left">手机号</div>
        <div class="right">
          <input type="text" placeholder="(必填)请输入联系电话">
        </div>
      </div>
       <div class="formitem">
        <div class="left">联系地址:</div>
        <div class="right">
          <input type="text" placeholder="请输入会员联系地址">
        </div>
      </div>
    </div>
    <div class="btn" @click="active">激活</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // key: value
      }
    },
    methods: {
      active() {
        
      }
    },
  }
</script>

<style scoped lang="less">
.bg {
   background: #ffffff;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
      height: 2rem;
      padding: 0.6rem 0 0.6rem 0;
    }
}
  .form{
    margin: 0 1rem;
    .formitem{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{}
      .right{}
    }
  }
</style>