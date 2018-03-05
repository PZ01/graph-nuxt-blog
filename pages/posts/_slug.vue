<template>
<div v-cloak>
    <loading :loading="loading"></loading>

    <share-modal v-if="postFetched" :is-active="showShareModal" :post="data.post" @modal-closed="onShareModalClosed"></share-modal>

    <transition name="fade">
        <div v-if="postFetched">
            <div class="nav-stretch"></div>    
            <div class="container container-post">

                <post-nav :previous="data.previous" :next="data.next"></post-nav>

                <div class="box">
                    <post-header :post="data.post" @share-clicked="onShareLinkClicked"></post-header>

                    <div class="content">
                        <h1 class="title">{{ data.post.title }}</h1>
                        <p v-html="data.post.content"></p>
                        <post-footer :post="data.post"></post-footer>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</div>

</template>

<script>
import { GET_POST_AND_EDGES_QUERY } from '~/assets/js/graphql.js';

import ShareModal from '~/components/modals/ShareModal.vue';

import PostNav from '~/components/PostNav.vue';
import PostHeader from '~/components/PostHeader.vue';
import PostFooter from '~/components/PostFooter.vue';
import Loading from '~/components/Loading.vue';

import { isEmptyObject } from '~/assets/js/utility.js';

export default {

    components: {
        PostNav,
        PostHeader,
        PostFooter,
        ShareModal,
        Loading
    },

    data: () => ({
        loading: 0,
        showShareModal: false,
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
    },

    methods: {
        onShareLinkClicked() {
            this.showShareModal = ! this.showShareModal;
        },

        onShareModalClosed() {
            this.onShareLinkClicked();
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
</style>
