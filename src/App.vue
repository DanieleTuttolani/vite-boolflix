<script>
import axios from 'axios';
import { store } from './assets/data/store';
import appheader from './components/Appheader.vue';
import Appmain from './components/Appmain.vue'
export default {
    data() {
        return {
            store,
            apiKey: "api_key=2c4e7669f9c4ac5e5a6abdb4ee0e6575",
            movieApi: `https://api.themoviedb.org/3/search/movie?api_key=2c4e7669f9c4ac5e5a6abdb4ee0e6575&page=1&query=`,
            seriesApi: 'https://api.themoviedb.org/3/search/tv?api_key=2c4e7669f9c4ac5e5a6abdb4ee0e6575&page=1&query='

        }
    },
    methods: {
        callApi(txtValue) {
            store.resultTxtValue = txtValue
            axios.get(this.movieApi + `${store.resultTxtValue}`).then(res => {
                store.movieList = res.data.results
            })
            axios.get(this.seriesApi + `${store.resultTxtValue}`).then(res => {
                store.seriesList = res.data.results
            })
        }
    },
    components: {
        appheader, Appmain
    }
}
</script>

<template>
    <appheader @new-search="callApi" />
    <Appmain />
</template>

<style lang="scss" >
@use './assets/scss/style.scss' as *;
</style>
