<template>
    <div>
        <div class="flex justify-center gap-2 m-2">
            <router-link :to="{name: 'byLetter', params:{letter}}" v-for="letter in letters" v-bind:key="letter">{{ letter }}</router-link>
        </div>
    </div>
    <Meals :meals="meals"/>
</template>

<script setup>
import {computed} from '@vue/reactivity';
import store from '../store';
import {useRoute} from 'vue-router';
import { onMounted, watch } from 'vue';
import Meals from '../components/Meals.vue'
const route =useRoute();
const letters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(()=>store.state.mealsByLetter);

watch(route,()=>{
    store.dispatch('searchMealsByLetter',route.params.letter)

})


</script>