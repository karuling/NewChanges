<template>
  <div>
    <a-row id="globalHeader" :wrap="false" align="center">
      <a-col flex="auto">
        <div class="global">
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
                <img
                  alt="logo(未定)"
                  class="logo"
                  src="../assets/background/logo.png"
                />
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
                <a-button>
                  <router-link
                    :to="'/personcenter/' + userId"
                    style="text-decoration: none"
                    >个人中心
                  </router-link>
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
import { computed, onMounted, ref, Ref } from "vue";
import checkAccess from "@/access/checkAccess";
import { UserControllerService } from "../../generated";
import message from "@arco-design/web-vue/es/message";
import store from "@/store";

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
onMounted(async () => {
  userId = (await getUserId()) as Ref<number>;
  console.log(userId);
});
let userId = ref(1);
const getUserId = async () => {
  const res = await UserControllerService.getLoginUserUsingGet();
  if (res.code === 0) {
    return ref(res.data?.id);
  } else {
    return 0;
  }
};
</script>
<style>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #4dd0f8;
  margin-left: 16px;
  image: linear-gradient(
    160deg,
    #0093e9 0%,
    #80d0c7 33%,
    #ffffff 66%,
    #ffffff 100%
  );
  animation: repeatingColor 4s infinite;
}

@keyframes repeatingColor {
  0% {
    color: #0093e9;
  }
  33% {
    color: #80d0c7;
  }
  66% {
    color: #8ec5fc;
  }
  100% {
    color: #e0c3fc;
  }
}

.logo {
  height: 48px;
}

#login {
  position: relative;
  right: 24px;
}
</style>
