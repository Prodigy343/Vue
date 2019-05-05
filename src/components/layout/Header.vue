<template lang='pug'>
    section.hero.is-success
        .hero-head
            header.nav
                .container
                    .nav-left
                        .nav-item
                            strong Platzi Music API Connect
                    .nav-right.nav-menu
                        router-link.nav-item(to="search") Buscar
                        router-link.nav-item(to="about") Nosotros
        .hero-body
            .container.has-text-centered
                h1.title Platzi Music
                h2.subtitle Song from SpotyAPI
                app-player
</template>

<script>
import appPlayer from '@/components/Player.vue'

export default {
    components: { appPlayer }
}
</script>
