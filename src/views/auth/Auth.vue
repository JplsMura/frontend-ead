<template>
  <form action="/dist/index.html" method="">
    <div class="groupForm">
      <i class="far fa-envelope"></i>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        v-model="email"
        required
      />
    </div>

    <div class="groupForm">
      <i class="far fa-key"></i>
      <input
        type="password"
        name="password"
        placeholder="Senha"
        v-model="password"
        required
      />
      <i class="far fa-eye buttom"></i>
    </div>

    <button
      :class="['btn', 'primary', loading || loadingStore ? 'disabled' : '']"
      type="submit"
      @click.prevent="auth"
    >
      <span v-if="loading">Enviando...</span>
      <span v-else-if="loadingStore">Validando Acesso...</span>
      <span v-else>Login</span>
    </button>
  </form>

  <span>
    <p class="fontSmall">
      <router-link class="link primary" :to="{ name: 'forget.password' }">
        Esqueceu sua senha? Clique aqui
      </router-link>
    </p>
  </span>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { notify } from "@kyvg/vue3-notification";

import router from "@/router";

export default {
  name: "AuthLogin",
  setup() {
    const store = useStore();
    const email = ref("");
    const password = ref("");
    const loading = ref(false);

    const loadingStore = computed(() => store.state.loading);

    watch(
      () => store.state.users.loggedIn,
      (loggedIn) => {
        if (loggedIn) {
          router.push({ name: "campus.home" });
        }
      }
    );

    const typePassword = ref("password");
    const toggleShowPassword = () =>
      (typePassword.value =
        typePassword.value === "password" ? "text" : "password");

    const auth = () => {
      loading.value = true;

      store
        .dispatch("auth", {
          email: email.value,
          password: password.value,
          device_name: "vue3_web",
        })
        .then(() => router.push({ name: "campus.home" }))
        .catch((error) => {
          let msgError = "Falha na requisição";

          if (error.status === 422) msgError = "Dados Inválidos";
          if (error.status === 404) msgError = "Usuário Não Encontrado";

          notify({
            title: "Falha ao autenticar",
            text: msgError,
            type: "warn",
          });
        })
        .finally(() => (loading.value = false));
    };

    return {
      auth,
      email,
      password,
      loading,
      typePassword,
      toggleShowPassword,
      loadingStore,
    };
  },
};
</script>