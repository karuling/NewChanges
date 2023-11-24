<template>
  <div class="ContentContainer">
    <div>
      <div id="text">
        <p class="contenttitle">智享教育</p>
        <br />
        <p class="contenttitle1">不积跬步，无以至千里；不积小流，无以成江海</p>
      </div>
      <div id="button">
        <button class="GreenButton">直播</button>
        <button class="BlueButton2" @click="course">课程</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const course = async () => {
  await router.push({
    path: "/course",
    replace: true,
  });
};
</script>

<style>
.ContentContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 83vh; /* 设置容器的高度为视口高度 */
}

#text {
  justify-content: center;
  text-align: center;
  position: relative;
  font-family: SansSerif, serif;
  font-size: 60px;
  color: white;
  font-weight: bold;
}

.contenttitle {
  font-size: 40px;
}

.contenttitle1 {
  font-size: 25px;
  color: white;
}

#button {
  justify-content: center;
  position: relative;
  top: 100px;
  display: flex;
}

.GreenButton {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 12px 50px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px 5px;
  color: black;
  position: relative;
}

.GreenButton:hover {
  background-color: #04befe;
  border: 2px solid #4caf50;
  color: white;
}

.BlueButton2 {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 12px 50px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 10px 5px;
  color: black;
  position: relative;
}

.BlueButton2:hover {
  background-color: #04befe;
  border: 2px solid #008cba;
  color: white;
}
</style>
