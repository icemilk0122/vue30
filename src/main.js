// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;

new Vue ({
  el: '#app',
  data: {
      currentView: 'home'
  },
  methods: {
      changeTab: function(v) {
          this.currentView = v
      }
  },
  components: {
      home: {
          template: '<div>This is Home page.\
          <p><input type="text" placeholder="Type your name here..."></p>\
          </div>'
      },
      about: {
          template: '<div>This is About page.</div>'
      },
      contact: {
          template: '<div>This is Contact page.</div>'
      }
  }
})