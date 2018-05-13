<template>
  <div id="login">
    <v-card class="form">
      <v-card-title primary-title>
        <h3 class="headline mb-0">Login to CMS dashboard</h3>
      </v-card-title>
      <v-form v-model="valid">
        <v-text-field v-model="username" :rules="nameRules" label="Username" required></v-text-field>
        <v-text-field v-model="password" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" :rules="passRules" label="Password" required></v-text-field>
        <v-btn @click="submit">submit</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    valid: false,
    username: '',
    nameRules: [v => !!v || 'Name is required'],
    password: '',
    passRules: [v => !!v || 'Password is required']
  }),
  methods: {
    submit() {
      const { username, password } = this;
      if (username && password) {
        this.$http
          .post('http://localhost:3000/auth', { username, password })
          .then(res => console.log(res.data), err => console.log(err));
        this.username = '';
        this.password = '';
      } else {
        this.err = 'You need to fill all fields';
      }
    },
    clearError() {
      if (this.err) this.err = '';
    }
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
    opacity: 1;
    position: relative;
    width: 400px;
    border-top: 2px solid #d8312a;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    padding: 100px 40px 40px 40px;
    // background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
  }
}
</style>