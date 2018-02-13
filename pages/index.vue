<template>
    <section class="section">
        <div class="container">
            <div class="tile is-ancestor">
                <div class="tile is-parent is-6">
                    <tile-content :content="previews[0]"></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content :content="previews[1]"></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content :content="previews[2]"></tile-content> 
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <tile-content :content="previews[3]"></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content :content="previews[4]"></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content :content="previews[5]"></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content :content="previews[6]"></tile-content> 
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <tile-content :content="previews[7]"></tile-content> 
                </div>

                <div class="tile is-parent">
                    <tile-content :content="previews[8]"></tile-content> 
                </div>

                <div class="tile is-parent is-6">
                    <tile-content :content="previews[9]"></tile-content> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TileContent from '~/components/TileContent.vue';
import axios from 'axios';

export default {
    components: {
        TileContent
    },

    asyncData({ req, params }) {
        return axios.get('http://localhost:3006/previews')
            .then((res) => {
                return { previews: res.data.slice(0, 10) }
            })
    },
}
</script>

<style type="sass" scoped>
    .tile .is-parent {
        padding: 0.25rem !important; 
    }
</style>
