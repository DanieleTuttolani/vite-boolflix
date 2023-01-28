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
    <div class="container-fluid">
        <form @submit.prevent="$emit('txt-value-change', txtValue)">
            <input v-model.trim='txtValue' type="text" placeholder="Cosa vuoi Guardare?">
            <button :class="{ ' disabled': !txtValue.length }" class="btn btn-danger">Cerca</button>
        </form>
    </div>
</template>

<style scoped>
button {
    margin: 1rem;
    padding: 5px 20px;
}
</style>