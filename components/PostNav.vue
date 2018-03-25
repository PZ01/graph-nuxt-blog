<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
                <font-awesome-icon :icon="['far', 'times-circle']" class="icon-violet"/>
            </nuxt-link>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                    <nuxt-link :to="createToSlug(this.previous.slug, this.previous.id)" 
                        class="navbar-item" v-if="this.previous !== undefined" v-tooltip.left="tooltip(previous)">
                        <font-awesome-icon icon="chevron-left" class="icon-violet"/>
                    </nuxt-link>

                    <nuxt-link :to="createToSlug(this.next.slug, this.next.id)" 
                        class="navbar-item" v-if="this.next !== undefined" v-tooltip.right="tooltip(next)">
                        <font-awesome-icon icon="chevron-right" class="icon-violet"/>
                    </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { RouteHelper  } from '~/assets/js/utility.js';

import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
    props: ['previous', 'next'],

    mixins: [RouteHelper],

    components: {
        FontAwesomeIcon,
    },

    methods: {
        tooltip(post) {
            return { content: post.title, class: 'tooltip-custom tooltip-other-custom' } 
        } 
    },
}
</script>
