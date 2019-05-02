<template lang="pug">
    .card
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
        }
    }
}
</script>

<style lang="scss" scoped>
.card{
    min-height: 400px;
}
</style>
