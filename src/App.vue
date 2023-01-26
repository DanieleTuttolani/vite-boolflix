<script>
import axios from 'axios';
export default {
    data() {
        return {
            apiKey: "api_key=2c4e7669f9c4ac5e5a6abdb4ee0e6575",
            movieApi: `https://api.themoviedb.org/3/search/tv?api_key=2c4e7669f9c4ac5e5a6abdb4ee0e6575&page=1&query=`,
            movieList: [],
            movieTxtValue: ''
        }
    },
    methods: {
        mountValue(value) {
            this.movieTxtValue = value
        },
        callApi() {

            axios.get(this.movieApi + `${this.movieTxtValue}`).then(res => {
                this.movieList = res.data.results
            })
        }
    }
}
</script>

<template>
    <div class="container">
        <form @submit.prevent="callApi">
            <input v-model='this.movieTxtValue' type="text" placeholder="cerca un film o una serie ">
            <button :class="{ ' disabled': !movieList.length }" class="btn btn-primary">cerca</button>
            <ul>
                <li v-for="movie in  movieList">{{ movie.name }}{{ movie.original_name }}{{ movie.original_language }}{{
                    movie.vote_average
                }}</li>
            </ul>
            <p>titolo titolo origninale lingua voto</p>
        </form>
    </div>
</template>

<style lang="scss" >
@use './assets/scss/style.scss' as *;
</style>
