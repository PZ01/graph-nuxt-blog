<template>
    <transition-group 
        name="list" 
        tag="div" 
        :class="this.classes"
        v-bind:css="false" 
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave">

        <slot></slot>

    </transition-group>
</template>

<script charset="utf-8">
    
let velocity;

if (process.browser) {
    velocity = require('velocity-animate');
}

export default {
    props: ['classes'],

    methods: {
        beforeEnter(el) {
            el.style.opacity = 0;
        },

        enter(el, done) {
            let velocity;
            if (process.browser)
                velocity = require('velocity-animate');

            var delay = el.dataset.index * 150;
            setTimeout(function () {
                velocity(
                    el,
                    { opacity: 1 },
                    { complete: done }
                );
            }, delay);
        },

        leave(el, done) {
            let velocity;
            if (process.browser)
                velocity = require('velocity-animate');

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
