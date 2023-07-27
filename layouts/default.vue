<template>
  <header class="shadow-sm bg-white">
    <nav >
      <div class="p-4 flex flex-row justify-between px-10 items-center h-16">
        <div class="flex flex-row gap-10 items-center">
          <NuxtLink to="/" class="flex flex-row gap-3 items-center"><img src="/house.svg" class="h-10 w-10"/>ApartmentPro</NuxtLink>
          <NuxtLink to="/apartments">Apartments</NuxtLink>
        </div>

        <div class="flex flex-row gap-2 items-center justify-center">
          <input type="text" placeholder="Search" class="border-2 border-slate-500 focus:outline-none rounded-md p-2 h-8"/>
          <img src="/search.svg" class="h-7 w-7"/>
        </div>

        <div class="flex flex-row gap-6 items-center">
          <NuxtLink to="login">Login</NuxtLink>
          <NuxtLink class="bg-red-500 py-2 px-6 rounded-lg text-white" to="/signup">Get Started</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
  <div>
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>