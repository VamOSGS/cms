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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TextEditor from './TextEdtior';

export default {
  name: 'Dashboard',
  computed: { ...mapGetters(['secret']) },
  components: {
    TextEditor,
  },
  data() {
    return {
      jsonStorage: 'https://api.jsonbin.io/b/5af6da0fc83f6d4cc7349388/latest',
    };
  },
  methods: {
    ...mapActions(['logOut', 'setData']),
    handleLogOut() {
      localStorage.removeItem('token');
      this.logOut();
    },
  },
  beforeMount() {
    this.$http
      .get(this.jsonStorage, {
        headers: { private: 'true', 'secret-key': this.secret },
      })
      .then(res => res.body)
      .then(res => this.setData(res));
  },
};
</script>

<style scoped>
</style>
