<template>
  <div>
    <h1>Projects</h1>
    <v-chip close
            color="teal"
            v-for="(project, key) in projects"
            :key="key"
            text-color="white">
      <v-avatar>
        <v-icon>check_circle</v-icon>
      </v-avatar>
      {{project}}
    </v-chip>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Projects',
  computed: mapGetters(['projects']),
};
</script>

<style scoped>
</style>
