<template>
<div class="home">
 <header>
   <Header/>
 </header>
  <body>
    <Body />
  </body>
  <footer></footer>
</div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Body from '@/components/Body.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Body,
  },
};
</script>

<style scoped>
.home {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
