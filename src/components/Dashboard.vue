<template>
  <div class="dashboard">
    <Header class="header" />
    <TextEditor class="section" />
    <Projects class="section" />
    <Packages class="section" />
    <Sender />
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
  width: 70%;
  margin: 80px auto 0;
  .header {
    position: absolute;
    top: 0;
    left: 0;
  }
  .section {
    box-shadow: 0px -5px 42px -5px rgba(0, 0, 0, 0.15);
    margin: 5px 0;
    padding: 5px;
    .input {
      display: flex;
      align-items: center;
    }
  }
}
</style>
