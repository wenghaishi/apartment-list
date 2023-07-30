<template >
  <div class="flex flex-col items-center mt-12 justify-center h-full mx-20 md:p-20 self-center">
    <NuxtLink to="/apartments" class="flex flex-row justify-evenly items-center mb-12">
      <h1 class="text-4xl md:text-6xl font-semibold ">ApartmentPro</h1>
      <img :src="houseSvg" class="md:h-40 md:w-40 w-24 h-24"/>
    </NuxtLink>
    <h2 class="text-xl md:text-3xl mb-12 underline-offset-2 italic">Streamlined Inventory Management for Apartments</h2>
    <p class="md:text-xl">Welcome to ApartmentPro - Your Comprehensive Inventory Management Solution for Apartments!
    ApartmentPro is a powerful web app designed to simplify and enhance the management of inventory 
    lists for apartments. With a sleek interface and intuitive features, it empowers users to efficiently 
    track and maintain their apartment inventory with ease.</p>
  </div>
</template>

<script setup>
import houseSvg from '~/assets/house.svg';
</script>

<style scoped>

</style>