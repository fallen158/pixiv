import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/rem.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Lazyload } from 'mint-ui';


Vue.use(Lazyload);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
