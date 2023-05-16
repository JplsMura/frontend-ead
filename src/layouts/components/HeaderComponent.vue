<template>
    <header id="header">
        <nav>
            <span class="toggleMenu far fa-bars"></span>
            <span class="logo">
                <img style="max-width: 50px; max-height: 50px;" :src="require('@/assets/images/logo-custom.png')" alt="EAD Plataforma">
            </span>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'header-component'
}
</script>