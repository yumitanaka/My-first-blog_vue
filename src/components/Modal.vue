<template>
  <div v-if="open" class="modal">
    <div class="modal-content">
      <div class="btn-align">
        <close-btn >&times;</close-btn>
      </div>
      <div class="content">Conteudo a ser adicionado - {{open}}</div>
      <div class="btn-align">
        <btn>Save</btn>
        <btn style="margin-left:20px">Cancel</btn>
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

  computed: {
    open() {
      return this.$store.state.modal.isModalOpen;
    },
  },

};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    background: rgb(255, 255, 255);
    width: 80%;
    height: 80%;
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
   display: flex;
  justify-content: center;
  align-items: center;
  background: silver;
}
</style>
