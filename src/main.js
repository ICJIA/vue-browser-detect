import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import browserDetect from "vue-browser-detect-plugin";
Vue.use(browserDetect);
Vue.config.productionTip = false;

import TreeView from "vue-json-tree-view";
Vue.use(TreeView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
