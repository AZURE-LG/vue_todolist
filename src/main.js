import Vue from 'vue'
import App from './App.vue'
// 引入样式文件
import './styles/base.css'
import './styles/index.css'
// 导入提示框
import Toasted from 'vue-toasted';

Vue.use(Toasted)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


