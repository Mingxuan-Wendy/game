<template>
  <div>
    <TopHeader></TopHeader>
    <Invite></Invite>
    <Rank></Rank>
  </div>
</template>
<script>
import TopHeader from "../../components/homeContent/topHeader.vue";
import Invite from "../../components/homeContent/invite.vue";
import Rank from "../../components/homeContent/rank.vue";
export default {
  name: "HomeContent",
  components: {
    TopHeader,
    Invite,
    Rank,
  },
};
</script>
