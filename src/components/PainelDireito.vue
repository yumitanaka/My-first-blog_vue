<template>
  <div class="painelDireito">
    <div class="divTextoBlog">
      <div class="divTituloPost">TITLE</div>
    </div>
    <div class="divConteudo">
      <div class="divCont">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      <input class="tituloInput" type="text" />
      <input class="painelInput" type="text" />
    </div>
    <div class="divBotao">
      <button class="botaoEdit">Editar Postagem</button>
      <button class="botaoDelete">Deletar Postagem</button>
      <button class="botaoAlterar">Alterar Postagem</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.painelDireito {
  width: 75%;
  height: 100%;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  max-width: 75%;
/*   background-color: orange; */
  right: 0;
}

.divTextoBlog {
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

.divConteudo {
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

.divCont {
  font-family: georgia;
  font-size: 20px;
  display: none;
}

.tituloInput {
  width: 100%;
  height: 5%;
  border: 1px solid #d0d0d0;
  margin-bottom: 10px;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(136, 136, 136, 0);
  font-size: small;
  transition: box-shadow 0.3s;
}

.painelInput {
  width: 100%;
  height: 90%;
  border: 1px solid #d0d0d0;
  outline: 0;
  box-shadow: 0 0 0 0 rgba(136, 136, 136, 0);
  font-size: small;
  transition: box-shadow 0.3s;
}

.divBotao {
  text-align: center;
  height: 10%;
  width: 99%;
  /*margin-top: 5%;*/
  margin-left: 0.5%;
  display: inline-block;
  /* background-color: blue; */
}

.botaoEdit {
  height: 36px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
}

.botaoDelete {
  height: 36px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  margin-left: 20px;
  margin-top: 2%;
}

.botaoAlterar {
  height: 36px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  display: inline-block;
  margin-top: 2%;
  display: none;
}
</style>
