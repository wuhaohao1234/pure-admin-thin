export default {
  path: "/query",
  meta: {
    title: "数据查询",
    rank: 2
  },
  children: [
    {
      path: "/query/index",
      name: "Query",
      component: () => import("@/views/query/index.vue"),
      meta: {
        title: "数据查询"
      }
    }
  ]
};
