<template>
    <div class="flex justify-center gap-10 m-2">
    <div v-for="category in categories" v-bind:key="category">
        <Categories :categories="category"></Categories>
    </div>
    <Books :books="books"/>
</div>
    <Footer></Footer>
</template>

<script setup>
import Categories from '../components/Categories.vue';
import {computed} from '@vue/reactivity';
import store from '../store';
import {useRoute} from 'vue-router';
import {watch} from 'vue';


store.dispatch('searchCategories');
const route =useRoute();
const categories = computed(()=>store.state.categories);
    store.dispatch('searchCategories');
console.log(categories)
watch(route,()=>{
    store.dispatch('searchBooksByCategory',route.params.letter)

})


</script>


<script setup>
import {computed} from '@vue/reactivity'
import {onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../store";
import Books from '../components/Books.vue'
const route = useRoute();
const books = computed(()=> store.state.booksByAuthor)

onMounted(()=>{
    store.dispatch('searchBooksByAuthor', route.params.author)
})
</script>