/* eslint-disable */
import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import accessEnum from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginAndRegisterView from "@/views/user/UserLoginAndRegisterView.vue";
import postView from "@/views/post/postView.vue";
import postContentView from "@/views/post/postContentView.vue";
import postAdd from "@/views/post/postAdd.vue";
import UserEditView from "@/views/user/UserEditView.vue";
import ContentView from "@/views/course/ContentView.vue";
import ColumnView from "@/views/Column/ColumnView.vue";
import CourseView from "@/views/course/CourseView.vue";
import ChineseView from "@/views/course/ChineseView.vue";
import MathView from "@/views/course/MathView.vue";
import EnglishView from "@/views/course/EnglishView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginAndRegisterView,
      },
      {
        path: "/course",
        component: CourseView,
      },
      {
        path: "/course/chinese",
        component: ChineseView,
      },
      {
        path: "/course/math",
        component: MathView,
      },
      {
        path: "/course/english",
        component: EnglishView,
      },
    ],
  },
  {
    path: "/chose",
    name: "首页",
    component: ContentView,
  },
  {
    path: "/post",
    name: "论坛广场",
    component: postView,
  },
  {
    path: "/",
    name: "专栏",
    component: ColumnView,
  },
  {
    path: "/",
    redirect: "/chose",
  },
  {
    path: "/hide",
    name: "隐藏页面",
    component: HomeView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/admin",
    name: "仅管理员可见",
    component: AdminView,
    meta: {
      access: accessEnum.ADMIN,
    },
  },

  {
    path: "/post/:postId",
    name: "postId",
    component: postContentView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/postAdd",
    name: "postAdd",
    component: postAdd,
    meta: {
      hideInMenu: true,
      access: accessEnum.USER,
    },
  },
  {
    path: "/userEdit",
    name: "userEdit",
    component: UserEditView,
    meta: {
      hideInMenu: true,
      access: accessEnum.USER,
    },
  },
];
