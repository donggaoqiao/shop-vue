<template>
  <Navbar/>
  <router-view/>
</template>

<script setup>
import Navbar from "@/components/Navbar"

</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}

//滚动条样式设置
::-webkit-scrollbar{
  width: 5px;
  height: 5px;
  position: absolute;
}

::-webkit-scrollbar-thumb{
  background: #1890ff;
}

::-webkit-scrollbar-track{
  background: #ddd;
}
</style>
