<template>
  <div v-if="isLoading">
    <p>Loading product details...</p>
  </div>
  <div v-else class="flex flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 p-4 lg:p-0 2xl:p-10">
      <!-- <img :src="res.image" alt="product-image" class="hover:scale-110 transition duration-300"> -->
      <img
        :src="res.image"
        alt="product-image"
        class="hover:scale-110 transition duration-300 p-4 max-h-[300px] lg:max-h-[450px] 2xl:max-h-[500px] mx-auto"
      />
    </div>
    <div class="w-full lg:w-1/2 p-4 lg:p-10">
      <p class="font-bold text-lg lg:text-2xl text-green-600">
        {{ res.title }}
      </p>
      <!-- Rating Section -->
      <div class="flex items-center mt-4">
        <p class="lg:text-lg font-bold mr-1 lg:mr-4">${{ res.price }}</p>
        <div class="flex items-center my-2">
          <div class="flex">
            <!-- Display stars based on the rating value -->
            <span v-for="n in 5" :key="n" class="text-yellow-500">
              <svg
                v-if="n <= Math.floor(res?.rating?.rate)"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </span>
            <p class="ml-1">({{ res?.rating?.rate }})</p>
          </div>
          <p class="ml-2 text-gray-600 text-sm underline">
            {{ res?.rating?.count }} reviews
          </p>
        </div>
      </div>
      <!-- Add to favourites and add to cart sections -->
      <div class="flex items-center justify-start mt-4">
        <button
          class="favourite-btn flex items-center mr-1 lg:space-x-1 lg:mr-10"
        >
          <Icon name="carbon:favorite" class="w-5 h-5" />
          <span>Add to favourites</span>
        </button>
        <NuxtLink
          to="/cart"
          class="cart-btn flex items-center space-x-1"
          @click="cartStore.addToCart(res.id)"
        >
          <Icon name="carbon:shopping-cart" class="w-5 h-5" />
          <span v-if="isItemAvailableInTheCart(res.id)">Go To Cart</span>
          <span v-else>Add to cart</span>
        </NuxtLink>
      </div>
      <div class="mt-4">
        <p class="font-bold lg:text-lg text-green-600">Product Description</p>
        <p>{{ res.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCartStore } from "~/stores/cartStore";

const { id } = useRoute().params;
let isLoading = ref(true);
const res = ref([]);
const productApi = `https://fakestoreapi.com/products/${id}`;

onMounted(async () => {
  try {
    res.value = await $fetch(productApi);
    // console.log(res.value.id);
  } catch (error) {
    console.error("Error fetching ress:", error);
  } finally {
    isLoading.value = false;
  }
});

const cartStore = useCartStore();

const isItemAvailableInTheCart = (id) => {
  return Object.keys(cartStore.cart).includes(id.toString());
};
</script>

<style scoped>
/* p{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #0b7b65;
} */
</style>
