<script>
import searchbar from './searchbar.vue';
export default {
    components: { searchbar },
    emits: ['new-search']
}
</script>
<template>
    <header class="d-flex justify-content-between aling-items-center">
        <div class="logo-section text-danger">
            <h1>BoolFlix</h1>
            <p>Powered by Daniele</p>
        </div>
        <div class="search-section">
            <searchbar @txt-value-change="$emit('new-search', $event)" />
        </div>
    </header>
</template>
<style lang="scss" scoped>
header {
    background-color: rgba(31, 31, 31, 0.911);
    box-shadow: 0 23px 40px rgba(255, 0, 0, 30%);
    margin-bottom: 10rem;

    h1 {
        font-size: 5rem
    }

    .search-section {
        align-self: center;
    }
}
</style>