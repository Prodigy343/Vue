<template lang='pug'>
  #app.section
    app-header
    router-view
    appFooter
</template>

<script>
import appFooter from '@/components/layout/Footer.vue'
import appHeader from '@/components/layout/Header.vue'

export default {
    name: 'app',
    components: { appFooter, appHeader }
}
</script>

<style lang='scss'>
@import './scss/main.scss';

.is-active{
    border: 1px solid greenyellow;
}

</style>
