import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './styles/index.less'
import 'normalize.css' // 默认样式
import './utils/as-required-vant.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
