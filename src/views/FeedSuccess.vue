<template>
  <div>
    <div class="timess">
      <div class="icon"></div>
      <div class="suc">提交成功!</div>
      <div class="thanks">感谢您对和诺医疗的大力支持</div>
      <div class="btn">完成</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // key: value
    };
  }
};
</script>

<style scoped lang="less">
.timess {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  text-align: center;
  .icon {
  }
  .suc {
    font-family: PingFangSC-Regular;
    font-size: 22px;
    color: #333333;
    text-align: center;
    padding: 1rem 0;
  }
  .thanks {
    font-family: PingFangSC-Regular;
    font-size: 15px;
    color: #333333;
    text-align: center;
    padding: 0 0 3rem 0;
  }
  .btn {
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 3rem;
    background: rgba(56, 158, 13, 1);
    border-radius: 0.5rem;
    margin: 0 1rem;
    position: relative;
    top: 2rem;
  }
}
</style>