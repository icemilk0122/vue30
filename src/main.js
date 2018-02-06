// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    url: 'http://www.google.com/',
    hint: '連到google網站'
  },
});

new Vue({
  el: '#app2',
  data: {
    classObject: {
      active: true,
      hasError: true
    }
  }
});

var vm = new Vue({
  el: '#app3',
  data: {
    styleObject: {
      color: '#ff0000',
      fontSize: '20px'
    }
  }
});

