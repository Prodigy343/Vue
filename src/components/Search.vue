<template lang='pug'>
    main.section
        transition(name='move')
            app-notification(v-show="showNotification")
                p(slot='body') No se encontraron resultados
        transition(name='move')
            app-loader(v-show='isLoading')
        .container(v-show='!isLoading')
            nav
                input.input.is-large(
                    type='text'
                    placeholder='Find your song'
                    v-model='searchQuery',
                    @keyup.enter='search'
                )
                a.button.is-info.is-large(@click='search') Buscar
                a.button.is-danger.is-large &times;
            .columns.is-multiline
                .column.is-one-quarter(v-for='track in tracks')
                    app-track(
                        v-blur='track.preview_url'
                        :track='track'
                        @select="setSelectedTrack"
                        :class="{ 'is-active' : track.id == selectedTrack }"
                    )
            p
                strong {{ searchMessage }}
</template>

<script>
import trackService from '@/services/track'

import appTrack from '@/components/Track.vue'
import appLoader from '@/components/shared/Loader.vue'
import appNotification from '@/components/shared/Notification.vue'

export default {
    name: 'app',
    data () {
        return {
            searchQuery: '',
            tracks: [],
            isLoading: false,
            selectedTrack: 0,
            showNotification: false
        }
    },
    components: { appTrack, appLoader, appNotification },
    computed: {
        searchMessage () {
            return `Encontrados ${this.tracks.length}`
        }
    },
    methods: {
        setSelectedTrack (id) {
            this.selectedTrack = id
        },
        search () {
            this.isLoading = true
            if (!this.searchQuery) return
            trackService.search(this.searchQuery)
                .then(res => {
                    this.showNotification = res.tracks.total === 0
                    this.tracks = res.tracks.items
                    this.isLoading = false
                })
        }
    },
    watch: {
        showNotification () {
            if (this.showNotification) {
                setTimeout(() => {
                    this.showNotification = false
                }, 1000)
            }
        }
    }

}
</script>

<style lang='scss'>
.is-active{
    border: 1px solid greenyellow;
}

</style>
