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
                nav.level
                    .level-left
                        a.level-item
                            span.icon.is-small(@click='selectTrack') ►
                        a.level-item
                            div.icon.is-small(@click='goToTrack(track.id)') goToTrack
</template>

<script>
export default {
    props: {
        track: {
            type: Object,
            required: true,
            default: null
        }
    },
    methods: {
        selectTrack () {
            this.$emit('select', this.track.id)
            this.$bus.$emit('set-track', this.track)
        },
        goToTrack (id) {
            this.$router.push({ name: 'track', params: { id } })
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    min-height: 400px;
}
</style>
