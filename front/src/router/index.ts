import Vue from 'vue';
import Router from 'vue-router'
// import Home from '../views/Home.vue';
import Layout from '@/layout/index.vue'

Vue.use(Router);

/*
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/

export default new Router({
  // mode: 'history',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    meta: { hidden: true }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: 'Accueil',
      meta: { hidden: true },
      children: [
        {
          path: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
          meta: {
            title: 'Accueil',
            icon: 'home'
          }
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      meta: { hidden: true },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
      path: '/top-questions',
      component: Layout,
      meta: { hidden: true },
      name: 'TopQuestions',
      children: [
        {
          path: '',
          name: 'TopQuestionsPage',
          component: () => import(/* webpackChunkName: "topquestions" */ '@/views/topquestions/index.vue'),
          meta: {
            title: 'Top Questions',
            icon: 'trophy',
            hidden: false
          }
        }
      ]
    },
    {
      path: '/classement',
      component: Layout,
      name: 'Classement',
      meta: { hidden: true },
      children: [
        {
          path: '',
          name: 'ClassementPage',
          component: () => import(/* webpackChunkName: "classement" */ '@/views/classement/index.vue'),
          meta: {
            title: 'Classement',
            icon: 'podium-gold'
          }
        }
      ]
    },
    {
      path: '/categorie',
      component: Layout,
      name: 'Catégories',
      meta: { hidden: true },
      children: [
        {
          path: '',
          component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/index.vue'),
          meta: {
            title: 'Catégories',
            icon: 'podium-gold'
          }
        }
      ]
    },
    {
      path: '/categorie',
      component: Layout,
      meta: { hidden: false, title: "Catégorie" },
      children: [
        {
          path: 'sport',
          name: 'Sport',
          component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/sport.vue'),
          meta: {
            title: 'Sport',
            icon: 'soccer-field'
          }
        }
      ]
    },
    {
      path: '/categorie',
      component: Layout,
      meta: { hidden: false, title: "Catégorie" },
      children: [
        {
          path: 'music',
          name: 'Musique',
          component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/music.vue'),
          meta: {
            title: 'Musique',
            icon: 'music'
          }
        }
      ]
    },
    {
      path: '/categorie',
      component: Layout,
      meta: { hidden: false, title: "Catégorie" },
      children: [
        {
          path: 'politic',
          name: 'Politique',
          component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/politic.vue'),
          meta: {
            title: 'Politique',
            icon: 'scale-balance'
          }
        }
      ]
    },
    {
      path: '/categorie',
      component: Layout,
      meta: { hidden: false, title: "Catégorie" },
      children: [
        {
          path: 'cinema',
          name: 'Cinéma',
          component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/cinema.vue'),
          meta: {
            title: 'Cinéma',
            icon: 'theater'
          }
        }
      ]
    },
    // {
    //   path: '/categorie',
    //   redirect: '/categorie/all',
    //   component: Layout,
    //   meta: {
    //     title: 'Catégories',
    //     icon: 'example',
    //     hidden: false
    //   },
    //   children: [
    //     {
    //       path: 'sport',
    //       component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/sport.vue'),
    //       meta: {
    //         title: 'Sport',
    //         icon: 'soccer-field',
    //         hidden: true
    //       }
    //     },
    //     {
    //       path: 'music',
    //       component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/music.vue'),
    //       meta: {
    //         title: 'Musique',
    //         icon: 'music',
    //         hidden: false
    //       }
    //     },
    //     {
    //       path: 'politic',
    //       component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/politic.vue'),
    //       meta: {
    //         title: 'Politique',
    //         icon: 'scale-balance',
    //         hidden: false
    //       }
    //     },
    //     {
    //       path: 'cinema',
    //       component: () => import(/* webpackChunkName: "categories" */ '@/views/categories/cinema.vue'),
    //       meta: {
    //         title: 'Cinéma',
    //         icon: 'theater',
    //         hidden: false
    //       }
    //     }
    //   ]
    // }
  ]
});
