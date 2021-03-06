<template>
  <div v-if="document">
    <Nav />

    <!-- Hero -->
    <section
      class="bg-cover position-relative overlay overlay-dark overlay-40 py-6 py-lg-9 py-l-8 jarallax"
      data-jarallax
      data-speed="0.8"
      :style="`background-image: url('${document.image.url}');`"
    >
      <!-- SVG divider -->
      <div class="svg-divider svg-divider-bottom text-white">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 2000 350"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon fill="currentColor" points="2000 0 2000 350 0 350"></polygon>
        </svg>
      </div>

      <div class="container my-6 my-xxl-4 fx-fade-up animation-delay-3">
        <h1 class="text-white text-uppercase-bold-sm">SalesSensei</h1>
        <h2
          class="display-4 text-white w-lg-75 my-4"
          v-html="Dom.RichText.asText(document.title)"
        ></h2>
        <div
          v-html="Dom.RichText.asHtml(document.description)"
          class="lead text-white mx-auto mt-4 mb-5"
        ></div>
        <NuxtLink
          to="contact"
          class="btn btn-lg btn-purple rounded-pill text-uppercase-bold-sm shadow hover-lift"
        >
          <span v-html="document.cta_title"></span>
        </NuxtLink>
      </div>
    </section>

    <section class="bg-white pb-lg-6">
      <div class="container">
        <h3
          class="text-center text-purple text-uppercase-bold-sm line-height-lg"
          v-html="Dom.RichText.asText(document.companies_help_text)"
        ></h3>
        <div class="row justify-content-between align-items-center mt-5">
          <div
            class="col-4 col-sm-3 col-lg-2"
            v-for="(item, index) in document.commpanies_logos"
            :key="index"
          >
            <div class="text-dark mx-auto img-fluid" style="width: 70%">
              <NuxtLink
                :to="{ path: '/cases', hash: `#${item.name.toLowerCase()}` }"
              >
                <img
                  :src="item.image1.url"
                  class="img-fluid"
                  :alt="item.name"
                />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero -->
    <section class="pt-5 pt-lg-8 pb-6">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 text-center text-lg-left fx-fade-up animation-delay-2"
          >
            <h1 class="display-5 mt-4" v-html="document.solutions_title"></h1>
            <div
              v-html="Dom.RichText.asHtml(document.solutions_description)"
              class="text-muted"
            ></div>

            <div class="row mt-5">
              <div class="col-12 col-lg-auto">
                <a
                  href="#"
                  class="btn btn-purple btn-lg text-uppercase-bold-sm shadow-sm hover-lift"
                >
                  <span v-html="document.cta_title"></span>
                  <i class="fa fa-chevron-right fa-xs ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div
            class="col-lg-6 pl-xl-5 pt-5 pt-lg-6 fx-fade-up animation-delay-4"
          >
            <!-- Video card -->
            <div
              class="video-card card-skew-left h-300 overlay overlay-primary overlay-20"
              :style="
                `background-image: url('${document.solutions_video_image.url}');`
              "
            >
              <a
                class="icon-circle icon-circle-lg bg-white text-darkblue hover-scale position-relative"
                :href="document.video_solutions_url"
                data-fancybox
              >
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <rect x="0" y="0" width="24" height="24"></rect>
                    <path
                      d="M9.82866499,18.2771971 L16.5693679,12.3976203 C16.7774696,12.2161036 16.7990211,11.9002555 16.6175044,11.6921539 C16.6029128,11.6754252 16.5872233,11.6596867 16.5705402,11.6450431 L9.82983723,5.72838979 C9.62230202,5.54622572 9.30638833,5.56679309 9.12422426,5.7743283 C9.04415337,5.86555116 9,5.98278612 9,6.10416552 L9,17.9003957 C9,18.1765381 9.22385763,18.4003957 9.5,18.4003957 C9.62084305,18.4003957 9.73759731,18.3566309 9.82866499,18.2771971 Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Sales execution foundations -->
    <section class="pt-7 pb-4 bg-white">
      <div class="container text-center">
        <h2 class="text-darkblue" v-html="document.foundations_title"></h2>
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
              style="
                fill: none;
                stroke: #000;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 32px;
              "
            ></line>
          </svg>
        </div>
        <div
          v-html="Dom.RichText.asHtml(document.foundations_description)"
          class="text-secondary w-lg-60 mx-auto mt-2"
        ></div>
      </div>
    </section>

    <section class="bg-white pt-2 pb-2 text-left">
      <div class="container">
        <div class="row mt-5">
          <!-- Story -->
          <div
            class="col-md-6 mb-5"
            v-for="(item, index) in document.foundations_list"
            :key="index"
          >
            <div class="card rounded-lg shadow-lg hover-lift-light h-100">
              <div class="card-body">
                <NuxtLink
                  :to="{
                    path: '/solutions',
                    hash: `#${item.foundation_link.toLowerCase()}`,
                  }"
                >
                  <div
                    class="d-block rounded bg-cover h-150"
                    :style="
                      `background-image: url('${item.foundation_image.url}');`
                    "
                  ></div>
                </NuxtLink>
                <div class="text-dark mt-4">
                  <h3 v-html="item.foundation_title"></h3>
                </div>
                <div
                  class="mt-3"
                  v-html="Dom.RichText.asHtml(item.foundataion_description)"
                ></div>
              </div>
              <div>
                <NuxtLink
                  :to="{
                    path: '/solutions',
                    hash: `#${item.foundation_link.toLowerCase()}`,
                  }"
                  class="card-footer-btn btn btn-purple btn-lg"
                >
                  <span class="text-uppercase-bold-sm"> View more </span>
                  <i class="fa fa-arrow-right fa-sm ml-auto"></i>
                </NuxtLink>
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
  head() {
    return {
      title: `SalesSensei - ${this.Dom.RichText.asText(this.document.title)}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `SalesSensei - ${this.Dom.RichText.asText(this.document.description)}`,
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
  async asyncData({ context, params, error, app, req, store }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getSingle("homepage");
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

<style>
img.bw1 {
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  opacity: 0.8;
}
</style>
