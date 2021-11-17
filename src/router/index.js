import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/Home.vue';
import Profile from '../pages/profile/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:name',
    name: 'Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
