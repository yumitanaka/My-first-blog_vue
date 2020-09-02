<template>
<div class= 'estilo'>
  <painel-esquerdo />
  <painel-direito />
</div>
</template>

<script>
import PainelEsquerdo from '@/components/PainelEsquerdo.vue';
import PainelDireito from '@/components/PainelDireito.vue';

export default {
  components: {
    PainelEsquerdo,
    PainelDireito,
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
  bottom:  0;
  left: 0;
/*   background-color: silver; */
}
</style>
