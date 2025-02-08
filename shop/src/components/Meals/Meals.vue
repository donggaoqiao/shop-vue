<template>
  <div class="meals">
    <Meal :desc="$attrs.desc" v-for="item in props.meals" :meal="item"></Meal>
    <h2 v-if="!props.meals || props.meals.length == 0">没有找到指定商品</h2>
  </div>
</template>

<script setup>
import Meal from "./Meal.vue";
const props = defineProps(["meals"])
</script>

<style scoped>
.meals {
  height: calc(100vh - 120rem);
  padding-bottom: 180rem;
  overflow: auto;
}

h2{
    display: flex;
    justify-content: center;
    padding: 20rem 0;
    font-size: 30rem;
    font-weight: bold;
    color: #383636;
}
</style>