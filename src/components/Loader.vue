<template>
  <v-dialog v-model="loading"
            fullscreen
            class="loading-dialog">
    <v-container fill-height>
      <v-layout row
                justify-center
                align-center>
        <v-progress-circular indeterminate
                             :size="50"
                             color="primary"></v-progress-circular>
      </v-layout>
    </v-container>
  </v-dialog>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    loading: Boolean,
  },
};
</script>

<style lang="less">
.dialog {
  position: absolute;
  z-index: 3 !important;
  top: 0;
  left: 0;
  background: #303030;
}
</style>
