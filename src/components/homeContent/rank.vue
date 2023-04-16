<template>
  <div class="gameRank">
    <div class="rankHeader">
      <div class="rankName">Games ranking</div>
    </div>

    <div class="rankContent">
      <div class="leftContent">
        <div class="rankPic">
          <img
            class="carousel"
            src="https://cf.geekdo-images.com/original/img/lDN358RgcYvQfYYN6Oy2TXpifyM=/0x0/pic2437871.jpg"
            width="100%"
          />
          <div class="info">
            <div class="score">
              <div class="scoreDetail">
                <i class="el-icon-star-on"></i>
                {{ 9.0 }}
              </div>
              <div class="moba">{{ "MOBA" }}</div>
              <div class="esport">ESport</div>
            </div>
            <div class="brass">
              <h4>Gloomhaven</h4>
              <p>1-4 players, 60-120 mins, Age:12, weight:3.8/5</p>
            </div>
            <div class="detail">
              <el-button @click="clickDetails(1)">Details</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <section class="container">
          <div class="container-item">
            <div class="rankPic2">
              <div class="sub-content">
                <img
                  class="carousel2"
                  src="https://cf.geekdo-images.com/original/img/P_SwsOtPLqgk2ScCgI2YrI9Rg6I=/0x0/pic2452831.png"
                  width="100%"
                />
              </div>
              <div class="sub-content">
                <div class="info2">
                  <div class="score2">
                    <div class="scoreDetail">
                      <i class="el-icon-star-on"></i>
                      {{ 8.7 }}
                    </div>
                    <div class="moba2">{{ "MOBA" }}</div>
                    <div class="esport2">ESport</div>
                  </div>
                  <div class="brass2">
                    <h4>Pandemic Legacy: Season 1</h4>
                    <p>2-4 players, 60-60 mins, Age:13, weight:2.8/5</p>
                  </div>
                  <div class="detail2">
                    <el-button @click="clickDetails(2)">Details</el-button>
                  </div>
                </div>
              </div>
            </div>

            <div class="rankPic2">
              <div class="sub-content">
                <img
                  class="carousel2"
                  src="https://cf.geekdo-images.com/original/img/1d2h-kr4r_9xsss2Br6iMvjR9q0=/0x0/pic2663291.jpg"
                  width="100%"
                />
              </div>
              <div class="sub-content">
                <div class="info2">
                  <div class="score2">
                    <div class="scoreDetail">
                      <i class="el-icon-star-on"></i>
                      {{ 8.6 }}
                    </div>
                    <div class="moba2">{{ "MOBA" }}</div>
                    <div class="esport2">ESport</div>
                  </div>
                  <div class="brass2">
                    <h4>Through the Ages: A New Story of Civilization</h4>
                    <p>2-4 players, 180-240 mins, Age:14, weight:4.4/5</p>
                  </div>
                  <div class="detail2">
                    <el-button @click="clickDetails(3)">Details</el-button>
                  </div>
                </div>
              </div>
            </div>

            <div class="rankPic2">
              <div class="sub-content">
                <img
                  class="carousel2"
                  src="https://cf.geekdo-images.com/original/img/o8z_levBVArPUKI7ZrIysZEs1A0=/0x0/pic3536616.jpg"
                  width="100%"
                />
              </div>
              <div class="sub-content">
                <div class="info2">
                  <div class="score2">
                    <div class="scoreDetail">
                      <i class="el-icon-star-on"></i>
                      {{ 8.4 }}
                    </div>
                    <div class="moba2">{{ "MOBA" }}</div>
                    <div class="esport2">ESport</div>
                  </div>
                  <div class="brass2">
                    <h4>Terraforming Mars</h4>
                    <p>1-5 players, 120-120 mins, Age:12, weight:3.2/5</p>
                  </div>
                  <div class="detail2">
                    <el-button @click="clickDetails(4)">Details</el-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <el-dialog :visible.sync="dialogVisible" width="60%" height="500px">
      <GameDetail :game-data="gameData"></GameDetail>
    </el-dialog>
  </div>
</template>

<script>
import GameDetail from "@/components/homeContent/gameDetail.vue";
import axios from "axios";

export default {
  components: {
    GameDetail,
  },
  data() {
    return {
      dialogVisible: false,
      gameData: {},
    }
  },
  methods: {
    async clickDetails(id) {
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
  }
}
</script>

<style scoped>
.gameRank {
  width: 98%;
  margin-left: 1%;
  margin-top: 40px;
}
.rankHeader {
  overflow: hidden;
}
.rankName {
  float: left;
  margin-left: 20px;
  font-weight: 600;
  font-size: 14px;
}

.rankContent {
  width: 98%;
  margin-left: 1%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.leftContent {
  width: 40%;
  height: 500px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px 3px#e6e6e6;
  background-size: 100% 100%;
}
.content {
  width: 58%;
  height: 500px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px 3px#e6e6e6;
  background-size: 100% 100%;
}
.sub-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 133px;
  margin-left: 1%;
  background-size: 100% 100%;
}
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
}
.container-item {
  height: 133px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.rankPic {
  position: relative;
  height: 100%;
}

.rankPic2 {
  display: flex;
  position: relative;
  height: 100%;
  margin-top: 25px;
}

.rankPic .info {
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
}
.rankPic2 .info2 {
  position: absolute;
  width: 90%;
  bottom: 0px;
  /*height: 133px;*/
  /*left: 320px;*/
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
}
.carousel {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 20px;
}
.carousel2 {
  width: 1000%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 10px;
}

.score {
  width: 100%;
  height: 20px;
  /*margin-top: 10px;*/
  overflow: hidden;
  margin-left: 1%;
}
.score2 {
  width: 90%;
  height: 20px;
  /*margin-top: 10px;*/
  overflow: hidden;
  margin-left: 1%;
}
.score div {
  float: left;
  margin-left: 5px;
}
.score2 div {
  float: left;
  margin-left: 5px;
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
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
}
.moba2,
.esport2 {
  padding: 0px 5px;
  font-size: 12px;
  color: #3f8cff;
  text-align: center;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
}
.brass2 {
  width: 70%;
  color: #000000;
  font-size: 13px;
  text-align: left;
  margin-top: 0px;
  margin-left: 1%;
}

.brass {
  width: 100%;
  /*margin-left: %;*/
  color: #fff;
  text-align: left;
  margin-left: 1%;
  margin-top: 0px;
}
h4 {
  margin-top: 0px;
  margin-bottom: 0px;
  /*margin-left: 5%;*/
}
.detail {
  width: 100%;
  margin-bottom: 10px;
  margin-left: 1%;
}
.detail2 {
  width: 100%;
  margin-bottom: 1px;
  margin-left: 1%;
}
.detail .el-button {
  background-color: #6c5dd3;
  color: #fff;
  border: 0px;
  border-radius: 10px;
  margin-left: 1%;
}
.detail2 .el-button {
  background-color: #6c5dd3;
  color: #fff;
  border: 0px;
  /*text-align: center;*/
  border-radius: 10px;
  margin-left: 1%;
}
.rankFooter div {
  float: right;
}
.rankFooter a {
  color: #58b5ff;
  cursor: pointer;
  font-weight: 700;
}
</style>
