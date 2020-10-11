<template>
  <div class="">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-white"
      role="navigation"
    >
      <div class="container position-relative">
        <a class="navbar-brand" href="./index.html">
          <Logo />
        </a>
      </div>
      <!-- end .container -->
    </nav>

    <!-- Hero -->
    <section class="pt-5 pt-lg-8 pb-8 pb-lg-9">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 text-center text-lg-left fx-fade-up animation-delay-2"
          >
            <h1
              class="display-4 mt-4"
              v-html="Dom.RichText.asText(document.title)"
            ></h1>
            <div
              v-html="Dom.RichText.asHtml(document.description)"
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
              :style="`background-image: url('${document.image.url}');`"
            >
              <a
                class="icon-circle icon-circle-lg bg-white text-darkblue hover-scale position-relative"
                :href="document.video_url__youtube_"
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

    <!-- Features #1 -->
    <section class="bg-white py-7 pb-lg-8">
      <div class="container text-center text-md-left">
        <!-- Title -->
        <h2
          class="text-darkblue text-center "
          v-html="Dom.RichText.asText(document.process_title)"
        ></h2>

        <!-- Features -->
        <div class="row mt-5 mt-md-7">
          <div
            class="col-md-6 col-lg-4 mb-4 mb-md-6 text-center"
            v-for="(item, index) in document.group_sales_process"
            :key="index"
          >
            <div class="svg-icon svg-icon-lg text-primary">
              <i
                :class="`fab fa-${document.size_icons}x fas ${item.icon_sales_process} text-primary`"
              ></i>
            </div>
            <h5 class="text-dark mt-4" v-html="item.process_n_title"></h5>
          </div>
        </div>
      </div>
    </section>

    <!-- Features #2 -->
    <section class="py-7 py-lg-8">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 text-center text-lg-left">
            <h2 class="text-darkblue">
              Work with your entire team effortlessly.
            </h2>

            <p class="text-secondary mt-4 pb-2">
              Other people's views and troubles can be contagious. Don't
              sabotage yourself by unwittingly adopting negative, unproductive
              attitudes through your associations with others.
            </p>

            <p class="text-muted border-top mt-4 pt-4">
              "Inertia Enterprise has been our best decisions to date. Our
              team's efficiency is top notch."
            </p>

            <div class="text-darkblue">
              <span class="avatar mr-2">
                <img
                  src="img/uifaces/9.jpg"
                  class="avatar-image rounded-circle"
                  alt=""
                />
              </span>
              <span class="font-weight-bolder">Erika Williams</span>, Founder at
              Stripe
            </div>
          </div>

          <div class="col-lg-6 offset-lg-1 text-center mt-6 mt-lg-2">
            <img
              src="images/looker.png"
              class="img-fluid card-skew-left rounded shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="bg-white py-7 py-lg-8">
      <div class="container">
        <div class="row align-items-center text-center text-lg-left">
          <div class="col-lg-8 offset-lg-1">
            <div class="media flex-column flex-lg-row align-items-center">
              <div class="icon-circle icon-circle-xl bg-darkblue text-white">
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
                      d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z"
                      fill="#000000"
                    ></path>
                    <path
                      d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z"
                      fill="#000000"
                      opacity="0.3"
                    ></path>
                  </g>
                </svg>
              </div>

              <div class="media-body ml-lg-5 mt-4 mt-lg-0">
                <h2 class="font-weight-normal text-darkblue">
                  Build on the world's best platform
                </h2>
                <p class="text-muted mt-3 mb-0">
                  Rely on the most innovative platform for the next generation
                  of applications. Unlimited integrations and customization
                  throughout.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 mt-5 mt-lg-0">
            <a
              href="#"
              class="btn btn-purple btn-lg text-uppercase-bold-sm shadow-sm hover-lift"
            >
              Start now
              <i class="fa fa-chevron-right fa-xs ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="pt-7 pt-lg-8 pb-10">
      <div class="container">
        <h5 class="text-uppercase letter-spacing-lg text-center">
          Trusted by <span class="text-success">thousands</span> of companies
        </h5>

        <div class="row mt-4 mt-lg-6">
          <div class="col-lg-5">
            <!-- Swiper -->
            <div
              class="swiper-container swiper-people"
              data-toggle="swiper"
              data-options='{ "effect": "fade", "grabCursor": true, "speed": 600, "loop": true }'
            >
              <div class="swiper-wrapper">
                <!-- Slide -->
                <div class="swiper-slide">
                  <div
                    class="bg-cover h-400 h-sm-500 rounded-lg"
                    style="background-image: url('img/unsplash/21.jpeg')"
                  ></div>
                </div>

                <!-- Slide -->
                <div class="swiper-slide">
                  <div
                    class="bg-cover h-400 h-sm-500 rounded-lg"
                    style="background-image: url('img/unsplash/3.jpeg')"
                  ></div>
                </div>

                <!-- Slide -->
                <div class="swiper-slide">
                  <div
                    class="bg-cover h-400 h-sm-500 rounded-lg"
                    style="background-image: url('img/unsplash/23.jpeg')"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7 px-lg-5 pt-5 pt-lg-8">
            <!-- Swiper -->
            <div
              class="swiper-container swiper-quotes"
              data-toggle="swiper"
              data-options='{ "grabCursor": true, "speed": 600, "loop": true, "navigation": { "nextEl": ".swiper-custom-button-next", "prevEl": ".swiper-custom-button-prev" } }'
            >
              <div class="swiper-wrapper">
                <!-- Slide -->
                <div class="swiper-slide text-center">
                  <h3 class="font-weight-normal text-darkblue">
                    “Don't demand that things happen as you wish, but wish that
                    they happen as they do happen, and you will go on well.”
                  </h3>
                  <h5 class="font-weight-normal mt-4">Seneca the younger</h5>
                  <p class="text-muted font-size-sm">
                    <span class="svg-icon text-muted"
                      ><svg
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
                        /></svg
                    ></span>
                    Lead Philosoper, GitHub
                  </p>
                </div>

                <!-- Slide -->
                <div class="swiper-slide text-center">
                  <h3 class="font-weight-normal text-darkblue">
                    “Sickness is a hindrance to the body, but not to your
                    ability to choose, unless that is your choice. Lameness is a
                    hindrance to the leg, but not to your ability to choose.”
                  </h3>
                  <h5 class="font-weight-normal mt-4">Epictetus</h5>
                  <p class="text-muted font-size-sm">
                    <span class="svg-icon text-muted"
                      ><svg
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
                        /></svg
                    ></span>
                    Head of Philosophy, Dribbble
                  </p>
                </div>

                <!-- Slide -->
                <div class="swiper-slide text-center">
                  <h3 class="font-weight-normal text-darkblue">
                    “Remember that you must behave in life as at a dinner party.
                    Is anything brought around to you? Put out your hand and
                    take your share with moderation.”
                  </h3>
                  <h5 class="font-weight-normal mt-4">Socrates</h5>
                  <p class="text-muted font-size-sm">
                    <span class="svg-icon text-muted"
                      ><svg
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
                        /></svg
                    ></span>
                    Senior Philosoper, Stripe
                  </p>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div class="d-flex justify-content-center mt-4">
              <a href="#" class="swiper-custom-button-prev text-dark">
                <i class="fas fa-arrow-left fa-lg"></i>
              </a>
              <a href="#" class="swiper-custom-button-next text-dark ml-4">
                <i class="fas fa-arrow-right fa-lg"></i>
              </a>
            </div>
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

      if (process.client) window.prismic.setupEditButton();

      return {
        document,
        documentId: result.id,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style>
</style>
