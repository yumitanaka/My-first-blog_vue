<template>
  <div class="painel-direito">
    <div class="div-texto-blog">
      <div class="divTituloPost">{{posts[selectedPost]}}</div>
    </div>
    <div class="div-conteudo">
      <div class="div-cont">{{posts[selectedPost]}}</div>
    </div>
    <div class="div-botao">
      <button @click="$emit('open-modal', true), editPost" class="botao-edit">Edit Post</button>
      <button @click="deletePost(selectedPost)" class="botao-delete">Delete Post</button>
      <!-- <div>selectedPost: [{{selectedPost}}]</div> -->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },

    selectedPost() {
      return this.$store.state.post.selectedPost - 1;
    },
  },

  methods: {
    deletePost(selectedPost) {
      const { posts } = this.$store.state;
      console.log('delete selectedPost', selectedPost);
      this.posts.splice(selectedPost, 1);

      for (let index = 0; index < posts.length; index += 1) {
        posts[index].id = index + 1;
        console.log('index after delete', index);
      }
      console.log('POSTS: ', this.$store.state.posts);
    },

    editPost() {

    },
  },
};
</script>

<style scoped>
.painel-direito {
  width: 75%;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  max-width: 75%;
  /*   background-color: orange; */
  right: 0;
}

.div-texto-blog {
  width: 95%;
  height: 2%;
  max-width: 100%;
  line-height: 50%;
  text-align: left;
  padding: 20px;
  margin-top: 20px;
  margin-left: 0.5%;
  font-family: georgia;
  font-size: 30px;
  /* background-color: gray; */
  /* display: none; */
}

.div-conteudo {
  width: 95%;
  height: 65%;
  max-width: 100%;
  text-align: left;
  padding: 20px;
  margin-top: 10px;
  margin-left: 0.5%;
  font-family: georgia;
  font-size: 20px;
  /* background-color: yellow; */
}

.div-cont {
  font-family: georgia;
  font-size: 20px;
  /* display: none; */
}

.div-botao {
  text-align: center;
  height: 10%;
  width: 99%;
  /*margin-top: 5%;*/
  margin-left: 0.5%;
  display: inline-block;
  /* background-color: blue; */
}

.botao-edit {
  height: 36px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
}

.botao-delete {
  height: 36px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  margin-left: 20px;
  margin-top: 2%;
}
</style>
