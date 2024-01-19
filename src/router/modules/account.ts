export default {
  path: "/accont",
  meta: {
    title: "账号管理"
  },
  children: [
    {
      path: "/accont/index",
      name: "Accont",
      component: () => import("@/views/accont/index.vue"),
      meta: {
        title: "账号管理"
      }
    }
  ]
};
