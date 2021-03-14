import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6079818a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2a9c1b5d = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _fc6fb276 = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _031c5f4c = () => interopDefault(import('../pages/solutions/index.vue' /* webpackChunkName: "pages/solutions/index" */))
const _17f955aa = () => interopDefault(import('../pages/solutions2.vue' /* webpackChunkName: "pages/solutions2" */))
const _69dea486 = () => interopDefault(import('../pages/strategy.vue' /* webpackChunkName: "pages/strategy" */))
const _b824428e = () => interopDefault(import('../pages/thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _3de7bd7c = () => interopDefault(import('../pages/solutions/_id.vue' /* webpackChunkName: "pages/solutions/_id" */))
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
    path: "/privacy",
    component: _fc6fb276,
    name: "privacy"
  }, {
    path: "/solutions",
    component: _031c5f4c,
    name: "solutions"
  }, {
    path: "/solutions2",
    component: _17f955aa,
    name: "solutions2"
  }, {
    path: "/strategy",
    component: _69dea486,
    name: "strategy"
  }, {
    path: "/thank-you",
    component: _b824428e,
    name: "thank-you"
  }, {
    path: "/solutions/:id",
    component: _3de7bd7c,
    name: "solutions-id"
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
