import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import Ingredients from '../views/Ingredients.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealDetails from '../views/MealDetails.vue'
import ShoppingCart from '../views/ShoppingCart.vue'



const routes = [
    {
        path:'/',
        component: DefaultLayout,
        children:[
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-Name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/by-Ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsByIngredients
            },
            {
                path: '/by-Letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails,
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/shoppingcart',
        name: 'shoppingcart',
        component: ShoppingCart
    }


]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;