<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <div id="menu" style="height: 500px">
          <el-aside width="400px" default-openeds="1">
            <el-col :span="12">
              <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-sub-menu index="1">
                  <template #title>
                    <el-icon>
                      <Location />
                    </el-icon>
                    <span>课程</span>
                  </template>
                  <el-menu-item index="1-1" @click="ChineseClick"
                    >语文
                  </el-menu-item>
                  <el-menu-item index="1-2" @click="MathClick"
                    >数学
                  </el-menu-item>
                  <el-menu-item index="1-3" @click="EnglishClick"
                    >英语
                  </el-menu-item>
                  <el-sub-menu index="1-4">
                    <template #title>其它</template>
                    <el-menu-item index="1-4-1" @click="PhysicsClick"
                      >物理
                    </el-menu-item>
                    <el-menu-item index="1-4-2" @click="ChemistryClick"
                      >化学
                    </el-menu-item>
                    <el-menu-item index="1-4-3" @click="PoliticalClick"
                      >政治
                    </el-menu-item>
                    <el-menu-item index="1-4-4" @click="HistoryClick"
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
                  <el-menu-item index="2-1-1" @click="PrimaryClick"
                    >小学
                  </el-menu-item>
                  <el-menu-item index="2-1-2" @click="MiddleClick"
                    >初中
                  </el-menu-item>
                  <el-menu-item index="2-1-3" @click="HighClick"
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
          <el-main class="main">
            <el-header class="header">
              <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                :ellipsis="false"
                @select="handleSelect"
              >
                <el-menu-item index="1" class="mymenu">学习课程</el-menu-item>
              </el-menu>
              <a-space direction="vertical" size="large" class="search">
                <a-input-search
                  :style="{ width: '320px' }"
                  placeholder="Please enter something"
                  search-button
                >
                  <template #button-icon>
                    <icon-search />
                  </template>
                  <template #button-default> Search</template>
                </a-input-search>
              </a-space>
            </el-header>
            <a-divider />
            <div class="allcontainer">
              <a-card
                hoverable
                class="card1"
                :style="{ width: '250px' }"
                @click="redirectToLink('https://www.4399.com/')"
                @mousemove="applyShadow"
                @mouseleave="removeShadow"
              >
                <template #cover>
                  <div
                    :style="{
                      height: '180px',
                      overflow: 'hidden',
                    }"
                  >
                    <img
                      :style="{
                        width: '100%',

                        height: '100%',
                      }"
                      class="card1img"
                      alt="dessert"
                      src="https://i0.hippopx.com/photos/156/733/304/mathematics-count-science-study-1a26fe31e8d9371526e8990386a4fe8f.jpg"
                    />
                  </div>
                </template>
                <a-card-meta title="Card Title">
                  <template #description>
                    Card content <br />
                    Card content
                  </template>
                </a-card-meta>
              </a-card>
              <a-card
                hoverable
                :style="{ width: '250px' }"
                class="card2"
                @click="redirectToLink('https://www.4399.com/')"
                @mousemove="applyShadow"
                @mouseleave="removeShadow"
              >
                <template #cover>
                  <div
                    :style="{
                      height: '180px',
                      overflow: 'hidden',
                    }"
                  >
                    <img
                      :style="{
                        width: '100%',
                        height: '100%',
                      }"
                      class="card2img"
                      alt="dessert"
                      src="../../assets/Math/6.png"
                    />
                  </div>
                </template>
                <a-card-meta title="Card Title">
                  <template #description>
                    Card content <br />
                    Card content
                  </template>
                </a-card-meta>
              </a-card>
              <a-card
                hoverable
                :style="{ width: '250px' }"
                class="card3"
                @click="redirectToLink('https://www.4399.com/')"
                @mousemove="applyShadow"
                @mouseleave="removeShadow"
              >
                <template #cover>
                  <div
                    :style="{
                      height: '180px',
                      overflow: 'hidden',
                    }"
                  >
                    <img
                      :style="{
                        width: '100%',
                        height: '100%',
                      }"
                      class="card3img"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </div>
                </template>
                <a-card-meta title="Card Title">
                  <template #description>
                    Card content <br />
                    Card content
                  </template>
                </a-card-meta>
              </a-card>
              <a-card
                hoverable
                :style="{ width: '250px' }"
                class="card4"
                @click="redirectToLink('https://www.4399.com/')"
                @mousemove="applyShadow"
                @mouseleave="removeShadow"
              >
                <template #cover>
                  <div
                    :style="{
                      height: '180px',
                      overflow: 'hidden',
                    }"
                  >
                    <img
                      :style="{
                        width: '100%',
                        height: '100%',
                      }"
                      class="card4img"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </div>
                </template>
                <a-card-meta title="Card Title">
                  <template #description>
                    Card content <br />
                    Card content
                  </template>
                </a-card-meta>
              </a-card>
            </div>
            <div class="allcontainer">
              <a-card
                hoverable
                :style="{ width: '250px' }"
                class="card5"
                @click="redirectToLink('https://www.4399.com/')"
                @mousemove="applyShadow"
                @mouseleave="removeShadow"
              >
                <template #cover>
                  <div
                    :style="{
                      height: '180px',
                      overflow: 'hidden',
                    }"
                  >
                    <img
                      :style="{
                        width: '100%',
                        height: '100%',
                      }"
                      class="card5img"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </div>
                </template>
                <a-card-meta title="Card Title">
                  <template #description>
                    Card content <br />
                    Card content
                  </template>
                </a-card-meta>
              </a-card>
              <a-card
                hoverable
                :style="{ width: '250px' }"
                class="card6"
                @click="redirectToLink('https://www.4399.com/')"
                @mousemove="applyShadow"
                @mouseleave="removeShadow"
              >
                <template #cover>
                  <div
                    :style="{
                      height: '180px',
                      overflow: 'hidden',
                    }"
                  >
                    <img
                      :style="{
                        width: '100%',
                        height: '100%',
                      }"
                      class="card6img"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </div>
                </template>
                <a-card-meta title="Card Title">
                  <template #description>
                    Card content <br />
                    Card content
                  </template>
                </a-card-meta>
              </a-card>
              <a-card
                hoverable
                :style="{ width: '250px' }"
                class="card7"
                @click="redirectToLink('https://www.4399.com/')"
                @mousemove="applyShadow"
                @mouseleave="removeShadow"
              >
                <template #cover>
                  <div
                    :style="{
                      height: '180px',
                      overflow: 'hidden',
                    }"
                  >
                    <img
                      :style="{
                        width: '100%',
                        height: '100%',
                      }"
                      class="card7img"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </div>
                </template>
                <a-card-meta title="Card Title">
                  <template #description>
                    Card content <br />
                    Card content
                  </template>
                </a-card-meta>
              </a-card>
              <a-card
                hoverable
                :style="{ width: '250px' }"
                class="card8"
                @click="redirectToLink('https://www.4399.com/')"
                @mousemove="applyShadow"
                @mouseleave="removeShadow"
              >
                <template #cover>
                  <div
                    :style="{
                      height: '180px',
                      overflow: 'hidden',
                    }"
                  >
                    <img
                      :style="{
                        width: '100%',
                        height: '100%',
                      }"
                      class="card8img"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </div>
                </template>
                <a-card-meta title="Card Title">
                  <template #description>
                    Card content <br />
                    Card content
                  </template>
                </a-card-meta>
              </a-card>
            </div>
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
    };
  },
  methods: {
    handleSelect(key: string, keyPath: string[]) {
      console.log(key, keyPath);
    },
    redirectToCourse(path: string) {
      this.$router.push({
        path: "/course" + path,
        replace: true,
      });
    },
    ChineseClick() {
      this.redirectToCourse("/chinese");
    },
    MathClick() {
      this.redirectToCourse("/math");
    },
    EnglishClick() {
      this.redirectToCourse("/english");
    },
    PhysicsClick() {
      this.redirectToCourse("/physics");
    },
    ChemistryClick() {
      this.redirectToCourse("/chemistry");
    },
    PoliticalClick() {
      this.redirectToCourse("/political");
    },
    HistoryClick() {
      this.redirectToCourse("/history");
    },
    PrimaryClick() {
      this.redirectToCourse("/primary");
    },
    MiddleClick() {
      this.redirectToCourse("/middle");
    },
    HighClick() {
      this.redirectToCourse("/high");
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
  justify-content: flex-end;
  border-bottom: 2px solid white;
  border-radius: 12px;
  padding: 0;
}

.mymenu {
  display: flex;
  position: relative;
  right: 750px;
  justify-content: flex-start;
  flex-grow: 1;
}

.search {
  position: relative;
}

.allcontainer {
  display: flex;
}

.card1 {
  justify-content: center;
  align-items: center;
  margin: 30px;
  border: none;
}

.card2 {
  justify-content: center;
  align-items: center;
  margin: 30px;
  border: none;
}

.card3 {
  justify-content: center;
  align-items: center;
  margin: 30px;
  border: none;
}

.card4 {
  justify-content: center;
  align-items: center;
  margin: 30px;
  border: none;
}

.card5 {
  justify-content: center;
  align-items: center;
  margin: 30px;
  border: none;
}

.card6 {
  justify-content: center;
  align-items: center;
  margin: 30px;
  border: none;
}

.card7 {
  justify-content: center;
  align-items: center;
  margin: 30px;
  border: none;
}

.card8 {
  justify-content: center;
  align-items: center;
  margin: 30px;
  border: none;
}

.card1img {
  border-radius: 15px;
}

.card2img {
  border-radius: 15px;
}

.card3img {
  border-radius: 15px;
}

.card4img {
  border-radius: 15px;
}

.card5img {
  border-radius: 15px;
}

.card6img {
  border-radius: 15px;
}

.card7img {
  border-radius: 15px;
}

.card8img {
  border-radius: 15px;
}
</style>
