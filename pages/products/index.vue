<template>
    <div class="">
        <p class="text-2xl font-bold text-green-600 text-center mb-4 shadow-md p-4 ">Products</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl: grid-cold-4 gap-4 ">
            <div class="" v-for="p in res">
             <ProductCard :product = "p"/>
        </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const res = ref([]);
const productApi = 'https://fakestoreapi.com/products';


onMounted(async () => {
    try {
        res.value = await $fetch(productApi);
        // console.log(res.value);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});
</script>

<style scoped>

</style>