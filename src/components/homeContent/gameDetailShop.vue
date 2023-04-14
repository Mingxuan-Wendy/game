<template>
  <div class="shop">
    <div class="store">
      <h4>Store</h4>
      <div class="storeBox">
        <div class="content">
          <p>The Dice Tower</p>
          <h4>Address:</h4>
          <p>11111111111111111111111111111</p>
          <div style="display: flex; align-items: flex-end">
            <div class="time">
              <h4>Time:</h4>
              <p>111111111111111</p>
              <p>11111111111</p>
            </div>
            <el-button>Detail</el-button>
          </div>
        </div>
        <div class="content">
          <p>The Dice Tower</p>
          <h4>Address:</h4>
          <p>11111111111111111111111111111</p>
          <div style="display: flex; align-items: flex-end">
            <div class="time">
              <h4>Time:</h4>
              <p>111111111111111</p>
              <p>11111111111</p>
            </div>
            <el-button>Detail</el-button>
          </div>
        </div>
        <div class="content">
          <p>The Dice Tower</p>
          <h4>Address:</h4>
          <p>11111111111111111111111111111</p>
          <div style="display: flex; align-items: flex-end">
            <div class="time">
              <h4>Time:</h4>
              <p>111111111111111</p>
              <p>11111111111</p>
            </div>
            <el-button>Detail</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="online">
      <h4>Online shopping</h4>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="trend">
      <h4>Price trend</h4>
      <priceTrend></priceTrend>
    </div>
  </div>
</template>
<script>
import priceTrend from "./priceTrend.vue";
export default {
  components: {
    priceTrend,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.shop {
  display: flex;
  justify-content: space-between;
}
.content {
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 20px;
  padding: 10px 20px;
  margin-bottom: 20px;
}
.content h4,
.content p {
  margin: 0;
  padding: 0;
  margin-bottom: 5px;
}
.time {
  float: left;
  margin-right: 40px;
}
.online div {
  width: 250px;
  height: 60px;
  margin-bottom: 20px;
  background: url("../../img/invite1.png") no-repeat;
  background-size: 100% 100%;
}
.trend {
  width: 40%;
}
</style>
