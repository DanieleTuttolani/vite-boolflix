<script>
import { store } from '../assets/data/store';
export default {
    data() {
        return {
            store
        }
    },
    props: {
        List: Array,
    }
}
</script>
<template>
    <div class="container-fluid">
        <div class="row row-cols-5">
            <div v-for="production in List" class="col p-0">
                <div class="overlay h-100">
                    <p>Titolo :{{ production.title || production.name }}</p>
                    <p>Titolo :{{ production.original_title || production.original_name }}</p>
                    <div class="img-wrapper text-center ">
                        <img v-if="production.original_language === 'en'" src="../assets/img/en.png" alt="ENG flag">
                        <img v-else-if="production.original_language === 'it'" src="../assets/img/it.png"
                            alt="ITA flag">
                        <i v-else="production.original_language != 'it' && 'en'" class="bi bi-flag-fill"></i>
                        <p>{{ production.original_language }}</p>
                    </div>


                </div>
                <img :src='store.ImgBaseLink + `${production.poster_path}`' class="img-fluid" alt="poster">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.overlay {
    background-color: red;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    display: none;

    &:hover {
        display: block;
        cursor: pointer;
    }

    .img-wrapper {
        margin: 0 auto;
        height: 50px;
        width: 100px;

        img {
            z-index: 0;
        }
    }
}

.col {
    height: 400px;
    border: 2px solid gray;
    position: relative;

    img {
        height: 100%;
        position: relative;
        z-index: -1;
    }
}
</style>