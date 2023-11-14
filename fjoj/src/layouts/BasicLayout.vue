<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://www.cnblogs.com/akaxedx/">欢迎访问我的博客</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
  max-width: 70%;
  margin: 0 auto;
}

#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #ccc7c7 1px 1px 5px;
}

#basicLayout .content {
  background: linear-gradient(to right, #e7e7e7, #d2f4fa, #e7e7e7);
  margin-bottom: 16px;
  padding: 20px;
}

#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script>
import GlobalHeader from "@/components/GlobalHeader.vue";

export default {
  components: { GlobalHeader },
};
</script>
