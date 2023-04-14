<template>
  <div class="comments">
    <h4>Ratings & comments</h4>
    <div class="commentBox">
      <div class="socre">
        <div class="ratings">
          Your rating:
          <el-rate v-model="value1" style="display: inline-block"></el-rate>
        </div>
        <div class="comment">
          Your comment:
          <el-input v-model="input" placeholder="请输入评论..."></el-input>
        </div>
      </div>
      <el-button type="primary">Submit</el-button>
    </div>
    <div class="ratings">
      <ul>
        <li>
          <el-avatar
            shape="square"
            size="small"
            src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
          ></el-avatar>
          Andy Feb 2023
        </li>
        <li>
          <el-avatar
            shape="square"
            size="small"
            src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
          ></el-avatar>
          Andy Feb 2023
        </li>
        <li>
          <el-avatar
            shape="square"
            size="small"
            src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
          ></el-avatar>
          Andy Feb 2023
        </li>
        <li>
          <el-avatar
            shape="square"
            size="small"
            src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
          ></el-avatar>
          Andy Feb 2023
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: null,
      input: "",
    };
  },
};
</script>
<style scoped>
.commentBox {
  display: flex;
  align-items: flex-end;
}
.socre {
  width: 70%;
  background-color: #f0f0f2;
  border-radius: 20px;
  margin-right: 20px;
}
.ratings {
  padding: 20px;
}
.comment {
  padding: 20px;
  padding-top: 0px;
}
.ratings ul {
  margin: 0;
  padding: 0;
}
.ratings li {
  width: 60%;
  height: 30px;
  list-style: none;
  margin-bottom: 40px;
  background-color: #f0f0f2;
}
.ratings li span {
  vertical-align: middle;
}
</style>
