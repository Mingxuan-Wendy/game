<template>
  <div class="home">
    <Login />
    <!-- <Account /> -->
  </div>
</template>

<script>
import Login from '@/views/Login'
import Account from '@/views/Account'
export default {
  name: 'Home',
  components:{
    Login,
    Account
  },
}
</script>

<style lang="scss" scoped>
</style>
