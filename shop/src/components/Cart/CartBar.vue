<template>
    <Checkout :is-Show="showCheckout" @close="showCheckout = false"></Checkout>
  <CartDetails :is-Show="showDetails" @hide="showDetails = false"></CartDetails>
  <div class="cart-bar">
    <div class="cart-bag">
      <img :src="cartBag" alt="" />
      <span v-show="meals.totalCount > 0" class="total-count">{{
        meals.totalCount
      }}</span>
    </div>
    <div class="total-amount">
      <p v-show="meals.totalCount <= 0" class="no-goods">未选购商品</p>
      <p @click="showDetails = true" v-show="meals.totalCount > 0" class="has-goods">
        {{ meals.amount }}
      </p>
    </div>
    <button @click="showCheckout = meals.totalCount > 0" class="checkout-btn">去结算</button>
  </div>
</template>

<script setup>
import cartBag from "../../assets/bag.png";
import { useMealsStore } from "../../store/meals";
import { ref } from "vue";
import CartDetails from "./CartDetails.vue";
import Checkout from "../Checkout/Checkout.vue"
const meals = useMealsStore();
const showDetails = ref(false);
const showCheckout = ref(false)
</script>

<style scoped>
.cart-bar {
  position: fixed;
  width: 710rem;
  height: 100rem;
  background-color: rgb(58, 58, 58);
  bottom: 40rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 60rem;
  z-index: 9999;
}
.cart-bag {
  position: absolute;
  width: 100rem;
  bottom: -10rem;
}
.total-count {
  width: 40rem;
  height: 40rem;
  text-align: center;
  line-height: 40rem;
  position: absolute;
  background-color: red;
  border-radius: 50%;
  right: -20rem;
  font-size: 30rem;
  color: #fff;
  font-weight: bold;
}
.total-amount {
  margin-left: 140rem;
  line-height: 100rem;
}
.no-goods,
.has-goods {
  color: rgb(148, 148, 148);
  font-size: 36rem;
  font-weight: bold;
}
.has-goods {
  color: #fff;
}
.has-goods::before {
  content: "￥";
  font-size: 30rem;
}
.checkout-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 200rem;
  height: 100%;
  border-radius: 60rem;
  border: none;
  background-color: rgb(248, 188, 0);
  font-size: 36rem;
}
</style>