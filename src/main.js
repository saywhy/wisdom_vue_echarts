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
import "font-awesome/css/font-awesome.min.css";
import Vuetree from "vue-simple-tree";
import $ from "jquery";
Vue.use(Vuetree);
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");

import VideoPlayer from "vue-video-player";
// import EZUIPlayer from "ezuikit";
import qs from "qs";
Vue.use(VideoPlayer);
// Vue.use(EZUIPlayer);
// import Video from "video.js";
// import "video.js/dist/video-js.css";
// Vue.prototype.$video = Video;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$qs = qs;
Vue.prototype.$echarts = echarts; //引入组件
Vue.prototype.$axios = axios;
axios.defaults.baseURL = "/api";
axios.defaults.withCredentials = true; //让ajax携带cookie
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";
Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router,
  components: {
    App,
  },
  template: "<App/>",
});
