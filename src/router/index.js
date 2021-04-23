import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import SinglePost from '../views/SinglePost.vue'
import ErrorPage from '../views/404.vue'
import Dashboard from '../views/Dashboard/index.vue'
// import UserList from '../views/Dashboard/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path:'/Post/:id',
    name:'Post',
    component: Post
  },
  {
    path:'/user/:id/:post_id',
    name: 'single-post',
    component: SinglePost
  },
  {
    path:'*',
    name: '404',
    component: ErrorPage
  },

  // {
  //   path:'/users',
  //   name:'users-list',
  //   component: UserList
  // },

  {
    path:'/dashboard',
    name:'dashboard',
    component: Dashboard,
    children: [
      {
        path:'user',
        name:'dashboard-user',
        component: () => import('../views/Dashboard/user.vue'),
        children: [
          {
            path:':id',
            name:'dashboard-single-user',
            component: () => import('../views/Dashboard/SingleUser.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
