<template>
    <div class="flex flex-col p-8">
        <input type="text" class ="rounded border-2 border-gray-200 w-full" 
        placeholder="Search for meals">


</div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import { ref } from 'vue'
import axiosClient from "../axiosClient"



const ingredients = ref([])
onMounted(async()=>{
   const response = await axiosClient.get('/list.php?i=list')
    console.log(response.data)
    ingredients.value = response.data
})
</script>