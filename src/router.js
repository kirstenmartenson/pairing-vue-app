import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import WinesIndex from './views/wines/Index.vue';
import WinesShow from './views/wines/Show.vue';
import FoodsIndex from './views/foods/Index.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/signup", name: "signup", component: Signup },
    { path: "/login", name: "login", component: Login },
    { path: "/logout", name: "logout", component: Logout },
    { path: '/wines/index', name: 'wines-index', component: WinesIndex},
    { path: '/wines/show', name: 'wines-show', component: WinesShow},
    { path: '/foods/index', name: 'foods-index', component: FoodsIndex}
  ]
});