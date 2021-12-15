import Vue from 'vue'
import VuePlugin from '../../../quasar-ui-pablo-prueba-quasar/src/index.js'
import histrixApi from '../../../quasar-ui-pablo-prueba-quasar/src/services/histrixApi.js'

Vue.use(VuePlugin)
Vue.prototype.$histrixApi = histrixApi

