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
        <el-select v-model="categories" placeholder="Category">
          <el-option
            v-for="item in categaryOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="durations" placeholder="Duration">
          <el-option
            v-for="item in durationOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="sizes" placeholder="Size">
          <el-option
            v-for="item in sizeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="wishLists" placeholder="Wishlist">
          <el-option
            v-for="item in wishListOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="haves" placeholder="Have">
          <el-option
            v-for="item in haveOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <p>You totally added {{ totalCollectedGames }} games</p>

      <div class="filter"></div>

      <div class="recommendContent">
        <div class="content1">
          <div class="recommendPic1"></div>
          <div class="recommendInfo1">
            <p>2020 World Champs Gaming Warzone</p>
            <div class="recommendInfoBox">
              <div class="info">
                <div class="score">
                  <div class="scoreDetail">
                    <i class="el-icon-star-on"></i>
                    {{ 9.5 }}
                  </div>
                  <div class="moba">{{ "MOBA1" }}</div>
                  <div class="esport">ESport</div>
                </div>
                <div class="brass">
                  <p>2-4 players 60-120 mins Age:14+ weight:3.9/5</p>
                </div>
              </div>
            </div>
          </div>
          <div class="detail">
            <el-button>Details</el-button>
          </div>
        </div>

        <div class="content2">
          <div class="recommendPic1"></div>
          <div class="recommendInfo1">
            <p>2020 World Champs Gaming Warzone</p>
            <div class="recommendInfoBox">
              <div class="info">
                <div class="score">
                  <div class="scoreDetail">
                    <i class="el-icon-star-on"></i>
                    {{ 8.5 }}
                  </div>
                  <div class="moba">{{ "MOBA1" }}</div>
                  <div class="esport">ESport</div>
                </div>
                <div class="brass">
                  <p>2-4 players 60-120 mins Age:14+ weight:3.9/5</p>
                </div>
              </div>
            </div>
          </div>
          <div class="detail">
            <el-button>Details</el-button>
          </div>
        </div>

        <div class="content3">
          <div class="recommendPic1"></div>
          <div class="recommendInfo1">
            <p>2020 World Champs Gaming Warzone</p>
            <div class="recommendInfoBox">
              <div class="info">
                <div class="score">
                  <div class="scoreDetail">
                    <i class="el-icon-star-on"></i>
                    {{ 8.3 }}
                  </div>
                  <div class="moba">{{ "MOBA1" }}</div>
                  <div class="esport">ESport</div>
                </div>
                <div class="brass">
                  <p>2-4 players 60-120 mins Age:14+ weight:3.9/5</p>
                </div>
              </div>
            </div>
          </div>
          <div class="detail">
            <el-button>Details</el-button>
          </div>
        </div>

        <div class="content4">
          <div class="recommendPic1"></div>
          <div class="recommendInfo1">
            <p>2020 World Champs Gaming Warzone</p>
            <div class="recommendInfoBox">
              <div class="info">
                <div class="score">
                  <div class="scoreDetail">
                    <i class="el-icon-star-on"></i>
                    {{ 8.3 }}
                  </div>
                  <div class="moba">{{ "MOBA1" }}</div>
                  <div class="esport">ESport</div>
                </div>
                <div class="brass">
                  <p>2-4 players 60-120 mins Age:14+ weight:3.9/5</p>
                </div>
              </div>
            </div>
          </div>
          <div class="detail">
            <el-button>Details</el-button>
          </div>
        </div>
      </div>
      <div class="recommendFooter">
        <div>
          <a>More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "XXX",
      categories: "Category",
      categaryOptions: [
        {
          value: "option1",
          label: "Adventure",
        },
        {
          value: "option2",
          label: "Medical",
        },
        {
          value: "option3",
          label: "Card Game",
        },
      ],
      totalCollectedGames: 16,
    };
  },
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

.recommendContent {
  width: 100%;
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
/* 当不止一行时这么设置 */
/* .content4:nth-of-type(4n + 0) {
  margin-right: 0;
} */
.recommendPic1 {
  height: 40%;
  background: url("../../img/invite1.png") no-repeat;
  background-size: 100% 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.content2 .recommendPic1 {
  background: url("../../img/invite2.png") no-repeat;
  background-size: 100% 100%;
}
.content3 .recommendPic1 {
  background: url("../../img/invite3.png") no-repeat;
  background-size: 100% 100%;
}
.content4 .recommendPic1 {
  background: url("../../img/invite4.png") no-repeat;
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
