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
        <v-btn @click="logOut"
               flat>log out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Dashboard',
  computed: mapGetters({
    secret: 'mainStore/secret'
  }),
  methods: {
    logOut() {
      this.$emit('logOut');
    }
  },
  props: ['secretKey'],
  data: function() {
    return {
      secreta: this.secretKey
    };
  }
};
</script>

<style scoped>

</style>
