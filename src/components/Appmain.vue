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
    }
}
</script>

<template>
    <p v-if="!store.movieList.length">cerca un titolo</p>
    <div v-else>
        <movieSection />
        <seriesSection />
    </div>
</template>

<style>

</style>