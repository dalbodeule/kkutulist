<template>
  <div>
    <headers/>
    <div class="ad">
      <!-- On Demand-main -->
      <adsbygoogle ad-slot="4386636415"/>
      <p>google AD</p>
    </div>
    <div id="contents" class="container">
      <nuxt/>
    </div>
    <div style="margin-top: -20px" class="ad">
      <adsbygoogle ad-slot="9403901631"/>
      <p>google AD</p>
    </div>
    <footers/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'

// import Headers from '~/components/Header.vue'
// import Footers from '~/components/Footer.vue'

export default {
  /* components: {
    Headers,
    Footers
  } */
}
</script>
