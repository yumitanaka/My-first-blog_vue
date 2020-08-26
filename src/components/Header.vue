<template>
  <div class="Header">
    <a href class="SignIn">Sing In</a>
    <a href class="LogIn">Log In</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Header {
  background-color: green;
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 5%;
  position: fixed;
  top: 0;
}

.SignIn {
  text-decoration: none;
  line-height: 40px;
  margin-left: 90%;
  font-family: arial;
  font-size: small;
}

.LogIn {
  text-decoration: none;
  line-height: 40px;
  margin-left: 2%;
  font-family: arial;
  font-size: small;
}
</style>
