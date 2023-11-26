<template>
  <div class="common-layout">
    <el-container>
      <el-main class="main">
        <div class="allContainer">
          <a-card
            v-for="item in card_data1"
            :style="{ width: '250px' }"
            class="card"
            hoverable
            @click="redirectToLink(item.url)"
            @mouseleave="removeShadow"
            @mousemove="applyShadow"
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
                  alt="dessert"
                  class="cardImg"
                  v-bind:src="item.src"
                />
              </div>
            </template>
            <a-card-meta :title="item.title">
              <template #description>
                {{ item.maker }}&nbsp;&nbsp;
                {{ item.time }}
              </template>
            </a-card-meta>
          </a-card>
        </div>
        <div class="allContainer">
          <a-card
            v-for="item in card_data2"
            :style="{ width: '250px' }"
            class="card"
            hoverable
            @click="redirectToLink(item.url)"
            @mouseleave="removeShadow"
            @mousemove="applyShadow"
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
                  alt="dessert"
                  class="cardImg"
                  v-bind:src="item.src"
                />
              </div>
            </template>
            <a-card-meta :title="item.title">
              <template #description>
                {{ item.maker }}&nbsp;&nbsp;
                {{ item.time }}
              </template>
            </a-card-meta>
          </a-card>
        </div>
      </el-main>
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
      activeIndex: "1",
      card_data1: [
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/1.png"),
          title: "古诗词鉴赏",
          maker: "A老师",
          time: "一小时前",
        },
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/2.png"),
          title: "中国古典文化",
          maker: "A老师",
          time: "一小时前",
        },
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/3.jpg"),
          title: "一年级语文上册人教版",
          maker: "A老师",
          time: "一小时前",
        },
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/4.png"),
          title: "八年级语文上册人教版",
          maker: "A老师",
          time: "一小时前",
        },
      ],
      card_data2: [
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/5.png"),
          title: "高中语文选修下册公开课",
          maker: "A老师",
          time: "一小时前",
        },
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/6.jpg"),
          title: "中考语文课程一轮复习",
          maker: "A老师",
          time: "一小时前",
        },
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/7.png"),
          title: "四年级趣味语文",
          maker: "A老师",
          time: "一小时前",
        },
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/8.png"),
          title: "语文写作中的几大要素",
          maker: "A老师",
          time: "一小时前",
        },
      ],
    };
  },
  methods: {
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
.main {
  border: 2px solid white;
  border-radius: 15px;
}

.allContainer {
  display: flex;
}

.card {
  justify-content: center;
  align-items: center;
  margin: 30px;
  border: none;
  cursor: pointer;
}

.cardImg {
  border-radius: 15px;
}
</style>
