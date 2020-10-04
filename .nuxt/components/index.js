export { default as Footer } from '../../components/Footer.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
