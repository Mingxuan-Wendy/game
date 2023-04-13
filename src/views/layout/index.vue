<template>
  <el-container class="home-container">
    <!-- Main content area -->
    <el-container>
      <!-- Sidebar -->
      <el-aside width="200px">
        <div>
          <span>LOGO</span>
          <i class="el-icon-s-fold" style="margin-left: 60px"></i>
        </div>
        <el-menu router background-color="#fff" text-color="#000">
          <el-menu-item index="/homeContent">
            <template slot="title">
              <i class="el-icon-s-home"></i>
              <span>Home</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/collection">
            <i class="el-icon-collection"></i>
            <span slot="title">Collection</span>
          </el-menu-item>
          <el-menu-item index="/friends">
            <i class="el-icon-s-custom"></i>
            <span slot="title">Friends</span>
          </el-menu-item>
          <el-menu-item index="/invite">
            <i class="el-icon-tickets"></i>
            <span slot="title">Invite</span>
          </el-menu-item>
          <el-menu-item index="/shopping">
            <i class="el-icon-shopping-bag-1"></i>
            <span slot="title">Shopping</span>
          </el-menu-item>
          <el-menu-item index="/community">
            <i class="el-icon-chat-line-square"></i>
            <span slot="title">Community</span>
          </el-menu-item>
          <el-menu-item index="/settings">
            <i class="el-icon-setting"></i>
            <span slot="title">Settings</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- Top Navigation Bar -->
      <el-main>
        <el-header>
          <i class="el-icon-discover"> Browse </i>
          <el-input  class="el-input"
            prefix-icon="el-icon-search"
            placeholder="Search Everything"
            style="width: 18%; margin-left: -60%"
            type="input"
            v-model="input"
            @input="onInput($event)"
          ></el-input>

<!--          <el-icon v-if="isActive" class="is-active"  @click="linkToFAQ">FAQs</el-icon>-->
<!--          <el-icon v-else class="el-icon-question" @click="linkToFAQ">FAQs</el-icon>-->
          <el-icon class="el-icon-question"  @click="linkToFAQ">FAQs</el-icon>
          <i class="el-icon-bell" style="margin-right: -65%"></i>
          <i class="el-icon-user" @click="logout"></i>
        </el-header>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    logout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },

    onInput() {
      this.$forceUpdate()
      // this.replyComment = e.target.innerHTML;
    },

    linkToFAQ() {
      window.sessionStorage.clear();
      this.isActive = true;
      this.$router.push("/FAQ");
    }
  },
};
</script>

<style scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  align-items: center;
  color: #000;
  font-size: 18px;
  border-bottom: 1px solid #e6e6e6;
}
.el-icon-discover {
  float: left;
  position: relative;
  width: 10%;
  display: flex;
}
.el-icon-question, .is-active {
  /*float: right;*/
  position: absolute;
  width: 4.5%;
  margin-left: 70%;
  display: flex;
  cursor: pointer;
}
.el-icon-bell {
  position: absolute;
  width: 10%;
  margin-left: 77%;
  display: flex;
}
.el-input {
  position: relative;
}
.el-aside .el-menu {
  border: 0px;
}
.el-aside div span {
  margin-left: 60px;
  font-weight: 700;
}
.el-aside div {
  height: 60px;
  line-height: 60px;
}
.el-main {
  background-color: #fff;
  border-left: 1px solid #e6e6e6;
  padding: 0px;
  overflow: hidden;
}
.el-menu-item {
  border-radius: 10px;
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
.el-icon-question:hover {
  background-color: #6e5bd9 !important;
  color: #fff !important;
  border-radius: 10px;
}
.el-icon-question:hover i {
  color: #fff !important;
}
/*.is-active:hover {*/
/*  background-color: #6e5bd9 !important;*/
/*  color: #fff !important;*/
/*  border-radius: 10px;*/
/*}*/
/*.is-active:hover i {*/
/*  color: #fff !important;*/
/*}*/
/*.is-active{*/
/*  background-color: #6e5bd9 !important;*/
/*  color: #fff !important;*/
/*  border-radius: 5px;*/
/*}*/
/*.is-active el-icon{*/
/*  color: #fff !important;*/
/*}*/
</style>
