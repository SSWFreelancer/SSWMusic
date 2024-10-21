<template>
  <div id="app">
    <div class="wrapper">
      <Aside />
      <main>
        <transition name="slide-fade">
          <router-view />
        </transition>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Aside from "./components/Aside.vue";
@Component({
  components: {
    Aside,
  },
})
export default class App extends Vue {
}
</script>

<style lang="sass" scoped>
.slide-fade-enter-active
  transition: all .3s ease
.slide-fade-leave-active
  transition: all .3s ease
.slide-fade-enter, .slide-fade-leave-to
  transform: translateX(100%)
  opacity: 0
.slide-fade-enter-to
  transform: translateX(0)
  opacity: 1
</style>