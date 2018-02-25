<template>
    <section class="section">
        <div class="container">
            <tile-set :posts="allPosts.slice(0, 1)"></tile-set>
            <!--tile-set :posts="allPosts.slice(3, 7)"></tile-set-->
            <!--tile-set :posts="allPosts.slice(7)"></tile-set-->
        </div>
    </section>
</template>

<script>
import TileSet from '~/components/TileSet.vue';
import {ALL_POSTS_QUERY} from '~/assets/js/graphql.js';

const POSTS_PER_PAGE = 10;

export default {
    components: {
        TileSet
    },

    data: () => ({
        loading: 0,
        allPosts: [],
    }),

    apollo: {
        $loadingKey: 'loading',
        allPosts: {
            query: ALL_POSTS_QUERY,
            variables: {
                skip: 0,
                first: POSTS_PER_PAGE
            }
        }
    },
}
</script>

