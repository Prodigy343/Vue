<template lang="pug">
    app-track(:track='track')
</template>

<script>
import appTrack from '@/components/Track'
import trackService from '@/services/track'

export default {
    components: { appTrack },
    data () {
        return {
            track: {
                type: Object,
                required: true,
                default: null
            }
        }
    },

    created () {
        const id = this.$route.params.id
        trackService.getById(id)
            .then(res => {
                this.track = res
            })
    }
}
</script>

<style lang="scss">

</style>
