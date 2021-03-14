<template>
  <div>
    <Nav />
    <section class="container fx-fade-in">
      <div class="row">
        <!-- Job description -->
        <div class="col-md-12 mt-5 mb-10">
          <div
            class="text-dark font-weight-normal"
            v-html="Dom.RichText.asHtml(document.title)"
          ></div>

          <hr class="border-gray-200 border-2 my-5" />

          <div
            class="text-dark"
            v-html="Dom.RichText.asHtml(document.full_text)"
          ></div>
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
      const result = await api.getSingle("privacy");
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