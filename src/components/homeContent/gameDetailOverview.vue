<template>
  <div class="overviewInfo">
    <div class="description">
      <h4>Description</h4>
      Brass:11111111111111111111111111111111111111111111111
      1111111111111111111111111111111111111111111111111111111
      1111111111111111111111111111111111111111111111111111
      111111111111111111111111111111111111111111111111111
      1111111111111111111111111111111111111111111111111
      1111111111111111111111111 11111111111111111111111 11111111111111111111
      11111111111111111 11111111111111111111111111111111111111111
    </div>
    <div class="link">
      <router-link
        to="/FAQ"
        class="el-icon-link"
        style="color: #005bca; text-decoration: none"
        >Brass:Birmingham - Official Roxley page</router-link
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
              <span>Own:</span>
              <span>51K</span>
            </div>
            <div>
              <span>Own:</span>
              <span>51K</span>
            </div>
            <div>
              <span>Own:<i class="el-icon-user-solid"></i></span>
              <span>51K</span>
            </div>
            <div style="margin-bottom: 0px">
              <span>See All Status</span>
            </div>
            <div style="margin-bottom: 0px">
              <span>BGG Item ID:224517</span>
            </div>
          </div>
          <div class="rightDetail">
            <div>
              <span>Want In Trade:<i class="el-icon-user-solid"></i></span>
              <span>1,657</span>
            </div>
            <div>
              <span>Want In Trade:<i class="el-icon-user-solid"></i></span>
              <span>1,657</span>
            </div>
            <div>
              <span>Want In Trade:</span>
              <span>1,657</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
}
.detailInfo .leftDetail {
  float: left;
  width: 30%;
}
.detailInfo .rightDetail {
  float: left;
  width: 40%;
  margin-left: 15%;
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
