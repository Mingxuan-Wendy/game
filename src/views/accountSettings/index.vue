<template>
  <div class="main_container">
    <div class="header">
      <div class="title">Account Settings</div>
      <div class="btns">
        <el-button type="success">Your Profile</el-button>
        <el-button type="primary">Password</el-button>
        <el-button type="primary">Data Export</el-button>
      </div>
      <div class="avatar">
        <p class="avatar_title">Your Avatar</p>
        <div class="m-avatar">
          <div class="l-avatar"></div>
          <div class="r-avatar">
            <el-button type="success">Upload New</el-button>
            <el-button type="primary">Delete Avatar</el-button>
            <p class="r-avatar-p">asdadas adsasd wefas fasfd a</p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <!-- <el-row> -->
      <!-- <el-col :span="24"> -->
      <el-form
        :label-position="labelPosition"
        label-width="110px"
        :model="form"
        ref="setting_form"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="Your FullName" prop="fullName">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Display Name" prop="displayName">
              <el-input v-model="form.displayName"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Age" prop="age">
              <el-input v-model="form.age"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Location" prop="location">
              <el-input v-model="form.location"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Phone" prop="phone">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="About you" prop="about">
              <el-input type="textarea" v-model="form.about"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "right",
      form: {
        username: "",
        age: "",
        phone: "",
        displayName: "",
        location: "",
        email: "",
        about:''
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.main_container {
  margin: 30px;
}
.title {
  text-align: left;
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: "Helvetica Neue";
  font-weight: 700;
}
.btns {
  text-align: left;
}

.avatar {
  text-align: left;
  font-size: small;
  color: rgb(96, 98, 102);
  .m-avatar {
    // width: 600px;
    height: 80px;
    // background-color: aquamarine;
  }
  .avatar_title {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .l-avatar {
    width: 80px;
    height: 80px;
    background-color: brown;
    float: left;
  }
  .r-avatar {
    padding-top: 10px;
    text-align: left;
    float: left;
    margin-left: 20px;
    .r-avatar-p {
      margin-top: 10px;
    }
  }
}

.footer {
  margin-top: 20px;
  margin-left: -5px;
  
}

.el-textarea{
    height:100px;
    :deep(.el-textarea__inner){
        height: 100px;
    }
}
</style>