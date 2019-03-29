import Vue from "vue";
import Router from "vue-router";
import Home from "components/Home";
import Equipment from "components/Equipment";
import Green from "components/Green";
import Monitor from "components/Monitor";
import Quality from "components/Quality";
import RealName from "components/RealName";
import Safety from "components/Safety";
import Technology from "components/Technology";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/", // 默认进入路由
      redirect: "/Home", //重定向
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },
    {
      path: "/Equipment",
      name: "Equipment",
      component: Equipment,
    },
    {
      path: "/Green",
      name: "Green",
      component: Green,
    },
    {
      path: "/Monitor",
      name: "Monitor",
      component: Monitor,
    },
    {
      path: "/Quality",
      name: "Quality",
      component: Quality,
    },
    {
      path: "/RealName",
      name: "RealName",
      component: RealName,
    },
    {
      path: "/Safety",
      name: "Safety",
      component: Safety,
    },
    {
      path: "/Technology",
      name: "Technology",
      component: Technology,
    },
  ],
});

// 全局路由守卫

export default router;
