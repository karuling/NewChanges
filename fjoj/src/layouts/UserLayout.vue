<template>
  <div id="userLayout">
    <router-view />
  </div>
</template>

<style scoped>
#userLayout {
  text-align: center;
}

#userLayout .logo {
  width: 100px;
  height: 64px;
}

#userLayout .header {
  background: linear-gradient(to right, #4481eb, #ffffff);
  margin-top: 16px;
  box-shadow: #ccc7c7 1px 1px 5px;
}

#userLayout .content {
  background: linear-gradient(to right, #4481eb, #ffffff);
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script></script>
