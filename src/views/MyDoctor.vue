<template>
  <div>
    <div class="exp">
      <div class="peop">
        <div class="div" @click="getDoctorMess" v-for="(item,index) in items" :key="index">
          <img src alt>
          <div class="iright">
            <p class="name">
              {{ item.name}}
              <svg
                width="10px"
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
                    <g
                      id="list/singleline/right/icon"
                      transform="translate(664.000000, 248.000000)"
                    >
                      <polygon
                        id="Chevron"
                        points="7.92592593 9 6 10.9596266 17.0740741 21.7375731 6 32.5155196 7.92592593 34.4751462 21.4074074 21.7375731"
                      ></polygon>
                    </g>
                  </g>
                </g>
              </svg>
            </p>
            <p class="king">{{item.sub}}</p>
            <div class="desp">{{item.able}}</div>
          </div>
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
          name: "徐栋",
          sub: "博士、教授、主任医师",
          able:
            "擅长超声精准引导下微创治疗肝癌(肺癌、胰腺癌、肾癌、前列腺癌转移性淋巴结)等恶性肿瘤以及甲状腺结节"
        },
        {
          name: "徐栋",
          sub: "博士、教授、主任医师",
          able:
            "擅长超声精准引导下微创治疗肝癌(肺癌、胰腺癌、肾癌、前列腺癌转移性淋巴结)等恶性肿瘤以及甲状腺结节"
        },
        {
          name: "徐栋",
          sub: "博士、教授、主任医师",
          able:
            "擅长超声精准引导下微创治疗肝癌(肺癌、胰腺癌、肾癌、前列腺癌转移性淋巴结)等恶性肿瘤以及甲状腺结节"
        },
      ]
    };
  }
};
</script>

<style scoped lang="less">
.exp {
  background-color: #fff;
  .peop {
    padding-top: 1.5rem;
    margin: 0 1rem;
    .div {
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #f2f2f2;
      //   margin: 1rem 0 0 0;
      p {
        margin: 0;
      }
      img {
        display: block;
        height: 6rem;
        width: 19rem;
        border: 1px solid #ccc;
        border-radius: 50%;
        margin: 0 1rem 0 0;
        position: relative;
        top: -1rem;
      }
      .iright {
        font-size: 1.02rem;
        .name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.2rem;
          color: rgba(0, 143, 176, 1);
        }
        .desp {
          color: #666666;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .king {
          margin: 0.6rem 0;
          font-weight: 600;
        }
      }
    }
  }
}
</style>