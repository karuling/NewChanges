<template>
  <div id="useredit">
    <el-form ref="ruleForm" :model="UserEdit" class="Editform">
      <el-form-item
        class="username"
        label="新的昵称"
        prop="userName"
        size="large"
      >
        <el-input v-model="UserEdit.userName"></el-input>
      </el-form-item>
      <el-form-item class="userprofile" label="个人简介" prop="userProfile">
        <el-input v-model="UserEdit.userProfile" type="textarea"></el-input>
      </el-form-item>
      <el-form-item class="update">
        <el-button
          style="width: 100px"
          type="primary"
          @click="handleSubmitEdit()"
          >提交修改
        </el-button>
      </el-form-item>
    </el-form>
  </div>
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

<style scoped>
#useredit {
  justify-content: center;
  display: flex;
  background-image: url("../../assets/background/usereditbackground.jpg");
}

.Editform {
  display: flex;
  align-items: center;
  height: 85vh;
}

.username {
  position: relative;
  top: -10px;
}

.userprofile {
  position: relative;
  top: 10px;
}

.update {
  position: relative;
  top: 20px;
  right: -30px;
}
</style>
