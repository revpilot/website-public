import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _06a28d70 = () => interopDefault(import('../pages/cases.vue' /* webpackChunkName: "pages/cases" */))
const _8a6c9736 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _11f5bfcd = () => interopDefault(import('../pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _cbcc3d3c = () => interopDefault(import('../pages/solutions/index.vue' /* webpackChunkName: "pages/solutions/index" */))
const _1e46bf23 = () => interopDefault(import('../pages/solutions2.vue' /* webpackChunkName: "pages/solutions2" */))
const _4137a704 = () => interopDefault(import('../pages/strategy.vue' /* webpackChunkName: "pages/strategy" */))
const _41cd547e = () => interopDefault(import('../pages/thank-you.vue' /* webpackChunkName: "pages/thank-you" */))
const _1c14d44a = () => interopDefault(import('../pages/solutions/_id.vue' /* webpackChunkName: "pages/solutions/_id" */))
const _b8fcd152 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cases",
    component: _06a28d70,
    name: "cases"
  }, {
    path: "/contact",
    component: _8a6c9736,
    name: "contact"
  }, {
    path: "/privacy",
    component: _11f5bfcd,
    name: "privacy"
  }, {
    path: "/solutions",
    component: _cbcc3d3c,
    name: "solutions"
  }, {
    path: "/solutions2",
    component: _1e46bf23,
    name: "solutions2"
  }, {
    path: "/strategy",
    component: _4137a704,
    name: "strategy"
  }, {
    path: "/thank-you",
    component: _41cd547e,
    name: "thank-you"
  }, {
    path: "/solutions/:id",
    component: _1c14d44a,
    name: "solutions-id"
  }, {
    path: "/",
    component: _b8fcd152,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
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
