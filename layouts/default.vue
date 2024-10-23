<template>
    <div>
        <header class="shadow-md bg-white fixed top-0 left-0 w-full">
            <nav class="flex justify-between container mx-auto p-4 items-center">
                <!-- Logo -->
                <NuxtLink to ="/" class="font-bold text-3xl text-[#42b883]">My Store</NuxtLink>
                <!-- Nav Links -->
                <ul class="flex gap-4 text-2xl">
                    <li class="nav-link"><NuxtLink to ="/">Home</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to ="/products">Products</NuxtLink></li>
                    <li class="nav-link"><NuxtLink to ="/about">About</NuxtLink></li>
                </ul>
                <div class="flex gap-4 items-center relative">
                <div class="relative">
                    <!-- Cart Badge -->
                    <span class="bg-[#42b883] text-white rounded-full px-2 py-1 text-xs absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
                    >{{ cartStore.cartItemCount }}</span>
                    <!-- Cart Icon -->
                    <NuxtLink to="/cart" class="flex items-center text-2xl text-[#42b883]">
                    <Icon name="bi:bag-plus" class="hover:text-[#26674a]" />
                    </NuxtLink>
                </div>
                <!-- Login Button -->
                <NuxtLink to="/login" class="btn">
                    Login
                </NuxtLink>
                </div>

            </nav>
        </header>
        <div class="container mx-auto p-4 items-center mt-24">
            <slot/>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useCartStore } from '~/stores/cartStore';

const cartStore = useCartStore();

onMounted(() => {
  // Load the cart data from localStorage when the component is mounted
  cartStore.getCartDataFromLocalStorage();
});
</script>

<style scoped>
.router-link-active{
    color: #42b883;
}
.router-link-active:hover{
  border-bottom: #42b883;
}
ul a{
    text-decoration: none;
}
</style>



