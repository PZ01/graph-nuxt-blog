<template>
    <div class="container container-post" v-if="post.author">
        <div class="box">
            <nav class="level">
                <!-- Left side -->
                <div class="level-left">
                    <div class="level-item">
                        <img class="image is-48x48 is-rounded" :src="post.author.thumbnail.url" alt="Author's Picture"/>
                    </div>
                    <div class="level-item">
                        <span class="posted-by">Posted By 
                            <a href="#">
                                {{post.author.firstName}} {{post.author.lastName}}
                                <font-awesome-icon :icon="longArrowAltRight" class="icon-violet"/>
                            </a>
                        </span> 
                    </div>
                </div>
                <div class="level-right">
                   <div class="level-item">
                       <a class="share-link" href="#">
                           Share
                           <font-awesome-icon :icon="shareSquare" class="icon-violet"/>
                       </a> 
                   </div> 
                </div>
            </nav>

            <div class="content">
                <h1 class="title">{{ post.title }}</h1>
                <p v-html="post.content"></p>
                <hr>
                <span class="categorized-as">Categorized as:</span><br>
                <span class="tags">
                    <a class="tag" href="#" v-for="tag in post.tags" :key="tag" v-text="tag"></a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/fontawesome-free-solid';
import { faShareSquare } from '@fortawesome/fontawesome-free-solid';

import {GET_POST_QUERY} from '~/assets/js/graphql.js';

export default {

    components: {
        FontAwesomeIcon,
    },

    data: () => ({
        loading: 0,
        post: [],
    }),

    apollo: {
        $loadingKey: 'loading',
        post: {
            query: GET_POST_QUERY,
            variables() {
                return { slug: this.$route.params.slug }
            },
            update: ({ Post }) => Post,
        },
    },

    computed: {
        longArrowAltRight() {
            return faLongArrowAltRight;
        },
        shareSquare() {
            return faShareSquare;
        },
    },
}
</script>

<style type="sass" scoped>

</style>
