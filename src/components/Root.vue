<template>
  <v-app dark>
    <Login v-if="!loggedIn" />
    <Dashboard v-if="loggedIn" />
  </v-app>
</template>

<script>
import jwtDecode from 'jwt-decode';
import { mapGetters, mapActions } from 'vuex';
import Login from './Login';
import Dashboard from './Dashboard';

export default {
  name: 'Root',
  components: {
    Login,
    Dashboard,
  },
  computed: { ...mapGetters(['loggedIn', 'secret']) },
  beforeMount() {
    this.checkLoggin();
  },
  methods: {
    ...mapActions(['logIn']),
    checkLoggin() {
      const token = localStorage.getItem('token');
      if (token) {
        const { tokenData } = jwtDecode(token);
        this.logIn(tokenData.secret);
      }
    },
  },
};
</script>

<style lang="less">
html {
  overflow: auto;
  body {
    margin: 0;
    overflow-x: hidden;
    font-family: 'Helvetica', 'Arial';
  }
}
</style>
