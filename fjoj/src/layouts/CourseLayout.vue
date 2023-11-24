<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <div id="menu" style="height: 500px">
          <el-aside default-openeds="1" width="400px">
            <el-col :span="12">
              <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                @close="handleClose"
                @open="handleOpen"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon>
                      <Location />
                    </el-icon>
                    <span>课程</span>
                  </template>
                  <el-menu-item index="1-1" @click="Click(course[0])"
                    >语文
                  </el-menu-item>
                  <el-menu-item index="1-2" @click="Click(course[1])"
                    >数学
                  </el-menu-item>
                  <el-menu-item index="1-3" @click="Click(course[2])"
                    >英语
                  </el-menu-item>
                  <el-sub-menu index="1-4">
                    <template #title>其它</template>
                    <el-menu-item index="1-4-1" @click="Click(course[3])"
                      >物理
                    </el-menu-item>
                    <el-menu-item index="1-4-2" @click="Click(course[4])"
                      >化学
                    </el-menu-item>
                    <el-menu-item index="1-4-3" @click="Click(course[5])"
                      >政治
                    </el-menu-item>
                    <el-menu-item index="1-4-4" @click="Click(course[6])"
                      >历史
                    </el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon>
                      <icon-menu />
                    </el-icon>
                    <span>年级</span>
                  </template>
                  <el-menu-item index="2-1-1" @click="Click(course[7])"
                    >小学
                  </el-menu-item>
                  <el-menu-item index="2-1-2" @click="Click(course[8])"
                    >初中
                  </el-menu-item>
                  <el-menu-item index="2-1-3" @click="Click(course[9])"
                    >高中
                  </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="3">
                  <el-icon>
                    <setting />
                  </el-icon>
                  <span>设置</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <span></span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-aside>
        </div>
        <el-container>
          <el-header class="header">
            <el-menu
              :default-active="activeIndex"
              :ellipsis="false"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item class="mymenu" index="1">学习课程</el-menu-item>
            </el-menu>
          </el-header>
          <a-divider />
          <el-main class="main">
            <a-space class="search" direction="vertical" size="large">
              <a-input-search
                :style="{ width: '320px' }"
                placeholder="Please enter something"
                search-button
              >
                <template> Search</template>
              </a-input-search>
            </a-space>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Location, Menu as IconMenu, Setting } from "@element-plus/icons-vue";
import PrimaryView from "@/views/course/PrimaryView.vue";

export default defineComponent({
  computed: {
    PrimaryView() {
      return PrimaryView;
    },
  },
  components: { Location, IconMenu, Setting },
  data() {
    return {
      imageSrc: "../../assets/tou1.jpg",
      activeIndex: "1",
      course: [
        "/chinese",
        "/math",
        "/english",
        "/physics",
        "/chemistry",
        "/political",
        "/history",
        "/primary",
        "/middle",
        "/high",
      ],
    };
  },
  methods: {
    handleSelect(key: string, keyPath: string[]) {
      console.log(key, keyPath);
    },
    Click(name: string) {
      this.$router.push({
        path: "/course" + name,
        replace: true,
      });
    },
    handleOpen(key: string, keyPath: string[]) {
      console.log(key, keyPath);
    },
    handleClose(key: string, keyPath: string[]) {
      console.log(key, keyPath);
    },
    redirectToLink(link: string) {
      window.location.href = link;
    },
    applyShadow(event: {
      currentTarget: any;
      clientX: number;
      clientY: number;
    }) {
      const container = event.currentTarget;
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const shadowX = (x - rect.width / 2) / 10;
      const shadowY = (y - rect.height / 2) / 10;
      container.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.5)`;
    },
    removeShadow(event: { currentTarget: { style: { boxShadow: string } } }) {
      event.currentTarget.style.boxShadow = "";
    },
  },
});
</script>
<style scoped>
#menu {
  max-width: 202px;
  margin: 20px;

  border-radius: 10px;
}

.main {
  border: 2px solid white;
  border-radius: 15px;
}

.header {
  position: relative;
  display: flex;
  border-bottom: 2px solid white;
  border-radius: 12px;
  padding: 0;
}

.mymenu {
  position: absolute;
  left: 100px;
}

.search {
  position: relative;
  left: 0;
}
</style>