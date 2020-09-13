<template>
  <button class="btn" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: null,
    },
  },
};
</script>

<style scoped>
.btn {
  height: 36px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  font-family: arial;
}
</style>
