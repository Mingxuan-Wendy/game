<template>
  <div class="main_container">

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
              <el-input v-model="form.username" :disabled="isDisabled"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Display Name" prop="displayName">
              <el-input v-model="form.displayName" :disabled="isDisabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Age" prop="age">
              <el-input v-model="form.age" :disabled="isDisabled"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Location" prop="location">
              <el-input v-model="form.location" :disabled="isDisabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Phone" prop="phone">
              <el-input v-model="form.phone" :disabled="isDisabled"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email" :disabled="isDisabled"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="16">
            <el-form-item label="About you" prop="about">
              <el-input type="textarea" v-model="form.about" :disabled="isDisabled"></el-input>
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
      isDisabled: true,
      labelPosition: "right",
      form: {
        username: "Patrick Cardiff",
        age: "22",
        phone: "+44 7806987674",
        displayName: "Default User",
        location: "Edinburgh",
        email: "Patrick@gmail.com",
        about: "Hello everyone. This is Patrick, an avid chess player with a passion for strategy games. I spend much of my free time honing my skills and studying chess tactics and techniques. And I love to play against other chess enthusiasts and enjoys the challenge of outmaneuvering my opponents on the board.",
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