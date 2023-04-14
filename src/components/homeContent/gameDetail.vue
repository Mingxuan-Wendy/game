<template>
  <div class="gameDetail">
    <div class="gameDetailHeader">
      <div class="picItem">
        <img
          class="carousel"
          src="../../img/banner1.jpg"
          width="100%"
          height="400px"
        />
        <div class="info">
          <div class="score">
            <div class="scoreDetail">
              <i class="el-icon-star-on"></i>
              8.6
            </div>
            <div class="moba">MOBA</div>
            <div class="esport">ESport</div>
          </div>
          <div class="brass">
            <h4>Brass:Birmingham(2018)</h4>
            <p>2-4 players 60-120 mins Age:14+ weight:3.9/5</p>
          </div>
        </div>
      </div>
    </div>
    <div class="gameDetailContent">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Overview" name="first">
          <GameDetailOverview></GameDetailOverview>
        </el-tab-pane>
        <el-tab-pane label="Ratings" name="second">
          <GameDetailRating></GameDetailRating>
        </el-tab-pane>
        <el-tab-pane label="Shopping" name="third">
          <GameDetailShop></GameDetailShop>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import GameDetailOverview from "./gameDetailOverview.vue";
import GameDetailRating from "./gameDetailRating.vue";
import GameDetailShop from "./gameDetailShop.vue";
export default {
  components: {
    GameDetailOverview,
    GameDetailRating,
    GameDetailShop,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
  padding-bottom: 50px;
}
.brass h4 {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
