<template>
  <div>
    <Login />
  </div>
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
  background: #35394a;
  font-family: 'Helvetica', 'Arial';
  color: #EA5C54;
}
</style>