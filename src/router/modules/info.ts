export default {
  path: "/info",
  meta: {
    title: "个人信息"
  },
  children: [
    {
      path: "/info/index",
      name: "Info",
      component: () => import("@/views/info/index.vue"),
      meta: {
        title: "个人信息"
      }
    }
  ]
};
