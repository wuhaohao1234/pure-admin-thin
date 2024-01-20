export default {
  path: "/detail",
  meta: {
    title: "详情"
    // showLink: false
  },
  children: [
    {
      path: "/detail/index",
      name: "detail",
      component: () => import("@/views/detail/index.vue"),
      meta: {
        title: "详情",
        showLink: false
      }
    }
  ]
};
