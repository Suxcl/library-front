<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.StrMeal" class="w-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold"> Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong class="font-bold"> Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong class="font-bold"> Tags:</strong> {{ meal.strTags }}
            </div>
        </div>
            <div>
                {{ meal.strInstructions }}<br>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2">
                <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)" v-bind:key="ind">
                    <li v-if="meal[`strIngredient${ind+1}`]">
                      {{ ind+1 }}.  {{ meal[`strIngredient${ind+1}`] }}
                    </li>
                    </template>
                </ul>
            </div>
            
            <div>
                <h2 class="text-2xl font-semibold mb-2">Measures</h2>
                <ul>
                <template v-for="(el, ind) of new Array(20)" v-bind:key="ind">
                    <li v-if="meal[`strMeasure${ind+1}`]">
                       {{ meal[`strMeasure${ind+1}`] }}
                    </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="mt-4">
            <YouTubeButton :href="meal.strYouTube">Go to YouTube</YouTubeButton>
            <a 
       :href="meal.strSource" 
       target="_blank" 
       class="ml-3 px-3 py-2 rounded border-2 border-indigo-600 text-white bg-indigo-500 hover:bg-indigo-600 hover:text-white transition-colors">
        View Originial Source</a>
        </div>
    </div>
</template>

<script setup>
import YouTubeButton from '../components/YouTubeButton.vue'
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router'
import axiosClient from '../axiosClient'
const meal = ref({})
const route = useRoute()

onMounted(()=>
{
    axiosClient(`lookup.php?i=${route.params.id}`)
    .then(({data})=>
    {
        meal.value = data.meals[0] || {}
    })
})

</script>