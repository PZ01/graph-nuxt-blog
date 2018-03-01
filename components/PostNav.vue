<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
                <font-awesome-icon :icon="circle" class="icon-violet"/>
            </nuxt-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                    <nuxt-link :to="previousLink" class="navbar-item" v-if="previous !== undefined" v-tooltip.left="tooltip(previous)">
                        <font-awesome-icon :icon="chevronLeft" class="icon-violet"/>
                    </nuxt-link>
                    <nuxt-link :to="nextLink" class="navbar-item" v-if="next !== undefined" v-tooltip.right="tooltip(next)">
                        <font-awesome-icon :icon="chevronRight" class="icon-violet"/>
                    </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { createToSlug } from '~/assets/js/utility.js';

import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faTimesCircle } from '@fortawesome/fontawesome-free-regular';
import { faChevronRight } from '@fortawesome/fontawesome-free-solid';
import { faChevronLeft } from '@fortawesome/fontawesome-free-solid';
import { faBan } from '@fortawesome/fontawesome-free-solid';

export default {
    props: ['previous', 'next'],

    components: {
        FontAwesomeIcon,
    },

    methods: {
        tooltip(post) {
            return { content: post.title, class: 'tooltip-custom tooltip-other-custom' } 
        } 
    },

    computed: {
        circle() {
            return faTimesCircle;
        },

        chevronLeft() {
            return faChevronLeft;
        },

        chevronRight() {
            return faChevronRight;
        },

        previousLink() {
            return createToSlug(this.previous.slug, this.previous.id);
        },

        nextLink() {
            return createToSlug(this.next.slug, this.next.id);
        },
    },
}
</script>
