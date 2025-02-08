<template>
  <Mask>
    <div class="dialog">
      <p class="msg">{{ props.msg }}</p>
      <div class="btn">
        <button @click="$emit('hide')" class="cancel">撤销</button>
        <button
          @click="
            () => {
              $emit('ok');
              $emit('hide');
            }
          "
          class="ok"
        >
          确认
        </button>
      </div>
    </div>
  </Mask>
</template>

<script setup>
import Mask from "./Mask.vue";
const props = defineProps(["msg"]);
const emits = defineEmits(["ok"]);
</script>

<style scoped>
.dialog {
  position: absolute;
  width: 600rem;
  height: 300rem;
  background-color: #fff;
  border-radius: 40rem;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.msg {
  height: 180rem;
  font-size: 30rem;
  text-align: center;
  line-height: 180rem;
}
.btn {
  display: flex;
  justify-content: space-around;
}
button {
  width: 250rem;
  height: 80rem;
  border-radius: 40rem;
  /* border: none; */
  border: 1px solid #000;
  background-color: #fff;
  font-size: 32rem;
}
.ok {
  background-color: rgb(248, 188, 0);
  border: none;
}
</style>