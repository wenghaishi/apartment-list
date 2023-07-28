<template>
  <div>
    <form action="" class="flex flex-col text-2xl items-center justify-center h-full gap-9">
        <h1 class="italic text-slate-600">Login to your account</h1>
        <input type="text" placeholder="Email" class="p-2 border-2 rounded-lg focus:outline-none w-1/2 max-w-sm">
        <input type="password" placeholder="Password" class="p-2 border-2 rounded-lg focus:outline-none w-1/2 max-w-sm">
        <button class="bg-red-500 text-white px-14 py-2 rounded-lg">Submit</button>
        <NuxtLink to="/signup" class="text-sm">New user?</NuxtLink>
      </form>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>