<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <nav class="flex items-center justify-between flex-wrap bg-black p-5">
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm">
          <router-link
            to="/"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4"
          >Home</router-link>
          <router-link
            to="/"
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-grey-lighter hover:text-white mr-4"
          >About</router-link>
        </div>
      </div>
    </nav>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
