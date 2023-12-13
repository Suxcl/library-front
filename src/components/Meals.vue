<template>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8" >
        <MealItem  v-for="meal in meals" v-bind:key="meal.idMeal" v-bind:meal="meal"/>
    </div>
    <div v-if="!meals.length" class="dark:text-white flex justify-center text-gray-600 ">
        There are no meals
    </div>
</template>
<script setup>
import MealItem from './MealItem.vue';
const {meals} = defineProps({
    meals: {
        required:true,
        type: Array
    }
})
</script>