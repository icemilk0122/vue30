// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;

Vue.component('child', {
  props: ['myMessage'],
  template: '<p>{{ myMessage }}</p>'
})

var vm = new Vue ({
  el: '#app',
  data: {
      message: 'HelloWorld'
  }
})


Vue.component('my-profile', {
  props: {
    // 指定資料型態為數值
    id: Number,
    
    // 指定多種資料型態
    password: [String, Number],
    
    // 指定為字串型態，且為必要屬性
    name: {
      type: String,
      required: true
    },
    
    // 指定為數值型態，且有預設值
    age: {
      type: Number,
      default: 0,
      validator: function (value) {
        return value >= 0
      }
    },
    
    // 指定為陣列型態，且有預設值，
    // 物件或陣列的資料型態其預設值由函數回傳值
    skills: {
      type: Array,
      default: function(){
       return ['nothing']
      }
    }
  },
  
  template: '<p>id: {{ id }} <br> password: {{ password }} <br> age: {{ age }} <br> skills: {{ skills }}</p>'
})

new Vue({
  el: '#app2'
})


//roll
Vue.component('dice-button', {
  template: '<button @click="rollChild">Roll</button>',
  methods: {
    rollChild: function(){
      // 取 1~6 的亂數
      var value = Math.floor(Math.random() * 6) + 1;
      // 觸發父元件的事件（如果有的話），並附上值
      this.$emit('roll', value)
    }
  }
})

new Vue({
  el: '#app3',
  data: {
    value: 1
  },
  methods: {
    showResult: function (v) {
      this.value = Number(v)
    }
  }
})