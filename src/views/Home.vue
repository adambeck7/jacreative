<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld/>
    <AboutUs/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AboutUs from "@/components/AboutUs.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    AboutUs
  }
};
</script>
