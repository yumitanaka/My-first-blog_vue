<template>
  <div class="home">
    <Header />
    <Body />
    <modal />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Body from '@/components/Body.vue';
import Modal from '@/components/Modal.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Body,
    Modal,
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
