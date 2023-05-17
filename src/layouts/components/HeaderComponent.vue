<template>
  <header id="header">
    <nav>
      <span class="toggleMenu far fa-bars"></span>
      <span class="logo">
        <router-link :to="{ name: 'campus.home' }">
          <img
            style="max-width: 50px; max-height: 50px"
            :src="require('@/assets/images/logo-custom.png')"
            alt="EAD Plataforma"
          />
        </router-link>
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header-component",
};
</script>