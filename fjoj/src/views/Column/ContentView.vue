<template>
  <div class="ContentContainer">
    <a-space class="wrapper" direction="vertical">
      <button class="GreenButton">直播</button>
      <button class="BlueButton2" @click="course">课程</button>
      <button class="GrayButton">关于我们</button>
    </a-space>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const selectedKeys = ref(["/"]);
const course = async () => {
  await router.push({
    path: "/course",
    replace: true,
  });
};
</script>

<style>
.ContentContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 82.09vh; /* 设置容器的高度为视口高度 */
  background-image: url("../../assets/background2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.GreenButton {
  background-color: #4caf50;
  border-radius: 8px;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  color: white;
}

.GreenButton:hover {
  background-color: white;
  border: 2px solid #4caf50;
  color: black;
}
.BlueButton2 {
  background-color: #008cba;
  border-radius: 8px;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  color: white;
}

.BlueButton2:hover {
  background-color: white;
  border: 2px solid #008cba;
  color: black;
}

.GrayButton {
  background-color: #e7e7e7;
  border-radius: 8px;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  color: white;
}

.GrayButton:hover {
  background-color: white;
  border: 2px solid #e7e7e7;
  color: black;
}
</style>
