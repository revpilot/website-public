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

    <section class="bg-sky pt-5 pb-5" id="sales_operations">
      <!-- Sales Operations -->
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="mt-4 text-dark"
              v-html="Dom.RichText.asHtml(document.sales_operations_title)"
            ></div>
            <div
              class="mt-4 text-dark"
              v-html="Dom.RichText.asHtml(document.sales_ops_small_description)"
            ></div>
          </div>
        </div>

        <div class="row mt-5">
          <div
            class="col-md-4 mb-5"
            v-for="(item, index) in document.operations_items"
            :key="index"
          >
            <div class="card rounded-lg shadow-lg hover-lift-light h-100">
              <div class="card-body">
                <div class="text-dark mt-4">
                  <h4 v-html="item.title"></h4>
                </div>
                <div
                  class="mt-4 text-dark"
                  v-html="Dom.RichText.asHtml(item.small_text)"
                ></div>
              </div>

              <NuxtLink
                v-if="item.url"
                :to="`/solutions/${item.url}`"
                class="card-footer-btn btn btn-darkblue btn-lg"
              >
                <span class="text-uppercase-bold-sm"> View more </span>
                <i class="fa fa-arrow-right fa-sm ml-auto"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-light pt-5 pb-5" id="sales_enablement">
      <!-- Sales enablement -->
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="mt-4 text-dark"
              v-html="Dom.RichText.asHtml(document.sales_enablement_title)"
            ></div>
            <div
              class="mt-4"
              v-html="
                Dom.RichText.asHtml(document.sales_enablement_small_description)
              "
            ></div>
          </div>
        </div>

        <div class="row mt-5">
          <div
            class="col-md-4 mb-5"
            v-for="(item, index) in document.enablement_items"
            :key="index"
          >
            <div class="card rounded-lg shadow-lg hover-lift-light h-100">
              <div class="card-body">
                <div class="text-dark mt-4">
                  <h4 v-html="item.title"></h4>
                </div>
                <div
                  class="mt-3"
                  v-html="Dom.RichText.asHtml(item.small_text)"
                ></div>
              </div>

              <NuxtLink
                v-if="item.url"
                :to="`/solutions/${item.url}`"
                class="card-footer-btn btn btn-darkblue btn-lg"
              >
                <span class="text-uppercase-bold-sm"> View more </span>
                <i class="fa fa-arrow-right fa-sm ml-auto"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-sky pt-5 pb-5" id="sales_transformation">
      <!-- Sales transformation service -->
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="mt-4 text-dark"
              v-html="Dom.RichText.asHtml(document.sales_transformation_title)"
            ></div>
            <div
              class="text-dark"
              v-html="
                Dom.RichText.asHtml(
                  document.sales_transformation_small_description
                )
              "
            ></div>
          </div>
        </div>
        <div class="row mt-5">
          <div
            class="col-md-4 mb-5"
            v-for="(item, index) in document.transformation_items"
            :key="index"
          >
            <div class="card rounded-lg shadow-lg hover-lift-light h-100">
              <div class="card-body">
                <div class="text-dark mt-4">
                  <h4 v-html="item.title"></h4>
                </div>
                <div
                  class="mt-3"
                  v-html="Dom.RichText.asHtml(item.small_text)"
                ></div>
              </div>

              <NuxtLink
                v-if="item.url"
                :to="`/solutions/${item.url}`"
                class="card-footer-btn btn btn-darkblue btn-lg"
              >
                <span class="text-uppercase-bold-sm"> View more </span>
                <i class="fa fa-arrow-right fa-sm ml-auto"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light pt-5 pb-5">
      <!-- Sales transformation service -->
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="mt-4 text-dark"
              v-html="Dom.RichText.asHtml(document.sub_service_title)"
            ></div>
            <div
              class="text-dark"
              v-html="
                Dom.RichText.asHtml(document.sub_service_small_description)
              "
            ></div>
          </div>
        </div>
        <div class="row mt-5">
          <div
            class="col-md-4 mb-7"
            v-for="(item, index) in document.sub_service_items"
            :key="index"
          >
            <div class="card rounded-lg shadow-lg hover-lift-light h-100">
              <div class="card-body">
                <div class="text-dark mt-4">
                  <h4 v-html="item.title"></h4>
                </div>
                <div
                  class="mt-3"
                  v-html="Dom.RichText.asHtml(item.small_text)"
                ></div>
              </div>

              <NuxtLink
                v-if="item.url"
                :to="`/solutions/${item.url}`"
                class="card-footer-btn btn btn-darkblue btn-lg"
              >
                <span class="text-uppercase-bold-sm"> View more </span>
                <i class="fa fa-arrow-right fa-sm ml-auto"></i>
              </NuxtLink>
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
      title: `SalesSensei - Solutions`,
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
      const result = await api.getSingle("solutions");
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
