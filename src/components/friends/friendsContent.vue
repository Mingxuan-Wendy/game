<template>
  <div class="friendsContent">
    <h4>Your Friends</h4>
    <div class="friendsInfo">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Andy1" name="first">
          <FriendDetailInfo :friendIndex="friendIndex"></FriendDetailInfo>
        </el-tab-pane>
        <el-tab-pane label="Andy2" name="second">
          <FriendDetailInfo :friendIndex="friendIndex"></FriendDetailInfo>
        </el-tab-pane>
        <el-tab-pane label="Andy3" name="third">
          <FriendDetailInfo :friendIndex="friendIndex"></FriendDetailInfo>
        </el-tab-pane>
        <el-tab-pane label="Andy4" name="fourth">
          <FriendDetailInfo :friendIndex="friendIndex"></FriendDetailInfo>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import FriendDetailInfo from "./friendDetailInfo.vue";
export default {
  components: {
    FriendDetailInfo,
  },
  data() {
    return {
      activeName: "first",
      friendIndex: "0",
    };
  },
  methods: {
    handleClick(event) {
      this.friendIndex = event.index;
    },
  },
};
</script>
<style scoped>
.friendsContent {
  width: 90%;
  border-left: 1px solid #e6e6e6;
  padding-left: 20px;
}
.friendsInfo {
  width: 98%;
  padding: 20px 1%;
  background-color: #ededed;
  border-radius: 20px;
}
</style>
