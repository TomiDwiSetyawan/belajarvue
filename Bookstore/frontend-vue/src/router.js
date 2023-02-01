import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import ManajemenBuku from "./components/ManajemenBuku.vue";

const routes = [
    {
        path: "/",
        compontent: HelloWorld,
    },
    {
        path: "/manajemen-buku",
        compontent: ManajemenBuku,
    },
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
