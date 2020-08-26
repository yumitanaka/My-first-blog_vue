<template>
  <div class="PainelEsquerdo">
    <div class="PainelTop"></div>
    <div class="PainelBottom"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.PainelEsquerdo {
  width: 25%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 5%;
  overflow-x: hidden;
  background-color: pink;
  left: 0;
}
.PainelTop {
  width: 100%;
  height: 40%;
  margin-top: 0%;
  max-width: 100%;
  background-color: red;
}

.PainelBottom {
  width: 100%;
  height: 55%;
  top: 5%;
  text-align: center;
  background-color: blue;
}
</style>
