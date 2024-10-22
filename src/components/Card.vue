<template>
    <div class="card" :class="{ 'active': isActive }">
        <div class="card__left" @click="toggleActive">
            <div class="card__image">
                <img v-if="item.image" :src="item.image" alt="">
                <img v-else src="@/assets/images/mp3.webp" alt="">
            </div>
            <div class="card__text">
                <p>
                    {{ item.name }}
                </p>
                <span>
                    {{ item.singer }}
                </span>
            </div>
        </div>
        <div class="card__player" :class="{ 'active': isActive }">
            <audio ref="audio" @timeupdate="updateCurrentTime" @ended="onEnd" @loadedmetadata="updateDuration">
                <source :src="item.source" type="audio/mpeg">
            </audio>
            <div class="card__actions">
                <div class="card__button" @click="playPrev">
                    <font-awesome-icon :icon="['fas', 'backward']" />
                </div>
                <div class="card__play" :class="isPlaying ? 'active' : ''" @click="togglePlay">
                    <font-awesome-icon :icon="['fas', 'play']" />
                    <font-awesome-icon :icon="['fas', 'pause']" />
                </div>
                <div class="card__button" @click="playNext">
                    <font-awesome-icon :icon="['fas', 'forward']" />
                </div>
            </div>
            <div class="card__time">
                <span>{{ formattedCurrentTime }}</span>
                <p @click="updateTime">
                    <b :style="{ width: progressBarWidth }"></b>
                </p>
                <span>{{ formattedDuration }}</span>
            </div>
        </div>
        <div class="card__right">
            <div class="card__repeat" @click="toggleRepeat" :class="{ active: isRepeatActive }">
                <font-awesome-icon :icon="['fas', 'repeat']" />
            </div>
            <div class="card__fav" :class="{ 'checked': isFavouriteInVuex }" @click="toggleFavourite">
                <font-awesome-icon :icon="['fas', 'heart']" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { IMusic } from "@/mixins/index"

@Component
export default class Card extends Vue {
    @Prop() item!: IMusic;
    isPlaying = false;
    currentTime = 0;
    duration = 0;
    isRepeatActive = false; 
    isActive = false

    get isFavouriteInVuex() {
        return this.$store.getters.isFavorite(this.item.id);
    }

    toggleFavourite() {
        this.$store.dispatch('toggleFavorite', this.item);
    }

    get formattedDuration() {
        return this.duration ? this.formatTime(this.duration) : "0:00";
    }

    get formattedCurrentTime() {
        return this.formatTime(this.currentTime);
    }

    get progressBarWidth() {
        return this.duration ? `${(this.currentTime / this.duration) * 100}%` : '0%';
    }
    toggleActive(){
        const audio = this.$refs.audio as HTMLAudioElement;        
        audio.play();
        this.pauseOtherAudios(audio);
        this.isActive = true;
        this.isPlaying = true
    }
    togglePlay() {
        const audio = this.$refs.audio as HTMLAudioElement;
        if (this.isPlaying) {
            audio.pause();
            this.isPlaying = false
        } else {
            audio.play();
            this.pauseOtherAudios(audio);
            this.isPlaying = true
        }
    }
    
    pauseOtherAudios(currentAudio: HTMLAudioElement) {
        const audioPlayers = this.$parent?.$children;
        audioPlayers?.forEach((player: any) => {
        const audio = player.$refs.audio as HTMLAudioElement;
            if (audio && audio !== currentAudio) {
                audio.pause();
                audio.currentTime = 0;
                player.isPlaying = false;
                player.isActive = false;
            }
        });
    }

    playPrev() {
        const audioPlayers = this.$parent?.$children  as Array<Card>;
        const currentAudio = this.$refs.audio as HTMLAudioElement;
        if (audioPlayers) {
            const currentIndex = audioPlayers.findIndex((player: any) => {
                const audio = player.$refs.audio as HTMLAudioElement;
                return audio === currentAudio;
            });
            if (currentIndex === -1) return;
            const prevIndex = currentIndex === 0 ? audioPlayers.length - 1 : currentIndex - 1;
            const prevPlayer = audioPlayers[prevIndex];
            const prevAudio = prevPlayer.$refs.audio as HTMLAudioElement;
            currentAudio.pause();
            currentAudio.currentTime = 0;
            this.isPlaying = false;
            this.isActive = false;
            prevAudio.play();
            prevAudio.currentTime = 0;
            prevPlayer.isActive = true;
            prevPlayer.isPlaying = true;
        }
    }

    playNext() {
        const audioPlayers = this.$parent?.$children  as Array<Card>;
        const currentAudio = this.$refs.audio as HTMLAudioElement;
        if (audioPlayers) {
            const currentIndex = audioPlayers.findIndex((player: any) => {
                const audio = player.$refs.audio as HTMLAudioElement;
                return audio === currentAudio;
            });
            if (currentIndex === -1) return;
            const nextIndex = currentIndex === audioPlayers.length - 1 ? 0 : currentIndex + 1;
            const nextPlayer = audioPlayers[nextIndex];
            const nextAudio = nextPlayer.$refs.audio as HTMLAudioElement;
            currentAudio.pause();
            currentAudio.currentTime = 0;
            this.isPlaying = false;
            this.isActive = false;
            nextAudio.play();
            nextAudio.currentTime = 0;
            nextPlayer.isActive = true;
            nextPlayer.isPlaying = true;
        }
    }

    updateCurrentTime() {
        const audio = this.$refs.audio as HTMLAudioElement;
        this.currentTime = audio.currentTime;
    }
    toggleRepeat() {
        this.isRepeatActive = !this.isRepeatActive;
    }
    onEnd() {
        const currentAudio = this.$refs.audio as HTMLAudioElement;
        if (this.isRepeatActive) {
            currentAudio.play();
            this.currentTime = 0;
            this.isPlaying = true;
        } else {
            currentAudio.pause();
            this.isPlaying = false;
            this.currentTime = 0;
        }
    }

    updateDuration() {
        const audio = this.$refs.audio as HTMLAudioElement;
        this.duration = audio.duration;
    }

    formatTime(seconds: number) {
        if (isNaN(seconds) || seconds < 0) {
            return "0:00";
        }
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    updateTime(event: MouseEvent) {
        const progressBar = event.currentTarget as HTMLElement;
        const offsetX = event.offsetX;
        const width = progressBar.clientWidth;
        const newTime = (offsetX / width) * this.duration;
        const audio = this.$refs.audio as HTMLAudioElement;
        audio.currentTime = newTime;
        this.currentTime = newTime;
    }

}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/card.sass'
</style>