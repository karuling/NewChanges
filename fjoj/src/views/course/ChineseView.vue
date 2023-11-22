<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-container>
          <el-main class="main">
            <div class="allContainer">
              <a-card
                  v-for="item in card_data"
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
                <a-card-meta :title=item.title>
                  <template #description>
                    {{item.maker}}&nbsp;&nbsp;
                    {{item.time}}
                  </template>
                </a-card-meta>
              </a-card>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Location, Menu as IconMenu, Setting} from "@element-plus/icons-vue";
import PrimaryView from "@/views/course/PrimaryView.vue";

export default defineComponent({
  computed: {
    PrimaryView() {
      return PrimaryView;
    },
  },
  components: {Location, IconMenu, Setting},
  data() {
    return {
      activeIndex: "1",
      card_data: [
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/1.png"),
          title:"语文课",
          maker:"蒋帅博",
          time:"一小时前"
        },
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/1.png"),
          title:"语文课",
          maker:"蒋帅博",
          time:"一小时前"
        },
        {
          url: "https://www.4399.com/",
          src: require("../../assets/Chinese/2.png"),
          title:"语文课",
          maker:"蒋帅博",
          time:"一小时前"
        }
      ]
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
}

.cardImg {
  border-radius: 15px;
}

</style>
