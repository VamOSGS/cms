<template>
  <div class="dashboard">
    <Loader :loading="loading" />
    <Header />
    <TextEditor class="section" />
    <Projects class="section" />
    <Packages class="section packages" />
    <Sender class="section" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './Header';
import TextEditor from './TextEdtior';
import Packages from './Packages';
import Projects from './Projects';
import Sender from './Sender';
import Loader from './Loader';

export default {
  name: 'Dashboard',
  computed: { ...mapGetters(['secret', 'jsonStorage']) },
  components: {
    Header,
    TextEditor,
    Packages,
    Projects,
    Sender,
    Loader,
  },
  methods: mapActions(['setData']),
  data() {
    return {
      loading: true,
    };
  },
  created() {
    this.$http
      .get(`${this.jsonStorage}/latest`, {
        headers: { private: 'true', 'secret-key': this.secret },
      })
      .then(res => res.body)
      .then(res => {
        this.setData(res);
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  },
};
</script>

<style lang="less">
.dashboard {
  width: 70%;
  margin: 80px auto 0;
  box-shadow: 0px -5px 42px -5px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 420px) {
    width: 90%;
  }
  .section {
    padding: 5px;
    margin: 5px 0;
    .input {
      display: flex;
      align-items: center;
    }
    .packages {
      margin-top: 10px;
    }
  }
}
</style>
