<script>
import searchbar from './searchbar.vue';
export default {
    components: { searchbar },
    emits: ['new-search']
}
</script>
<template>
    <searchbar @txt-value-change="$emit('new-search', $event)" />
</template>
<style>

</style>