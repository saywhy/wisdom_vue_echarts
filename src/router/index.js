import Vue from "vue";
import Router from "vue-router";
import login from "components/login";
import index from "components/index";
import Home from "components/Home";
import Equipment from "components/Equipment";
import Green from "components/Green";
import Monitor from "components/Monitor";
import Quality from "components/Quality";
import RealName from "components/RealName";
import Safety from "components/Safety";
import Technology from "components/Technology";
import Techhology_Blueprint from "components/Techhology_Blueprint";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/", // 默认进入路由
      redirect: "/login", //重定向
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/index",
      name: "index",
      component: index,
      children: [
        {
          path: "/Home",
          name: "Home",
          component: Home,
        },
        {
          path: "/Green",
          name: "Green",
          component: Green,
        },
        {
          path: "/Equipment",
          name: "Equipment",
          component: Equipment,
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
          params: {
            url: "",
          },
          children: [
            {
              path: "/Techhology_Blueprint",
              name: "Techhology_Blueprint",
              component: Techhology_Blueprint,
            },
          ],
        },
      ],
    },
  ],
});

// 全局路由守卫

export default router;
