<template>
    <div class="favourites">
        <Title>Избранное</Title>
        <Cards v-if="filteredMusics.length" :items="filteredMusics"/>
        <p v-else>
            Пока нет любимых треков
        </p>
    </div>
</template>
<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import Title from "@/components/ui/title.vue";
import Musics from "@/mixins/musics";
import Cards from "@/components/Cards.vue";
@Component({
components: {
    Title,
    Cards
},
})

export default class Favourites extends Mixins(
    Musics
) {
    get filteredMusics() {
        return this.musics.filter(item => this.$store.getters.isFavorite(item.id));
    }
}
</script>

<style lang="sass" scoped>
@import "@/assets/sass/pages/Favourites/favourites.sass"
</style>