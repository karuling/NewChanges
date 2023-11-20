/* eslint-disable */
<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user/')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>
<style>
#app {
  margin: 0 auto;
}
</style>
<script lang="ts" setup>
import BasicLayout from "@/layouts/BasicLayout.vue";
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const doInit = () => {
  console.log("hello");
};

onMounted(() => {
  doInit();
});

defineComponent({
  setup() {
    const debounce = (callback: (...args: any[]) => void, delay: number) => {
      let tid: any;
      return function (...args: any[]) {
        const ctx = self;
        tid && clearTimeout(tid);
        tid = setTimeout(() => {
          callback.apply(ctx, args);
        }, delay);
      };
    };

    const _ = (window as any).ResizeObserver;
    (window as any).ResizeObserver = class ResizeObserver extends _ {
      constructor(callback: (...args: any[]) => void) {
        callback = debounce(callback, 20);
        super(callback);
      }
    };
  },
});
</script>
