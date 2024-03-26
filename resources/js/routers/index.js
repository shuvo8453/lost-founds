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
    {
        path: "/registration",
        name: "registration",
        meta: {
            title: "Registration",
            redirectIfAuthenticated: true,
        },
        component: () =>
            import(/* webpackChunkName: "Registration" */ "../auth/Registration.vue"),
    },
];

export const routers = createRouter({
    history: createWebHistory(),
    routes,
});
