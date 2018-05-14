<template>
  <div id="login">
    <v-card class="form">
      <v-card-title primary-title>
        <h2>Login to CMS dashboard</h2>
      </v-card-title>
      <v-form ref="form"
              v-model="valid">
        <v-text-field v-model="username"
                      :rules="nameRules"
                      label="Username"
                      required>
        </v-text-field>
        <v-text-field v-model="password"
                      :append-icon="vIconShow ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (vIconShow = !vIconShow)"
                      :type="vIconShow ? 'password' : 'text'"
                      :rules="passRules"
                      label="Password"
                      @keyup.enter="submit"
                      required>
        </v-text-field>
        <v-progress-circular :width="3"
                             v-if="loading"
                             indeterminate
                             color="primary"></v-progress-circular>
        <v-btn @click="submit"
               color="primary"
               v-if="!loading"
               :disabled="!valid"
               flat>Login</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Login',
  data: () => ({
    server: 'https://cms-auth-server.herokuapp.com',
    valid: false,
    loading: false,
    vIconShow: true,
    password: '',
    username: '',
    nameRules: [v => !!v || 'Name is required'],
    passRules: [v => !!v || 'Password is required']
  }),
  methods: {
    submit() {
      this.loading = true;
      const { username, password } = this;
      this.$http
        .post(`${this.server}/auth`, {
          username,
          password
        })
        .then(res => res.data, console.log)
        .then(res => {
          if (res.success) {
            this.$emit('logIn', res.data);
          } else if (res.field === 'username') {
            this.nameRules = [
              ...this.nameRules,
              v => v !== username || res.message
            ];
          } else if (res.field === 'password') {
            this.passRules = [
              ...this.passRules,
              v => v !== password || res.message
            ];
          }
          setTimeout(() => {
            this.loading = false;
          }, 500);
        });
    }
  },
  created() {
    this.$http.get(this.server);
  }
};
</script>

<style lang="less">
#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  .form {
    width: 400px;
    height: 360px;
    border-top: 2px solid #2196f3;
    margin: auto;
    padding: 40px;
    @media screen and (max-width: 410px) {
      width: 350px;
    }
    @media screen and (max-width: 350px) {
      width: 310px;
    }
    .btn {
      margin-top: 20px;
    }
  }
}
</style>
