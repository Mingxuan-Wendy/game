<template>
  <div class="recommend">
    <div class="recommendHeader">
      <div class="recommendName">Recommended Games</div>
    </div>
    <div class="recommendContent">
      <div class="content1">
        <div class="recommendPic1"></div>
        <div class="recommendInfo1">
          <p>Gloomhaven</p>
          <div class="recommendInfoBox">
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
                <p>1-4 players, 60-120 mins, Age:12, weight:3.8/5</p>
              </div>
            </div>
          </div>
        </div>
        <div class="detail">
          <el-button @click="clickDetails(1)">Details</el-button>
        </div>
      </div>

      <div class="content2">
        <div class="recommendPic1"></div>
        <div class="recommendInfo1">
          <p>Pandemic Legacy: Season 1</p>
          <div class="recommendInfoBox">
            <div class="info">
              <div class="score">
                <div class="scoreDetail">
                  <i class="el-icon-star-on"></i>
                  {{ 8.7 }}
                </div>
                <div class="moba">{{ "MOBA" }}</div>
                <div class="esport">ESport</div>
              </div>
              <div class="brass">
                <p>2-4 players, 60-60 mins, Age:13, weight:2.8/5</p>
              </div>
            </div>
          </div>
        </div>
        <div class="detail">
          <el-button @click="clickDetails(2)">Details</el-button>
        </div>
      </div>

      <div class="content3">
        <div class="recommendPic1"></div>
        <div class="recommendInfo1">
          <p>Through the Ages: A New Story of Civilization</p>
          <div class="recommendInfoBox">
            <div class="info">
              <div class="score">
                <div class="scoreDetail">
                  <i class="el-icon-star-on"></i>
                  {{ 8.6 }}
                </div>
                <div class="moba">{{ "MOBA" }}</div>
                <div class="esport">ESport</div>
              </div>
              <div class="brass">
                <p>2-4 players, 180-240 mins, Age:14, weight:4.4/5</p>
              </div>
            </div>
          </div>
        </div>
        <div class="detail">
          <el-button @click="clickDetails(3)">Details</el-button>
        </div>
      </div>

      <div class="content4">
        <div class="recommendPic1"></div>
        <div class="recommendInfo1">
          <p>Terraforming Mars</p>
          <div class="recommendInfoBox">
            <div class="info">
              <div class="score">
                <div class="scoreDetail">
                  <i class="el-icon-star-on"></i>
                  {{ 8.4 }}
                </div>
                <div class="moba">{{ "MOBA" }}</div>
                <div class="esport">ESport</div>
              </div>
              <div class="brass">
                <p>1-5 players, 120-120 mins, Age:12, weight:3.2/5</p>
              </div>
            </div>
          </div>
        </div>
        <div class="detail">
          <el-button @click="clickDetails(4)">Details</el-button>
        </div>
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
    };
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
    }
  },
};
</script>
<style scoped>
.recommend {
  width: 98%;
  margin-left: 1%;
  margin-top: 40px;
}
.recommendHeader {
  overflow: hidden;
}
.recommendName {
  float: left;
  margin-left: 20px;
  font-weight: 600;
  font-size: 14px;
}
.el-select {
  float: right;
  margin-right: 20px;
}
.recommendContent {
  width: 98%;
  margin-left: 1%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
}
.content1,
.content2,
.content3,
.content4 {
  width: calc((100% - 300px) / 4);
  height: 400px;
  margin-bottom: 20px;
  /* margin-right: 100px; */
  border-radius: 20px;
  box-shadow: 0px 2px 2px 3px#e6e6e6;
}
.recommendPic1 {
  height: 40%;
  background: url("https://cf.geekdo-images.com/original/img/lDN358RgcYvQfYYN6Oy2TXpifyM=/0x0/pic2437871.jpg") no-repeat;
  background-size: 100% 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.content2 .recommendPic1 {
  background: url("https://cf.geekdo-images.com/original/img/P_SwsOtPLqgk2ScCgI2YrI9Rg6I=/0x0/pic2452831.png") no-repeat;
  background-size: 100% 100%;
}
.content3 .recommendPic1 {
  background: url("https://cf.geekdo-images.com/original/img/1d2h-kr4r_9xsss2Br6iMvjR9q0=/0x0/pic2663291.jpg") no-repeat;
  background-size: 100% 100%;
}
.content4 .recommendPic1 {
  background: url("https://cf.geekdo-images.com/original/img/o8z_levBVArPUKI7ZrIysZEs1A0=/0x0/pic3536616.jpg") no-repeat;
  background-size: 100% 100%;
}
.recommendInfo1 {
  height: 40%;
  overflow: hidden;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 0px 20px;
}
.recommendInfo1 div {
  overflow: hidden;
  float: left;
}
.recommendInfoBox {
  position: relative;
  height: 100%;
  width: 100%;
  display: block;
  float: left;
  margin-left: 1%;
}
/*.recommendInfoBox {*/
/*  !*display: block;*!*/
/*  float: left;*/
/*}*/
.recommendInfoBox .info {
  position: relative;
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
}
.score {
  width: 100%;
  height: 20px;
  /*margin-top: 10px;*/
  overflow: hidden;
  margin-left: 1%;
}
.score div {
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
  color: #3f8cff;
  text-align: center;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
}
.brass {
  width: 100%;
  /*margin-left: %;*/
  color: #000000;
  text-align: left;
  margin-left: 1%;
  margin-top: 0px;
}

.detail {
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  float: right;
  padding: 0px 20px;
}

.detail .el-button {
  background-color: #6c5dd3;
  color: #fff;
  border: 0px;
  align-items: center;
  border-radius: 10px;
}

.recommendFooter {
  width: 98%;
  margin-left: 1%;
  overflow: hidden;
}
.recommendFooter div {
  float: right;
}
.recommendFooter a {
  color: #58b5ff;
  cursor: pointer;
  font-weight: 700;
}
</style>
