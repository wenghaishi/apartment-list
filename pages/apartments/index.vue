<template>
  <div class="grid grid-cols-3 gap-4 mx-4 text-2xl">
    <div v-for="a in apartments" :key="a._id">
      <NuxtLink :to="`/apartments/${a._id}`" class="w-full h-80">
        <img :src="a.imageUrl" :alt="`Image of ${a.name}`" class="h-80 w-full object-cover"/>
      </NuxtLink>
      {{ a.address }}
    </div>
  </div>
</template>

<script setup>
  const { data: apartments } = await useFetch('http://localhost:3000/api/apartments');
</script>

<style scoped>
</style>
