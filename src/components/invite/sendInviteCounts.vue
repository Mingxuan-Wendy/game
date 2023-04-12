<template>
  <div class="sendInviteCount">
    <div class="sendInviteInfo">You totally sent 4 invites</div>
    <div class="sendInviteSelect">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <div class="icons">
        <i class="el-icon-delete-solid">Move</i>
        <i class="el-icon-delete-solid">Delete</i>
        <i class="el-icon-s-order"></i>
        <i class="el-icon-menu"></i>
      </div>
    </div>
    <div class="sendInviteCarousel">
      <el-carousel height="400px" style="margin-top: 20px" type="card">
        <el-carousel-item
          class="el-car-item"
          v-for="(item, index) in dataList"
          :key="index"
        >
          <div class="content1">
            <div class="invitePic1"></div>
            <div class="inviteInfo1">
              <p>{{ item.title }}</p>
              <div class="inviteInfoBox">
                <el-avatar :src="item.imgUrl"></el-avatar>
                <div class="text">
                  <p>{{ item.title1 }}</p>
                  <p>{{ item.title2 }}</p>
                </div>
              </div>
            </div>
            <div class="inviteDetail">
              <div class="point"></div>
              <span>{{ item.distance }}</span>
              <el-button>Check</el-button>
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
      options: [
        {
          value: "选项1",
          label: "Date uploaded1",
        },
        {
          value: "选项2",
          label: "Date uploaded2",
        },
        {
          value: "选项3",
          label: "Date uploaded3",
        },
        {
          value: "选项4",
          label: "Date uploaded4",
        },
        {
          value: "选项5",
          label: "Date uploaded5",
        },
      ],
      value: "Date uploaded",
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
    };
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
.sendInviteCarousel {
  width: 98%;
  margin-left: 1%;
  margin-top: 20px;
}
/* .el-carousel__item .content1 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  } */
.content1 {
  width: 100%;
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
  margin-left: 30%;
  transform: translateX(-50%);
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
  margin-left: 1%;
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
</style>
<style>
.el-carousel__item--card {
  width: 25%;
  margin: 0;
}
</style>
