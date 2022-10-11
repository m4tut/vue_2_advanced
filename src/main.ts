
import Vue from 'vue'
import App from '@app/App.vue'

import router from '@shared/router'
import store from '@shared/store'

// Styles
import '@assets/styles/library/normalize.css'
import '@assets/styles/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
