<template>
  <div>
    <div v-if="res" class="grid grid-cols-2 gap-4 p-4">
      <!-- Product Image -->
      <div class="grid grid-cols-3 items-center justify-around">
        <img
          :src="res.image"
          alt="product-thumb"
          class="w-20 h-20 cursor-pointer col-span-1"
        />
        <!-- Product Title -->
        <p class="grid items-center col-span-2">
          {{ res.title }}
        </p>
      </div>

      <div class="border grid grid-cols-2">
        <!-- Product Quantity -->
        <div class="flex items-center justify-center border border-red-800">
          <!-- Decrement Button -->
          <span
            @click="productQuantity > 1 ? decreaseQuantityByOne(res.id) : null"
            :class="{ 'opacity-50 cursor-not-allowed': productQuantity === 1 }"
            :disabled="productQuantity === 1"
            class="p-1 border border-green-400 rounded w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-green-100"
          >
            -
          </span>

          <!-- Quantity Display -->
          <span class="px-4 font-bold text-2xl">{{ productQuantity }}</span>
          <!-- Increment Button -->
          <span
            @click="() => increaseQuantityByOne(res.id)"
            class="p-1 border border-green-400 rounded w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-green-100"
            >+</span
          >
        </div>

        <!-- Total Price with Remove Icon -->
        <div class="grid items-center justify-center grid-cols-2 border border-green-800">
          <p class="grid justify-center">
            <!-- Display Total Price -->
            $ {{ (productQuantity * res.price).toFixed(2) }}
          </p>
          <!-- Delete Icon with Click Event -->
          <div class="grid justify-center">
            <Icon
              name="material-symbols:delete-outline-rounded"
              class="cursor-pointer text-red-300 text-2xl hover:text-red-500"
              @click="() => removeFromCart(productId)"
            />
          </div>
        </div>
      </div>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Define props
const { productId, productQuantity } = defineProps({
  productId: [String, Number],
  productQuantity: Number,
  removeFromCart: Function,
  increaseQuantityByOne: Function,
  decreaseQuantityByOne: Function,
});

// Create a reactive variable to hold API response
const res = ref(null);

onMounted(async () => {
  const productApi = `https://fakestoreapi.com/products/${productId}`;
  try {
    // Fetch product details from the API
    res.value = await $fetch(productApi);
  } catch (error) {
    console.error("Error fetching product:", error);
  }
});

// console.log(res);
// console.log(typeof(productQuantity));
</script>

<style scoped></style>
