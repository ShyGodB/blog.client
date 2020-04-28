import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import api from './api'
import config from './util/config'
import tool from './util/tool'
import rules from './util/rules'
import Element from 'element-ui'
import "./registerServiceWorker"

Vue.use(Element)

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$config = config
Vue.prototype.$tool = tool
Vue.prototype.$rules = rules

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app")
