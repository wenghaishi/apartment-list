<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-4 text-2xl">
    <div v-for="a in apartments" :key="a._id">
      <NuxtLink :to="`/apartments/${a._id}`" class="w-full h-80">
        <img :src="a.imageUrl" :alt="`Image of ${a.address}`" class="h-80 w-full object-cover rounded-lg"/>
      </NuxtLink>
      <h1>{{ a.address }}</h1>
    </div>
  </div>
</template>

<script setup>
  const { data: apartments } = await useFetch('https://apartment-list.vercel.app/api/apartments');
</script>

<style scoped>
</style>
