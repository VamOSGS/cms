<template>
  <div class="dashboard">
    <Header class="header" />
    <TextEditor/>
    <Projects/>
    <Packages/>
    <Sender/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './Header';
import TextEditor from './TextEdtior';
import Packages from './Packages';
import Projects from './Projects';
import Sender from './Sender';

export default {
  name: 'Dashboard',
  computed: { ...mapGetters(['secret', 'jsonStorage']) },
  components: {
    Header,
    TextEditor,
    Packages,
    Projects,
    Sender,
  },
  methods: mapActions(['setData']),
  created() {
    this.$http
      .get(`${this.jsonStorage}/latest`, {
        headers: { private: 'true', 'secret-key': this.secret },
      })
      .then(res => res.body)
      .then(res => this.setData(res));
  },
};
</script>

<style lang="less">
.dashboard {
  width: 80%;
  margin: 80px auto 0;
  .header {
    position: absolute;
    top: 0;
    left: 0;
  }
  .input {
    display: flex;
    align-items: center;
  }
}
</style>
