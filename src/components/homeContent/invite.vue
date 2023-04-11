<template>
  <div class="invite">
    <div class="inviteHeader">
      <div class="inviteName">New Invite</div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <div class="inviteContent">
      <div class="content1">
        <div class="invitePic1"></div>
        <div class="inviteInfo1">
          <p>2020 World Champs Gaming Warzone</p>
          <div class="inviteInfoBox">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <div class="text">
              <p>Tam Tran</p>
              <p>Call of Duty</p>
            </div>
          </div>
        </div>
        <div class="inviteDetail">
          <div class="point"></div>
          <span>0.2km</span>
          <el-button>Check</el-button>
        </div>
      </div>
      <div class="content2">
        <div class="invitePic1"></div>
        <div class="inviteInfo1">
          <p>2020 World Champs Gaming Warzone</p>
          <div class="inviteInfoBox">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <div class="text">
              <p>Tam Tran</p>
              <p>Call of Duty</p>
            </div>
          </div>
        </div>
        <div class="inviteDetail">
          <div class="point"></div>
          <span>0.2km</span>
          <el-button>Check</el-button>
        </div>
      </div>
      <div class="content3">
        <div class="invitePic1"></div>
        <div class="inviteInfo1">
          <p>2020 World Champs Gaming Warzone</p>
          <div class="inviteInfoBox">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <div class="text">
              <p>Tam Tran</p>
              <p>Call of Duty</p>
            </div>
          </div>
        </div>
        <div class="inviteDetail">
          <div class="point"></div>
          <span>0.2km</span>
          <el-button>Check</el-button>
        </div>
      </div>
      <div class="content4">
        <div class="invitePic1"></div>
        <div class="inviteInfo1">
          <p>2020 World Champs Gaming Warzone</p>
          <div class="inviteInfoBox">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <div class="text">
              <p>Tam Tran</p>
              <p>Call of Duty</p>
            </div>
          </div>
        </div>
        <div class="inviteDetail">
          <div class="point"></div>
          <span>0.2km</span>
          <el-button>Check</el-button>
        </div>
      </div>
    </div>
    <div class="inviteFooter">
      <div>
        <a>More</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "Diatance1",
        },
        {
          value: "选项2",
          label: "Diatance2",
        },
        {
          value: "选项3",
          label: "Diatance3",
        },
        {
          value: "选项4",
          label: "Diatance4",
        },
        {
          value: "选项5",
          label: "Diatance5",
        },
      ],
      value: "Diatance",
    };
  },
};
</script>
<style scoped>
.invite {
  width: 98%;
  margin-left: 1%;
  margin-top: 40px;
}
.inviteHeader {
  overflow: hidden;
}
.inviteName {
  float: left;
  margin-left: 20px;
  font-weight: 600;
  font-size: 14px;
}
.el-select {
  float: right;
  margin-right: 20px;
}
.inviteContent {
  width: 98%;
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
  box-shadow: 6px 2px 2px#e6e6e6;
}
/* 当不止一行时这么设置 */
/* .content4:nth-of-type(4n + 0) {
  margin-right: 0;
} */
.invitePic1 {
  height: 40%;
  background: url("../../img/invite1.png") no-repeat;
  background-size: 100% 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.content2 .invitePic1 {
  background: url("../../img/invite2.png") no-repeat;
  background-size: 100% 100%;
}
.content3 .invitePic1 {
  background: url("../../img/invite3.png") no-repeat;
  background-size: 100% 100%;
}
.content4 .invitePic1 {
  background: url("../../img/invite4.png") no-repeat;
  background-size: 100% 100%;
}
.inviteInfo1 {
  height: 40%;
  overflow: hidden;
  text-align: center;
  border-bottom: 1px solid #e6e6e6;
  padding: 0px 20px;
}
.inviteInfo1 div {
  overflow: hidden;
  float: left;
}
.inviteInfoBox {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.inviteInfoBox .el-avatar--circle {
  display: block;
  float: left;
}
.inviteInfoBox .text {
  float: left;
  margin-left: 20px;
}
.inviteDetail {
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}
.point {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #0049c6;
}
.inviteDetail .el-button {
  background-color: #3f8cff;
  color: #fff;
  border: 0px;
  border-radius: 10px;
}
.inviteDetail span {
  margin-left: -155px;
}
.inviteFooter {
  width: 98%;
  margin-left: 1%;
  overflow: hidden;
}
.inviteFooter div {
  float: right;
}
.inviteFooter a {
  color: #58b5ff;
  cursor: pointer;
  font-weight: 700;
}
</style>
