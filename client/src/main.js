import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'semantic-ui-css/semantic.css';
import { socketVUE } from './helpers/socket.helper';

Vue.use(socketVUE);

let vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//destroy VM after 10 min and disconnet ALL connected users (Socket.io)
setTimeout(function() {
  console.log('Destroy vm and disconnect users');
	vm.$destroy();
}, 600000);
