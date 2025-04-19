import { createRouter, createWebHistory } from "vue-router";

import DashboardView from "@/views/Dashboard.vue";
import AboutView from "@/views/About.vue";
import DataStructuresView from "@/views/DataStructures.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: DashboardView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/data-structures",
    name: "Data Structures",
    component: DataStructuresView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
