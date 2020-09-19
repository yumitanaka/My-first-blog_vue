<template>
  <div class="painel-esquerdo">
    <div class="painel-top">
      <img src="../assets/Biba_1.png" class="img" />
      <div class="titulo">My First Blog</div>
    </div>
    <div class="painel-bottom">
      <div class="menu">
        <div
          v-for="post in posts"
          :key="post.id"
          class="menu-item"
          @click="clickHandler(post.id)"
        >{{post.title}}</div>
      </div>

      <div>
        <btn v-if="isSignedIn" @click="$emit('open-modal', true)">Create Post</btn>
      </div>
      <div class="icones">
        <img src="../assets/facebook.png" class="icon" />
        <img src="../assets/instagram.png" class="icon" />
        <img src="../assets/linkedin.png" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn.vue';

export default {
  components: {
    Btn,
  },

  computed: {
    isSignedIn() {
      return Boolean(this.$store.state.auth.token);
    },

    posts() {
      return this.$store.state.posts;
    },

    selectedPost() {
      return this.$store.state.post.selectedPost;
    },
  },

  methods: {
    clickHandler(id) {
      // console.log('clickou', id);
      this.$store.commit('setSelectedPost', id);
      console.log(
        'setSelectedPost SelectedPost: ',
        this.$store.state.post.selectedPost,
      );
    },
  },
};
</script>

<style scoped>
.painel-esquerdo {
  width: 25%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 5%;
  overflow-x: hidden;
  /*   background-color: pink; */
  left: 0;
}
.painel-top {
  width: 100%;
  height: 40%;
  margin-top: 0%;
  max-width: 100%;
  /*  background-color: red; */
}

.img {
  width: 60%;
  height: auto;
  position: relative;
  top: 10%;
  left: 20%;
  border-radius: 50%;
}

.titulo {
  width: 100%;
  height: 20%;
  max-width: 100%;
  line-height: 35px;
  text-align: center;
  font-family: georgia;
  font-size: 30px;
  /*   background-color: gray; */
}

.painel-bottom {
  width: 100%;
  height: 55%;
  top: 5%;
  text-align: center;
  /*  background-color: blue; */
}

.menu {
  height: 50%;
  font-family: arial;
  font-size: 12px;
  /*   background-color: yellow; */
  overflow-y: scroll;
  margin-bottom: 20px;
}

.menu-item {
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
}

.icones {
  width: 100%;
  height: 30%;
  max-width: 100%;
  line-height: 100px;
  text-align: center;
  margin-top: 5%;
  /*   background-color: violet; */
}

.icon {
  height: 50%;
  opacity: 0.6;
  position: relative;
  top: 40%;
  transform: translateY(-20%);
  margin-right: 15px;
}
</style>
