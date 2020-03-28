import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './routes';
import axios from 'axios';
import store from './store';

Vue.use(VueRouter);

/**
 * @author Bernardo Schveitzer
 * Configurações do roteador.
 * @type {VueRouter}
 */
const router = new VueRouter({
  routes: routes,
  linkActiveClass: "active-page",
  linkExactActiveClass: "current-page"
});

/**
 * @author Bernardo Schveitzer
 * Configuração da URL base da API.
 * @type {axios}
 */
axios.defaults.baseURL = 'https://api.github.com';

/**
 * Inicialização do Vue passando o que deve ser injetado.
 * @type {router: VueRouter, store: VueX}
 */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#main');
