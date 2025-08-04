import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Map from '../views/Map.vue';
import Registers from '../views/Registers.vue';
import Calculator from '../views/Calculator.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/map', component: Map },
  { path: '/registers', component: Registers },
  { path: '/calculator', component: Calculator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;