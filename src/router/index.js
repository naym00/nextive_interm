import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import BangladeshFlag from "../views/BangladeshFlag.vue";
import TableView from "../views/TableView.vue";
import TransformView from "../views/TransformView.vue";
import FlexView from "../views/FlexView.vue";
import CardView from "../views/CardView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/bdflag",
    name: "bdflag",
    component: BangladeshFlag,
  },
  {
    path: "/table",
    name: "table",
    component: TableView,
  },
  {
    path: "/transform",
    name: "transform",
    component: TransformView,
  },
  {
    path: "/flex",
    name: "flex",
    component: FlexView,
  },
  {
    path: "/cardview",
    name: "cardview",
    component: CardView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
