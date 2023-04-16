<template>
  <div class="collection">
    <div class="collectionHeader">
      <h4 class="header">Hi {{ userName }}, Welcome back</h4>
      <h1 class="header">Your Games Collection</h1>
      <div class="filters">
        <el-button
          class="all-btn"
          size="medium"
          @click="clickAll"
          type="primary"
          >All</el-button
        >
        <el-select v-model="categories" placeholder="Category" @change="onCategorySelected">
          <el-option
            v-for="item in categaryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="durations" placeholder="Max Duration" @change="onDurationSelected">
          <el-option
            v-for="item in durationOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="sizes" placeholder="Size" @change="onSizeSelected">
          <el-option
            v-for="item in sizeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="ages" placeholder="Age" @change="onAgeSelected">
          <el-option
            v-for="item in ageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <p>You totally added {{ totalCollectedGames }} games</p>

      <div class="operator">
        <i class="el-icon-edit"  style="vertical-align: middle" @click="showSelect = !showSelect">Select</i>
        <i class="el-icon-delete" style="vertical-align: middle" @click="onDelete">Delete</i>
      </div>

      <div class="collectionContent">
        <ul>
            <div class="content1" v-for="item in filteredGameList" :key="item['id']">
              <div class="collectionPic1">
                <img :src="item['url']" width="100%" class="pic">
                <div v-if="showSelect" class="layers-item-selector">
                  <input type="checkbox" v-model="item.checked" @change="checkedGame(item['id'], item.checked)"/>
                </div>
              </div>

              <div class="collectionInfo1">
                <p>{{ item["name"] }}</p>
                <div class="collectionInfoBox">
                  <div class="info">
                    <div class="score">
                      <div class="scoreDetail">
                        <i class="el-icon-star-on"></i>
                        {{ item["score"] }}
                      </div>
                      <div class="moba">{{ item["category"] }}</div>
                    </div>
                    <div class="brass">
                      <p>{{ item["brass"] }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="detail">
                <el-button @click="clickDetails(item['id'])" >Details</el-button>
              </div>
            </div>
        </ul>
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
let processedGameList;
let total_size = 0;
let collections;
let user_id = 1;
// let passToGameDetail = {};
export default {
  components: {
    GameDetail,
  },

  async created() {
    try{
      processedGameList = [];

      const response = await axios.get("http://127.0.0.1:8000/api/user/" + user_id + "/games/");
      const collectionsResponse = await axios.get("http://127.0.0.1:8000/api/collections/");
      collections = collectionsResponse.data;

      var rawCollectedGameList = response.data;
      for (var i=0; i < rawCollectedGameList.length; i++) {
        var jsonObj = {};
        jsonObj["id"] = rawCollectedGameList[i]["id"];
        jsonObj["name"] = rawCollectedGameList[i]["names"];
        jsonObj["url"] = rawCollectedGameList[i]["image_url"];
        jsonObj["score"] = rawCollectedGameList[i]["avg_rating"].toFixed(1);
        jsonObj["category"] = rawCollectedGameList[i]["category"];

        jsonObj["min_time"] = rawCollectedGameList[i]["min_time"];
        jsonObj["max_time"] = rawCollectedGameList[i]["max_time"];
        jsonObj["min_players"] = rawCollectedGameList[i]["min_players"];
        jsonObj["max_players"] = rawCollectedGameList[i]["max_players"];
        jsonObj["age"] = rawCollectedGameList[i]["age"];

        // brass: "2-4 players 60-120 mins Age:14+ weight:3.9/5",
        var min_player = rawCollectedGameList[i]["min_players"];
        var max_player = rawCollectedGameList[i]["max_players"];
        var min_time = rawCollectedGameList[i]["min_time"];
        var max_time = rawCollectedGameList[i]["max_time"];
        var age = rawCollectedGameList[i]["age"];
        var weight = rawCollectedGameList[i]["weight"];
        jsonObj["brass"] = min_player + "-" + max_player + " players " + min_time + "-" + max_time + " mins Age:" + age + " weight:" + weight;

        console.log(jsonObj);
        processedGameList.push(jsonObj);
      }
      this.collectedGameList = processedGameList;
      this.totalCollectedGames = processedGameList.length;
      console.log(processedGameList.length);
    } catch (error) {
      console.error("Error:", error)
    }
  },
  data() {
    return {
      userName: "XXX",
      categories: "",
      durations: "",
      sizes: "",
      ages: "",
      showSelect: false,
      categaryOptions: [
        {value: "option1", label: "Adventure",},
        {value: "option2", label: "Economic",},
        {value: "option3", label: "Card Game",},
      ],
      durationOptions: [
        {value: "option1", label: "<= 60 minutes",},
        {value: "option2", label: "60~180 minutes",},
        {value: "option3", label: "> 180 minutes",},
      ],
      sizeOptions: [
        {value: "option1", label: "Accept play single",},
        {value: "option2", label: "Maximum size <= 4 players",},
        {value: "option3", label: "Accept >4 players",},
      ],
      ageOptions: [
        {value: "option1", label: "Accept age under 8",},
        {value: "option2", label: "Accept age between 8~14 ",},
        {value: "option3", label: "Accept for age >=18",},
      ],
      collectedGameList: processedGameList,
      filterGameList: [],
      totalCollectedGames: total_size,
      checkedGamesId: [],
      isCategorySelected: false,
      isDurationSelected: false,
      isSizeSelected: false,
      isAgeSelected: false,
      dialogVisible: false,
      gameData: {},
    };
  },

  methods: {
    async onDelete() {
      try {
        const deletePromises = this.checkedGamesId.map(async (id) => {
          const index = this.collectedGameList.findIndex((game) => game["id"] === id);
          if (index !== -1) {
            let delete_collection_id;

            if(Array.isArray(collections)) {
              const foundObject = collections.find(
                (jsonObject) => jsonObject["game"] === id && jsonObject["custom_user"] === user_id
              );
              if (foundObject) {
                delete_collection_id = foundObject["id"];
                console.log("The delete_collection_id value is:", delete_collection_id);
              } else {
                console.log("No matching object found.");
              }
            }

            // Remove the item from the array
            console.log(this.collectedGameList[index]["id"] === id);
            console.log(delete_collection_id);
            const response = await axios.delete("http://127.0.0.1:8000/api/collections/" + delete_collection_id + "/");

            if (response.status === 204) {
              console.log('Game successfully deleted from collection!');
            }
          }
        });
        await Promise.all(deletePromises);
        console.log(this.collectedGameList.length);
        // this.$forceUpdate();
        this.reloadPage();
      } catch (error) {
        console.error('Error occurred while delete game in the collection: ', error);
      }
    },

    checkedGame(id, checked) {
      if (checked) {
        this.checkedGamesId.push(id);
      }
    },

    reloadPage() {
      window.location.reload();
    },
    clickAll() {
      // this.$forceUpdate();
      this.reloadPage();
    },
    onCategorySelected() {
      this.isCategorySelected = true;
      this.$forceUpdate();
    },
    onDurationSelected() {
      this.isDurationSelected = true;
      this.$forceUpdate();
    },
    onSizeSelected() {
      this.isSizeSelected = true;
      this.$forceUpdate();
    },
    onAgeSelected() {
      this.isAgeSelected = true;
      this.$forceUpdate();
    },

    async clickDetails(id) {
      const response = await axios.get("http://127.0.0.1:8000/api/games/" + id);
      var gameJsonObj = response.data;
      // brass: "2-4 players 60-120 mins Age:14+ weight:3.9/5",
      var min_player = gameJsonObj["min_players"];
      var max_player = gameJsonObj["max_players"];
      var min_time = gameJsonObj["min_time"];
      var max_time = gameJsonObj["max_time"];
      var age = gameJsonObj["age"];
      var weight = gameJsonObj["weight"];
      var brass = min_player + "-" + max_player + " players " + min_time + "-" + max_time + " mins Age:" + age + " weight:" + weight;
      this.gameData = {
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

  computed: {
    filteredGameList() {
      if (!this.isCategorySelected && !this.isDurationSelected) {
        if(!this.isSizeSelected && !this.isAgeSelected) {
          return this.collectedGameList;
        }
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.filterGameList = [];
      console.log(this.isCategorySelected);
      console.log(this.isDurationSelected);
      console.log(this.isSizeSelected);
      console.log(this.isAgeSelected);

      if (this.isCategorySelected) {
        let category;
        category = this.categories;
        if (category === "option1") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game["category"].includes("Adventure"));
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game["category"].includes("Adventure"));
          }
        }
        else if(category === "option2") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game["category"].includes("Economic"));
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game["category"].includes("Economic"));
          }
        }
        else if(category === "option3") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game["category"].includes("Card Game"));
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game["category"].includes("Card Game"));
          }
        }
        console.log(category);
      }

      if (this.isDurationSelected) {
        let duration;
        duration = this.durations;
        if (duration === "option1") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game["max_time"] <= 60);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game["max_time"] <= 60);
          }
        }
        else if(duration === "option2") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => (game["max_time"] > 60 && game["max_time"] <= 180));
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => (game["max_time"] > 60 && game["max_time"] <= 180));
          }
        }
        else if(duration === "option3") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game["max_time"] > 180);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game["max_time"] > 180);
          }
        }
        console.log(duration);
      }

      if (this.isSizeSelected) {
        let size;
        size = this.sizes;
        if (size === "option1") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game["min_players"] === 1);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game["min_players"] === 1);
          }
        }
        else if(size === "option2") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game["max_players"] <= 4);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game["max_players"] <= 4);
          }
        }
        else if(size === "option3") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game["max_players"] > 4);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game["max_players"] > 4);
          }
        }
        console.log(size);
      }

      if (this.isAgeSelected) {
        let age;
        age = this.ages;
        if (age === "option1") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game["age"] <= 8);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game["age"] <= 8);
          }
        }
        else if(age === "option2") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => (game["age"] >= 8 && game["age"] <= 14));
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => (game["age"] >= 8 && game["age"] <= 14));
          }
        }
        else if(age === "option3") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game["age"] >= 18);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game["age"] >= 18);
          }
        }
        console.log(age);
      }

      return this.filterGameList;
    },
  }
};
</script>

<style scoped>
.collection {
  width: 90%;
  margin-left: 60px;
}
.filters {
  display: flex;
}
.operator {
  display: flex;
  float: right;
  margin-right: 1%;
  margin-bottom: 10px;
}
.el-icon-edit, .el-icon-delete {
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  bottom: 10px;
}
/*.header, p{*/
/*  margin-left: 60px;*/
/*}*/
.all-btn {
  position: relative;
  float: right;
  margin-left: 10px;
  margin-right: 15px;
  background-color: #6c5dd3;
  color: #fff;
}

.collectionContent {
  width: 100%;
  margin-top: 20px;
  display: flex;
  /*justify-content: space-between;*/
  flex-wrap: wrap;
}
ul{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 -5px;
}

.content1{
  box-sizing: border-box;
  width: 23%;
  padding: 0 5px;
  height: 450px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 6px 2px 2px#e6e6e6;
}

.pic {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
}
.collectionPic1 {
  height: 45%;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
}
.layers-item-selector {
  float: right;
  margin-right: 10px;
  margin-top: 10px;
  width: 16px;
  height: 16px;
  position: absolute;
  border: solid 0px #ccc;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  cursor: pointer;
  /*below will hide the checkbox*/
  /*appearance: none;*/
  /*-webkit-appearance: none;*/
  user-select: none;
  -webkit-user-select: none;
}
.collectionInfo1 {
  height: 45%;
  overflow: hidden;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 0px 20px;
}
.collectionInfo1 div {
  overflow: hidden;
  float: left;
}
.collectionInfoBox {
  position: relative;
  height: 100%;
  width: 100%;
  display: block;
  float: left;
  margin-left: 1%;
}

.collectionInfoBox .info {
  position: relative;
  width: 100%;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
}
.score {
  overflow: hidden;
  margin-left: 1%;
  display: flex;
  flex-direction: column;
}
.score div {
  float: left;
  margin-left: 5px;
}
.scoreDetail {
  width: 16%;
  height: 1%;
  padding: 0px 5px;
  border-radius: 10px;
  background-color: #ff754c;
  font-size: 12px;
  color: #fff;
  text-align: center;
}
.moba,
.brass {
  width: 100%;
  /*margin-left: %;*/
  color: #000000;
  text-align: left;
  margin-left: 1%;
  margin-top: 0px;
}

.detail {
  height: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  float: right;
  padding: 0px 20px;
  margin-top: 2%;
}

.detail .el-button {
  background-color: #6c5dd3;
  color: #fff;
  border: 0px;
  align-items: center;
  border-radius: 10px;
}

</style>
