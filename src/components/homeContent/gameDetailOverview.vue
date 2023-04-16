<template>
  <div class="overviewInfo">
    <div class="description">
      <h4>{{ this.gameDetailData.name }}</h4>
      <p>Year: {{ this.gameDetailData.year }}</p>
      <p>Category: {{ this.gameDetailData.category }}</p>
      <p>Info: {{ this.gameDetailData.brass }}</p>
    </div>
    <div class="link">
      <a
        :href="this.gameDetailData.bgg_url"
        class="el-icon-link"
        style="color: #005bca; text-decoration: none"
        target="_blank"
        rel="noopener noreferrer"
        >Link to BoardGameGeek</a
      >
    </div>
    <div class="gameDetailFooter">
      <div class="leftBox">
        <p>AdDDITIONAL SUGGESTIONS</p>
        <p>Language Dependence <i class="el-icon-question"></i></p>
        <p>No necessary in-game text <i class="el-icon-s-data"></i></p>
      </div>
      <div class="rightBox">
        <h4 style="margin-top: 0px">Community stats</h4>
        <div class="detailInfo">
          <div class="leftDetail">
            <div>
              <span>Owned:<i class="el-icon-user-solid"></i></span>
              <span>{{ this.gameDetailData.owned }}</span>
            </div>
            <div>
              <span>Designer: {{ this.gameDetailData.designer }}</span>
            </div>
          </div>
          <div class="rightDetail">
            <div>
              <span>Number of votes:<i class="el-icon-user-solid"></i></span>
              <span>{{ this.gameDetailData.num_votes }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    gameDetailData: {
      type: Object,
      required: true,
    }
  },
};
</script>


<style scoped>
.link {
  margin-top: 20px;
}
.gameDetailFooter {
  margin-top: 20px;
  overflow: hidden;
}
.gameDetailFooter .leftBox {
  float: left;
  width: 40%;
}
.gameDetailFooter .rightBox {
  float: left;
  width: 40%;
  border-left: 1px solid #d2d4d7;
  padding-left: 20px;
}
.detailInfo {
  overflow: hidden;
  width: 100%;
}
.detailInfo .leftDetail {
  float: left;
  width: 45%;
}
.detailInfo .rightDetail {
  float: right;
  width: 45%;
  margin-left: 10%;
}
.leftDetail div {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.rightDetail div {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
