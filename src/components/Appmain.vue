<script>
import { store } from '../assets/data/store';
import movieSection from './movieSection.vue';
import seriesSection from './seriesSection.vue'
export default {
    data() {
        return {
            store
        }
    },
    components: {
        movieSection, seriesSection
    },

}
</script>

<template>
    <div class="text-center" v-if="!store.movieList.length">
        <h1 class="text-light"> Cerca un titolo!</h1>
    </div>
    <div v-else>
        <movieSection />
        <seriesSection />
    </div>
</template>

<style>

</style>