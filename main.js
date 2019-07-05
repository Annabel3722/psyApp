import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import * as API from './static/utils/api'
Vue.prototype.$api = API

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
