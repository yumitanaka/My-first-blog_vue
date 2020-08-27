<template>
  <div class="header">
    <a href class="signIn">Sing In</a>
    <a href class="logIn">Log In</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  /* background-color: green; */
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 5%;
  position: fixed;
  top: 0;
}

.signIn {
  text-decoration: none;
  line-height: 40px;
  margin-left: 90%;
  font-family: arial;
  font-size: small;
}

.logIn {
  text-decoration: none;
  line-height: 40px;
  margin-left: 2%;
  font-family: arial;
  font-size: small;
}
</style>
