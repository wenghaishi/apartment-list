<template>
  <div class="flex flex-col " @keydown="handleKeyDown">
        <!-- header component -->
    <header class="mb-16">
      <nav class="top-0 fixed z-50 shadow-md bg-white w-screen ">
        <div class="p-4 flex flex-row justify-between px:4 md:px-10 items-center h-16 max-w-screen-2xl">
          <div class="flex flex-row gap-10 items-center">
            <NuxtLink to="/" class="flex flex-row gap-3 items-center"><img :src="houseSvg" class="h-10 w-10"/><h1 class="hidden text-sm md:text-lg lg:flex">ApartmentPro</h1></NuxtLink>
            <NuxtLink to="/apartments" class="text-sm md:text-lg">Apartments</NuxtLink>
          </div>

          <div class="flex-row gap-2 items-center justify-center hidden md:flex">
            <input v-model="formData.name" type="text" placeholder="Apartment  search" class="border-2 border-slate-500 focus:outline-none rounded-md p-2 h-8"/>
            <img :src="searchSvg" @click="handleSearch" class="h-7 cursor-pointer w-7"/>
          </div>

          <div class="flex flex-row gap-6 items-center">
            <NuxtLink to="login" class="text-sm md:text-lg">Login</NuxtLink>
            <NuxtLink class="bg-red-500 py-2 px-2 md:px-6 rounded-lg text-white text-xs md:text-lg" to="/signup">Get Started</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <!-- body -->
    
    <div>
      <slot />
    </div>

    <!-- footer component -->
    <div class="h-14 flex flex-row shadow-md items-center justify-evenly fixed bottom-0 bg-white px-20 border-y w-screen">
      <NuxtLink to="/" class="hidden lg:flex">ApartmentPro</NuxtLink>
      <p>Copyright © 2023 - All right reserved by ApartmentPro Ltd</p>
      <NuxtLink to="/apartments" class="hidden lg:flex">Apartments</NuxtLink>
    </div>
  </div>


</template>

<script setup>
  import houseSvg from '~/assets/house.svg';
  import searchSvg from '~/assets/search.svg';
  const formData = ref({
      name: ''
    })
  const handleSearch = async() => {
    await useRouter().push(`/search-results/${formData.value.name}`)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
</script>

<style lang="scss" scoped>

</style>