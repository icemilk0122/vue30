// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;

Vue.component('global-component', {
  template: '<div><p>{{ message }}</p><button @click="notice">點我</button></div>',
  data: () => {
    return {
      message: '這是全域註冊的元件',
    }
  },
  methods: {
    notice: () => {
      alert('全域註冊的元件裡面也可以寫methods!');
    }
  }
})

let local_component = {
  template: '<div><p>{{ message }}</p><button @click="notice">點我</button></div>',
  data: () => {
    return {
      message: '這是局部註冊的元件'
    }
  },
  methods: {
    notice: () => {
      alert('Local Component!');
    }
  },
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { local_component }
});
