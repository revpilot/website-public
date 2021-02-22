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
          class="btn btn-lg btn-info rounded-pill text-uppercase-bold-sm shadow hover-lift"
        >
          <span v-html="document.cta_title"></span>
        </NuxtLink>
      </div>
    </section>

    <section class="bg-white pb-lg-6">
      <div class="container">
        <h3
          class="text-center text-primary text-uppercase-bold-sm line-height-lg"
          v-html="Dom.RichText.asText(document.companies_help_text)"
        ></h3>
        <div class="row justify-content-between align-items-center mt-5">
          <div
            class="col-4 col-sm-3 col-lg-2"
            v-for="(item, index) in document.commpanies_logos"
            :key="index"
          >
            <div class="text-dark mx-auto img-fluid" style="width: 70%">
              <a :href="item.link.url" target="_blank">
                <img
                  :src="item.image1.url"
                  class="img-fluid bw1"
                  :alt="item.name"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero -->
    <section class="pt-5 pt-lg-8 pb-2">
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
              :style="`background-image: url('${document.solutions_video_image.url}');`"
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
    <section class="pt-9 pb-2 bg-white">
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
          v-html="Dom.RichText.asHtml(document.solutions_description)"
          class="text-secondary w-lg-60 mx-auto mt-2"
        ></div>
      </div>
    </section>

    <section class="bg-white pt-2 pb-2">
      <div class="container">
        <div class="row mt-5">
          <!-- Story -->
          <div
            class="col-md-4 mb-5"
            v-for="(item, index) in document.foundations_list"
            :key="index"
          >
            <div class="card rounded-lg shadow-light hover-lift-light">
              <div class="card-body">
                <div
                  class="d-block rounded bg-cover h-150"
                  :style="`background-image: url('${item.foundation_image.url}');`"
                ></div>
                <div class="text-dark mt-4">
                  <h4 v-html="item.foundation_title"></h4>
                </div>
                <div
                  class="mt-3"
                  v-html="Dom.RichText.asHtml(item.foundataion_description)"
                ></div>
              </div>
              <div v-if="item.foundation_link">
                <NuxtLink
                  :to="item.foundation_link"
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

    <!-- Managed sales transformation from start to finish -->
    <section class="py-7 py-lg-8 ">
      <div class="container">
        <div class="row align-items-center text-center text-lg-left">
          <div class="col-lg-8 offset-lg-1">
            <div class="media flex-column flex-lg-row align-items-center">
              <div class="icon-circle icon-circle-xl text-white">
                <img src="~/assets/logo/fww.svg" class="SalesSensei" />
              </div>

              <div class="media-body ml-lg-5 mt-4 mt-lg-0">
                <h2
                  class="font-weight-normal text-darkblue"
                  v-html="Dom.RichText.asText(document.feature_title_1)"
                ></h2>
                <div
                  class="text-muted mt-3 mb-0"
                  v-html="Dom.RichText.asHtml(document.feature_description_1)"
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 mt-5 mt-lg-0">
            <NuxtLink
              :to="document.feature_link_1"
              class="btn btn-purple btn-lg text-uppercase-bold-sm shadow-sm hover-lift"
            >
              <span>{{ document.feature_link_title_1 }}</span>
              <i class="fa fa-chevron-right fa-xs ml-2"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>


      <!-- Managed sales transformation from start to finish -->
    <section class="pb-8 pt-2 ">
      <div class="container">
        <div class="row align-items-center text-center text-lg-left">
          <div class="col-lg-8 offset-lg-1">
            <div class="media flex-column flex-lg-row align-items-center">
              <div class="icon-circle icon-circle-xl text-white">
                <img src="~/assets/logo/fww.svg" class="SalesSensei" />
              </div>

              <div class="media-body ml-lg-5 mt-4 mt-lg-0">
                <h2
                  class="font-weight-normal text-darkblue"
                  v-html="Dom.RichText.asText(document.feature_title_2)"
                ></h2>
                <div
                  class="text-muted mt-3 mb-0"
                  v-html="Dom.RichText.asHtml(document.feature_description_2)"
                ></div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 mt-5 mt-lg-0">
            <NuxtLink
              :to="document.feature_link_2"
              class="btn btn-purple btn-lg text-uppercase-bold-sm shadow-sm hover-lift"
            >
              <span>{{ document.feature_link_title_2 }}</span>
              <i class="fa fa-chevron-right fa-xs ml-2"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>



    <!-- Contact form -->
    <section class="bg-dark position-relative pt-4" id="contact">
      <!-- SVG divider -->
      <div class="svg-divider svg-divider-top text-light">
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 2000 350"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon fill="currentColor" points="2000 0 2000 350 0 350"></polygon>
        </svg>
      </div>

      <div class="container position-relative">
        <div
          class="bg-white rounded shadow-light-lg w-lg-70 mx-auto py-6 px-4 px-md-5 px-lg-6"
        >
          <div class="text-center mt-n7">
            <div
              class="icon-circle icon-circle-lg bg-darkblue text-white shadow"
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
                    d="M12.9835977,18 C12.7263047,14.0909841 9.47412135,11 5.5,11 C4.98630124,11 4.48466491,11.0516454 4,11.1500272 L4,7 C4,5.8954305 4.8954305,5 6,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,16 C22,17.1045695 21.1045695,18 20,18 L12.9835977,18 Z M19.1444251,6.83964668 L13,10.1481833 L6.85557487,6.83964668 C6.4908718,6.6432681 6.03602525,6.77972206 5.83964668,7.14442513 C5.6432681,7.5091282 5.77972206,7.96397475 6.14442513,8.16035332 L12.6444251,11.6603533 C12.8664074,11.7798822 13.1335926,11.7798822 13.3555749,11.6603533 L19.8555749,8.16035332 C20.2202779,7.96397475 20.3567319,7.5091282 20.1603533,7.14442513 C19.9639747,6.77972206 19.5091282,6.6432681 19.1444251,6.83964668 Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M8,17 C8.55228475,17 9,17.4477153 9,18 L9,21 C9,21.5522847 8.55228475,22 8,22 L3,22 C2.44771525,22 2,21.5522847 2,21 L2,18 C2,17.4477153 2.44771525,17 3,17 L3,16.5 C3,15.1192881 4.11928813,14 5.5,14 C6.88071187,14 8,15.1192881 8,16.5 L8,17 Z M5.5,15 C4.67157288,15 4,15.6715729 4,16.5 L4,17 L7,17 L7,16.5 C7,15.6715729 6.32842712,15 5.5,15 Z"
                    fill="#000000"
                    opacity="0.3"
                  ></path>
                </g>
              </svg>
            </div>
          </div>

          <h3 class="text-center font-weight-normal mt-5">
            Contact us for a free consultation
          </h3>

          <form class="mt-5">
            <div class="row">
              <div class="col-md">
                <div class="form-group mb-4">
                  <label class="mb-0">First name:</label>
                  <input class="form-control form-control-bottom" type="text" />
                </div>
              </div>
              <div class="col-md">
                <div class="form-group mb-4">
                  <label class="mb-0">Last name:</label>
                  <input class="form-control form-control-bottom" type="text" />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md">
                <div class="form-group mb-4">
                  <label class="mb-0">Your company name:</label>
                  <input class="form-control form-control-bottom" type="text" />
                </div>
              </div>
              <div class="col-md">
                <div class="form-group mb-4">
                  <label class="mb-0">Work phone:</label>
                  <input
                    class="form-control form-control-bottom"
                    type="phone"
                  />
                </div>
              </div>
            </div>

            <div class="form-group mb-4">
              <label class="mb-0">Work email:</label>
              <input class="form-control form-control-bottom" type="email" />
            </div>

            <div class="form-group">
              <label>Do you have a specific interest or need?</label>
              <textarea
                class="form-control form-control-bottom"
                rows="3"
              ></textarea>
            </div>

            <div class="text-center mt-5">
              <input
                type="submit"
                value="Send message"
                class="btn btn-lg btn-purple w-lg-300 text-uppercase-bold-sm shadow-lg hover-lift"
              />
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer footer-dark bg-dark pt-8">
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
  async asyncData({ context, params, error, app, req, store }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getSingle("homepage");
      document = result.data;

      //      if (process.client) window.prismic.setupEditButton();

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
