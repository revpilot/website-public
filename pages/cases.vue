<template>
  <div>
    <Nav />
    <section
      class="bg-cover position-relative overlay  overlay-40 py-6 py-lg-7 py-l-8 jarallax"
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

    <section
      class="pt-5 pt-lg-5 pb-5 bg-white"
      v-for="(item, index) in document.cases"
      :key="index"
    >
      <div class="container" :id="`${item.logo.alt.toLowerCase()}`">
        <div class="row">
          <div
            class="col-lg-3 pl-xl-5 pt-0 fx-fade-up animation-delay-4 text-center"
          >
            <img :src="item.logo.url" class="img-fluid" :alt="item.name" />
          </div>
          <div
            class="col-lg-9 text-center text-lg-left fx-fade-up animation-delay-2"
          >
            <h2 class="text-darkblue pt-5 pt-lg-0">{{ item.company_name }}</h2>
            <div class="svg-icon svg-icon-xl text-purple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <title>ionicons-v5-e</title>
                <line
                  x1="400"
                  y1="256"
                  x2="112"
                  y2="256"
                  style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
                ></line>
              </svg>
            </div>
            <div class="" v-html="Dom.RichText.asHtml(item.description1)"></div>
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
  head() {
    return {
      title: `SalesSensei - Use cases from our clients`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `SalesSensei - ${this.Dom.RichText.asText(
            this.document.description
          )}`,
        },
      ],
    };
  },
  data: function() {
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
