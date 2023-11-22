/* eslint-disable */
import {RouteRecordRaw} from "vue-router";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import accessEnum from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginAndRegisterView from "@/views/user/UserLoginAndRegisterView.vue";
import postView from "@/views/post/postView.vue";
import postContentView from "@/views/post/postContentView.vue";
import postAdd from "@/views/post/postAdd.vue";
import UserEditView from "@/views/user/UserEditView.vue";
import ContentView from "@/views/Column/ContentView.vue";
import ChineseView from "@/views/course/ChineseView.vue";
import MathView from "@/views/course/MathView.vue";
import EnglishView from "@/views/course/EnglishView.vue";
import PhysicsView from "@/views/course/PhysicsView.vue";
import PoliticalView from "@/views/course/PoliticalView.vue";
import HistoryView from "@/views/course/HistoryView.vue";
import PrimaryView from "@/views/course/PrimaryView.vue";
import MiddleView from "@/views/course/MiddleView.vue";
import HighView from "@/views/course/HighView.vue";
import CourseLayout from "@/layouts/CourseLayout.vue";

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
        ],
    },
    {
        path: "/",
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
        redirect: "/chose",
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
    {
        path: "/course",
        component: CourseLayout,
        meta: {
            hideInMenu: true,
        },
        children: [
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
            {
                path: "/course/physics",
                component: PhysicsView,
            },
            {
                path: "/course/chemistry",
                component: ChineseView,
            },
            {
                path: "/course/political",
                component: PoliticalView,
            },
            {
                path: "/course/history",
                component: HistoryView,
            },
            {
                path: "/course/primary",
                component: PrimaryView,
            },
            {
                path: "/course/middle",
                component: MiddleView,
            },
            {
                path: "/course/high",
                component: HighView,
            },
        ]
    },

];
