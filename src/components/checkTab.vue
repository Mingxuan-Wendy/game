<template>
  <div class="checkBox">
    <p>UserName: Tam Tran{{ checkId }}</p>
    <p>Email: {{ checkId }}********@qq.com</p>
    <p>Phone: 1730000000{{ checkId }}</p>
    <p>Start_date:2023-02-1{{ checkId }}</p>
  </div>
</template>
<script>
export default {
  props: {
    checkId: Number,
  },
};
</script>
<style scoped>
.checkBox {
  margin-top: -25px;
}
</style>
