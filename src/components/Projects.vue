<template>
  <div>
    <h1>Projects</h1>
    <ProjectsType/>
    <ProjectsList v-if="projectsShowType === 'Custom'" />
    <v-text-field v-if="projectsShowType === 'Last N-s'"
                  type="number"
                  value="5"
                  @input="changeProjectsCount"
                  label="How many projects show?"></v-text-field>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProjectsType from './ProjectsType';
import ProjectsList from './ProjectsList';

export default {
  name: 'Projects',
  computed: mapGetters(['projectsShowType']),
  methods: mapActions(['changeProjectsCount']),
  components: {
    ProjectsType,
    ProjectsList,
  },
};
</script>

<style scoped>
</style>
