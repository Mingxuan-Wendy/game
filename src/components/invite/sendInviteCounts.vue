<template>
  <div class="sendInviteCount">
    <div class="sendInviteInfo">You totally sent 4 invites</div>

    <div class="sendInviteContent">
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
          <el-button @click="getCheckDetail(1)">Check</el-button>
        </div>
      </div>
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
          <el-button @click="getCheckDetail(2)">Check</el-button>
        </div>
      </div>
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
          <el-button @click="getCheckDetail(3)">Check</el-button>
        </div>
      </div>
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
          <el-button @click="getCheckDetail(4)">Check</el-button>
        </div>
      </div>
    </div>
    <div class="more" @click="getDialogVisible()">
      <div>More</div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="80%">
      <MoreTab></MoreTab>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible1" width="20%" title="inviteDetail:">
      <CheckTab :checkId="checkId"></CheckTab>
    </el-dialog>
  </div>
</template>
<script>
import MoreTab from "./moreTab.vue";
import CheckTab from "../../components/checkTab.vue";
export default {
  components: { MoreTab, CheckTab },
  data() {
    return {
      imgList: [
        {
          id: "001",
          imgUrl: require("../../img/banner1.jpg"),
        },
        {
          id: "002",
          imgUrl: require("../../img/banner2.jpg"),
        },
        {
          id: "003",
          imgUrl: require("../../img/banner3.jpg"),
        },
        {
          id: "004",
          imgUrl: require("../../img/banner4.jpg"),
        },
      ],
      dataList: [
        {
          id: "001",
          title: "2020 World Champs Gaming Warzone1",
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title1: "Tam Tran1",
          title2: "Call of Duty1",
          distance: "0.1km",
        },
        {
          id: "002",
          title: "2020 World Champs Gaming Warzone2",
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title1: "Tam Tran2",
          title2: "Call of Duty2",
          distance: "0.2km",
        },
        {
          id: "003",
          title: "2020 World Champs Gaming Warzone3",
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title1: "Tam Tran3",
          title2: "Call of Duty3",
          distance: "0.3km",
        },
        {
          id: "004",
          title: "2020 World Champs Gaming Warzone4",
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title1: "Tam Tran4",
          title2: "Call of Duty4",
          distance: "0.4km",
        },
        {
          id: "005",
          title: "2020 World Champs Gaming Warzone5",
          imgUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          title1: "Tam Tran5",
          title2: "Call of Duty5",
          distance: "0.5km",
        },
      ],
      dialogVisible: false,
      dialogVisible1: false,
      checkId: null,
    };
  },
  methods: {
    getDialogVisible() {
      this.dialogVisible = true;
    },
    getCheckDetail(index) {
      this.checkId = index;
      this.dialogVisible1 = true;
    },
  },
};
</script>
<style scoped>
.sendInviteCount {
  width: 98%;
  margin-left: 1%;
  margin-top: 40px;
}
.sendInviteInfo {
  margin-left: 20px;
  font-weight: 600;
}
.sendInviteSelect {
  width: 98%;
  margin-left: 1%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.icons {
  font-size: 16px;
}
.icons i {
  margin-left: 20px;
}
.sendInviteContent {
  width: 98%;
  margin-left: 1%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.content1 {
  width: calc((100% - 300px) / 4);
  height: 400px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px 3px#e6e6e6;
}
.invitePic1 {
  height: 40%;
  background: url("../../img/invite1.png") no-repeat;
  background-size: 100% 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
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
  margin-right: 10%;
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
.inviteFooter div {
  float: right;
}
.inviteFooter a {
  color: #58b5ff;
  cursor: pointer;
  font-weight: 700;
}
.more {
  width: 98%;
  margin-left: 1%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
  color: #58b5ff;
  overflow: hidden;
  cursor: pointer;
}
.more div {
  float: right;
}
</style>
