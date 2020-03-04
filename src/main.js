import Vue from 'vue'
import App from './App.vue'
import router,{ mainRouters } from './router'
import store from './store'

Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


router.addRoutes(mainRouters)

import Vue18n from "vue-i18n";
Vue.use(Vue18n);

const i18n = new Vue18n({
	locale:"zh",
	messages:{
		"zh":require("./lang/zh")
	}
})


new Vue({
  i18n,	
  router,
  store,
  render: h => h(App)
}).$mount('#app')
