<template>
  <div class="friendsBox">
    <LeftSideBar></LeftSideBar>
    <div class="friendsContent"><FriendsContent></FriendsContent></div>
  </div>
</template>
<script>
import LeftSideBar from "../../components/friends/leftSideBar.vue";
import FriendsContent from "../../components/friends/friendsContent.vue";
export default {
  components: {
    LeftSideBar,
    FriendsContent,
  },
};
</script>
<style scoped>
.friendsBox {
  display: flex;
  justify-content: flex-start;
}
.friendsContent {
  margin-left: 3%;
}
</style>
