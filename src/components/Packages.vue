<template>
  <div>
    <h1 class="packages">Packages</h1>
    <div class="input">
      <v-text-field label="Package name"
                    @keyup.enter="handleAdd"
                    v-model="newPackage"></v-text-field>
      <v-btn @click="handleAdd">add</v-btn>
    </div>
    <v-chip close
            color="teal"
            @input="removePkg(pkg)"
            v-for="(pkg, key) in packages"
            :key="key"
            text-color="white">
      <v-avatar>
        <v-icon>check_circle</v-icon>
      </v-avatar>
      {{pkg}}
    </v-chip>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'Packages',
  computed: mapGetters(['packages']),
  data() {
    return {
      newPackage: '',
    };
  },
  methods: {
    ...mapActions(['removePkg', 'addPkg']),
    handleAdd() {
      if (this.newPackage) {
        this.addPkg(this.newPackage);
        this.newPackage = '';
      }
    },
  },
};
</script>

<style lang="less">
.packages {
  margin-top: 25px;
}
</style>
