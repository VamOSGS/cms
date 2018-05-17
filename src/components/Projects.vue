<template>
  <div>
    <h1>Projects</h1>
    <div>
      <v-text-field label="Project name"
                    @keyup.enter="handleAdd"
                    v-model="newProject"></v-text-field>
      <v-btn @click="handleAdd">add</v-btn>
    </div>
    <v-chip close
            color="teal"
            v-for="(project, key) in projects"
            :key="key"
            @input="removeProject(project)"
            text-color="white">
      <v-avatar>
        <v-icon>check_circle</v-icon>
      </v-avatar>
      {{project}}
    </v-chip>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Projects',
  computed: mapGetters(['projects']),
    data() {
    return {
      newProject: '',
    };
  },
  methods: {
    ...mapActions(['removeProject', 'addProject']),
    handleAdd() {
      const {newProject} = this;
      if (newProject) {
        this.addProject(newProject);
        this.newProject = '';
      }
    },
  },
};
</script>

<style scoped>
</style>
