<template>
  <div class="text-center text-3xl">
    Account created id: {{ id }}
  </div>
</template>

<script setup>
  const {id} = useRoute().params
</script>

<style lang="scss" scoped>

</style>