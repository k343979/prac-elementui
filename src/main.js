import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'
import VueI18n from 'vue-i18n'
import router from './router/router'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueI18n, { locale });

const i18n = new VueI18n({
    locale: 'ja',
    messages: {
        // 翻訳用のjson
        ja : require('./resources/lang/ja/attribute.json'),
        en : require('./resources/lang/en/attribute.json'),
    }
});

new Vue({
    router,
    i18n: i18n,
    render: h => h(App)
}).$mount('#app')
