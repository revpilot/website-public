<template>
  <div>
    <Nav />
    <section
      class="bg-cover position-relative overlay overlay-dark overlay-40 py-6 py-lg-7 py-l-8 jarallax"
      data-jarallax
      data-speed="0.8"
      :style="`background-image: url('${document.top_image.url}}');`"
    >
      <div class="container my-6 my-xxl-4 fx-fade-up animation-delay-3">
        <h1 class="text-white text-uppercase-bold-sm">SalesSensei</h1>
        <h2
          class="display-4 text-white w-lg-75 my-4"
          v-html="Dom.RichText.asText(document.main_title)"
        ></h2>
      </div>
    </section>

    <section class="pt-5 pb-7">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <div class="media flex-column flex-lg-row align-items-center">
              <div class="media-body ml-lg-5 mt-4 mt-lg-0">
                <div
                  class=""
                  v-html="Dom.RichText.asHtml(document.description)"
                ></div>
              </div>
            </div>
          </div>
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
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import PrismicDOM from "prismic-dom";

export default {
  data: function () {
    return {
      document: null,
      documentId: null,
      Dom: PrismicDOM,
    };
  },
  created() {
    this.$loadJSFiles();
  },
  async asyncData({ context, params, error, app, req, store }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getSingle("about_us");
      document = result.data;

      return {
        document,
        documentId: result.id,
      };
    } catch (e) {
      error({ statusCode: 404, message: e });
    }
  },
};
</script>