<template>
<div class="player">
    <audio ref="audio" @timeupdate="onTimeUpdate" @ended="onEnd" @loadedmetadata="onMetadataLoaded">
    <source :src="source" type="audio/mpeg" />
    </audio>
    <div class="player__actions">
    <div class="player__button" @click="$emit('play-prev')">
        <font-awesome-icon :icon="['fas', 'backward']" />
    </div>
    <div class="player__play" :class="isPlaying ? 'active' : ''" @click="togglePlay">
        <font-awesome-icon :icon="['fas', 'play']" />
        <font-awesome-icon :icon="['fas', 'pause']" />
    </div>
    <div class="player__button" @click="$emit('play-next')">
        <font-awesome-icon :icon="['fas', 'forward']" />
    </div>
    </div>
    <div class="player__time">
    <span>{{ formattedCurrentTime }}</span>
    <p @click="updateTime">
        <b :style="{ width: progressBarWidth }"></b>
    </p>
    <span>{{ formattedDuration }}</span>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Player extends Vue {
@Prop() source!: string;
@Prop({ default: false }) isPlaying!: boolean;
}
</script>

<style scoped lang="sass">
@import '@/assets/sass/player.sass'
</style>
