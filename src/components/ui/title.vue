<template>
    <div class="title">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Title extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/ui/title.sass'
</style>