<template>
  <div class="inviteMoreInfo">
    <div class="content1" v-for="(item, index) in contentInfo" :key="item.id">
      <div class="invitePic1">
        <img :src="item.imgUrl" />
      </div>
      <div class="inviteInfo1">
        <p>{{ item.title }}</p>
        <div class="inviteInfoBox">
          <el-avatar :src="item.profileUrl"></el-avatar>
          <div class="text">
            <p>{{ item.name }}</p>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div class="inviteDetail">
        <div class="point"></div>
        <span>{{ item.distance }}</span>
        <el-button @click="getCheckDetail(index)">Check</el-button>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="20%" title="inviteDetail:">
      <CheckTab :checkId="checkId"></CheckTab>
    </el-dialog>
  </div>
</template>
<script>
import CheckTab from "../../components/checkTab.vue";
export default {
  components: { CheckTab },
  data() {
    return {
      contentInfo: [
        {
          id: "1",
          imgUrl: require("../../img/invite1.png"),
          title: "2020 World Champs Gaming Warzone",
          profileUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "Tam Tran",
          content: "Call of Duty",
          distance: "0.2Km",
        },
        {
          id: "2",
          imgUrl: require("../../img/invite1.png"),
          title: "2020 World Champs Gaming Warzone",
          profileUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "Tam Tran",
          content: "Call of Duty",
          distance: "0.2Km",
        },
        {
          id: "3",
          imgUrl: require("../../img/invite1.png"),
          title: "2020 World Champs Gaming Warzone",
          profileUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "Tam Tran",
          content: "Call of Duty",
          distance: "0.2Km",
        },
        {
          id: "4",
          imgUrl: require("../../img/invite1.png"),
          title: "2020 World Champs Gaming Warzone",
          profileUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "Tam Tran",
          content: "Call of Duty",
          distance: "0.2Km",
        },
        {
          id: "5",
          imgUrl: require("../../img/invite1.png"),
          title: "2020 World Champs Gaming Warzone",
          profileUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "Tam Tran",
          content: "Call of Duty",
          distance: "0.2Km",
        },
        {
          id: "6",
          imgUrl: require("../../img/invite1.png"),
          title: "2020 World Champs Gaming Warzone",
          profileUrl:
            "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
          name: "Tam Tran",
          content: "Call of Duty",
          distance: "0.2Km",
        },
      ],
      dialogVisible: false,
      checkId: null,
    };
  },
  methods: {
    getCheckDetail(index) {
      this.checkId = index;
      this.dialogVisible = true;
    },
  },
};
</script>
<style scoped>
.inviteMoreInfo {
  width: 98%;
  margin-left: 1%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.content1 {
  width: 22%;
  height: 400px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px 3px#e6e6e6;
  margin-right: 3%;
}
.content1:last-child {
  margin-right: 0px;
}
.invitePic1 img {
  width: 100%;
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
</style>
