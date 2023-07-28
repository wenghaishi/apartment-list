<template>
  <div class="h-screen w-screen flex flex-row">
    <div class="w-3/5 h-full bg-red-500 hidden md:flex flex-col justify-center items-center gap-10">
      <img :src="houseWhiteSvg" class="md:h-40 md:w-40 w-24 h-24"/>
      <h1 class="text-white lg:text-4xl italic md:text-2xl">Step 1: Sign up as a user</h1>
      <h1 class="text-white lg:text-4xl italic md:text-2xl">Step 2: Verify your email</h1>
      <h1 class="text-white lg:text-4xl italic md:text-2xl">Step 3: Start using apartmentPro!</h1>
    </div>
    <div class="md:w-2/5 h-full w-full">
      <form @submit.prevent="handleSubmit" class="flex flex-col text-2xl items-center justify-center h-full gap-9">
        <h1 class="italic text-slate-600">Get Started!</h1>
        <input type="text" v-model="formData.email" placeholder="Email" class="p-2 border-2 rounded-lg focus:outline-none w-1/2">
        <input type="password" v-model="formData.password" placeholder="Password" class="p-2 border-2 rounded-lg focus:outline-none w-1/2">
        <input type="text" v-model="formData.name" placeholder="Name" class="p-2 border-2 rounded-lg focus:outline-none w-1/2">
        <button type="submit" class="bg-red-500 text-white px-10 py-2 rounded-lg">Submit</button>
        <NuxtLink to="/login" class="text-sm">Already have an account?</NuxtLink>
      </form>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
  layout: "custom"
})
import { ref } from 'vue'

const formData = ref({
    name: '',
    email: '',
    password: '',
})

const handleSubmit= async () => {
    const { data: responseData } = await useFetch('http://localhost:3000/api/users/create', {
        method: 'post',
        body: { 
          name: formData.value.name,
          email: formData.value.email,
          password: formData.value.password, 
        }
    })

    console.log(responseData.value)
    if (responseData) {
      console.log(responseData._rawValue._id)
      await useRouter().push(`/users/${responseData._rawValue._id}`)
    }
}

import houseWhiteSvg from '~/assets/house-white.svg';


</script>

<style lang="scss" scoped>

</style>