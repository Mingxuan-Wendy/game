<template>
  <div class="topHeader">
    <div class="banner">
      <el-carousel indicator-position="outside" height="500px">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <div class="picItem">
            <img class="carousel" :src="item.imgUrl" width="100%" />
            <div class="info">
              <div class="score">
                <div class="scoreDetail">
                  <i class="el-icon-star-on"></i>
                  {{ item.socre }}
                </div>
                <div class="moba">{{ item.moba }}</div>
                <div class="esport">ESport</div>
              </div>
              <div class="brass">
                <h4>{{ item.name }}</h4>
                <p>{{ item.info }}</p>
              </div>
              <div class="detail">
                <el-button @click="getDetail(item.id)">Details</el-button>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="60%" height="500px">
      <GameDetail :game-data="gameData"></GameDetail>
    </el-dialog>
  </div>
</template>
<script>
import GameDetail from "./gameDetail.vue";
import axios from "axios";
export default {
  components: {
    GameDetail,
  },
  data() {
    return {
      imgList: [
        {
          id: 1,
          imgUrl: "https://cf.geekdo-images.com/original/img/lDN358RgcYvQfYYN6Oy2TXpifyM=/0x0/pic2437871.jpg",
          socre: 9.0,
          moba: "MOBA",
          name: "Gloomhaven",
          info: "1-4 players, 60-120 mins, Age:12, weight:3.8/5",
        },
        {
          id: 2,
          imgUrl: "https://cf.geekdo-images.com/original/img/P_SwsOtPLqgk2ScCgI2YrI9Rg6I=/0x0/pic2452831.png",
          socre: 8.7,
          moba: "MOBA",
          name: "Pandemic Legacy: Season 1",
          info: "2-4 players, 60-60 mins, Age:13, weight:2.8/5",
        },
        {
          id: 3,
          imgUrl: "https://cf.geekdo-images.com/original/img/1d2h-kr4r_9xsss2Br6iMvjR9q0=/0x0/pic2663291.jpg",
          socre: 8.6,
          moba: "MOBA",
          name: "Through the Ages: A New Story of Civilization",
          info: "2-4 players, 180-240 mins, Age:14, weight:4.4/5",
        },
        {
          id: 4,
          imgUrl: "https://cf.geekdo-images.com/original/img/o8z_levBVArPUKI7ZrIysZEs1A0=/0x0/pic3536616.jpg",
          socre: 8.4,
          moba: "MOBA",
          name: "Terraforming Mars",
          info: "1-5 players, 120-120 mins, Age:12, weight:3.2/5",
        },
      ],
      dialogVisible: false,
      gameData: {},
    };
  },
  methods: {
    async getDetail(id) {
      const response = await axios.get("http://127.0.0.1:8000/api/games/" + id);
      var gameJsonObj = response.data;
      // brass: "2-4 players 60-120 mins Age:14+ weight:3.9/5",
      var min_player = gameJsonObj["min_players"];
      var max_player = gameJsonObj["max_players"];
      var min_time = gameJsonObj["min_time"];
      var max_time = gameJsonObj["max_time"];
      var age = gameJsonObj["age"];
      var weight = gameJsonObj["weight"].toFixed(1);
      var brass = min_player + "-" + max_player + " players, " + min_time + "-" + max_time + " mins, Age:" + age + ", weight:" + weight + "/5";
      this.gameData = {
        id: gameJsonObj["id"],
        name: gameJsonObj["names"],
        image_url: gameJsonObj["image_url"],
        score: gameJsonObj["avg_rating"].toFixed(1),
        category: gameJsonObj["category"],
        brass: brass,
        year: gameJsonObj["year"],
        num_votes: gameJsonObj["num_votes"],
        bgg_url: gameJsonObj["bgg_url"],
        owned: gameJsonObj["owned"],
        designer: gameJsonObj["designer"]
      }
      this.dialogVisible = true;
    },
  },
};
</script>
<style scoped>
.topHeader {
  width: 98%;
  margin-left: 1%;
  height: 500px;
  border-radius: 20px;
  margin-top: 20px;
  background-size: 100% 100%;
}
.picItem {
  position: relative;
  height: 100%;
}
.picItem .info {
  position: absolute;
  width: 90%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
}
.carousel {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 20px;
}
.score {
  width: 30%;
  height: 20px;
  margin-top: 20px;
  overflow: hidden;
}
.score div {
  float: left;
  margin-left: 20px;
}
.scoreDetail {
  padding: 0px 5px;
  border-radius: 10px;
  background-color: #ff754c;
  font-size: 12px;
  color: #fff;
  text-align: center;
}
.moba,
.esport {
  padding: 0px 5px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
}
.brass {
  width: 30%;
  margin-left: 1%;
  color: #fff;
  text-align: left;
  margin-top: 20px;
}
.brass h4 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.detail {
  width: 98%;
  margin-bottom: 20px;
}
.detail .el-button {
  background-color: #6c5dd3;
  color: #fff;
  border: 0px;
  border-radius: 10px;
  margin-left: 1%;
}
</style>
