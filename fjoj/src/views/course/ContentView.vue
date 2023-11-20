<template>
  <div class="ContentContainer">
    <el-row class="mb-4">
      <el-button type="primary" class="custom-button">直播</el-button>

      <el-button type="success" class="custom-button" @click="course"
        >课程</el-button
      >
      <el-button type="warning" class="custom-button">关于我们</el-button>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { UserControllerService } from "../../../generated";

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
  height: 80vh; /* 设置容器的高度为视口高度 */
  background-image: url("../../assets/river.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.custom-button {
  height: 400px;
  width: 120px;
}
</style>
