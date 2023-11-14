<template>
  <el-form ref="ruleForm" :model="UserEdit" label-width="100px">
    <el-form-item label="昵称" prop="userName">
      <el-input v-model="UserEdit.userName"></el-input>
    </el-form-item>
    <el-form-item label="简介" prop="userProfile">
      <el-input v-model="UserEdit.userProfile" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmitEdit()">更新</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { UserControllerService, UserUpdateMyRequest } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";

const router = useRouter();
const UserEdit = reactive({
  userAvatar: "",
  userName: "",
  userProfile: "",
} as UserUpdateMyRequest);

const handleSubmitEdit = async () => {
  const res = await UserControllerService.updateMyUserUsingPost(UserEdit);
  if (res.code === 0) {
    await router.push({
      path: "/",
      replace: true,
    });
    location.reload();
  } else {
    message.error(res.message);
  }
};
</script>

<style scoped></style>
