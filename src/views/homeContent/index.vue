<template>
  <div>
    <TopHeader></TopHeader>
    <Invite></Invite>
    <Rank></Rank>
    <Recommended></Recommended>
  </div>
</template>
<script>
import TopHeader from "../../components/homeContent/topHeader.vue";
import Invite from "../../components/homeContent/invite.vue";
import Rank from "../../components/homeContent/rank.vue";
import Recommended from "../../components/homeContent/recommended.vue";
export default {
  name: "HomeContent",
  components: {
    TopHeader,
    Invite,
    Rank,
    Recommended,
  },
};
</script>
