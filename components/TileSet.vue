<template>
    <transition-group 
        name="list" 
        tag="div" 
        class="tile is-ancestor"
        v-bind:css="false" 
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:leave="leave">
        <div v-for="(post, index) in posts" v-bind:data-index="index" v-bind:key="post.id" class="tile is-parent">
            <tile-content :post="post"></tile-content> 
        </div>
    </transition-group>
</template>

<script>
import TileContent from '~/components/TileContent.vue'; 

let velocity;

if (process.browser) {
    velocity = require('velocity-animate');
}

export default {
    props: ['posts'],

    components: {
        TileContent,
    },

    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0;
        },

        afterEnter(el) {
            let isLastEl = (this.posts.length - 1 == el.dataset.index);
            if(isLastEl) {
                this.$emit('set-animated');
            }
        },

        enter: function (el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function () {
                velocity(
                    el,
                    { opacity: 1 },
                    { complete: done }
                );
            }, delay);
        },

        leave: function (el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function () {
                velocity(
                    el,
                    { opacity: 0 },
                    { complete: done }
                );
            }, delay);
        }
    }
}
</script>

<style type="sass" scoped>
.tile .is-parent {
    padding: 0.25rem !important; 
}
</style>
