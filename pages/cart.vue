<template>
  <h1 class="text-2xl text-center text-green-600 mb-4">Shopping Cart</h1>
  <div class="grid grid-cols-3 gap-4 p-4 border border-green-600 bg-green-50 rounded-xl mb-2">
    <!-- Item Name Column (spans 3 columns) -->
    <p class="grid items-center col-span-3 font-bold justify-center">Item</p>
    <!-- Divider between Item and Quantity -->
    <p class="font-bold grid items-center justify-center border-l-2 border-green-500">
      Quantity
    </p>
    <!-- Divider between Quantity and Total Price -->
    <p class="font-bold grid items-center justify-center border-l-2 border-green-500">
      Total Price
    </p>
  </div>

  <div class="flex flex-col gap-3">
    <div class="border border-green-600 rounded-xl" v-for="(productQuantity, productId) in cartStore.cart"
      :key="productId">
      <!-- Pass productId and productQuantity to CartCard component -->
      <CartCard 
      :productId="productId" 
      :productQuantity="productQuantity" 
      :removeFromCart = "cartStore.removeFromLocalStorage"
      :increaseQuantityByOne = "cartStore.increaseProductQuantity"
      :decreaseQuantityByOne = "cartStore.decreaseProductQuantity"
       />
    </div>
  </div>
</template>

<script setup>
import CartCard from "~/components/cartCard.vue";
import { useCartStore } from "~/stores/cartStore";

const cartStore = useCartStore();

</script>

<style scoped></style>
