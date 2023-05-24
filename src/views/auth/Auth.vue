<template>
  <form action="/dist/index.html" method="">
    
    <div class="groupForm">
      <i class="far fa-envelope"></i>
      <input type="email" name="email" placeholder="E-mail" v-model="email" required />
    </div>
    
    <div class="groupForm">
      <i class="far fa-key"></i>
      <input type="password" name="password" placeholder="Senha" v-model="password" required />
      <i class="far fa-eye buttom"></i>
    </div>

    <button 
      :class="[
        'btn',
        'primary',
        loading ? 'disabled ' : ''
      ]" 
      type="submit" 
      @click.prevent="auth"
    >
      <span v-if="loading">Enviando...</span>
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
import { ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';

export default {
  name: "AuthLogin",

  setup() {
    const store = useStore()
    const email = ref("")
    const password = ref("")
    const loading = ref(false)
    const device = window.navigator.userAgent

    const auth = () => {
      loading.value = true

      store.dispatch('auth', {
        email: email.value,
        password: password.value,
        device_name: device,
      })
      .then(() => router.push({name: 'campus.home'}))
      .catch(() => alert('error'))
      .finally(() => loading.value = false)
    }

    return {
      auth,
      email,
      password,
      loading,
    };
  }
};
</script>