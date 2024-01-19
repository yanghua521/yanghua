import Vue from 'vue'
import App from './App.vue'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
Vue.config.productionTip = false

import "@/assets/icon/iconfont.css"
new Vue({
  
  render: h => h(App),
}).$mount('#app')
