import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './common/css/vant.less'
import './common/js/iconfont.js'
import './common/js/base.js'
import './common/css/common.css'
// import Icon from 'vue-svg-icon/Icon.vue'
// import Mysvg from './components/MySvg.vue'
// Vue.component('icon', Icon)
// Vue.component('mysvg',Mysvg)
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
