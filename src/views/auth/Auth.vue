<template>
  <form action="/dist/index.html" method="">
    
    <div class="groupForm">
      <i class="far fa-envelope"></i>
      <input type="email" name="email" placeholder="Email" required />
    </div>
    
    <div class="groupForm">
      <i class="far fa-key"></i>
      <input type="password" name="password" placeholder="Senha" required />
      <i class="far fa-eye buttom"></i>
    </div>

    <button class="btn primary" type="submit" @click.prevent="auth">Login</button>
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
// import router from '@/router';
import { useStore } from 'vuex';

export default {
  name: "AuthLogin",

  setup() {
    const store = useStore()

    const auth = () => {
      store.dispatch('auth', {
        email: 'test@email.com',
        password: '123',
        device_name: window.navigator.userAgent
      })
    }

    return {
      auth
    };
  }
};
</script>