<template>
  <div>
    <v-btn @click="send">
      Update
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Sender',
  computed: mapGetters(['secret', 'data', 'jsonStorage']),
  methods: {
    send() {
      console.log(this.secret);
      const sendData = JSON.stringify(this.data);
      this.$http
        .put(this.jsonStorage, sendData, {
          headers: {
            'secret-key': this.secret,
            'content-type': 'application/json',
          },
        })
        .then(res => res.json())
        .then(console.log);
    },
  },
};
</script>

<style scoped>
</style>
