import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "login",
        meta: {
            title: "Login",
            redirectIfAuthenticated: true,
        },
        component: () =>
            import(/* webpackChunkName: "Login" */ "../auth/Login.vue"),
    },
];

export const routers = createRouter({
    history: createWebHistory(),
    routes,
});
