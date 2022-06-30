// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import store from './vuex'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './theme/element-variables.scss'

import i18n from './util/i18n'

import router from './router';

import App from './App'

Vue.use(ElementUI);

Vue.config.productionTip = false

/*
router.afterEach(function(to) {
    if (window.ga) {
        window.ga('set', 'page', to.fullPath)
        window.ga('send', 'pageview')
    }
})
*/

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: {
        App
    }
})
