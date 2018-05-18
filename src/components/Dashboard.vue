<template>
  <div>

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
    <TextEditor/>
    <Packages/>
    <Projects/>
    <Sender/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TextEditor from './TextEdtior';
import Packages from './Packages';
import Projects from './Projects';
import Sender from './Sender';

export default {
  name: 'Dashboard',
  computed: { ...mapGetters(['secret', 'jsonStorage']) },
  components: {
    TextEditor,
    Packages,
    Projects,
    Sender,
  },
  methods: {
    ...mapActions(['logOut', 'setData']),
    handleLogOut() {
      localStorage.removeItem('token');
      this.logOut();
    },
  },
  created() {
    this.$http
      .get(`${this.jsonStorage}/latest`, {
        headers: { private: 'true', 'secret-key': this.secret },
      })
      .then(res => res.body)
      .then(res => this.setData(res));
  },
};
</script>

<style lang="less">
</style>
