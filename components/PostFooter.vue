<template>
    <nav class="level">
        <div class="level-left">
            <div class="level-item">
                <span class="text-emphasis padding-right">Categorized as:</span>
                <span class="tags">
                    <nuxt-link :to="createToTag(tag.name)" v-for="tag in post.tags" :key="tag.name" class="tag" v-text="tag.name"></nuxt-link>
                </span>
            </div>
        </div>
        <div class="level-right">
            <div class="level-item text-emphasis" v-text="formatDate(this.post.createdAt)"></div> 
        </div>
    </nav>   
</template>

<script>
import { GenericHelper, RouteHelper } from '~/assets/js/utility.js';

export default {
    props: ['post'],
    mixins: [GenericHelper, RouteHelper],
}
</script>

<style type="sass" scoped>
.padding-right {
    padding-right: 5px;
}
</style>
