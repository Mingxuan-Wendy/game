<template>
  <div class="register">
    <div class="userName">
      <p>User name: </p>
      <el-input class="input" v-model="inputUserName" placeholder="Please input user name you want to use for register."></el-input>
    </div>
    <div class="email">
      <p>Email: </p>
      <el-input class="input" v-model="email" placeholder="Please input your email address."></el-input>
    </div>
    <div class="password">
      <p>Password:</p>
      <el-input class="input" type="password" v-model="inputPassword1" placeholder="Please set your user password here."></el-input>
    </div>
    <div class="password">
      <p>Confirm Password:</p>
      <el-input class="input" type="password" v-model="inputPassword2" placeholder="Please confirm your password here."></el-input>
    </div>
    <div class="submit">
    <el-button @click="submitRegister">Submit</el-button>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      inputUserName: '',
      inputPassword1: '',
      inputPassword2: ''
    }
  },
  methods: {
    submitRegister() {

    },
  },
}
</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
}
.userName, .email {
  display: flex;
}
.userName p {
  width: 15%;
}
.email p {
  width: 15%;
}
.password p {
  width: 15%;
}
.password {
  display: flex;
}
.input {
  margin-left: 20px;
}
.submit {
  float: right;
  margin-left: 90%;
}
</style>