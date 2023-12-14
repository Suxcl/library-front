<template>
    <div>
        <div class="flex justify-center gap-2 m-2">
            <router-link class="hover:scale-125 hover:text-orange-600" :to="{name: 'byCategory', params:{letter}}" v-for="letter in letters" v-bind:key="letter">{{ letter }}</router-link>
        </div>
    </div>
    <Books :books="books"/>
    <Footer></Footer>
</template>

<script setup>
import Footer from '../components/Footer.vue';
    import {computed} from '@vue/reactivity';
import store from '../store';
import {useRoute} from 'vue-router';
import { onMounted, watch } from 'vue';
import Books from '../components/Books.vue'
const route =useRoute();
const letters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const books = computed(()=>store.state.booksByLetter);

watch(route,()=>{
    store.dispatch('searchBooksByLetter',route.params.letter)

})


</script>