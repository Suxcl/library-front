<template>
    <div class="p-8 pb-0">
        <input 
        type="text"
         v-model="keyword"
         class ="rounded border-2 border-gray-200 w-full dark:text-black" 
         placeholder="Search for meals"
         @change="searchMeals" 
         />
    </div>
     <Meals :meals="meals"></Meals>
     <Footer></Footer>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import Meals from '../components/Meals.vue'
import {computed} from '@vue/reactivity'
import{onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import store from "../store";
const route = useRoute();
const meals = computed(() => store.state.searchedMeals)
const keyword = ref('');
function searchMeals(){
    if(keyword.value){
        store.dispatch('searchMeals',keyword.value);
    }
    else{
        store.commit("setSearchedMeals",[]);
    }

}
onMounted(()=>{
    keyword.value = route.params.name
    if(keyword.value){
        searchMeals();
    }
})
</script>