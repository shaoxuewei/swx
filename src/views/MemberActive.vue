<template>
  <div class="MemberActive">
      
    <div class="bg">
      <img src="../../static/assets/innerlogo@2x.png">
    </div>
    <div class="form">
      <div class="formitem">
        <div class="left">VIP激活码:</div>
        <div class="right">
          <input type="text" placeholder="请输入VIP激活码">
           <div class="nameiconTip">
             <icon icon-style="nameTip" icon-class="icon_saomiao"></icon>
          </div>
        </div>
      </div>
      <div class="formitem">
        <div class="left">姓名:</div>
        <div class="right">
          <input type="text" :placeholder="bname" @focus="name" @blur="nameblur" v-model="nameValue" v-on:input="inp">
          <div class="nameiconTip">
             <icon icon-style="nameTip" icon-class="ShapeCopy"></icon>
          </div>
        </div>
      </div>
      <div class="formitem">
        <div class="left">身份证号:</div>
        <div class="right">
          <input type="text" placeholder="请输入会员身份证号">
        </div>
      </div>
      <div class="formitem">
        <div class="left">手机号:</div>
        <div class="right">
          <input type="text" placeholder="(必填) 请输入联系电话">
        </div>
      </div>
      <div class="formitem">
        <div class="left">联系地址:</div>
        <div class="right">
          <input type="text" placeholder="请输入会员联系地址">
        </div>
      </div>
      <div class="btn" @click="active">激活</div>
    </div>
  </div>
</template>

<script>
import icon from '../components/icon.vue'
export default {
  data() {
    return {
      // key: value
      show:true,
      nameValue:'',
      bname:'(必填)请输入会员姓名'
    };
  },
   components: {
        'icon':icon
    },
  methods: {
    active() {},
    name(){
     
    },
    nameblur(){
      if(this.nameValue){
        this.show=false
      }
    },
  inp(){
     if(this.bname){
       this.show=true
    }
    if(!this.nameValue ){
       this.show=false
    }else{
       this.show=true
    }
   
  }
  },
};
</script>

<style scoped lang="less">
.MemberActive{
}
.nameTip{
  width:0.5rem;
  height:0.5rem;
}
.nameiconTip{
  position:absolute;
  right:10px;
  top:0px;
}
.bg {
  background: #ffffff;
  display: flex;
  justify-content: center;
  padding:0.5rem 0;
  img {
    width: 50%;
    height: 3.3/2.34375rem;
    padding: 0.6/2.34375rem 0 0.6/2.34375rem 0;
  }
}
.form {
  background: #ffffff;
  font-family: PingFangSC-Regular;
  padding: 0.5/2.34375rem 1/2.34375rem 0 1/2.34375rem;
  .formitem {
    display: flex;
    align-items: center;
    .left {
      color: #008fb0;
      font-size: 0.9/2.34375rem;
      flex: 0 0 25%;
      font-weight: bold;
      display: inline-block;
      vertical-align: middle;
    }
    .right {
      position: relative;
      flex:0 0 75%;
      input {
        width:100%;
        display: inline-block;
        height:1rem;
        border:1px solid rgba(217,217,217,1);
        font-size:0.45rem;
        padding:0.2rem;
        padding-right:1rem;
        box-sizing: border-box;
        vertical-align: middle;
      }
      input::-webkit-input-placeholder {
        color: #d9d9d9;
  
      }
    }
  }
}
.btn {
  display: flex;
  justify-content: center;
  background: rgba(0, 143, 176, 1);
  color: #ffffff;
  align-items: center;
  border-radius: 0.1/2.34375rem;
  height: 2.5/2.34375rem;
  font-size:0.5rem;
  box-shadow: 0 0 8px rgba(0, 143, 176, 1);
  margin: 3/2.34375rem 0/2.34375rem 1/2.34375rem 0;
}
</style>