import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/global",
    name: "global",
    component: () => import("../views/DashboardGlobal.vue"),
  },
  {
    path: "/revenues",
    name: "revenues",
    component: () => import("../views/DashboardRevenues.vue"),
  },
  {
    path: "/expenses",
    name: "expenses",
    component: () => import("../views/DashboardExpenses.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
