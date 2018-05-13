<template>
  <v-app dark>
    <Login v-if="!loggedIn"
           @logIn="handleLogin" />
    <Dashboard v-if="loggedIn"
               :secret="secret"
               @logOut="handleLogOut" />
  </v-app>
</template>

<script>
import jwtDecode from 'jwt-decode';
import Login from './Login';
import Dashboard from './Dashboard';

export default {
  name: 'Root',
  components: {
    Login,
    Dashboard
  },
  data() {
    return {
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
      this.secret = '';
    },
    checkLoggin() {
      const token = localStorage.getItem('token');
      if (token) {
        const { tokenData } = jwtDecode(token);
        this.loggedIn = true;
        this.secret = tokenData.secret;
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
