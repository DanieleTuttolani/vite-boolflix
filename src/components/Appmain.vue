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

    <p v-if="!store.movieList.length">cerca un titolo</p>

    <ul v-else>
        <li v-for="movie in store.movieList">
            <p>{{ movie.title }}</p>
            <p>{{ movie.original_title }}</p>
            <img v-if="movie.original_language === 'en'" src="../assets/img/en.png" alt="ENG flag">
            <img v-else-if="movie.original_language === 'it'" src="../assets/img/it.png" alt="ITA flag">
            <i v-else="movie.original_language != 'it' && 'en'" class="bi bi-flag-fill"></i>
            <p>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>

        </li>
    </ul>
</template>

<style>

</style>