<template>

<!-- error modal for max quantity exceeded -->
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-3xl">Error</h3>
    <p class="py-4 text-xl text-red-500 italic">Exceeded max item quantity: 20</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
  <!-- approve add item modal -->
<dialog id="my_modal_4" class="modal">
  <form method="dialog" class="modal-box w-8/12 max-w-5xl">
    <h3 class="font-bold text-4xl text-center mt-4">Preview</h3>
    <div class="flex flex-row mx-14 justify-between">
      <p class="py-4  text-2xl ">Current Items
        <div class="border-2 rounded-xl p-4 mt-4">
          <div v-for="item in inventoryList.items" class="text-xl italic p-2 bor">{{ item.name }} x {{ item.quantity }}</div>
        </div>
      </p>
      <p class="py-4 text-2xl">Items to add
        <div class="border-2 rounded-xl p-4 mt-4">
          <div class="text-xl italic p-2">{{ itemData.itemName}} x {{ itemData.itemQuantity}}</div>
        </div>
      </p>
    </div>

    <p class="py-4 mx-14 text-2xl">Total items
        <div class="border-2 rounded-xl p-4 mt-4">
          <div v-for="item in inventoryList.items" class="text-xl italic p-2 bor">{{ item.name }} x {{ item.quantity }}</div>
          <div class="text-xl italic p-2">{{ itemData.itemName}} x {{ itemData.itemQuantity}}</div>
          <div v-if="currentInventoryQuantity + itemData.itemQuantity > 20" class="text-lg italic p-2 text-red-500">Max items quantity: 20</div>
        </div>
    </p>

    <div class="flex flex-row justify-evenly">
      <!-- if there is a button, it will close the modal -->
      <button @click="handleAddItem" class="bg-red-500 cursor-pointer px-12 py-4 mx-4 rounded-lg text-white">Confirm</button>
      <button class=" px-14 py-4 mx-4 rounded-lg">Close</button>
    </div>
  </form>
</dialog>

  <!-- information display about apartment -->
  <div class="flex lg:flex-row flex-col mx-20 mt-4 mb-20 lg:mb-4" :key="inventoryList">
    <div class="lg:w-3/5">
      <h1 class="text-left text-4xl my-6">{{ apartment.address }}</h1>
      <img :src="apartment.imageUrl" :alt="`Image of ${apartment.address}`" class="h-2/6 w-full object-cover rounded-xl"/>
      <div class="flex flex-row w-full px-1">
        <h2 class="py-2 italic text-2xl mr-6">Floor: {{ apartment.floor }}</h2>
        <h2 class="py-2 italic text-2xl ">Door Number: {{ apartment.doorNumber }}</h2>
      </div>
      <h2 v-if="inventoryList.name" class="italic text-2xl border-2 rounded-lg p-4">
        <h2 class="mb-4 font-semibold">Inventory List name: {{ inventoryList.name }}</h2>
        <h2 class="text-xl">Items:
          <div v-for="item in inventoryList.items" class="my-4">{{ item.name }} x {{ item.quantity }}</div>
        </h2>
      </h2>

      <h2 v-else class="py-2 italic text-2xl border-b-2 text-red-500">No inventory list found</h2>
      <p class="mt-4 italic text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>


    <!-- create new list / add items component -->

    <div v-if="inventoryList.name">
      <div class="lg:pl-10 lg:w-4/12 lg:mt-20 mt-4 lg:fixed flex right-20 bg-white">
        <div class=" shadow-md rounded-xl mt-2 w-full border-2 h-96 flex flex-col items-center justify-center">
          <label for="items" class="mb-10 text-2xl">Add a new item</label>
          <form @submit.prevent action="" class="flex flex-col items-center justify-center">
            <select id="items" name="items" v-model="itemData.itemName" class="w-60 h-12 border-2 rounded-lg focus:outline-none p-1 mb-8">
              <option value="table" class="w-full">Table</option>
              <option value="chair" class="w-full">Chair</option>
              <option value="Sofa" class="w-full">Sofa</option>
              <option value="fridge" class="w-full">Fridge</option>
            </select>
            <input type="number" v-model="itemData.itemQuantity" class="w-60 h-12 border-2 rounded-lg focus:outline-none p-2" placeholder="Amount to add">
            <button type="submit" onclick="my_modal_4.showModal()" class="w-60 bg-red-500 py-3 rounded-lg mt-8 text-white">Add Item</button>
          </form>
        </div>
    </div>
    </div>
    <div v-else>
      <div class="lg:pl-10 lg:w-4/12 h-full mt-20 lg:fixed flex right-20">
      <div class=" shadow-md rounded-xl mt-2 w-full border-2 h-96 flex flex-col items-center justify-center">
        <label for="items" class="mb-10 text-2xl">Create Inventory List</label>
        <form @submit="handleCreateList" action="" class="flex flex-col items-center justify-center">
          <input v-model="formData.name" type="text" class="w-60 h-12 border-2 rounded-lg focus:outline-none p-2" placeholder="List name">
          <button type="submit" class="w-60 bg-red-500 py-3 rounded-lg mt-8 text-white">Create List</button>
        </form>
      </div>
    </div>
    </div>
  </div>
  
</template>

<script setup>
  import { ref } from 'vue'
  import { reactive } from 'vue'

  const { id } = useRoute().params
  const { data: apartment } = await useFetch(`http://localhost:3000/api/apartments/${id}`);
  
  const inventoryList = reactive(apartment._rawValue.inventoryList)
  console.log(inventoryList)
  const currentInventoryQuantity = inventoryList.items.reduce((acc, curr) => {
    return acc + curr.quantity
  }, 0)


  const formData = ref({
    name: ''
  })

  const itemData = ref({
    itemName: "",
    itemQuantity: "",
  })

  

  const handleCreateList = async () => {
    const { data: responseData } = await useFetch(`http://localhost:3000/api/apartments/${id}`, {
        method: 'put',
        body: { 
          name: formData.value.name, 
        }
    })

    if (responseData) {
      console.log(responseData)
      inventoryList.value = responseData.inventoryList
      console.log(inventoryList)
    }
  }

  const handleAddItem = async () => {
    console.log(itemData._rawValue.itemQuantity)
    console.log(currentInventoryQuantity)
    if (currentInventoryQuantity + itemData._rawValue.itemQuantity > 20) {my_modal_1.showModal() } else {
      const { data: responseData } = await useFetch(`http://localhost:3000/api/apartments/${id}`, {
        method: 'put',
        body: { 
          itemName: itemData.value.itemName, 
          itemQuantity: itemData.value.itemQuantity, 
        }
    })

    if (responseData) {
      console.log(responseData)
      window.location.reload();
      inventoryList = responseData.inventoryList
    }
    }

  }
</script>

<style lang="scss" scoped>

</style>