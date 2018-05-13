<template>
  <v-app dark>
    <Login v-if="!loggedIn"
           @logIn="handleLogin" />
    <Dashboard v-if="loggedIn"
               @logOut="handleLogOut" />
  </v-app>
</template>

<script>
import Login from './Login';
import Dashboard from './Dashboard';

export default {
  name: 'root',
  components: {
    Login,
    Dashboard
  },
  data() {
    return {
      msg: 'Welcome to Vue.js',
      loggedIn: false,
      secret: ''
    };
  },
  beforeMount() {
    this.checkLoggin();
  },
  methods: {
    handleLogin({ token, secret }) {
      localStorage.setItem('token', token);
      this.secret = secret;
      this.loggedIn = true;
    },
    handleLogOut() {
      localStorage.removeItem('token');
      this.loggedIn = false;
    },
    checkLoggin() {
      const token = localStorage.getItem('token');
      if (token) {
        this.loggedIn = true;
      }
    }
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
