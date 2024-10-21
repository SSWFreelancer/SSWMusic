<template>
    <div class="cards">
        <Card v-for="item in items" :key="item.id" :item="item"/>
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
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/cards.sass'
</style>