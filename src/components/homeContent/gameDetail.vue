<template>
  <div class="gameDetail">
    <div class="gameDetailHeader">
      <div class="picItem">
        <img
          class="carousel"
          v-if="gameData.image_url"
          :src="gameData.image_url"
          width="100%"
          height="400px"
        />
        <div class="info">
          <div class="score">
            <div class="scoreDetail">
              <i class="el-icon-star-on"></i>
              {{ gameData.score }}
            </div>
            <div class="moba">{{ gameData.category }}</div>
          </div>
          <div class="brass">
            <p>{{ gameData.brass }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="gameDetailContent">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Overview" name="first">
          <GameDetailOverview :game-detail-data="gameDetailData"></GameDetailOverview>
        </el-tab-pane>
        <el-tab-pane label="Ratings" name="second">
          <GameDetailRating></GameDetailRating>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import GameDetailOverview from "./gameDetailOverview.vue";
import GameDetailRating from "./gameDetailRating.vue";

export default {
  created() {
    console.log(this.gameData);
  },
  props: {
    gameData: {
      type: Object,
      required: true,
    },
  },
  components: {
    GameDetailOverview,
    GameDetailRating,
  },
  data() {
    return {
      activeName: "first",
      gameDetailData: {},
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.gameDetailData = {
        name: this.gameData.name,
        category: this.gameData.category,
        brass: this.gameData.brass,
        year: this.gameData.year,
        num_votes: this.gameData.num_votes,
        bgg_url: this.gameData.bgg_url,
        owned: this.gameData.owned,
        designer: this.gameData.designer
      };
    },
  },
};
</script>
<style scoped>
.picItem {
  position: relative;
  height: 100%;
}
.picItem img {
  border-radius: 15px;
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
.score {
  width: 40%;
  height: 16px;
  margin-bottom: 0px;
  overflow: hidden;
  display: flex;
}
.score div {
  float: left;
  margin-left: 20px;
}
.scoreDetail {
  width: 15%;
  padding: 0px 5px;
  border-radius: 10px;
  background-color: #ff754c;
  font-size: 12px;
  color: #fff;
  text-align: center;
}
.moba {
  width: 90%;
  padding: 0px 5px;
  font-size: 12px;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
}
.brass {
  width: 35%;
  margin-left: 2.5%;
  color: #fff;
  text-align: left;
  margin-top: 10px;
  padding-bottom: 20px;
}
.brass h4 {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
