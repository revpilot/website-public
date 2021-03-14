<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-12 col-md mt-5 mt-md-0">
        <h6 class="footer-header mb-4 pb-md-2">Sales Sensei</h6>
        <NuxtLink to="/solutions" class="footer-link mt-2">
          Solutions
        </NuxtLink>
        <NuxtLink to="/about" class="footer-link mt-2"> About us </NuxtLink>
        <NuxtLink to="/contact" class="footer-link mt-2"> Contact us </NuxtLink>
      </div>
    </div>

    <div class="d-flex justify-content-center mt-6">
      <a href="#" class="hover-lift-light text-decoration-none mx-2">
        <span class="icon-circle footer-social-icon">
          <i class="fab fa-twitter fa-lg"></i>
        </span>
      </a>
      <a href="#" class="hover-lift-light text-decoration-none mx-2">
        <span class="icon-circle footer-social-icon">
          <i class="fab fa-linkedin fa-lg"></i>
        </span>
      </a>
      <a
        href="https://github.com/revpilot/"
        class="hover-lift-light text-decoration-none mx-2"
        target="_blank"
      >
        <span class="icon-circle footer-social-icon">
          <i class="fab fa-github fa-lg"></i>
        </span>
      </a>
    </div>

    <div class="mt-6">
      <p class="footer-text mb-2">
        All rights reserved. © {{ new Date().getFullYear() }}
      </p>
      <div class="d-flex justify-content-center">
        <NuxtLink to="/privacy" class="footer-text mx-3"
          >Privacy & terms
        </NuxtLink>

        <NuxtLink to="/terms" class="footer-text mx-3"
          >Terms of service
        </NuxtLink>
      </div>
    </div>

    <div class="mt-6">
      <div class="footer-brand">
        <logo-colour color="#3f5683" size="195px" />
      </div>
    </div>
  </div>
</template>
<script>
import LogoColour from "./LogoColour.vue";
export default {
  components: { LogoColour },
  data: function () {
    return {};
  },
};
</script>