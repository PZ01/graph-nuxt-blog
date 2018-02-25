<template>
    <nav class="level">
        <div class="level-left">
            <div class="level-item">
                <span class="text-emphasis padding-right">Categorized as:</span>
                <span class="tags">
                    <a class="tag" href="#" v-for="tag in post.tags" :key="tag" v-text="tag"></a>
                </span>
            </div>
        </div>
        <div class="level-right">
            <div class="level-item text-emphasis" v-text="formattedPostDate"></div> 
        </div>
    </nav>   
</template>

<script>
import { formatDate } from '~/assets/js/utility.js';

export default {
    props: ['post'],

    computed: {
        formattedPostDate() {
            return formatDate(this.post.createdAt); 
        } 
    }
}
</script>

<style type="sass" scoped>
.padding-right {
    padding-right: 5px;
}
</style>
