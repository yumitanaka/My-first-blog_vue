<template>
  <div class="painel-direito">
    <div class="div-texto-blog">
      <div class="divTituloPost">TITLE</div>
    </div>
    <div class="div-conteudo">
      <div class="div-cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
    <div class="div-botao">
      <button class="botao-edit">Edit Post</button>
      <button class="botao-delete">Delete Post</button>
      <button class="botao-alterar">Alter Post</button>
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

.botao-alterar {
  height: 36px;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  display: inline-block;
  margin-top: 2%;
  margin-left: 20px;
  display: none;
}
</style>
