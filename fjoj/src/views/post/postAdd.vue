<template>
  <el-form
    ref="ruleForm"
    :model="postAdd"
    class="demo-ruleForm"
    label-width="100px"
  >
    <el-form-item label="标题" prop="title">
      <el-input v-model="postAdd.title"></el-input>
    </el-form-item>
    <el-form-item label="科目标签" prop="tags">
      <el-checkbox-group v-model="postAdd.tags">
        <el-checkbox label="语文"></el-checkbox>
        <el-checkbox label="数学"></el-checkbox>
        <el-checkbox label="英语"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="帖子内容" prop="content">
      <el-input v-model="postAdd.content" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmitAdd()">发帖</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped></style>
<script lang="ts" setup>
import { reactive } from "vue";
import { PostAddRequest, PostControllerService } from "../../../generated";
import { useRouter } from "vue-router";
import message from "@arco-design/web-vue/es/message";

const postAdd = reactive({
  content: "",
  tags: [],
  title: "",
} as PostAddRequest);

const router = useRouter();

/*
 * 提交请求
 * */
const handleSubmitAdd = async () => {
  const res = await PostControllerService.addPostUsingPost(postAdd);
  if (res.code === 0) {
    await router.push({
      path: "/post/" + res.data,
      replace: true,
    });
  } else {
    message.error("登录失败" + res.message);
  }
};
</script>