<template>
  <div id="myeditor"></div>
</template>

<script setup>
import { onMounted, defineEmits, defineProps } from "vue";
import E from "wangeditor";
import { IDomEditor } from "@wangeditor/editor";

const emit = defineEmits(["event"]);
const props = defineProps({
  content: String,
});

onMounted(() => {
  const editor = new E("#myeditor");
  editor.create();

  //设置初始值
  props.content && editor.txt.html(props.content);

  editor.config.onchange = function (newHtml) {
    emit("event", newHtml);
  };
});
</script>