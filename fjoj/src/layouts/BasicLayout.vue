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
        <div class="word">
          <p>
            <a href="https://www.baidu.com/">关于我们</a
            >&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://www.baidu.com/">加入我们</a
            >&nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="https://www.baidu.com/">联系我们</a>
          </p>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
  max-width: 100%;
}

#basicLayout .header {
}

#basicLayout .content {
  margin: 0;
  background-image: url("../assets/backgroundcontent1.jpg") !important;
  background-size: cover;
}

#basicLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-image: url("../assets/backgroundfooter1.png") !important;
  background-size: 100% 100%;
}

a {
  color: white;
}

.word {
  color: white;
}
</style>
<script>
import GlobalHeader from "@/components/GlobalHeader.vue";

export default {
  components: { GlobalHeader },
};
</script>
