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
      memberArray: [
          { id: '11', name:'Eva' },
          { id: '12', name:'Ray' },
          { id: '13', name:'Ben' }
      ]
  }
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    memberObject: {
      name: 'Eva',
      gender: 'female',
      age: '22'
    }
  }
});

vm.memberArray.push({id: '14', name:'John'});
//filter name is John
// vm.memberArray = vm.memberArray.filter(function (member) {
//   return member.name.match(/John/)
// })

Vue.set(vm2.memberObject, 'weight', '50');
vm2.memberObject = Object.assign({}, vm2.memberObject, {
  height: '160',
  phone: '12345678'
});


var vm3 = new Vue({
  el: '#app3',
  data: {
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  //在data就先處理
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  //跑迴圈時才處理
  methods:{
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
});
