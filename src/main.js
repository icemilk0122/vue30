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
//全域filters
Vue.filter('capitalize', function(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    message: 'dala!'
  },
  computed: {
    reverseMessage() {
        return this.message.split('').reverse().join('');
    }
  }
});

var vm3 = new Vue ({
  el: '#app3',
  data: {
    content: '`computed`的功能很強大，它可以對資料做處理，而且它有cache，可以避免重複處理資料，跟`filters`一樣，可以在`computed`裡放入`function`，不同的是，`computed`可以做比較複雜的資料處理。'
  },
  computed: {
    summary() {
      if (this.content.length > 30)
        return this.content.slice(0, 27) + '...';
      return this.content;
    }
  }
});
