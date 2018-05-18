<template>
  <div>
    <div class="input">
      <v-text-field label="Project name"
                    @keyup.enter="handleAdd"
                    v-model="newProject"></v-text-field>
      <v-btn @click="handleAdd">add</v-btn>
    </div>
    <v-chip close
            color="primary"
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
  name: 'ProjectsList',
  computed: mapGetters(['projects']),
  data() {
    return {
      newProject: '',
    };
  },
  methods: {
    ...mapActions(['removeProject', 'addProject']),
    handleAdd() {
      const { newProject } = this;
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
