<template>
  <div class="sideBar">
    <el-aside width="200px">
      <el-menu background-color="#fff" text-color="#000" default-active="1">
        <div style="margin-top: 20px; margin-left: 20px">
          <span>Friends</span>
        </div>
        <el-menu-item index="1">
          <span slot="title">Your Friends</span>
        </el-menu-item>
        <div class="line"></div>
        <div style="margin-top: 20px; margin-left: 20px">
          <span>Clubs</span>
        </div>
        <el-menu-item index="2">
          <span slot="title">Your Clubs</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">Find a Club</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">Create a Club</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>
<style scoped>
.el-menu-item {
  border-radius: 10px;
  text-align: center;
}
.el-menu-item:hover {
  background-color: #6e5bd9 !important;
  color: #fff !important;
  border-radius: 10px;
}
.el-menu-item:hover i {
  color: #fff !important;
}
.el-menu-item.is-active {
  background-color: #6e5bd9 !important;
  color: #fff !important;
  border-radius: 10px;
}
.el-menu-item.is-active i {
  color: #fff !important;
}
.line {
  margin-top: 3px;
  border-bottom: 1px solid #e6e6e6;
}
</style>
