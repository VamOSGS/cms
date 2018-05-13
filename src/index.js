import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Root from './components/Root.vue';

Vue.use(Vuetify);
Vue.use(VueResource);

new Vue({
  el: '#root',
  render: createElement => createElement(Root),
});
