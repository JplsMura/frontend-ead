<template>
    <section
      id="loginPage"
      :style="{
        backgroundImage: 'url(' + require('@/assets/images/bgLogin.jpg') + ')',
      }"
    >
      <div class="loginContent">
        <div class="loginCard">
          <div class="decor">
            <div class="content">
              <span class="logo">
                <img :src="require('@/assets/images/logo_transparent.png')" alt="" />
              </span>
              <span class="dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span class="description">
                <p>
                  Conte os segundos até o seu novo começo na escola de programação
                  web que irá revolucionar sua carreira. Aprenda com os melhores e
                  conquiste seu lugar no mundo digital!
                </p>
              </span>
              <span class="copyright fontSmall">
                Todos os Direitos reservados - <b>CodeFlow</b>
              </span>
            </div>
          </div>
          <div class="login">

            <div class="content">
              <span class="logo">
                <img :src="require('@/assets/images/logo_transparent.png')" alt="" />
              </span>
              <span>
                <p>Seja muito bem vindo(a)!</p>
              </span>

              <span class="dots">
                <span></span>
                <span></span>
                <span></span>
              </span>
              
              <span class="description">
                Abra as portas para o seu futuro programando: nossa tela de login
                é o ponto de partida para a transformação de novatos em mestres da
                web.
              </span>
              
              <section>
                <router-view></router-view>
              </section>
            </div>

            <span class="copyright fontSmall">
              Todos os Direitos reservados - <b>CodeFlow</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  </template>
  

<script>
export default {
    name: 'TemplateAuth'
}
</script>