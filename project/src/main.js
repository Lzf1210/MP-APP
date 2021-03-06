// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import center from './observer'
import './rem'
import './reset.css'
import './iconstyle/iconfont.css'
import './iconstyle/iconfont.js'
import './iconstyle/demo.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(ElementUI);
Vue.use(MintUI)
Vue.config.productionTip = false;

Vue.prototype.observer  = center;





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
