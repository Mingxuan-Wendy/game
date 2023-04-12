<template>
  <div class="newInvite">
    <div class="newInviteInfo">Send a new invite</div>
    <el-upload
      class="avatar-uploader"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<style scoped>
.newInvite {
  width: 98%;
  margin-left: 1%;
  margin-top: 20px;
}
.newInviteInfo {
  font-weight: 600;
  margin-left: 20px;
}
</style>
<style>
.newInvite .avatar-uploader {
  display: block;
  width: 98%;
  height: 100px;
  margin-left: 1%;
  line-height: 100px;
  margin-top: 20px;
  background-color: #f8f8f8;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}
.newInvite .avatar-uploader .el-upload {
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.newInvite .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.newInvite .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100%;
  height: 100px;
  line-height: 100px;
  text-align: center;
}
/* .newInvite .avatar {
  width: 178px;
  height: 178px;
  display: block;
} */
</style>
