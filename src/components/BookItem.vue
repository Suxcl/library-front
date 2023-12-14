<template>
           <div  class="bg-white shadow rounded-xl transition-all hover:scale-105 " >
       <router-link :to="{name: 'bookDetails', params: {id: book.idMeal}}">
        <img 
        :src="book.strMealThumb" 
        :alt="book.strMeal" 
        class="rounded-t-xl w-full h-48 object-cover">
       </router-link>
        <div class="p-3">
        <h3 class="dark:text-black font-semibold">{{ book.strMeal }} </h3>   
        <p class="mb-4 dark:text-black"> Lorem Ipsum dolor sit amel consectetur, adipsing elit.</p>
        <div class="flex items-center justify-between">
        </div>
        <div v-if="!active">
            <button @click="handleClick()  "  class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
                <i class="pi pi-shopping-bag" ></i>
            </button>
          </div>
          <div v-else>
            <button @click=" handleClick() "  class="bg-red-400 text-white font-bold py-2 px-4 rounded">
                <i class="pi pi-shopping-bag" ></i>
            </button>
          </div>
       </div>
    </div>

</template>
<script>
import { onBeforeMount, onMounted } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
    
export default {
  props: {
book: Object,

},
  data() {
    return {
      active: this.isInCart(),
    };
  },
  methods: {
    isInCart() {
      var products = JSON.parse(localStorage.getItem('products'));
      if (products == null)
      {
        return false;
      }
      if(products.some(item => JSON.stringify(item) === JSON.stringify(this.book)))
      {
        return true;
      }
      return false;
    },
    
      handleClick() {
      var products = JSON.parse(localStorage.getItem('products')) || [];
      if(this.active)
      {
        var index = products.findIndex(x => x.strMeal === this.book.strMeal);
        products.splice(index, 1);
        toast.info(this.book.strMeal + ' deleted from cart');
      }
      else{
        products.push(this.book);
        toast.info(this.book.strMeal + ' added to cart');
      }
      localStorage.setItem('products', JSON.stringify(products));
      this.active = !this.active;
      products = JSON.parse(localStorage.getItem('products')) || [];
      console.log(products);

    },
  },
};
</script>