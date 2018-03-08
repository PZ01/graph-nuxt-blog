<template>
    <div>
    <loading :loading="loading"></loading>
    <section class="section" v-cloak>

        <div class="container">
            <tile-set :posts="allPosts.slice(currentIndex, currentIndexUpperLimit)"></tile-set>
            <!--tile-set :posts="allPosts.slice(7)"></tile-set-->
            
            <fetch-nav :loading="loading" 
                       :local-item-count="this.allPosts.length" 
                       :total-item-count="this.postCount"
                       :current-index="this.currentIndex"
                       @prev-clicked="onPrevClicked" 
                       @next-clicked="onNextClicked">
            </fetch-nav>
        </div>
    </section>
    </div>
</template>

<script>
import { GenericHelper } from '~/assets/js/utility.js';
import { ALL_POSTS_QUERY, ALL_POSTS_COUNT } from '~/assets/js/graphql.js';
import Loading from '~/components/Loading.vue';
import TileSet from '~/components/TileSet.vue';
import FetchNav from '~/components/FetchNav.vue';

const POSTS_PER_PAGE = 3;

export default {

    mixins:[GenericHelper],

    components: {
        TileSet,
        Loading,
        FetchNav,
    },

    data: () => ({
        loading: 0,
        currentIndex: 0, //Replace with watcher
        postCount: 0,
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
        },
        postCount: {
            query: ALL_POSTS_COUNT,
            update: ({ _allPostsMeta }) => _allPostsMeta.count
        }
    },

    computed: {
        hasMore() {
            return this.currentIndex < this.postCount;
        },

        currentIndexUpperLimit() {
            return (this.currentIndex + POSTS_PER_PAGE); 
        }
    },

    methods: {
        fetchPosts() {
            this.$apollo.queries.allPosts.fetchMore({
                variables: {
                    skip: (this.currentIndex + POSTS_PER_PAGE),
                    first: POSTS_PER_PAGE,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    console.log(JSON.stringify(fetchMoreResult, null, 4));

                    let noMoreResults = ! fetchMoreResult || ! this.hasMore;
                    if (noMoreResults)
                        return previousResult;

                    this.increaseCurrentIndex();
                    return {
                        allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
                    }
                },
            })
        },

        onPrevClicked() {
            this.decreaseCurrentIndex();
        },

        onNextClicked() {
            if(this.allPosts[this.currentIndex + POSTS_PER_PAGE] !== undefined) {
                this.increaseCurrentIndex();
            }
            else {
                this.fetchPosts();
            }
        },

        increaseCurrentIndex() {
            this.currentIndex += POSTS_PER_PAGE; 
        },

        decreaseCurrentIndex() {
            this.currentIndex -= POSTS_PER_PAGE; 
        },
    }
}
</script>

