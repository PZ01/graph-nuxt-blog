<template>
    <section class="section" v-cloak>
        <loading :loading="loading"></loading>

        <div class="container">
            <tile-set :posts="allPosts.slice(0, 3)"></tile-set>
            <!--tile-set :posts="allPosts.slice(3, 7)"></tile-set-->
            <!--tile-set :posts="allPosts.slice(7)"></tile-set-->
        </div>
    </section>
</template>

<script>
import TileSet from '~/components/TileSet.vue';
import {ALL_POSTS_QUERY} from '~/assets/js/graphql.js';
import Loading from '~/components/Loading.vue';

const POSTS_PER_PAGE = 10;

export default {
    components: {
        TileSet,
        Loading
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

    computed: {
        postsFetched() {
            return this.allPosts.length > 0; 
        } 
    }
}
</script>

