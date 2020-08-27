<template>
  <div class="header">
    <router-link to="/signup">Sing Up</router-link> |
    <router-link to="/login">Log In</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  /* background-color: green; */
  width: 98%;
  height: 5%;
  position: fixed;
  text-align: right;
  margin-top: 1%;
}

/* .signIn {
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
} */
</style>
