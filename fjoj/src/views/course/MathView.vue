<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <div id="menu">
          <el-aside width="400px">
            <el-col :span="12">
              <el-menu
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                default-openeds="['1,2']"
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
                    <el-menu-item index="1-4-1">物理</el-menu-item>
                    <el-menu-item index="1-4-2">化学</el-menu-item>
                    <el-menu-item index="1-4-3">政治</el-menu-item>
                    <el-menu-item index="1-4-4">历史</el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                <el-sub-menu index="2">
                  <template #title>
                    <el-icon>
                      <icon-menu />
                    </el-icon>
                    <span>年级</span>
                  </template>
                  <el-menu-item index="2-1">四年级</el-menu-item>
                  <el-menu-item index="2-2">五年级</el-menu-item>
                  <el-menu-item index="2-3">六年级</el-menu-item>
                  <el-sub-menu index="2-4">
                    <template #title>高年级</template>
                    <el-menu-item index="2-4-1">初中</el-menu-item>
                    <el-menu-item index="2-4-2">高中</el-menu-item>
                  </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="3">
                  <el-icon>
                    <setting />
                  </el-icon>
                  <span>设置</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-aside>
        </div>
        <el-container>
          <el-main>
            <div class="allcontainer">
              <div class="box-container1">
                <div
                  class="image-container1"
                  @click="redirectToLink('https://www.4399.com/')"
                  @mousemove="applyShadow"
                  @mouseleave="removeShadow"
                >
                  <div class="image-wrapper">
                    <a href="https://www.4399.com/"></a>
                  </div>
                </div>
              </div>
              <div class="box-container2">
                <div
                  class="image-container2"
                  @click="redirectToLink('https://www.4399.com/')"
                  @mousemove="applyShadow"
                  @mouseleave="removeShadow"
                >
                  <div class="image-wrapper">
                    <div>图片2</div>
                  </div>
                </div>
              </div>
              <div class="box-container3">
                <div
                  class="image-container3"
                  @click="redirectToLink('https://www.4399.com/')"
                  @mousemove="applyShadow"
                  @mouseleave="removeShadow"
                >
                  <div class="image-wrapper">
                    <div>图片3</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="allcontainer">
              <div class="box-container4">
                <div
                  class="image-container4"
                  @click="redirectToLink('https://www.4399.com/')"
                  @mousemove="applyShadow"
                  @mouseleave="removeShadow"
                >
                  <div class="image-wrapper">
                    <div>图片4</div>
                  </div>
                </div>
              </div>
              <div class="box-container5">
                <div
                  class="image-container5"
                  @click="redirectToLink('https://www.4399.com/')"
                  @mousemove="applyShadow"
                  @mouseleave="removeShadow"
                >
                  <div class="image-wrapper">
                    <div>图片4</div>
                  </div>
                </div>
              </div>
              <div class="box-container6">
                <div
                  class="image-container6"
                  @click="redirectToLink('https://www.4399.com/')"
                  @mousemove="applyShadow"
                  @mouseleave="removeShadow"
                >
                  <div class="image-wrapper">
                    <div>图片4</div>
                  </div>
                </div>
              </div>
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

import { useRoute } from "vue-router";

const router = useRoute();

export default defineComponent({
  components: { Location, IconMenu, Setting },
  data() {
    return {
      imageSrc: "../../assets/tou1.jpg",
    };
  },
  methods: {
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
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  animation: repeatingColor 3s infinite;
  font-size: 20px;
}

@keyframes repeatingColor {
  0% {
    color: red;
  }
  50% {
    color: blue;
  }
  100% {
    color: green;
  }
}

.allcontainer {
  display: flex;
}

.box-container1 {
  width: 280px;
  height: 200px;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.box-container2 {
  width: 280px;
  height: 200px;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.box-container3 {
  width: 280px;
  height: 200px;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.box-container4 {
  width: 280px;
  height: 200px;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.box-container5 {
  width: 280px;
  height: 200px;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.box-container6 {
  width: 280px;
  height: 200px;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}

.image-container1 {
  border: 2px solid;
  border-radius: 12px;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: url("../../assets/picture.jpg");
  background-size: cover;
  transition: box-shadow 0.5s;
}

.image-container2 {
  border: 2px solid;
  border-radius: 12px;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: url("../../assets/tou1.jpg");
  background-size: cover;
  transition: box-shadow 0.5s;
}

.image-container3 {
  border: 2px solid;
  border-radius: 12px;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: url("../../assets/tou1.jpg");
  background-size: cover;
  transition: box-shadow 0.5s;
}

.image-container4 {
  border: 2px solid;
  border-radius: 12px;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: url("../../assets/picture.jpg");
  background-size: cover;
  transition: box-shadow 0.5s;
}

.image-container5 {
  border: 2px solid;
  border-radius: 12px;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: url("../../assets/picture.jpg");
  background-size: cover;
  transition: box-shadow 0.5s;
}

.image-container6 {
  border: 2px solid;
  border-radius: 12px;
  width: 90%;
  height: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-image: url("../../assets/picture.jpg");
  background-size: cover;
  transition: box-shadow 0.5s;
}

.image-wrapper {
  max-width: 100%;
  max-height: 100%;
}

#menu {
  max-width: 250px;
}
</style>
