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
            <input v-model.trim='txtValue' type="text" placeholder="cerca">
            <button :class="{ ' disabled': !txtValue.length }" class="btn btn-primary">cerca</button>
        </form>
    </div>
</template>

<style>

</style>