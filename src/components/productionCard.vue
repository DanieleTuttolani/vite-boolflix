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
        <div class="row row-cols-6 gy-3">
            <div v-for="production in List" class="col p-0 text-light">
                <div class="overlay h-100">
                    <div class="titles text-center ">
                        <p>Titolo :</p>
                        <p class="fs-3">{{ production.title || production.name }}</p>
                        <p>Titolo originale:</p>
                        <p class="fs-3"> {{ production.original_title || production.original_name }}</p>
                    </div>
                    <div class="lang-info-wrapper text-center mb-4">
                        <img v-if="production.original_language === 'en'" src="../assets/img/en.png" alt="ENG flag">
                        <img v-else-if="production.original_language === 'it'" src="../assets/img/it.png"
                            alt="ITA flag">
                        <i v-else="production.original_language != 'it' && 'en'" class="bi bi-flag-fill"></i>
                        <p>{{ production.original_language }}</p>
                    </div>
                    <p>Voto medio utenza : {{ production.vote_average }}</p>

                </div>
                <img :src='store.ImgBaseLink + `${production.poster_path}`' alt="poster">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.col {
    height: 400px;
    position: relative;

    img {
        height: 100%;
        position: relative;
        z-index: -1;
        width: 100%;
    }

    &:hover .overlay {
        display: block;
        box-shadow: inset 0 23px 40px rgb(65, 0, 0);
    }

    .overlay {
        background-color: rgba(48, 48, 48, 0.952);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        display: none;
        cursor: pointer;

        .lang-info-wrapper {
            margin: 0 auto;
            height: 50px;
            width: 100px;

            img {
                z-index: 0;
            }
        }
    }

}
</style>