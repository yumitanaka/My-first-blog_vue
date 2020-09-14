<template>
  <div v-if="open" class="modal">
    <div class="modal-content">
      <div class="btn-align">
        <div style="text-align: left">Criar Post</div>
        <close-btn @click="$emit('close-modal', false); clear()">&times;</close-btn>
      </div>
      <div class="content">
        <input
          class="titulo-input"
          type="text"
          v-model="inputData.title"
          placeholder="Enter Title Post"
        />
        <textarea class="painel-input" v-model="inputData.body"
        placeholder="Enter Body Post"></textarea>
        <div>{{posts}}</div>
      </div>
      <div class="btn-align">
        <btn @click.prevent="save" :disabled="isDisabled" v-model="inputData.id">Save</btn>
        <btn @click="$emit('close-modal', false); clear()" style="margin-left:21px">Cancel</btn>
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
      return this.$store.state.modal.isModalOpen;
    },

    isDisabled() {
      return !this.inputData.title || !this.inputData.body;
    },

    // titlePost: {
    //   get() {
    //     return this.$store.state.posts[0].title;
    //   },
    //   set(value) {
    //     this.$store.commit('setNewPostTitle', { value, index: 0 });
    //   },
    // },

    // contentPost: {
    //   get() {
    //     return this.$store.state.posts[0].body;
    //   },
    //   set(value) {
    //     this.$store.commit('setNewPostContent', { value, index: 0 });
    //   },
    // },

    // ...mapState(['posts']),
  },

  methods: {
    save() {
      const id = this.$store.state.posts.length + 1;
      console.log(
        'this.$store.state.posts.length',
        this.$store.state.posts.length,
      );
      const newPost = {
        id,
        title: this.inputData.title,
        body: this.inputData.body,
      };
      this.$store.commit('setNewPost', newPost);
      console.log('POSTS: ', JSON.stringify(this.$store.state.posts));

      this.inputData.title = '';
      this.inputData.body = '';
    },

    clear() {
      this.inputData.title = '';
      this.inputData.body = '';
      // console.log('this.inputData.title:', this.inputData.title);
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
