<script>
import { store } from '../assets/data/store';
export default {
    data() {
        return {
            store
        }
    }
}
</script>
<template>
    <h1>Serie tv</h1>
    <ul>
        <li v-for="serie in store.seriesList" :key="serie.name">
            <img :src='store.ImgBaseLink + `${serie.poster_path}`' alt="serie poster">
            <p>{{ serie.name }}</p>
            <p>{{ serie.original_name }}</p>
            <img v-if="serie.original_language === 'en'" src="../assets/img/en.png" alt="ENG flag">
            <img v-else-if="serie.original_language === 'it'" src="../assets/img/it.png" alt="ITA flag">
            <i v-else="serie.original_language != 'it' && 'en'" class="bi bi-flag-fill"></i>
            <p>{{ serie.original_language }}</p>
            <p>{{ serie.vote_average }}</p>

        </li>
    </ul>
</template>
<style>

</style>