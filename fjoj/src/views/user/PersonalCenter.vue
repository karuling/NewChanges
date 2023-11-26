<script setup lang="ts">
import { UserControllerService } from "../../../generated";
import { onMounted, ref } from "vue";
import {
  Bell,
  Iphone,
  Message,
  Postcard,
  Promotion,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();

interface user {
  createTime: "";
  id: 0;
  updateTime: "";
  userAvatar: "";
  userName: "";
  userProfile: "";
  userRole: "";
}

let data = ref<user>({
  createTime: "",
  id: 0,
  updateTime: "",
  userAvatar: "",
  userName: "",
  userProfile: "",
  userRole: "",
});

onMounted(async () => {
  await getUser();
});

const getUser = async () => {
  const res = await UserControllerService.getLoginUserUsingGet();
  console.log(res);
  if (res.code === 0) {
    data.value = res.data as user;
  } else {
    return 0;
  }
};
</script>

<template>
  <div class="PersonalCenterhead"></div>
  <div class="UserContainer">
    <div class="PersonalCentercontent">
      <div class="box1">
        <div class="userinfo1">
          <div class="edit1">
            <img
              src="../../assets/avator/1.webp"
              alt="myavator"
              width="72"
              height="72"
              class="img"
            />
            <button
              class="personalButton"
              @click="(ev) => router.push('/userEdit')"
            >
              修改资料
            </button>
          </div>
          <div class="div1part2">
            <span class="fontone"
              >&nbsp;&nbsp;&nbsp;&nbsp;{{ data.userName }}</span
            >
            <br />
            <input
              id="h-sign"
              type="text"
              placeholder="编辑个性签名"
              maxlength="60"
            />
          </div>
        </div>
        <div class="userinfo2">
          <div class="menu">
            <ul>
              <li><a href="https://www.baidu.com/">主页</a></li>
              <li><a href="https://www.baidu.com/">动态</a></li>
              <li><a href="https://www.baidu.com/">收藏</a></li>
              <li><a href="https://www.baidu.com/">订阅</a></li>
              <li><a href="https://www.baidu.com/">设置</a></li>
            </ul>
          </div>
        </div>
        <div class="userinfo3">
          <el-icon
            :size="25"
            style="width: 1em; height: 1em; margin-right: 8px"
          >
            <Bell />
          </el-icon>
          <h2>账号安全</h2>
        </div>
        <div class="userinfo4">
          <el-icon :size="60">
            <Message />
          </el-icon>
          <div class="userinfo4-1">
            <p class="userinfo4-font1">我的邮箱</p>
            <p class="userinfo4-font2">绑定邮箱后可用邮箱登录</p>
            <span class="userinfo4-button1">去绑定</span>
          </div>
          <el-icon size="60">
            <Iphone />
          </el-icon>
          <div class="userinfo4-2">
            <p class="userinfo4-font1">我的手机</p>
            <p class="userinfo4-font2">绑定手机后可用手机登录</p>
            <span class="userinfo4-button1">去绑定</span>
          </div>
          <el-icon size="60">
            <Promotion />
          </el-icon>
          <div class="userinfo4-3">
            <p class="userinfo4-font1">密保问题</p>
            <p class="userinfo4-font2">设置密保，账号更安全</p>
            <span class="userinfo4-button1">去设置</span>
          </div>
          <el-icon size="60">
            <Postcard />
          </el-icon>
          <div class="userinfo4-4">
            <p class="userinfo4-font1">实名认证</p>
            <p class="userinfo4-font2">实名认证成功后，可开启更多服务</p>
            <span class="userinfo4-button1">去认证</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.PersonalCenterhead {
  justify-content: center;
  display: flex;
  background-image: url(" ../../assets/background/personalcenter2.jpg");
  background-size: auto;
  position: relative;
  height: 20vh;
}

.UserContainer {
  justify-content: center;
  display: flex;
}

.PersonalCentercontent {
  width: 789px;
  display: inline-block;
  justify-content: center;
  position: relative;
  height: 80vh;
  border: 1px solid #e1e2e5;
  box-sizing: border-box;
}

.box1 {
  height: 160px;
  width: 789px;
  padding-bottom: 10px;
  position: relative;
  align-items: center;
  justify-content: center;
}

.userinfo1 {
  height: 160px;
  display: flex;
  width: 789px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-size: 15px;
  border-bottom: 1px solid #e5e9ef;
}

.userinfo2 {
  height: 50px;
  display: flex;
  width: 789px;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  font-size: 15px;
  border-bottom: 1px solid #e5e9ef;
  border-left: 1px solid #e5e9ef;
}

.userinfo3 {
  margin: 30px 40px 10px 40px;
  display: flex;
  width: 700px;
  align-items: center;
  font-size: 15px;
  position: relative;
}

.userinfo4 {
  flex-wrap: wrap;
  margin: 0 40px 40px 40px;
  display: flex;
  width: 700px;
  align-items: center;
  font-size: 15px;
  position: relative;
}

.userinfo4-1 {
  margin: 40px 148px 40px 40px;
}

.userinfo4-2 {
  margin: 40px;
}

.userinfo4-3 {
  margin: 40px 160px 40px 40px;
}

.userinfo4-4 {
  margin: 40px;
}

.userinfo4-font1 {
  font-size: 16px;
  color: #222;
  margin-bottom: 8px;
}

.userinfo4-font2 {
  font-size: 12px;
  color: #99a2aa;
  margin-bottom: 8px;
}

.userinfo4-button1 {
  cursor: pointer;
  background-color: #22a1d6;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  display: inline-block;
  width: 70px;
  height: 24px;
  line-height: 24px;
}

.edit1 {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px;
}

.div1part2 {
  height: 120px;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
}

.img {
  position: relative;
  border-radius: 50%;
}

.personalButton {
  padding: 5px;
  position: relative;
  border-radius: 4px;
  border: 1px solid #ced3db;
  color: #6d757a;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  top: 8px;
}

.personalButton:hover {
  color: #04befe;
  border-color: #04befe;
}

.fontone {
  font-size: 18px;
  font-weight: 700;
  color: #222;
  cursor: default;
}

#h-sign {
  background: transparent;
  border-radius: 4px;
  font-size: 12px;
  font-family: Microsoft Yahei, serif;
  height: 26px;
  width: 500px;
  position: relative;
  left: 16px;
  top: 20px;
  transition: background-color 0.3s;
  border: none;
}

#h-sign:hover {
  background-color: hsla(0, 0%, 70%, 0.1);
  border: 1px solid #6d757a;
}

.menu {
  background-color: white;
}

.menu ul {
  position: relative;
  right: -15px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.menu li {
  margin-right: 30px;
}

.menu li:last-child {
  margin-right: 0;
}

.menu a {
  padding: 10px;
  text-decoration: none;
  color: #333;
}

.menu a:hover {
  background-color: #ddd;
}
</style>
