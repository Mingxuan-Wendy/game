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
        <i class="el-icon-edit"  style="vertical-align: middle" @click="showSelect = !showSelect">
        </i>
        <i class="el-icon-delete" style="vertical-align: middle" @click="onDelete">
        </i>
      </div>

      <div class="collectionContent">
        <ul>
            <div class="content1" v-for="item in filteredGameList" :key="item.id">
              <div class="collectionPic1">
<!--                <img :src="item['url']" width="100%" class="pic">-->
                <img :src="item.url" width="100%" class="pic">
                <div v-if="showSelect" class="layers-item-selector">
                  <input type="checkbox" v-model="item.checked" @change="checkedGame(item.id, item.checked)"/>
                </div>
              </div>

              <div class="collectionInfo1">
<!--                <p>{{ item["name"] }}</p>-->
                <p>{{ item.name }}</p>
                <div class="collectionInfoBox">
                  <div class="info">
                    <div class="score">
                      <div class="scoreDetail">
                        <i class="el-icon-star-on"></i>
<!--                        {{ item["score"] }}-->
                        {{ item.score }}
                      </div>
<!--                      <div class="moba">{{ item["category"] }}</div>-->
                      <div class="moba">{{ item.moba }}</div>
                      <div class="esport">ESport</div>
                    </div>
                    <div class="brass">
<!--                      <p>{{ item["brass"] }}</p>-->
                      <p>{{ item.brass }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="detail">
                <el-button>Details</el-button>
              </div>
            </div>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
// import axios from "axios";


// let processedGameList;
// processedGameList = [];
// console.log(processedGameList.length);
export default {
  // async created() {
  //   try{
  //     const response = await axios.get("http://127.0.0.1:8000/api/user/1/games/");
  //     var rawCollectedGameList = response.data;
  //     // processedGameList = [];
  //     for (var i=0; i < rawCollectedGameList.length; i++) {
  //       var jsonObj = {};
  //       jsonObj["id"] = rawCollectedGameList[i]["id"];
  //       jsonObj["name"] = rawCollectedGameList[i]["names"];
  //       jsonObj["url"] = require(rawCollectedGameList[i]["image_url"]);
  //       jsonObj["score"] = rawCollectedGameList[i]["avg_rating"];
  //       jsonObj["category"] = rawCollectedGameList[i]["category"];
  //       // brass: "2-4 players 60-120 mins Age:14+ weight:3.9/5",
  //       var min_player = rawCollectedGameList[i]["min_players"];
  //       var max_player = rawCollectedGameList[i]["max_players"];
  //       var min_time = rawCollectedGameList[i]["min_time"];
  //       var max_time = rawCollectedGameList[i]["max_time"];
  //       var age = rawCollectedGameList[i]["age"];
  //       var weight = rawCollectedGameList[i]["weight"];
  //       jsonObj["brass"] = min_player + "-" + max_player + " players " + min_time + "-" + max_time + " mins Age:" + age + " weight:" + weight;
  //       console.log(jsonObj);
  //       processedGameList.push(jsonObj);
  //     }
  //     this.collectedGameList = processedGameList;
  //   } catch (error) {
  //     console.error("Error:", error)
  //   }
  // },
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
        {value: "option2", label: "Medical",},
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
      collectedGameList: [
        {
          id: "01",
          name: "2020 World Champs Gaming Warzone",
          url: require("../../img/invite1.png"),
          score: 9.5,
          category: "category1",
          moba: "MOBA1",
          brass: "1-4 players 20-60 mins Age:12+ weight:3.9/5",
          min_time: 20,
          max_time: 60,
          min_players: 1,
          max_players: 4,
          age: 6,
        },
        {
          id: "02",
          name: "2020 World Champs Gaming Warzone",
          url: require("../../img/invite2.png"),
          score: 8.5,
          category: "category1",
          moba: "MOBA1",
          brass: "2-4 players 20-60 mins Age:19+ weight:3.9/5",
          min_time: 20,
          max_time: 60,
          min_players: 2,
          max_players: 4,
          age: 7,
        },
        {
          id: "03",
          name: "2020 World Champs Gaming Warzone",
          url: require("../../img/invite3.png"),
          score: 8.3,
          category: "category1",
          moba: "MOBA1",
          brass: "2-4 players 80-120 mins Age:12+ weight:3.9/5",
          min_time: 80,
          max_time: 120,
          min_players: 2,
          max_players: 4,
          age: 12,
        },
        {
          id: "04",
          name: "2020 World Champs Gaming Warzone",
          url: require("../../img/invite4.png"),
          score: 8.1,
          category: "category1",
          moba: "MOBA1",
          brass: "1-2 players 80-120 mins Age:19+ weight:3.9/5",
          min_time: 80,
          max_time: 120,
          min_players: 1,
          max_players: 2,
          age: 19,
        },
        {
          id: "05",
          name: "2020 World Champs Gaming Warzone",
          url: require("../../img/invite1.png"),
          score: 9.5,
          category: "category1",
          moba: "MOBA1",
          brass: "3-6 players 80-200 mins Age:12+ weight:3.9/5",
          min_time: 80,
          max_time: 200,
          min_players: 3,
          max_players: 6,
          age: 12,
        },
        {
          id: "06",
          name: "2020 World Champs Gaming Warzone",
          url: require("../../img/invite1.png"),
          score: 9.5,
          category: "category1",
          moba: "MOBA1",
          brass: "3-6 players 80-200 mins Age:19+ weight:3.9/5",
          min_time: 80,
          max_time: 200,
          min_players: 3,
          max_players: 6,
          age: 19,
        }
      ],
      filterGameList: [],
      totalCollectedGames: 6,
      checkedGamesId: [],
      isCategorySelected: false,
      isDurationSelected: false,
      isSizeSelected: false,
      isAgeSelected: false
    };
  },

  methods: {
    checkedGame(id, checked) {
      if (checked) {
        this.checkedGamesId.push(id);
      }
    },
    onDelete() {
      this.checkedGamesId.forEach(id => {
        const index = this.collectedGameList.findIndex(game => game.id === id);
        if (index !== -1) {
          this.collectedGameList.splice(index, 1); // Remove the item from the array
        }
      });
      console.log(this.collectedGameList.length);
      this.$forceUpdate();
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
    }
  },

  computed: {
    filteredGameList() {
      if (!this.isCategorySelected && !this.isDurationSelected) {
        if(!this.isSizeSelected && !this.isAgeSelected) {
          return this.collectedGameList;
        }
      }
      // let filteredGameList = [];
      if (this.isDurationSelected) {
        let duration;
        duration = this.durations;
        if (duration === "option1") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game.max_time <= 60);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game.max_time <= 60);
          }
        }
        else if(duration === "option2") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => (game.max_time > 60 && game.max_time <= 180));
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => (game.max_time > 60 && game.max_time <= 180));
          }
        }
        else if(duration === "option3") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game.max_time > 180);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game.max_time > 180);
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
            this.filterGameList = this.filterGameList.filter(game => game.min_players === 1);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game.min_players === 1);
          }
        }
        else if(size === "option2") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game.max_players <= 4);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game.max_players <= 4);
          }
        }
        else if(size === "option3") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game.max_players > 4);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game.max_players > 4);
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
            this.filterGameList = this.filterGameList.filter(game => game.age <= 8);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game.age <= 8);
          }
        }
        else if(age === "option2") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => (game.age >= 8 && game.age <= 14));
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => (game.age >= 8 && game.age <= 14));
          }
        }
        else if(age === "option3") {
          if (this.filterGameList.length > 0) {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.filterGameList.filter(game => game.age >= 18);
          } else {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.filterGameList = this.collectedGameList.filter(game => game.age >= 18);
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
  width: 30%;
  padding: 0 5px;
  height: 400px;
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
  height: 40%;
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
  height: 40%;
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

/*.collectionFooter {*/
/*  width: 98%;*/
/*  margin-left: 1%;*/
/*  overflow: hidden;*/
/*}*/
/*.collectionFooter div {*/
/*  float: right;*/
/*}*/
/*.collectionFooter a {*/
/*  color: #58b5ff;*/
/*  cursor: pointer;*/
/*  font-weight: 700;*/
/*}*/
</style>
