<template>
  <div>
    <h1>Dashboard</h1>
    <v-btn @click="logOut">log out</v-btn>
    {{ secret }}
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    logOut() {
      this.$emit('logOut');
    }
  },
  props: ['secretKey'],
  data: function() {
    return {
      secret: this.secretKey
    };
  },
  mounted() {
    console.log(this.secret);
    // this.$http.get()
  }
};
</script>

<style scoped>

</style>
