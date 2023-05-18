<template>
  
  <form action="/dist/index.html" method="">
    <div class="groupForm">
      <i class="far fa-envelope"></i>
      <input type="email" name="email" placeholder="Email" required />
    </div>

    <button class="btn primary" type="submit">Recuperar senha</button>
  </form>

  <span>
    <p class="fontSmall">
      <router-link class="link primary" :to="{ name: 'auth' }">
        Já tem cadastro ? Acesse
      </router-link>
    </p>
  </span>

</template>

<script>
export default {
  name: "ForgetPassword",
};
</script>