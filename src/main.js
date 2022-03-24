import Vue from 'vue'
import App from './App.vue'
import { setTheme } from './theme/theme.js'

Vue.config.productionTip = false

const theme = localStorage.getItem('theme') || 'default'
setTheme(theme)

new Vue({
  render: h => h(App),
}).$mount('#app')
