<template>
  <div>
    <h1>Packages</h1>
    <v-select v-model="packages"
              label="Packages..."
              chips
              tags
              solo
              prepend-icon="filter_list"
              clearable>
      <template slot="selection"
                slot-scope="data">
        <v-chip :selected="data.selected"
                close
                @input="remove(data.item)">
          <strong>{{ data.item }}</strong>&nbsp;
        </v-chip>
      </template>
    </v-select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Packages',
  data() {
    return {
      chips: ['Programming', 'Playing video games', 'Watching', 'Sleeping'],
    };
  },
  computed: mapGetters(['packages']),
  methods: {
    ...mapActions(['removePacakge']),
    remove(item) {
      this.removePackage(item);
    },
  },
};
</script>

<style scoped>
</style>
