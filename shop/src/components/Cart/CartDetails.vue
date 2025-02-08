<template>
  <Mask style="z-index: 999">
    <Dialog @ok="okHander" msg="确认清空购物车吗？" @hide="showDialog = false" :is-show="showDialog"></Dialog>
    <div class="cart-details">
      <div class="header">
        <h2>餐品详情</h2>
        <a @click="showDialog = true" href="javasrcipt:;">
          <i class="ri-delete-bin-6-line"></i>
          清空购物车
        </a>
      </div>
      <Meals :desc="false" :meals="meals.cartMeals"></Meals>
    </div>
  </Mask>
</template>

<script setup>
import Mask from "../UI/Mask.vue";
import Meals from "../Meals/Meals.vue";
import Dialog from "../UI/Dialog.vue";
import { ref } from "vue";
import { useMealsStore } from "../../store/meals";
const meals = useMealsStore();
const emits = defineEmits()
const showDialog = ref(false);
const okHander = ()=>{
    meals.clearCart()
    emits("hide")
}
</script>

<style scoped>
.cart-details {
  position: absolute;
  bottom: 0;
  width: 750rem;
  background-color: #fff;
  border-top-left-radius: 40rem;
  border-top-right-radius: 40rem;
  /* overflow: auto; */
  /* z-index: 9999; */
}
.meals {
  /* padding-top: 40rem; */
  max-height: calc(280rem * 4);
  height: auto;
}

.header {
  position: fixed;
  width: 750rem;
  background-color: #fff;
  border-top-left-radius: 40rem;
  border-top-right-radius: 40rem;
  display: flex;
  justify-content: space-between;
  padding: 20rem 40rem;
}

.header h2 {
  font-size: 28rem;
}
.header a {
  display: flex;
  align-items: center;
  font-size: 22rem;
  color: #9f9f9f;
}
.header i {
  margin-right: 6rem;
}
</style>