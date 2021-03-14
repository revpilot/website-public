<template>
  <div>
    <Nav />
    <section class="container fx-fade-in text-center">
      <div class="row">
        <!-- Job description -->
        <div class="col-md-12 mt-5 mb-10">
          <h1
            class="text-dark font-weight-normal"
          >Thank you</h1>



          <div
            class="text-dark"
          >We will get back to you soon.</div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="footer footer-dark bg-dark pt-6">
      <Footer />
    </footer>
  </div>
</template>


<script>
export default {
  data: function () {
    return {};
  },
  created() {
    this.$loadJSFiles();
  },
};
</script>