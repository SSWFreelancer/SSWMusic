<template>
  <div :class="['aside', { 'hide': asidehide, 'active': menuhide }]">
    <div @click="asideToggle" class="aside__toggle">
      <font-awesome-icon :icon="['fas', 'down-left-and-up-right-to-center']" />
      <font-awesome-icon :icon="['fas', 'up-right-and-down-left-from-center']" />
    </div>
    <router-link to="/" class="aside__logo"> SSW <span>Music</span> </router-link>
    <div class="aside__burger" @click="menuToggle"><span></span></div>
    <nav class="aside__nav">
      <div @click="removeMenu">
        <router-link to="/">
        <b><font-awesome-icon :icon="['fas', 'house']" /></b>
        <span>Главная</span>
      </router-link>
      </div>
      <div @click="removeMenu">
        <router-link to="/favourites">
          <b><font-awesome-icon :icon="['fas', 'heart']" /></b>
          <span>Избранное</span>
        </router-link>
      </div>

    </nav>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faHouse, faDownLeftAndUpRightToCenter, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
library.add(faHeart, faHouse, faDownLeftAndUpRightToCenter, faUpRightAndDownLeftFromCenter);


@Component
export default class Aside extends Vue {
  asidehide: boolean = false;
  asideToggle() {
    this.asidehide = !this.asidehide;
  }

  menuhide: boolean = false;
  menuToggle() {
    this.menuhide = !this.menuhide;
  }

  removeMenu() {
    this.menuhide = false;
  }
  
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/aside.sass"
</style>
