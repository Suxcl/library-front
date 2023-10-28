<template>
        <header class="bg-white dark:text-white dark:bg-gray-700  text-black shadow h-24 flex justify-between items-stretch">
    <router-link :to="{name:'home'}" class="inline-flex items-center h-full px-5">
      Home
    </router-link>

  <div class="flex items-center gap-1 dark:text-white">
    <button @click="toggleDark()" class="bg-white text-black font-bold py-2 px-4 rounded dark:bg-gray-700 dark:text-white">
      {{ isDark? "Dark":"Light" }} Mode
    </button>

    <router-link :to="{name:'byName'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
      Search Meals
    </router-link>
    <router-link :to="{name:'byLetter'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
      Meals by Letter
    </router-link>
    <router-link :to="{name:'ingredients'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
      Ingredients
    </router-link>
    <router-link :to="{name:'login'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
      Sign in
    </router-link>
    <router-link :to="{name:'register'}" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
      Sign up
    </router-link>
  </div>
</header>
</template>
<script setup> 
import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>