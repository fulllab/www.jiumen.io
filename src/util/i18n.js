// import Vue from 'vue'
import VueI18n from 'vue-i18n'
// Vue.use(VueI18n)

const messages = {
  'zh-CN': require('../assets/i18n/zh'),   // 中文语言包
  'en-US': require('../assets/i18n/en')    // 英文语言包
}

export default new VueI18n({
  locale : 'en_US',
  messages : messages
})
