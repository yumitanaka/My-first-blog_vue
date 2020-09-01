<template>
<button class='btn'>
      <slot />
</button>
</template>

<script>
export default {

};
</script>

<style scoped>
.btn {
  height: 36px;
  /* margin-top: 5%; */
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  font-family: arial;
}

</style>
