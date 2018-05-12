<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'root',
  data() {
    return {
      msg: 'Welcome to Vue.js'
    };
  }
};
</script>

<style lang="less">
div {
  h1 {
    font-family: monospace;
    color: rgb(0, 131, 0);
    text-align: center;
  }
}
</style>