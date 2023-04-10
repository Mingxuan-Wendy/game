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
                <h4>Brass:Birmingham(2018)</h4>
                <p>2-4 players 60-120 mins Age:14+ weight:3.9/5</p>
              </div>
              <div class="detail">
                <el-button>Details</el-button>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        {
          id: "001",
          imgUrl: require("../../img/banner1.jpg"),
          socre: 8.6,
          moba: "MOBA1",
        },
        {
          id: "002",
          imgUrl: require("../../img/banner2.jpg"),
          socre: 8.7,
          moba: "MOBA2",
        },
        {
          id: "003",
          imgUrl: require("../../img/banner3.jpg"),
          socre: 8.8,
          moba: "MOBA3",
        },
        {
          id: "004",
          imgUrl: require("../../img/banner4.jpg"),
          socre: 8.9,
          moba: "MOBA4",
        },
      ],
    };
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
