<template>
  <v-app dark>
    <Login />
  </v-app >
</template>

<script>
import Login from './Login';

export default {
  name: 'root',
  components: {
    Login
  },
  data() {
    return {
      msg: 'Welcome to Vue.js'
    };
  }
};
</script>

<style lang="less">
body {
  margin: 0;
  overflow-x: hidden;
  font-family: 'Helvetica', 'Arial';
}
</style>