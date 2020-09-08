import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Chakra, { CThemeProvider, CReset } from '@chakra-ui/vue';
import * as customTheme from './custom-theme';

Vue.use(Chakra, {
	extendTheme: customTheme,
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(CThemeProvider, [h(CReset), h(App)]),
}).$mount('#app');
