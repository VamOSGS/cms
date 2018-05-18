<template>
  <div>
    <v-toolbar class="header">
      <v-toolbar-side-icon @click="show"></v-toolbar-side-icon>
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
    <v-bottom-sheet v-model="sheet">
      <v-list>
        <v-subheader></v-subheader>
        <v-list-tile @click="sheet = false">
          <v-list-tile-title @click="handleLogOut">Log Out</v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-list>
        <v-list-tile href="https://vamosgs.github.io/"
                     target="_blank"
                     @click="sheet = false">
          View
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      sheet: false,
    };
  },
  methods: {
    ...mapActions(['logOut']),
    handleLogOut() {
      localStorage.removeItem('token');
      this.logOut();
    },
    show() {
      if (window.innerWidth <= 960) {
        this.sheet = !this.sheet;
      } else {
        this.sheet = false;
      }
    },
  },
};
</script>

<style lang="less">
.header {
  position: fixed;
  z-index: 204;
  top: 0;
  left: 0;
}
</style>
