import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import ProductDetail from '../views/ProductDetail.vue';
import Login from '../views/Login.vue';
import DashboardHeader from '../views/Dashboard/DashboardHeader.vue';
import DashboardHome from '../views/Dashboard/DashboardHome.vue';
import DashboardTopProducts from '../views/Dashboard/DashboardTopProduct.vue';
import DashboardProducts from '../views/Dashboard/DashboardProducts.vue';
// import DashboardContact from '../views/Dashboard/DashboardContact.vue';
// import DashboardAboutUs from '../views/DashboardAboutUs.vue';
// import DashboardFooter from '../views/DashboardFooter.vue';
// import DashboardTimeline from '../views/DashboardTimeline.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard-header',
    name: 'DashboardHeader',
    component: DashboardHeader,
  },
  {
    path: '/dashboard-home',
    name: 'DashboardHome',
    component: DashboardHome,
  },
  {
    path: '/dashboard-top-products',
    name: 'DashboardTopProducts',
    component: DashboardTopProducts,
  },
  {
    path: '/dashboard-products',
    name: 'DashboardProducts',
    component: DashboardProducts,
  },
  // {
  //   path: '/dashboard-contact',
  //   name: 'DashboardContact',
  //   component: DashboardContact,
  // },
  // {
  //   path: '/dashboard-about-us',
  //   name: 'DashboardAboutUs',
  //   component: DashboardAboutUs,
  // },

  // {
  //   path: '/dashboard-footer',
  //   name: 'DashboardFooter',
  //   component: DashboardFooter,
  // },

  // {
  //   path: '/dashboard-timeline',
  //   name: 'DashboardTimeline',
  //   component: DashboardTimeline,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
