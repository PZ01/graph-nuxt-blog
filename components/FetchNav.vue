<template>
    <div class="level" v-show="! loading">
        <div class="level-item has-text-centered">
            <div class="field has-addons">
                <p class="control">
                    <a class="button is-medium is-primary" @click="prevClicked" :disabled="atBeginning">
                        <font-awesome-icon icon="chevron-left"></font-awesome-icon>
                    </a>
                </p>
                <p class="control">
                    <a class="button is-medium is-primary" @click="nextClicked" :disabled="hasReachedEnd">
                        <font-awesome-icon icon="chevron-right" class="icon-violet"></font-awesome-icon>
                    </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
    props: ['loading', 'localItemCount', 'totalItemCount', 'currentIndex'],

    components: {
        FontAwesomeIcon
    },

    computed: {
        hasReachedEnd() {
            return (this.localItemCount == this.totalItemCount && this.currentIndex * 2 == this.localItemCount); 
        },

        atBeginning() {
            return (this.currentIndex == 0); 
        }
    },

    methods: {
        prevClicked() {
            this.$emit('prev-clicked'); 
        },

        nextClicked() {
            this.$emit('next-clicked'); 
        } 
    }
}
</script>
