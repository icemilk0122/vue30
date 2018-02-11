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
       count1: 0,
       count2: 0
  },
  methods: {
      thirdFunction () {
          alert('thirdFunction() is called.');
      },
      secondFunction () {
          alert('secondFunction() is called.');
      },
      firstFunction () {
          alert('firstFunction() is called.');
      },
      addCount1 () {
          this.count1 += 1;
      },
      addCount2 () {
          this.count2 += 1;
      }
  }
});
var vm2 = new Vue({
  el: '#app2',
  methods: {
      testFunction () {
          alert('Hello!');
      }
  }
});

