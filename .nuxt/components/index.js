export { default as Footer } from '../../components/Footer.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as LogoColour } from '../../components/LogoColour.vue'
export { default as Nav } from '../../components/Nav.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyLogoColour = import('../../components/LogoColour.vue' /* webpackChunkName: "components/logo-colour" */).then(c => c.default || c)
export const LazyNav = import('../../components/Nav.vue' /* webpackChunkName: "components/nav" */).then(c => c.default || c)
