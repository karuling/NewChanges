<template>
  <div id="search">
    <a-input-search
      v-model="postVo.searchText"
      :style="{ width: '80%' }"
      button-text="Search"
      placeholder="Please enter something"
      search-button
      @search="on_search"
    />
  </div>
  <div id="card">
    <el-row>
      <el-col v-for="value in data" :key="value.id" :offset="1" :span="20">
        <el-card>
          <div style="padding: 14px">
            <span> {{ value.title }} </span>
            <div class="bottom">
              <div>tags:{{ value.tagList }}</div>
              <div>
                <el-button class="button" text
                  >点赞{{ value.thumbNum }}
                </el-button>
              </div>
              <div>
                <el-button class="button" text
                  >收藏{{ value.favourNum }}
                </el-button>
              </div>
              <div>
                <el-button class="button" text>
                  <router-link :to="'/post/' + value.id">查看详情</router-link>
                </el-button>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style>
#search {
  text-align: center;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

#card {
  padding: 10px;
}
</style>
<script lang="ts" setup>
import { PostControllerService, PostQueryRequest } from "../../../generated";
import { onMounted, reactive, ref } from "vue";
import message from "@arco-design/web-vue/es/message";
import { getCurrentInstance } from "@vue/runtime-core";

const currentInstance = ref();

onMounted(() => {
  currentInstance.value = getCurrentInstance();
});

const postVo = reactive({
  content: "",
  current: 1,
  favourUserId: 0,
  id: 0,
  notId: 0,
  orTags: [],
  pageSize: 10,
  searchText: "",
  sortField: "",
  sortOrder: "",
  tags: [],
  title: "",
  userId: 0,
} as PostQueryRequest);

export interface post {
  content: "";
  createTime: "";
  favourNum: 0;
  hasFavour: false;
  hasThumb: false;
  id: "";
  tagList: [];
  thumbNum: 0;
  title: "";
  updateTime: "";
  user: NonNullable<unknown>;
  userId: "";
}

let data = ref<post[]>([]);
const on_search = async () => {
  const res = await PostControllerService.listPostVoByPageUsingPost(postVo);
  if (res.code === 0) {
    data.value = res.data.records;
  } else {
    message.error(res.message);
  }
};
</script>
