<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
  max-width: 100%;
  margin: 0 auto;
}

#basicLayout .header {
  margin-bottom: 10px;
  box-shadow: #ccc7c7 1px 1px 5px;
}

#basicLayout .content {
  margin: 0;
}

#basicLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-image: url("../assets/background3.png");
}
a {
  color: white;
}
.word {
  color: white;
  animation: blink 4s linear infinite;
}
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<script>
import GlobalHeader from "@/components/GlobalHeader.vue";

export default {
  components: { GlobalHeader },
};
</script>
