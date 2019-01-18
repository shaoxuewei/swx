<template>
  <div>
    <div class="textarea">
      <textarea
        class="text"
        placeholder="对我们的服务有任何的意见建议,请让我们知道"
        name="ds"
        id
        rows="10"
        style="resize:none;width:100%;box-sizing: border-box;outline:none;border: none;"
      ></textarea>
    </div>
    <div class="phone">
      <input type="number " placeholder="您的手机号码" class="input">
      <div class="yj" @click="yj">一键填入</div>
    </div>
    <div class="btn" @click="tosuccess">提交意见建议</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
    };
  },
  methods: {
    yj() {
      
    },
    //提交成功
    tosuccess(){
      this.$router.push({path:'/feedsuccess'})
    }
  },
};
</script>

<style scoped >
.textarea{
    margin: 0.8rem 0;
}
.text::-webkit-input-placeholder{
  color: #bbb;
  font-size: 20px;
}
.input::-webkit-input-placeholder{
   color: #bbb;
  font-size: 20px;
}
.text {
  color: #bbb;
  font-size: 20px;
  padding: 0 0 0 1rem;
}
.phone{
  padding: 1rem 1rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;height: 2rem;
}
  .input{
    color: #bbb;
    border:none;
    font-size: 20px;
  }
  .btn{
    margin: 0 1rem;
    color:#ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 3rem;
    background: rgba(0,143,176,1);
    border-radius: 0.5rem;
    position: absolute;
    top:40.8rem;
    width: 93%;
    box-shadow: 0 0 8px rgba(0,143,176,1);
  }
  .yj{
    color:rgba(0,143,176,1);
    font-size: 20px;
    font-family: PingFangSC-Regular;
  }
</style>