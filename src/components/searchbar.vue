<script>
export default {
    data() {
        return {
            txtValue: ""
        }
    },
    props: {

    },
    emits: ['txt-value-change']
}
</script>
<template>
    <div class="container">
        <form @submit.prevent="$emit('txt-value-change', txtValue)">
            <input v-model='txtValue' type="text">
            <button :class="{ ' disabled': !txtValue.length }" class="btn btn-primary">cerca</button>
        </form>
    </div>
</template>

<style>

</style>