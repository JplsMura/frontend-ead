<template>
  <form action="/dist/index.html" method="">
    
    <div class="groupForm">
      <i class="far fa-envelope"></i>
      <input type="email" name="email" placeholder="Email" v-model="email" required />
    </div>

    <div class="groupForm">
      <i class="far fa-key"></i>
      <input type="password" name="password" placeholder="Senha" v-model="password" required />
      <i class="far fa-eye buttom"></i>
    </div>

    <button
      :class="['btn', 'primary', loading ? 'loading ' : '']"
      type="submit"
      @click.prevent="auth"
    >
      <span v-if="loading">Alterando...</span>
      <span v-else>Mudar Senha</span>
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import router from "@/router";

import ResetPasswordService from "@/services/password.reset.service";

export default {
  name: "ResetPassword",

  props: {
    token: {
      require: true
    }
  },

  setup(props) {
    const email = ref("");
    const password = ref("");
    const loading = ref(false);

    const auth = () => {
      loading.value = true;

      ResetPasswordService.reset({
          email: email.value,
          password: password.value,
          token: props.token,
      })
      .then(() => router.push({ name: "auth" }))
      .catch(() => alert("error"))
      .finally(() => (loading.value = false));
    };

    return {
      auth,
      email,
      password,
      loading,
    };
  },
};
</script>