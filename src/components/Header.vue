<template>
  <div class="header">
    <div v-if="isSignedIn">
      Olá, {{name}}! | <button>Signout</button>
    </div>
    <div v-else>
      <router-link to="/signup">Sing Up</router-link>|
      <router-link to="/login">Log In</router-link>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  created() {},

  computed: {
    isSignedIn() {
      return Boolean(this.$store.state.auth.token);
    },
    name() {
      return this.$store.state.auth.name;
    },
  },
};
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
</style>
