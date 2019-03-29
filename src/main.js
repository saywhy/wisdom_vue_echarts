// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import echarts from "echarts";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "lib-flexible";
import "common/css/common.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts; //引入组件
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
