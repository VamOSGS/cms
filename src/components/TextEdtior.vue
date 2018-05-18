<template>
  <div>
    <h1>Text values</h1>
    <form>
      <div :key="key"
           v-for="(field, key) in Object.keys(textData)">
        <v-text-field :label="field | capitalize"
                      @keyup="(e) => updateText({text: e.target.value, field})"
                      v-model="textData[field]"></v-text-field>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TextEdtior',
  computed: mapGetters(['textData']),
  methods: {
    ...mapActions(['updateText']),
  },
  filters: {
    capitalize: function(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>
</style>
