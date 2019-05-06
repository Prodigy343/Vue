<template lang="pug">
    .card(v-if='track && track.album')
        .card-image
            figure.image.is-1by1
                img(:src="track.album.images[0].url")
        .card-content
            .media
                .media-left
                    figure.image.is-48x48
                        img(:src="track.album.images[0].url")
                .media-content
                    p.title.is-6
                        a(:href='track.href' target='_blank')
                            strong {{ track.name }}
                    p.subtitle.is-6
                        a(:href='track.artists[0].external_urls.spotify' target='_blank')
                            |   {{ track.artists[0].name }}
            .content
                small
                    nav.nav
                        .nav-menu
                            button.nav-item.button.is-primary(class='play-btn', @click='selectTrack') ►
                            button.nav-item.button.is-warning(@click='goToTrack(track.id)') Go
</template>

<script>
import trackMixin from '@/mixins/track'

export default {
    mixins: [ trackMixin ],
    props: {
        track: {
            type: Object,
            required: true,
            default: null
        }
    },
    methods: {
        goToTrack (id) {
            this.$router.push({ name: 'track', params: { id } })
        }
    }
}
</script>

<style lang="scss" scoped>
.play-btn{
    margin-right: 20px;
}

.card{
    min-height: 400px;
}
</style>
