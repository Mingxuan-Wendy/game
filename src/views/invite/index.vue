<template>
  <div>
<!--    <SendNewInvite></SendNewInvite>-->
    <SendInviteCounts></SendInviteCounts>
  </div>
</template>
<script>
import SendNewInvite from "../../components/invite/sendNewInvite";
import SendInviteCounts from "../../components/invite/sendInviteCounts.vue";
export default {
  components: {
    SendNewInvite,
    SendInviteCounts,
  },
};
</script>
