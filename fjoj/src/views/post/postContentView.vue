<script lang="ts" setup>
import { PostControllerService } from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { onMounted, ref } from "vue";
import { post } from "@/views/post/postView.vue";

import { useRoute } from "vue-router";

const route = useRoute();
const postId = ref("");
let data = ref({} as post);

interface user {
  id: "";
  userName: "";
  userAvatar: null;
  userProfile: null;
  userRole: "";
  createTime: "";
}

let userInner = ref({} as user);
postId.value = route.params.postId as string;
onMounted(async () => {
  const res: any = await PostControllerService.getPostVoByIdUsingGet(
    postId.value
  );
  if (res.code === 0) {
    data.value = res.data;
    userInner.value = res.data.user;
    message.success(res.message);
  } else {
    message.error(res.message);
  }
});
</script>

<template>
  <div class="main">
    <div class="title">{{ data.title }}</div>
    <div class="user">
      发表用户:{{ userInner.userName }} <br />发表时间:{{ data.createTime }}
    </div>
    <div class="content">
      <el-input
        v-model="data.content"
        :resize="'none'"
        :rows="2"
        autosize
        placeholder="请输入内容"
        readonly
        style="color: black; font-size: 18px"
        type="textarea"
      >
      </el-input>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  width: 80%;
  text-align: left;
  margin-bottom: 10px; /* 为了增加 title 和 content 的间距，添加了 margin-bottom 属性 */
  font-weight: bold;
  font-size: 65px;
}

.user {
  width: 75%;
  text-align: left;
  font-size: 20px;
}

.content {
  width: 75%;
  text-align: left;
}
</style>
