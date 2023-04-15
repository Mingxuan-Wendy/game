<template>
  <div class="friendsContent">
    <h4>Your Friends</h4>
    <div class="friendsInfo">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Andy1" name="first">
          <FriendDetailInfo></FriendDetailInfo>
        </el-tab-pane>
        <el-tab-pane label="Andy2" name="second"></el-tab-pane>
        <el-tab-pane label="Andy3" name="third"></el-tab-pane>
        <el-tab-pane label="Andy4" name="fourth">Andy</el-tab-pane>
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
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
