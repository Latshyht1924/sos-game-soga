import { createRouter, createWebHistory } from 'vue-router';
import GameComponent from '../components/GameComponent.vue';
import AdminComponent from '../components/AdminComponent.vue';

const routes = [
  {
    path: '/',
    redirect: '/game',
  },
  {
    path: '/game',
    component: GameComponent,
  },
  {
    path: '/admin',
    component: AdminComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;