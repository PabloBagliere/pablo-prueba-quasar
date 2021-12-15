import Vue from 'vue'
import VuePlugin from '../../../quasar-ui-histrix-client-prueba/src/index.js'
import histrixApi from '../../../quasar-ui-histrix-client-prueba/src/services/histrixApi.js'

Vue.use(VuePlugin)
Vue.prototype.$histrixApi = histrixApi

