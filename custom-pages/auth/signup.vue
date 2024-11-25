<script setup lang="ts">

onMounted(async () => {
    console.log('mounted')
    const res = testServices.testGetPost()
    console.log(res)
})

</script>

<template>
<div class="">this is signup page</div>
</template>

<style scoped>

</style>