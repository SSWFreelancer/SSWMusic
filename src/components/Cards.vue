<template>
    <div class="cards">
        <Card v-for="item in items" :key="item.id" :item="item" @pause-other-audios="pauseOtherAudios"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IMusic } from "@/mixins/index";
import Card from "./Card.vue";
@Component({
    components:{
        Card
    }
})
export default class Cards extends Vue {
    @Prop() items!: IMusic[];
    pauseOtherAudios(currentAudio: HTMLAudioElement) {
        const audioPlayers = this.$children as AudioPlayer[];
        audioPlayers.forEach(player => {
            const audio = player.$refs.audio as HTMLAudioElement;
            if (audio && audio !== currentAudio) {
                audio.pause();
                audio.currentTime = 0;
                player.isPlaying = false;
            }
        });
    }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/cards.sass'
</style>