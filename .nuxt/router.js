import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6079818a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2a9c1b5d = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _7b7b3717 = () => interopDefault(import('../pages/solutions.vue' /* webpackChunkName: "pages/solutions" */))
const _69dea486 = () => interopDefault(import('../pages/strategy.vue' /* webpackChunkName: "pages/strategy" */))
const _ff9d4762 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6079818a,
    name: "about"
  }, {
    path: "/contact",
    component: _2a9c1b5d,
    name: "contact"
  }, {
    path: "/solutions",
    component: _7b7b3717,
    name: "solutions"
  }, {
    path: "/strategy",
    component: _69dea486,
    name: "strategy"
  }, {
    path: "/",
    component: _ff9d4762,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
