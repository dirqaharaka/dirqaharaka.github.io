<template>
  <div :class="[classBg, 'certificate-card-container']">
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    classBg                 : {
      type: String,
      default: "bg-gray-200",
    },
  },
  setup() {},
});
</script>
