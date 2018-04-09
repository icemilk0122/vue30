// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

Vue.config.productionTip = false;

Vue.component('def-child', {
  template: '<span><slot>This is a default single slot.</slot></span>'
})

new Vue ({
  el: '#app'
})

Vue.component('container', {
  template: `<div>
                <header>
                    <slot name="header"></slot>
                </header>
                <main>
                    <slot></slot>
                </main>
                <footer>
                    <slot name="footer"></slot>
                </footer>
             </div>`
})

new Vue ({
  el: '#app2'
})

Vue.component('child', {
  template: `<div>
                <slot text="This is a text from slot."></slot>	
            <div>`
})

new Vue ({
  el: '#app3'
})