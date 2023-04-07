// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePanel.vue'
import EnterName from '../views/EnterName.vue'
import Estimation from '../views/EstimationPanel.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/:roomid', component: EnterName },
    { path: '/:roomid/estimation', component: Estimation }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
