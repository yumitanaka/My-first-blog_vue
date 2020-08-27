<template>
  <div class="painelEsquerdo">
    <div class="painelTop">
      <img src=../assets/Biba_1.png class=img />
      <div class="titulo">My First Blog</div>
    </div>
    <div class="painelBottom">
      <div class="menu"></div>
      <button class="botaoPostagem">Criar/Editar Post</button>
      <div class="icones">
        <img src=../assets/facebook.png class=Icon />
        <img src=../assets/instagram.png class=Icon />
        <img src=../assets/linkedin.png class=Icon />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.painelEsquerdo {
  width: 25%;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 5%;
  overflow-x: hidden;
/*   background-color: pink; */
  left: 0;
}
.painelTop {
  width: 100%;
  height: 40%;
  margin-top: 0%;
  max-width: 100%;
 /*  background-color: red; */
}

.img {
  width: 60%;
  height: auto;
  position: relative;
  top: 10%;
  left: 20%;
  border-radius: 50%;
}

.titulo {
  width: 100%;
  height: 20%;
  max-width: 100%;
  line-height: 35px;
  text-align: center;
  font-family: georgia;
  font-size: 30px;
/*   background-color: gray; */
}

.painelBottom {
  width: 100%;
  height: 55%;
  top: 5%;
  text-align: center;
 /*  background-color: blue; */
}

.menu {
  height: 50%;
  font-family: arial;
  font-size: 12px;
/*   background-color: yellow; */
  overflow-y: scroll;
}

.botaoPostagem {
  height: 36px;
  margin-top: 5%;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
  font-family: arial;
/*   border-color: gray; */
}

.icones {
  width: 100%;
  height: 30%;
  max-width: 100%;
  line-height: 100px;
  text-align: center;
  margin-top: 5%;
/*   background-color: violet; */
}

.Icon {
  height: 50%;
  opacity: 0.6;
  position: relative;
  top: 40%;
  transform: translateY(-20%);
  margin-right: 15px;
}
</style>
