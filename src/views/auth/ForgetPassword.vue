<template>
  <form action="/dist/index.html" method="">
    <div class="groupForm">
      <i class="far fa-envelope"></i>
      <input type="email" name="email" placeholder="Email" v-model="email" required/>
    </div>

    <button
      :class="['btn', 'primary', loading ? 'disabled ' : '']"
      type="submit"
      @click.prevent="forgetPassword"
    >
      <span v-if="loading">Enviando e-mail...</span>
      <span v-else>Recuperar senha</span>
    </button>
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
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "ForgetPassword",

  setup() {
    const store = useStore();
    const email = ref("");
    const loading = ref(false);

    const forgetPassword = () => {
      loading.value = true;

      store
        .dispatch("forgetPassword", { email: email.value })
        .then(() => alert("Confira o seu e-mail"))
        .catch(() => alert("error"))
        .finally(() => (loading.value = false));
    };

    return {
      email,
      loading,
      forgetPassword,
    };
  },
};
</script>