<template>
  <div class="estilo">
    <painel-esquerdo @open-modal="e=>this.$store.commit('setisModalOpen', e)" />
    <painel-direito @open-modal="e=>this.$store.commit('setisModalEditOpen', e)" />
  </div>
  <div class="content">Is modal open? {{open}}</div>
  <div class="content">Is modal edit open? {{openedit}}</div>
</template>

<script>
import PainelEsquerdo from '@/components/PainelEsquerdo.vue';
import PainelDireito from '@/components/PainelDireito.vue';

export default {
  components: {
    PainelEsquerdo,
    PainelDireito,
  },

  computed: {
    open() {
      return this.$store.state.modal.isModalOpen;
    },

    openedit() {
      return this.$store.state.modal.isModalEditOpen;
    },
  },
};
</script>

<style scoped>
.estilo {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 95%;
  position: fixed;
  bottom: 0;
  left: 0;
  /*   background-color: silver; */
}
</style>
