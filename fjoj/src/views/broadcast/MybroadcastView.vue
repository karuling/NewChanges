<template>
  <div class="box">
    <el-card>
      <div id="broadcast">
        <div id="dplayer" style="width: 950px; height: 622px"></div>
        <div>
          <button class="enter-button" @click="enterLiveRoom">
            进入直播间
          </button>
        </div>
        <div class="recommend">
          <div
            class="recommenditem1"
            style="width: 188px; height: 99px"
            @mouseleave="removeShadow"
            @mousemove="applyShadow"
          ></div>
          <div
            class="recommenditem2"
            style="width: 188px; height: 99px"
            @mouseleave="removeShadow"
            @mousemove="applyShadow"
          ></div>
          <div
            class="recommenditem3"
            style="width: 188px; height: 99px"
            @mouseleave="removeShadow"
            @mousemove="applyShadow"
          ></div>
          <div
            class="recommenditem4"
            style="width: 188px; height: 99px"
            @mouseleave="removeShadow"
            @mousemove="applyShadow"
          ></div>
          <div
            class="recommenditem5"
            style="width: 188px; height: 99px"
            @mouseleave="removeShadow"
            @mousemove="applyShadow"
          ></div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import DPlayer from "dplayer";

export default {
  data() {
    return {
      dp: {},
    };
  },
  methods: {
    enterLiveRoom() {
      return 0;
    },
    redirectToLink(link) {
      window.location.href = link;
    },
    applyShadow(event) {
      const container = event.currentTarget;
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const shadowX = (x - rect.width / 2) / 10;
      const shadowY = (y - rect.height / 2) / 10;
      container.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.5)`;
    },
    removeShadow(event) {
      event.currentTarget.style.boxShadow = "";
    },
  },
  mounted() {
    this.dp = new DPlayer({
      //播放器的一些参数
      container: document.getElementById("dplayer"),
      video: {
        url: "https://upos-sz-mirror08c.bilivideo.com/upgcxcode/26/95/1343079526/1343079526-1-16.mp4?e=ig8euxZM2rNcNbRVhwdVhwdlhWdVhwdVhoNvNC8BqJIzNbfq9rVEuxTEnE8L5F6VnEsSTx0vkX8fqJeYTj_lta53NCM=&uipk=5&nbs=1&deadline=1700907605&gen=playurlv2&os=08cbv&oi=3757148876&trid=7a274e288b304823a15761a9e216ca7ah&mid=320626273&platform=html5&upsig=ef2024b640ba502eb02ec88ec644dc75&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&f=h_0_0&bw=52104&logo=80000000.mp4",
        type: "auto",
      },
      live: true,
      danmaku: true,
      defaultQuality: "high",
      autoplay: true, //是否自动播放
      theme: "#FADFA3", //主题色
      loop: true, //视频是否循环播放
      lang: "zh-cn",
      screenshot: false, //是否开启截图
      hotkey: true, //是否开启热键
      preload: "auto", //视频是否预加载
      volume: 0.7, //默认音量
      mutex: true, //阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
      subtitle: {
        url: "dplayer.vtt",
        type: "webvtt",
        fontSize: "25px",
        bottom: "10%",
        color: "#b7daff",
      },
      apiBackend: {
        read: function (options) {
          console.log("Pretend to connect WebSocket");
          options.success([]);
        },
        send: function (options) {
          console.log("Pretend to send danmaku via WebSocket", options.data);
          options.success();
        },
      },
      contextmenu: [
        {
          text: "custom1",
          link: "https://github.com/DIYgod/DPlayer",
        },
        {
          text: "custom2",
          click: (player) => {
            console.log(player);
          },
        },
      ],
    });
  },
};
</script>

<style scoped>
#broadcast {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/background/img_1.png");
}

.recommend {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 622px;
  background: hsla(0, 0%, 70%, 0.8);
}

.recommenditem1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/Chinese/1.png");
  background-size: cover;
  margin: 10px;
  border-radius: 5px;
  filter: brightness(60%);
}

.recommenditem1:hover {
  border: 3px solid #4dd0f8;
  filter: brightness(100%);
}

.recommenditem2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/Math/img.png");
  background-size: cover;
  margin: 10px;
  border-radius: 5px;
  filter: brightness(60%);
}

.recommenditem2:hover {
  border: 3px solid #4dd0f8;
  filter: brightness(100%);
}

.recommenditem3 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/Chinese/2.png");
  background-size: cover;
  margin: 10px;
  border-radius: 5px;
  filter: brightness(60%);
}

.recommenditem3:hover {
  border: 3px solid #4dd0f8;
  filter: brightness(100%);
}

.recommenditem4 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/Math/img_1.png");
  background-size: cover;
  margin: 10px;
  border-radius: 5px;
  filter: brightness(60%);
}

.recommenditem4:hover {
  border: 3px solid #4dd0f8;
  filter: brightness(100%);
}

.recommenditem4 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/Chinese/3.jpg");
  background-size: cover;
  margin: 10px;
  border-radius: 5px;
  filter: brightness(60%);
}

.recommenditem5 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/Math/img_3.png");
  background-size: cover;
  margin: 10px;
  border-radius: 5px;
  filter: brightness(60%);
}

.recommenditem5:hover {
  border: 3px solid #4dd0f8;
  filter: brightness(100%);
}

#dplayer {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  left: 100px;
  width: 928px;
  height: 622px;
  margin: 20px 100px 20px 40px;
}

.enter-button {
  width: 200px;
  height: 60px;
  background-color: hsla(0, 0%, 70%, 0.8);
  color: white;
  border-radius: 8px;
  border: 1px solid #04befe;
  position: absolute;
  top: 55%;
  left: 45%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.enter-button:hover {
  background-color: #4dd0f8;
}
</style>
