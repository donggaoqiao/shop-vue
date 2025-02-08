<template>
  <div>
    <MealsFilter></MealsFilter>
    <Meals :desc="true" :meals="meals.filterMeals"></Meals>
    <CartBar></CartBar>
  </div>
</template>

<script setup>
import MealsFilter from "./components/MealsFilter/MealsFilter.vue"
import Meals from "./components/Meals/Meals.vue"
import CartBar from "./components/Cart/CartBar.vue"
import {useMealsStore} from "./store/meals"

const meals = useMealsStore()
</script>

<style scoped>

</style>