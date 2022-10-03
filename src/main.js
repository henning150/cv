import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './plugins'
import store from './store'
import { sync } from 'vuex-router-sync'
import lang from '@/mixins/lang'
import VueFlags from '@growthbunker/vueflags'

Vue.use(VueFlags, {
  iconPath: '/flags/',
})
Vue.config.productionTip = false
Vue.mixin(lang)
sync(store, router)

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
