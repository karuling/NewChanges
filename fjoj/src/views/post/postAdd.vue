<template>
  <div id="postAdd">
    <el-form
      ref="ruleForm"
      :model="postAdd"
      class="demo-ruleForm"
      label-width="100px"
    >
      <div class="postAddOne">
        <el-form-item label="标题" prop="title" size="large">
          <el-input v-model="postAdd.title"></el-input>
        </el-form-item>
      </div>
      <div class="postAddTwo">
        <el-form-item label="科目标签" prop="tags" size="large">
          <div>
            <el-checkbox-group v-model="postAdd.tags">
              <el-checkbox label="语文"></el-checkbox>
              <el-checkbox label="数学"></el-checkbox>
              <el-checkbox label="英语"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div>
            <el-checkbox-group v-model="postAdd.tags" size="large">
              <el-checkbox label="物理"></el-checkbox>
              <el-checkbox label="化学"></el-checkbox>
              <el-checkbox label="政治"></el-checkbox>
              <el-checkbox label="历史"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div>
            <el-checkbox-group v-model="postAdd.tags" size="large">
              <el-checkbox label="小学"></el-checkbox>
              <el-checkbox label="初中"></el-checkbox>
              <el-checkbox label="高中"></el-checkbox>
            </el-checkbox-group>
          </div>
        </el-form-item>
      </div>
      <div class="postAddThree">
        <el-form-item label="帖子内容" prop="content" size="large">
          <el-input v-model="postAdd.content" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmitAdd()">发帖</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
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
<style>
#postAdd {
  display: flex;
  height: 85vh;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/background/PostAddbackground.png");
}

.demo-ruleForm {
  height: 85vh;
  width: 600px;
  justify-content: center;
  align-items: center;
}

.postAddOne {
  margin: 15px;
  position: relative;
  right: 60px;
}

.postAddTwo {
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
}

.postAddThree {
  margin: 10px;
  position: relative;
  right: 60px;
}
</style>
