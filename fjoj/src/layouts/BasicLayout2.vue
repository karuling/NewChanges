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
  box-shadow: #ccc7c7 1px 1px 5px;
}

#basicLayout .content {
  margin: 0;
}

a {
  color: white;
}
</style>
<script>
import GlobalHeader from "@/components/GlobalHeader.vue";

export default {
  components: { GlobalHeader },
};
</script>
