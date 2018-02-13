<template>
    <section class="section">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-parent is-6">
                    <tile-content></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content></tile-content> 
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <tile-content></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content></tile-content> 
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <tile-content></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content></tile-content> 
                </div>

                <div class="tile is-parent is-6">
                    <tile-content></tile-content> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TileContent from '~/components/TileContent.vue';

export default {
    components: {
        TileContent
    },
}
</script>

<style type="sass" scoped>
    .tile .is-parent {
        padding: 0.25rem !important; 
    }
</style>
