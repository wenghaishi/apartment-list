<template>
  <div>
    this is the aprtment page
    {{ product }}
  </div>
</template>

<script setup>
  const {data: product} = await useFetch('http://localhost:3002/api/apartments')
</script>

<style lang="scss" scoped>

</style>