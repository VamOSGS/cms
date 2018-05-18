<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
      vamosgs.github.io - cms
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn href="https://vamosgs.github.io/"
             target="_blank"
             flat>
        View
      </v-btn>
      <v-btn @click="handleLogOut"
             flat>log out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  methods: {
    ...mapActions(['logOut']),
    handleLogOut() {
      localStorage.removeItem('token');
      this.logOut();
    },
  },
};
</script>

<style lang="less">
.header {
  position: absolute;
  z-index: 204;
  top: 0;
  left: 0;
}
</style>
