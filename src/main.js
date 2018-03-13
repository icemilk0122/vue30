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
    message: 'Hello!'
  }
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    message: 'dala!'
  }
});

var vm3 = new Vue ({
  el: '#app3',
  data: {
    message: 'hahahahaha!'
  }
});
