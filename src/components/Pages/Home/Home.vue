<template>
  <div class="home">
    <Title>Ваш плейлист</Title>
    <Cards :items="this.musics"/>
  </div>
</template>
<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Title from "@/components/ui/title.vue";
import Musics from "@/mixins/musics";
import Cards from "@/components/Cards.vue";
import Player from "@/components/Player.vue";
@Component({
  components: {
    Title,
    Cards,
  },
})
export default class Home extends Mixins(
  Musics
) {

}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/pages/Home/home.sass"
</style>
