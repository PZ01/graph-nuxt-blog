<template>
        <nav class="level">
            <div class="level-left">
                <div class="level-item">
                    <img class="image is-48x48 is-rounded" :src="post.author.thumbnail.url" alt="Author's Picture"/>
                </div>
                <div class="level-item">
                    <span class="text-emphasis">Posted By 
                        <a href="#">
                            {{post.author.firstName}} {{post.author.lastName}}
                            <font-awesome-icon icon="long-arrow-alt-right" class="icon-violet"/>
                        </a>
                    </span> 
                </div>
            </div>
            <div class="level-right">
                <div class="level-item text-emphasis">
                    <a @click="onShareLinkClicked">
                        Share
                        <font-awesome-icon icon="share-square" class="icon-violet"/>
                    </a> 
                </div> 
            </div>
        </nav>    
    
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
    props: ['post'],

    components: {
        FontAwesomeIcon,
    },

    data() {
        return {
            shareModalActive: false,
        }  
    },

    methods: {
        onShareLinkClicked() {
            this.$emit('share-clicked');
        }
    }
}
</script>
