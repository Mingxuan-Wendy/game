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
        <div class="common-footer">
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

          <div class="operators">
            <div class="addCollectionIcon" @click="addToCollection(gameData.id)">
              <i class="el-icon-plus"></i>
              <span class="tooltip-text">Collect</span>
            </div>

            <div class="empty-heart" v-if="!this.redHeart" @click="toggleHeart">
              <font-awesome-icon :icon="['fas', 'heart']"/>
              <span class="tooltip-text">Add to wishlist</span>
            </div>
            <div class="red-heart" v-else @click="toggleHeart">
              <font-awesome-icon :icon="['far', 'heart']"/>
              <span class="tooltip-text">Remove from wishlist</span>
            </div>

            <div class="empty-times" v-if="!this.times" @click="toggleTimes">
              <font-awesome-icon :icon="['fas', 'times']"/>
              <span class="tooltip-text">Add to blacklist</span>
            </div>
            <div class="black-times" v-else @click="toggleTimes">
              <font-awesome-icon :icon="['fas', 'times']"/>
              <span class="tooltip-text">Remove from blacklist</span>
            </div>

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
import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

library.add(faHeart);

Vue.component('font-awesome-icon', FontAwesomeIcon);

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
      redHeart: false,
      times: false,
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      this.gameDetailData = {
        id: this.gameData.id,
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
    toggleHeart() {
      this.redHeart = !this.redHeart;
    },
    toggleTimes() {
      this.times = !this.times;
    },
    async addToCollection(id) {
      console.log(id);
      const userCollectionResponse = await axios.get("http://127.0.0.1:8000/api/user/1/games");
      const currentCollections = userCollectionResponse.data;
      for(var i=0; i < currentCollections.length; i++) {
        if (currentCollections[i]["id"] === id) {
          alert('This game has already been collected!');
          return;
        }
      }
      const data= {
        game: id,
        custom_user: 1,
      };
      const response = await axios.post("http://127.0.0.1:8000/api/collections/", data);
      console.log(response.status);
      alert('Add to collection success!');
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
.common-footer {
  display: flex;
  width: 100%;
  bottom: 0px;
  position: absolute;
  justify-content: space-between;
}
.info {
  width: 50%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  float: left;
}
.score {
  width: 65%;
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
  background-color: #000;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
}
.brass {
  width: 65%;
  margin-left: 4.5%;
  color: #fff;
  text-align: left;
  margin-top: 10px;
  padding-bottom: 20px;
}
.brass h4 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.operators {
  float: right;
  display: flex;
  width: 30%;
  margin-right: 0px;
  margin-bottom: 2%;
  align-items: flex-end;
}
.addCollectionIcon {
  position: absolute;
  cursor: pointer;
  font-size: 13px;
  height: 15%;
  width: 1.5%;
  color: #FF0000;
  background-color: #e6e6e6;
  border: 1px solid #D3D3D3;
  border-radius: 10px;
}
.tooltip-text {
  visibility: hidden;
  width: 120px;
  font-size: 9px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: relative;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}
.addCollectionIcon:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
.empty-heart {
  cursor: pointer;
  width: 20px;
  height: 22%;
  color: #fff;
  stroke: #FF0000;
  stroke-width: 2px;
  margin-left: 30px;
}
.empty-heart:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
.empty-times {
  cursor: pointer;
  width: 20px;
  height: 20%;
  color: #e6e6e6;
  background-color: #000;
  border: 1px solid #D3D3D3;
  border-radius: 10px;
  stroke-width: 2px;
  margin-left: 10px;
  text-align: center;
}
.empty-times:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
.red-heart {
  cursor: pointer;
  width: 18%;
  height: 22%;
  color: #FF0000;
  stroke-width: 2px;
  margin-left: 30px;
}
.red-heart:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
.black-times {
  cursor: pointer;
  width: 18%;
  height: 20%;
  color: #000;
  background-color: #e6e6e6;
  border: 1px solid #D3D3D3;
  border-radius: 10px;
  stroke-width: 2px;
  margin-left: 10px;
  text-align: center;
}
.black-times:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>
