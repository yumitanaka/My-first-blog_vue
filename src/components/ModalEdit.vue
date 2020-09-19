<template>
  <div v-if="open" class="modal">
    <div class="modal-content">
      <div class="btn-align">
        <div style="text-align: left">Editar Post</div>
        <close-btn @click="$emit('close-modal', false)">&times;</close-btn>
      </div>
      <div class="content">
        <input class="titulo-input" type="text" v-model="posts[selectedPost].title" />
        <textarea class="painel-input" v-model="posts[selectedPost].body"></textarea>
      </div>
      <div class="btn-align">
        <btn @click.prevent="save">Save</btn>
        <btn @click="$emit('close-modal', false)" style="margin-left:21px">Cancel</btn>
      </div>
    </div>
  </div>
</template>

<script>
import CloseBtn from '@/components/CloseBtn.vue';
import Btn from '@/components/Btn.vue';

export default {
  components: {
    CloseBtn,
    Btn,
  },

  data() {
    return {
      inputData: {},
    };
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    },

    open() {
      return this.$store.state.modal.isModalEditOpen;
    },

    selectedPost() {
      return this.$store.state.post.selectedPost - 1;
    },
  },

  methods: {
    save() {
      const { posts } = this.$store.state;
      const { selectedPost } = this.$store.state.post;
      console.log('Edit selectedPost', selectedPost);

      for (let index = 0; index < posts.length; index += 1) {
        if (selectedPost === index) {
          posts[index].title = this.posts[selectedPost].title;
          posts[index].body = this.posts[selectedPost].body;
        }
      }

      console.log('POSTS: ', JSON.stringify(this.$store.state.posts));

      alert('Postagem editada com sucesso !');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: rgba(1, 1, 1, 1.8);
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    background: rgb(255, 255, 255);
    width: 90%;
    height: 90%;
    padding: 10px;
    border-radius: 6px;
  }
}
.btn-align {
  text-align: right;
  height: 9%;
}

.content {
  height: 82%;
  width: 100%;
  display: block;
  justify-content: center;
  align-items: center;
}

.titulo-input {
  width: 99%;
  height: 5%;
  border: 1px solid #d0d0d0;
  margin-bottom: 10px;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(136, 136, 136, 0);
  font-size: small;
  transition: box-shadow 0.3s;
}
.painel-input {
  width: 99%;
  height: 70%;
  border: 1px solid #d0d0d0;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(136, 136, 136, 0);
  font-size: small;
  transition: box-shadow 0.3s;
}
</style>
