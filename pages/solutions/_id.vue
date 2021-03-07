<template>
  <div>
    <Nav />

    <section class="pt-5 pb-5 mb-10 bg-light text-center">
        <div class="container">
            <div class="row">
                <div class="col">
                    In progress...
                    {{uid}}
                </div>
            </div>
        </div>
    </section>

    <Footer />
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      document: {
        title: ''
      }
    }
  },
  async asyncData({ app, context, error, req, params, query, store }) {
    try {
    //   const api = await app.$Prismic.getApi(app.$PrismicConfig.apiEndpoint, {
    //     req
    //   })

    //   const result = await api.getByUID('blog_post', params.id,{ lang : store.state.language.lang })
      return {
        // document: result.data,
        uid: params.id,
        // documentId: result.id
      }
    } catch (e) {
      console.log('Error', e)
    }
  }
}
</script>