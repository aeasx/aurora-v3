import Home from "../pages/HomeView.vue";
import AboutView from "../pages/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: '/', component: Home
  },
  {
    path: '/about', component: AboutView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
