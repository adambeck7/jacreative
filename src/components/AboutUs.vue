<template>
  <div class>
    <!-- <div class="flex flex-row-reverse bg-grey-lighter">
      At j+a creative, we value:
      clean responsive designs
    </div>-->
    <section class="font-sans antialiased w-full bg-grey-lighter py-8">
      <div class="container mx-auto">
        <div class="py-8 w-4/5 mx-auto">
          <h1 class="text-indigo-darkest text-4xl text-center font-normal">
            Clean designs that will bring
            your ideas to
            <span
              class="cssanimation leBeat sequence"
            >life</span>
          </h1>
          <h4
            class="font-thin mt-6 text-2xl text-justify leading-tight"
          >Whether you bring us an idea or a design we'll turn it into a reality. We love turning the abstract into the concrete. We help demystify web site creation.</h4>
          <div class="flex flex-wrap mt-24">
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pt-0 relative bg-white">
              <img src="../assets/fluxrmobile.jpg" class="aspect-ratio-camera removePadding">
              <button
                class="hover:bg-transparent bg-blue text-white font-bold absolute absoluteButton hover:text-white py-2 px-4 border hover:border-white border-transparent rounded"
              >Mobile</button>
            </div>
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pt-0 relative bg-white">
              <img src="../assets/analytics.png" class="aspect-ratio-camera removePadding">
              <button
                class="hover:bg-transparent bg-blue text-white font-semibold absolute absoluteButton hover:text-blue py-2 px-4 border hover:border-blue border-transparent rounded"
              >Analytics</button>
            </div>
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pt-0 relative bg-white -mt-1">
              <img src="../assets/web.png" class="aspect-ratio-camera removePadding">
              <button
                class="hover:bg-transparent bg-blue text-white font-semibold absolute absoluteButton hover:text-blue py-2 px-4 border hover:border-blue border-transparent rounded"
              >Web</button>
            </div>
            <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 pt-0 relative bg-white -mt-1">
              <img src="../assets/datavis.png" class="aspect-ratio-camera removePadding">
              <button
                class="hover:bg-transparent bg-blue text-white font-semibold absolute absoluteButton hover:text-blue py-2 px-4 border hover:border-blue border-transparent rounded"
              >Data Visualization</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import "../assets/cssanimation/letteranimation.js";
export default {
  name: "AboutUs",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/cssanimation/cssanimation.css";
.removePadding {
  padding: 0;
  margin: 0;
}
.absoluteButton {
  left: 39%;
  top: 41%;
  z-index: 2;
}
</style>
