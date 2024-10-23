<template >
    <div :key="product.id" class="product-card">
        <!-- Product Title and Image -->
    <NuxtLink :to="`/products/${ product.id }`" class="flex items-center justify-center">
        <img :src="product.image" alt="product-thumb" class="thumb cursor-pointer">
    </NuxtLink>
        <p class="text-bold text-lg text-green-600"> {{ product.title.length >27 ? product.title.slice(0, 27) + '...' : product.title }}</p>
         <!-- Rating Section -->
         <div class="flex items-center my-2">
                <div class="flex">
                    <!-- Display stars based on the rating value -->
                    <span v-for="n in 5" :key="n" class="text-yellow-500">
                        <svg v-if="n <= Math.floor(product.rating.rate)" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                    </span>
                    <p class="ml-1">{{ product.rating.rate }}</p>
                </div>
                <p class="ml-2 text-gray-600 text-sm">({{ product.rating.count }} reviews)</p>
            </div>
            <!-- Product Price and Details Button -->
        <div class="flex justify-between items-center">
            <p><span class="font-bold">Price:</span> {{ product.price }} $</p>
            <NuxtLink class="cart-btn flex items-center space-x-1 cursor-pointer" @click = "cartStore.addToCart(product.id)">
                    <Icon name="carbon:shopping-cart" class="w-5 h-5"/>
                    <span>Add to cart</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const {product} = defineProps(['product']);

import { useCartStore } from '~/stores/cartStore';
const cartStore = useCartStore();

</script>

<style scoped>

</style>