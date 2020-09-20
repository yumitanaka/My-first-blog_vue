<template>
  <div v-if="open" class="modal">
    <div class="modal-content">
      <div class="btn-align">
        <div style="text-align: left">Editar Post</div>
        <close-btn @click="$emit('close-modal', false)">&times;</close-btn>
      </div>
      <div class="content">
        <input class="titulo-input" type="text" v-model="title" />
        <textarea class="painel-input" v-model="body"></textarea>
      </div>
      <div class="btn-align">
        <btn @click.prevent="save()">Save</btn>
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
      title: '',
      body: '',
    };
  },

  created() {
    this.title = this.selectedPost.title;
    this.body = this.selectedPost.body;
  },

  computed: {
    posts() {
      return this.$store.state.posts;
    },

    open() {
      return this.$store.state.modal.isModalEditOpen;
    },

    selectedPost() {
      const { selectedPost } = this.$store.state.post;
      console.log(selectedPost);

      // pesquisa no array dos posts e retorna o objeto do post selecionado
      const post = this.$store.state.posts.find((p) => p.id === selectedPost);

      return post || {};
    },
  },

  methods: {
    async save() {
      // id: this.selectedPost.id
      // enviar um objeto {id: xx, title: xx, body: xx}
      this.$store.commit('EditPost', {
        id: this.selectedPost.id,
        title: this.title,
        body: this.body,
      });
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
