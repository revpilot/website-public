<template>
  <div>
    <Nav />
    <section class="container mt-4 mt-md-6 fx-fade-in">
      <div class="row">
        <!-- Sidebar -->
        <div class="col-md-4 pr-lg-5">
          <div class="position-sticky" style="top: 20px">
            <NuxtLink
              :to="`/solutions/`"
              class="text-purple border-bottom border-gray-200 d-block py-3"
            >
              <i class="fas fa-arrow-left fa-xs mr-2"></i>
              <span> Back to Solutions</span>
            </NuxtLink>

            <div
              class="border-bottom border-gray-200 text-dark py-3 d-none d-md-block"
              v-for="(item, index) in allSols"
              :key="index"
            >
              <h4 v-html="Dom.RichText.asText(item.title)"></h4>

              <div
                class="text-dark py-1"
                v-for="(item2, index2) in item.items"
                :key="index2"
              >
                <NuxtLink
                  :to="`/solutions/${item2.url}`"
                  class="text-purple"
                  v-if="item2.url !== uid"
                >
                  <span v-html="item2.title"></span>
                </NuxtLink>

                <span class="text-dark" v-if="item2.url === uid">
                  <span v-html="item2.title"></span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Job description -->
        <div class="col-md-8 mt-5 mt-md-0">
          <h1 class="text-dark font-weight-normal">{{ thePageOne.title }}</h1>

          <div
            class="lead text-dark mt-4"
            v-html="Dom.RichText.asHtml(thePageOne.small_text)"
          ></div>

          <hr class="border-gray-200 border-2 my-5" />

          <div
            class="text-dark"
            v-html="Dom.RichText.asHtml(thePageOne.full_text)"
          ></div>

          <div
            class="rounded bg-white shadow-light-sm d-flex flex-column flex-lg-row align-items-center mt-6 p-5"
          >
            <span class="lead text-dark text-center text-lg-left mb-4 mb-lg-0">
              Interested?
            </span>

            <NuxtLink
              :to="`/contact/`"
              class="btn btn-purple text-uppercase-bold-sm hover-lift-light ml-lg-auto"
            >
              Contact us
            </NuxtLink>
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
import _ from "lodash";
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import PrismicDOM from "prismic-dom";
export default {
  data: function () {
    return {
      solutions: {},

      document: {
        title: "",
      },
    };
  },
  mounted() {},
  async asyncData({ app, context, error, req, params, query, store }) {
    try {
      const api = await app.$Prismic.getApi(app.$PrismicConfig.apiEndpoint, {
        req,
      });

      //   const result = await api.getByUID('blog_post', params.id,{ lang : store.state.language.lang })

      const result = await api.getSingle("solutions");
      let solutions = result.data;

      const solutions_all = {
        sales_enablement: {
          title: solutions.sales_enablement_title,
          items: solutions.enablement_items,
        },
        sales_operations: {
          title: solutions.sales_operations_title,
          items: solutions.operations_items,
        },
        sales_transformation: {
          title: solutions.sales_transformation_title,
          items: solutions.transformation_items,
        },
        subscription_service: {
          title: solutions.sub_service_title,
          items: solutions.sub_service_items,
        },
      };

      let solsItems = [
        ...solutions_all.sales_enablement.items,
        ...solutions_all.sales_operations.items,
        ...solutions_all.sales_transformation.items,
        ...solutions_all.subscription_service.items,
      ];

      let thePageOne = _.filter(solsItems, function (o) {
        return o.url === params.id;
      });

      if (!_.get(thePageOne, "[0].url")) {
        error({ statusCode: 404, message: "Solution not found" });
      } else {
        return {
          thePageOne: thePageOne[0],
          allSols: solutions_all,
          uid: params.id,
        };
      }
    } catch (e) {
      error({ statusCode: 404, message: "Solution not found" });
    }
  },
};
</script>