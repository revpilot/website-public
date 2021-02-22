import Vue from 'vue'

const components = {
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  LogoColour: () => import('../../components/LogoColour.vue' /* webpackChunkName: "components/logo-colour" */).then(c => c.default || c),
  Nav: () => import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
