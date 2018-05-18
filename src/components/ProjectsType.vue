<template>
  <v-select :value="projectsShowType"
            :items="types"
            @input="changeProjectType"
            label="Projects view type"></v-select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ProjectsType',
  data() {
    return {
      types: ['All', 'Last N-s', 'Custom'],
    };
  },
  computed: mapGetters(['projectsShowType']),
  methods: mapActions(['changeProjectType']),
};
</script>

<style scoped>
</style>
