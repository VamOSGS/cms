<template>
  <div>
    <h1>Text values</h1>
    <form>
      <div :key="key"
           v-for="(field, key) in Object.keys(textData)">
        <v-text-field :label="field"
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
};
</script>

<style scoped>
</style>
