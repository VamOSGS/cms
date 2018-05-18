<template>
  <div class="sendBtn">
    <v-snackbar :timeout="2000"
                :color="color"
                v-model="snackbar">
      {{snackBarText}}
    </v-snackbar>
    <v-btn :loading="loading"
           color="primary"
           @click="send">
      Update
      <v-icon right
              dark>cloud_upload</v-icon>
    </v-btn>
  </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Sender',
  computed: mapGetters(['secret', 'data', 'jsonStorage']),
  data() {
    return {
      loading: false,
      snackbar: false,
      color: 'success',
      snackBarText: 'Data successfully updated!',
    };
  },
  methods: {
    send() {
      this.loading = true;
      const sendData = JSON.stringify(this.data);
      this.$http
        .put(this.jsonStorage, sendData, {
          headers: {
            'secret-key': this.secret,
            'content-type': 'application/json',
          },
        })
        .then(res => res.json())
        .then(res => {
          this.loading = false;
          if (!res.success) {
            this.snackBarText = "Somthing wen't wrong!";
            this.color = 'error';
          }
          this.snackbar = true;
        });
    },
  },
};
</script>

<style lang="less">
.sendBtn {
  margin-top: 30px;
  text-align: center;
  button {
    width: 200px;
    height: 50px;
  }
}
</style>
