<template>
  <div>
    <a-row id="globalHeader" :wrap="false" align="center">
      <a-col flex="auto">
        <div>
          <a-menu
            :selected-keys="selectedKeys"
            mode="horizontal"
            @menu-item-click="doMenuClick"
          >
            <a-menu-item
              key="0"
              :style="{ padding: 0, marginRight: '38px' }"
              disabled
            >
              <div class="title-bar">
                <img alt="logo(未定)" class="logo" src="../assets/logo.png" />
                <div class="title">智享</div>
              </div>
            </a-menu-item>
            <a-menu-item v-for="item in visibleRoutes" :key="item.path"
              >{{ item.name }}
            </a-menu-item>
          </a-menu>
        </div>
      </a-col>
      <div id="login">
        <a-space>
          <a-dropdown>
            <a-button
              >{{ store.state.user?.loginUser?.userName ?? "未登录" }}
            </a-button>
            <template #content>
              <a-doption
                v-if="store.state.user?.loginUser?.userName === '未登录'"
              >
                <a-button href="/user/login">去登录</a-button>
              </a-doption>
              <a-doption
                v-if="store.state.user?.loginUser?.userName != '未登录'"
              >
                <a-button @click="(ev) => router.push('/userEdit')"
                  >编辑用户
                </a-button>
              </a-doption>
              <a-doption
                v-if="store.state.user?.loginUser?.userName != '未登录'"
              >
                <a-button href="/user/login">更换账号</a-button>
              </a-doption>
              <a-doption
                v-if="store.state.user?.loginUser?.userName != '未登录'"
              >
                <a-button @click="(ev) => router.push('/postAdd')"
                  >我要发帖
                </a-button>
              </a-doption>
              <a-doption
                v-if="store.state.user?.loginUser?.userName != '未登录'"
              >
                <a-button @click="loginOut">退出登录</a-button>
              </a-doption>
            </template>
          </a-dropdown>
        </a-space>
      </div>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import { PostControllerService, UserControllerService } from "../../generated";
import message from "@arco-design/web-vue/es/message";

const store = useStore();
const router = useRouter();
const selectedKeys = ref(["/"]);
const loginOut = async () => {
  const res = await UserControllerService.userLogoutUsingPost();
  if (res.code === 0) {
    message.success("登出成功");
    await router.push({
      path: "/",
      replace: true,
    });
    window.location.reload();
  } else {
    message.error(res.message);
  }
};
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      return false;
    }
    return true;
  });
});
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>
<style>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}

#login {
  position: relative;
  right: 24px;
}
</style>
