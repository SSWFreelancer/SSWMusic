<template>
    <div class="cards">
        <Card v-for="item in items" :key="item.id" :item="item"/>
        <!-- <Player
            :source="item.source"
            :isPlaying="isPlaying"
            @toggle-play="togglePlay"
            @play-prev="playPrev"
            @play-next="playNext"
            @update-current-time="updateCurrentTime"
            @update-duration="updateDuration"
            @audio-ended="onEnd"
        /> -->
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IMusic } from "@/mixins/index";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faPlay, faPause, faBackward, faForward, faRepeat } from '@fortawesome/free-solid-svg-icons';
library.add(faHouse, faPlay, faPause, faBackward, faForward, faRepeat);
import Card from "./Card.vue";
import Player from "@/components/Player.vue";
@Component({
    components:{
        Card,
        Player
    }
})
export default class Cards extends Vue {
    @Prop() items!: IMusic[];
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/cards.sass'
</style>