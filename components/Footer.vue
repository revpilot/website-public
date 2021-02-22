<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-12 col-md">
        <h6 class="footer-header mb-4 pb-md-2">Inertia</h6>
        <a href="#" class="footer-link"> Landing pages </a>
        <a href="#" class="footer-link mt-2"> Blog pages </a>
        <a href="#" class="footer-link mt-2"> Ecommerce layout </a>
      </div>

      <div class="col-12 col-md mt-5 mt-md-0">
        <h6 class="footer-header mb-4 pb-md-2">Company</h6>
        <a href="#" class="footer-link"> Contact Us </a>
        <a href="#" class="footer-link mt-2"> About </a>
        <a href="#" class="footer-link mt-2"> Careers </a>
      </div>

      <div class="col-12 col-md mt-5 mt-md-0">
        <h6 class="footer-header mb-4 pb-md-2">Products</h6>
        <a href="#" class="footer-link"> Theme Landings </a>
        <a href="#" class="footer-link mt-2"> Theme Support </a>
        <a href="#" class="footer-link mt-2"> Theme Documentation </a>
      </div>

      <div class="col-12 col-md mt-5 mt-md-0">
        <h6 class="footer-header mb-4 pb-md-2">Resources</h6>
        <a href="#" class="footer-link"> My Account </a>
        <a href="#" class="footer-link mt-2"> Branding Resources </a>
      </div>

      <div class="col-12 col-md mt-5 mt-md-0">
        <h6 class="footer-header mb-4 pb-md-2">Support</h6>
        <a href="#" class="footer-link"> Frequently Asked Questions </a>
        <a href="#" class="footer-link mt-2"> Email Us </a>
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
          <i class="fab fa-facebook-square fa-lg"></i>
        </span>
      </a>
      <a href="#" class="hover-lift-light text-decoration-none mx-2">
        <span class="icon-circle footer-social-icon">
          <i class="fab fa-github fa-lg"></i>
        </span>
      </a>
      <a href="#" class="hover-lift-light text-decoration-none mx-2">
        <span class="icon-circle footer-social-icon">
          <i class="fab fa-dribbble fa-lg"></i>
        </span>
      </a>
    </div>

    <div class="mt-6">
      <p class="footer-text mb-2">
        All rights reserved. © {{ new Date().getFullYear() }}.
      </p>
      <div class="d-flex justify-content-center">
        <a href="#" class="footer-text mx-3"> Privacy & terms </a>
        <a href="#" class="footer-text mx-3"> Terms of service </a>
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