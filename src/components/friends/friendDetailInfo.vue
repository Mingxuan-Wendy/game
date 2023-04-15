<template>
  <div class="friendsDetailBox">
    <div class="about">About</div>
    <p>{{ information[0].content }}</p>
    <div class="connection">Connection</div>
    <i class="el-icon-phone">：</i>
    <el-input
      v-model="information[0].phone"
      placeholder="please input phone"
      style="width: 180px; margin-bottom: 20px"
    ></el-input>
    <br />
    <i class="el-icon-message">：</i>
    <el-input
      v-model="information[0].email"
      placeholder="please input email"
      style="width: 180px"
    ></el-input>
    <div class="collection">Collections</div>
    <div class="collectionContent">
      <div class="box">
        <div class="pic"></div>
        <div class="info">
          <p>The Dota 2</p>
          <p>esport</p>
          <p>2.8k viewers</p>
        </div>
      </div>
      <div class="box">
        <div class="pic"></div>
        <div class="info">
          <p>The Dota 2</p>
          <p>esport</p>
          <p>2.8k viewers</p>
        </div>
      </div>
      <div class="box">
        <div class="pic"></div>
        <div class="info">
          <p>The Dota 2</p>
          <p>esport</p>
          <p>2.8k viewers</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      information: [
        {
          content:
            "Hello everyone,111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
          phone: "12312312313",
          email: "111111111@qq.com",
        },
      ],
    };
  },
};
</script>
<style scoped>
.friendsDetailBox {
  width: 97%;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
}
.about {
  width: 48px;
  border-bottom: 5px solid #3f8cff;
}
.friendsDetailBox p {
  word-break: break-all;
}
.connection {
  width: 88px;
  border-bottom: 5px solid #3f8cff;
  margin-bottom: 20px;
}
.collection {
  width: 84px;
  border-bottom: 5px solid #3f8cff;
  margin-bottom: 20px;
  margin-top: 20px;
}
.collectionContent {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
}
.box {
  width: calc((100% - 30px) / 4);
  overflow: hidden;
}
.pic {
  width: 40%;
  height: 150px;
  background: url("../../img/invite1.png") no-repeat;
  background-size: 100% 100%;
  float: left;
}
.info {
  width: 60%;
  float: left;
  height: 150px;
  background-color: #f9f9f9;
}
</style>
