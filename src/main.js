// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

new Vue({
  el: '#text',
  data: {
    msg: 'this is text',
  },
});

new Vue({
  el: '#input',
  data: {
    message: '',
  },
});

new Vue({
  el: '#textarea',
  data: {
      message: 'this is textarea'
  }
});

new Vue({
  el: '#radio',
  data: {
      selected: 'Please choose any items.'
  }
});

new Vue({
  el: '#checkbox',
  data: {
      selected_group: []
  }
});

new Vue({
  el: '#select',
  data: {
      selected: null
  }
});

new Vue({
  el: '#input-lazy',
  data: {
    message: 'this is lazy',
  },
});

new Vue({
  el: '#input-number',
  data: {
    message: '12345',
  },
});

new Vue({
  el: '#input-trim',
  data: {
    message: 'this is trim',
  },
});

