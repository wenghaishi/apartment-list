<template>
  <div class="flex lg:flex-row flex-col mx-20 my-4">
    <div class="lg:w-3/5 h-screen">
      <h1 class="text-left text-4xl my-6">{{ apartment.address }}</h1>
      <img :src="apartment.imageUrl" :alt="`Image of ${apartment.address}`" class="h-3/5 w-full object-cover rounded-xl"/>
      <h2 class="mt-4 italic text-2xl">Floor: {{ apartment.floor }}</h2>
      <h2 class="mt-4 italic text-2xl">Door Number: {{ apartment.doorNumber }}</h2>
      <p class="mt-4 italic text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div class="pl-10 lg:w-4/12 h-full mt-20 lg:fixed right-20">
      <div class=" shadow-md rounded-xl mt-2 w-full border-2 h-96 flex flex-col items-center justify-center">
        <label for="items" class="mb-10 text-2xl">Add a new item</label>
        <form action="" class="flex flex-col items-center justify-center">
          <select id="items" name="items" class="w-60 h-12 border-2 rounded-lg focus:outline-none p-1 mb-8">
            <option value="table" class="w-full">Table</option>
            <option value="chair" class="w-full">Chair</option>
            <option value="Sofa" class="w-full">Sofa</option>
            <option value="fridge" class="w-full">Frige</option>
          </select>
          <input type="number" class="w-60 h-12 border-2 rounded-lg focus:outline-none p-2" placeholder="Amount to add">
          <button class="w-60 bg-red-500 py-3 rounded-lg mt-8 text-white">Add Item</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { id } = useRoute().params
  const { data: apartment } = await useFetch(`http://localhost:3000/api/apartments/${id}`);
</script>

<style lang="scss" scoped>

</style>