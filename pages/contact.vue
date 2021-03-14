<template>
  <div>
    <Nav />

    <section class="text-center mt-6 fx-fade-up">
      <div class="container">
        <div class="svg-icon svg-icon-lg text-success">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="24" height="24"></rect>
              <path
                d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                fill="#000000"
              ></path>
              <path
                d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                fill="#000000"
                opacity="0.3"
              ></path>
            </g>
          </svg>
        </div>
        <h1 class="text-dark font-weight-normal mt-3">
          Happy to answer any doubts
        </h1>
        <p class="lead text-secondary w-lg-80 mx-auto mt-4">
          If you have any question or doubt please contact us. We'll get back to
          you as soon as humanly possible.
        </p>
      </div>
    </section>
    <section class="bg-dark position-relative mt-7">
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

      <div class="container position-relative fx-fade-up animation-delay-3">
        <div
          class="bg-white w-lg-60 rounded shadow-light-lg mx-auto py-5 px-4 px-md-6"
        >
          <form name="contact"  method="POST" netlify>
            <div class="form-group">
              <label class="text-dark"> Your name </label>
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Full name"
                v-model="formdata.name"
              />
            </div>
            <div class="form-group">
              <label class="text-dark">Company Email address </label>
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Company Email address"
                v-model="formdata.email"
              />
              <div class="errorEmail mt-3 mb-3" v-if="isEmailValid() === 'has-error'">
                Please write a valid email
              </div>
            </div>
            <div class="form-group">
              <label class="text-dark"> Phone number </label>
              <input
                type="phone"
                class="form-control form-control-lg"
                placeholder="Your phone number"
                v-model="formdata.phone"
              />
            </div>
            <div class="form-group">
              <label class="text-dark"> Message </label>
              <textarea
                rows="4"
                class="form-control form-control-lg"
                placeholder="Your message"
                v-model="formdata.message"
              ></textarea>
            </div>

            <input
              type="submit"
              @click.stop.prevent="submit()"
              :disabled="!btnEnabled || sending"
              value="Send Message"
              class="btn btn-block btn-success btn-lg hover-lift-light mt-4"
            />
          </form>
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
      title: "Contact SalesSensei",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
    };
  },
  data: function () {
    return {
      document: null,
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      documentId: null,
      Dom: PrismicDOM,
      loading: true,
      sending: false,
      formdata: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  created() {
    this.$loadJSFiles();
  },
  computed: {
    btnEnabled() {
      if (
        this.formdata.name === "" ||
        this.formdata.email === "" ||
        this.formdata.phone === "" ||
        this.formdata.message === ""
      ) {
        return false;
      }
      return true;
    },
  },
  methods: {
    isEmailValid: function () {
      return this.formdata.email == ""
        ? ""
        : this.reg.test(this.formdata.email)
        ? "has-success"
        : "has-error";
    },
    async submit() {
      this.sending = true;
      try {
        const res = await this.$axios.$post(
          `${process.env.emailUrl}`,
          this.formdata,
        );
        console.log("res", res);
        this.sending = false;
        this.$router.push("/thank-you/");
      } catch (error) {
        console.error(error);
        this.sending = false;
      }
    },
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

<style scoped>
.errorEmail{
  color:red
}
</style>