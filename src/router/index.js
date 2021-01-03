import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import firebase from 'firebase'
import Porfile from '../views/Auth/Porfile.vue'
import Resetpsw from '../views/Auth/Resetpsw.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
  },
  {
    path: '/porfile',
      name: 'porfile',
      component: Porfile,
      meta: {
        requiresAuth: true
      }
  },
  {
    path: '/resetpsw',
    name: 'resetpsw',
    component: Resetpsw
  }
  
  
]

const router = new VueRouter({
  routes
})
//Comprobamos si necesita Auth
router.beforeEach((to, from, next) => {
  if(to.matched.some(ruta => ruta.meta.requiresAuth)){
    const user = firebase.auth().currentUser;
    if (user){
      next();
    }else{
      next({
        name: 'login'
      })
    }
  }else {
    next();
  }
})

export default router
