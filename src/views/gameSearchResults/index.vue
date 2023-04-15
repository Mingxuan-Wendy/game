<template>
  <div class="searchResults">
      <div class="searchResultsContent">
          <ul>
              <div class="content" v-for="item in searchedGameList" :key="item['id']">
                <div class="resultPic">
                  <img :src="item['url']" width="100%" class="pic">
                </div>

                <div class="resultInfo">
                  <p>{{ item["name"] }}</p>
                  <div class="reesultInfoBox">
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
                  <el-button @click="clickDetails">Details</el-button>
                </div>
              </div>
          </ul>
      </div>
      <el-dialog :visible.sync="dialogVisible" width="60%" height="500px">
        <GameDetail></GameDetail>
      </el-dialog>
  </div>
</template>

<script>
import GameDetail from "@/components/homeContent/gameDetail.vue";
import axios from "axios";
let processedGameList;
let search_content;
export default {
  components: {
    GameDetail,
  },
  computed: {
    input_value() {
      return this.$route.params.input_value;
    },
  },
  async created() {
    try{
      processedGameList = [];
      search_content = this.input_value;
      console.log("search_content: " + search_content);
      const data = {
        query: search_content,
        search_type: 'name',
      };
      const response = await axios.post("http://127.0.0.1:8000/api/search/", data);

      var rawReturnedGameList = response.data;
      for (var i=0; i < rawReturnedGameList.length; i++) {
        var jsonObj = {};
        jsonObj["id"] = rawReturnedGameList[i]["id"];
        jsonObj["name"] = rawReturnedGameList[i]["names"];
        jsonObj["url"] = rawReturnedGameList[i]["image_url"];
        jsonObj["score"] = rawReturnedGameList[i]["avg_rating"].toFixed(1);
        jsonObj["category"] = rawReturnedGameList[i]["category"];

        jsonObj["min_time"] = rawReturnedGameList[i]["min_time"];
        jsonObj["max_time"] = rawReturnedGameList[i]["max_time"];
        jsonObj["min_players"] = rawReturnedGameList[i]["min_players"];
        jsonObj["max_players"] = rawReturnedGameList[i]["max_players"];
        jsonObj["age"] = rawReturnedGameList[i]["age"];

        // brass: "2-4 players 60-120 mins Age:14+ weight:3.9/5",
        var min_player = rawReturnedGameList[i]["min_players"];
        var max_player = rawReturnedGameList[i]["max_players"];
        var min_time = rawReturnedGameList[i]["min_time"];
        var max_time = rawReturnedGameList[i]["max_time"];
        var age = rawReturnedGameList[i]["age"];
        var weight = rawReturnedGameList[i]["weight"];
        jsonObj["brass"] = min_player + "-" + max_player + " players " + min_time + "-" + max_time + " mins Age:" + age + " weight:" + weight;

        console.log(jsonObj);
        processedGameList.push(jsonObj);
      }
      this.searchedGameList = processedGameList;
      console.log(processedGameList.length);
    } catch (error) {
      console.error("Error:", error)
    }
  },

  methods: {
    clickDetails() {
      this.dialogVisible = true;
    }
  },

  data() {
    return {
      searchedGameList: processedGameList,
      dialogVisible: false,
    };
  },
}
</script>

<style scoped>

.searchResults {
  width: 90%;
  margin-left: 5%;
  margin-top: 50px;
}

.searchResultsContent {
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

.content{
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
.resultPic {
  height: 45%;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
}
.resultInfo {
  height: 45%;
  overflow: hidden;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 0px 20px;
}
.resultInfo div {
  overflow: hidden;
  float: left;
}
.reesultInfoBox {
  position: relative;
  height: 100%;
  width: 100%;
  display: block;
  float: left;
  margin-left: 1%;
}

.reesultInfoBox .info {
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