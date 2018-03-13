// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  data: {
    g: 0,
    kg: 0,
    t: 0
  },
  watch: {
    g: function(value) {
      this.g = value;
      this.kg = value / 1000;
      this.t = value / 1000 / 1000;
    },
    kg: function(value) {
      this.g = value * 1000;
      this.kg = value;
      this.t = value / 1000;
    },
    t: function(value) {
      this.g = value * 1000 * 1000;
      this.kg = value * 1000;
      this.t = value;
    }
  }
});