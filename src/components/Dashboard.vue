<template>
  <div>
    <h1>Dashboard</h1>
    <v-btn @click="logOut">log out</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    logOut() {
      this.$emit('logOut');
    }
  }
};
</script>

<style scoped>

</style>
