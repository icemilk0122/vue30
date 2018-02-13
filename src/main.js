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
      message: 'This is example of v-if',
      isShow: true
  }
});
// 每2秒改變isShow的布林值
setInterval(function() {
  vm.isShow = !vm.isShow;
}, 2000)

var vm2 = new Vue({
  el: '#app2',
  data: {
      type: 'B'
  }
});

var vm3 = new Vue ({
  el: '#app3'
});
