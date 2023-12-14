<template>
    <div class="p-8 pb-0">
        <input 
        type="text"
         v-model="keyword"
         class ="rounded border-2 border-gray-200 w-full dark:text-black" 
         placeholder="Search for books"
         @change="searchBooks" 
         />
    </div>
     <Books :books="books"></Books>
     <Footer></Footer>
</template>

<script setup>
import Footer from '../components/Footer.vue';
import Books from '../components/Books.vue'
import {computed} from '@vue/reactivity'
import{onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import store from "../store";
const route = useRoute();
const books = computed(() => store.state.searchedBooks)
const keyword = ref('');
function searchBooks(){
    if(keyword.value){
        store.dispatch('searchBooks',keyword.value);
    }
    else{
        store.commit("setSearchedBooks",[]);
    }

}
onMounted(()=>{
    keyword.value = route.params.name
    if(keyword.value){
        searchBooks();
    }
})
</script>