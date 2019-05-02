<template lang='pug'>
  #app.section
    app-header
    app-notification(v-show="showNotification")
        p(slot='body') No se encontraron resultados
    app-loader(v-show='isLoading')
    .container(v-show='!isLoading')
      nav
        input.input.is-large(
          type='text'
          placeholder='Find your song'
          v-model='searchQuery'
        )
        a.button.is-info.is-large(@click='search') Buscar
        a.button.is-danger.is-large &times;
      .columns.is-multiline
        .column.is-one-quarter(v-for='track in tracks')
            app-track(
                :track='track'
                @select="setSelectedTrack"
                :class="{ 'is-active' : track.id == selectedTrack }"
            )
      p
        strong {{ searchMessage }}
    appFooter
</template>

<script>
import trackService from '@/services/track'
import appFooter from '@/components/layout/Footer.vue'
import appHeader from '@/components/layout/Header.vue'

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
    components: { appFooter, appHeader, appTrack, appLoader, appNotification },
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
@import './scss/main.scss';

.is-active{
    border: 1px solid greenyellow;
}

</style>
