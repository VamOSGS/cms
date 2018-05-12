<template>
  <div id="login">
    <form @submit.prevent="submit">
      <p>Login to CMS dashboard</p>
      <p :if="err" class="err">{{ err }}</p>
      <div class="fields">
        <input @keydown="clearError" type="text" placeholder="Username" v-model="username">
        <input @keydown="clearError" type="password" placeholder="Password" v-model="password">
        <button >Sign in</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      err: ''
    };
  },
  methods: {
    submit() {
      if (this.username && this.password) { 
        // send
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
  form {
    opacity: 1;
    top: 20px;
    transition-property: transform, opacity, box-shadow, top, left;
    transition-duration: 0.5s;
    transform-origin: 161px 100%;
    position: relative;
    width: 240px;
    border-top: 2px solid #d8312a;
    height: 300px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    padding: 100px 40px 40px 40px;
    background: linear-gradient(45deg, #35394a 0%, #1f222e 100%);
    p {
      color: #afb1be;
      width: 100%;
      margin: 0 0 10px 0;
      &.err {
        color: red;
      }
    }
    .fields {
      margin: 10px auto;
      display: flex;
      flex-direction: column;
      * {
        outline: 0;
      }
      input {
        // background: #3b4148;
        border: 0.0625em solid #e5e5e5;
        padding: 1em 1.25em;
        margin: 5px 0;
        transition: 0.3s;
        &:hover {
          background: #e5e5e5;
        }
      }
      button {
        margin-top: 10px;
        cursor: pointer;
        border: none;
        background: none;
        text-transform: uppercase;
        padding: 10px 0;
        border: 1px solid #ea5c54;
        color: #ea5c54;
        width: 40%;
        border-radius: 2px;
        transition: 0.5s;
        &:hover {
          background: #ea5c54;
          color: white;
        }
      }
    }
  }
}
</style>