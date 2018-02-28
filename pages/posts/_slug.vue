<template>
<div v-cloak>
    <div class="loading-icon" v-if="loading">
        <font-awesome-icon :icon="compass" class="icon-violet" size="10x" spin/>
    </div>

    <transition name="fade">
        <div v-if="postFetched">
            <div class="nav-stretch"></div>    
            <div class="container container-post">

                <post-nav :previous="data.previous" :next="data.next"></post-nav>

                <div class="box">
                    <post-header :post="data.post"></post-header>

                    <div class="content">
                        <h1 class="title">{{ data.post.title }}</h1>
                        <p v-html="data.post.content"></p>
                        <post-footer :post="data.post"></post-footer>
                    </div>
                </div>
            </div>
            <subscribe></subscribe>
        </div>
    </transition>
</div>

</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faCompass } from '@fortawesome/fontawesome-free-regular';

import { GET_POST_AND_EDGES_QUERY } from '~/assets/js/graphql.js';

import PostNav from '~/components/PostNav.vue';
import PostHeader from '~/components/PostHeader.vue';
import PostFooter from '~/components/PostFooter.vue';
import Subscribe from '~/components/Subscribe.vue';

import { isEmptyObject } from '~/assets/js/utility.js';

export default {

    components: {
        PostNav,
        PostHeader,
        PostFooter,
        Subscribe,
        FontAwesomeIcon,
    },

    data: () => ({
        loading: 0,
        data: {},
    }),

    apollo: {
        $loadingKey: 'loading',
        data: {
            query: GET_POST_AND_EDGES_QUERY,
            variables() {
                return { strId: this.$route.query.id, id: this.$route.query.id }
            },
            update:({Previous, Post, Next}) => ({
                'previous': Previous[0],
                'next': Next[0],
                'post': Post,
            }),
        },
    },

    computed: {
        postFetched() {
            return ! isEmptyObject(this.data); 
        },

        compass() {
            return faCompass; 
        }
    }
}
</script>

<style type="sass" scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to { 
    opacity: 0;
}

.loading-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 3;
}
</style>
