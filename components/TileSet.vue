<template>
    <delayed-group-transition>
        <div v-for="(post, index) in posts" v-bind:data-index="index" v-bind:key="post.id" class="tile is-parent">
            <tile-content :post="post"></tile-content> 
        </div>
    </delayed-group-transition>
</template>

<script>
import DelayedGroupTransition from '~/components/DelayedGroupTransition.vue';
import TileContent from '~/components/TileContent.vue'; 

export default {
    props: ['posts'],

    components: {
        TileContent,
    },
}
</script>

<style type="sass" scoped>
.tile .is-parent {
    padding: 0.25rem !important; 
}
</style>
