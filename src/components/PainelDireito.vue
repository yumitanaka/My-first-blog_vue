<template>
  <div class="painel-direito">
    <div class="div-texto-blog">
      <div class="divTituloPost">TITLE</div>
    </div>
    <div class="div-conteudo">
      <div class="div-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <input class="titulo-input" type="text" />
      <input class="painel-input" type="text" />
    </div>
    <div class="div-botao">
      <button class="botao-edit">Editar Postagem</button>
      <button class="botao-delete">Deletar Postagem</button>
      <button class="botao-alterar">Alterar Postagem</button>
    </div>
  </div>
</template>

<script>
export default {};
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
/*   background-color: gray; */
  display: none;
}

.div-conteudo {
  width: 95%;
  height: 75%;
  max-width: 100%;
  text-align: left;
  padding: 20px;
  margin-top: 10px;
  margin-left: 0.5%;
  font-family: georgia;
  font-size: 20px;
/*   background-color: yellow; */
}

.div-cont {
  font-family: georgia;
  font-size: 20px;
  display: none;
}

.titulo-input {
  width: 100%;
  height: 5%;
  border: 1px solid #d0d0d0;
  margin-bottom: 10px;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(136, 136, 136, 0);
  font-size: small;
  transition: box-shadow 0.3s;
}

.painel-input {
  width: 100%;
  height: 90%;
  border: 1px solid #d0d0d0;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(136, 136, 136, 0);
  font-size: small;
  transition: box-shadow 0.3s;
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

.botao-alterar {
  height: 36px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  display: inline-block;
  margin-top: 2%;
  display: none;
}
</style>
