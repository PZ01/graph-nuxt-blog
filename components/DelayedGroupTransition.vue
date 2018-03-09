<template>
    <transition-group name="delayed-group" tag="div" :class="this.classes">
        <slot></slot>
    </transition-group>
</template>

<script charset="utf-8">
export default {
    props: ['classes'],

    methods: {
    }
}
</script>
