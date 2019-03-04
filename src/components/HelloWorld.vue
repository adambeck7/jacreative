<template>
  <div class>
    <div class="bg-black h-screen flexMiddle">
      <div class="text-banner text-grey-lighter font-medium w-full">
        j
        <span class="text-red font-extrabold">+</span>
        a creative
        <div class>
          <div
            class="cssanimation leFadeIn sequence text-grey-lighter font-normal mt-4 text-5xl"
          >Reveal your potential</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import "../assets/cssanimation/letteranimation.js";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/cssanimation/cssanimation.css";
.flexMiddle {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
