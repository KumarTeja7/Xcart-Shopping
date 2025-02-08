import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from '../components/HelloWorld.vue';
import Main from '../components/XcartHome.vue';


const routes = [
    { path: '/', component: Main },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
