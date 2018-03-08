<template>
    <div class="level" v-show="! loading">
        <div class="level-item has-text-centered">
            <div class="field has-addons">
                <p class="control">
                <a class="button is-medium is-primary" @click="prevClicked" :disabled="atBeginning">
                    <font-awesome-icon :icon="chevronLeft" class="icon-violet"/>
                </a>
                </p>
                <p class="control">
                <a class="button is-medium is-primary" @click="nextClicked" :disabled="hasReachedEnd">
                    <font-awesome-icon :icon="chevronRight" class="icon-violet"/>
                </a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faChevronRight } from '@fortawesome/fontawesome-free-solid';
import { faChevronLeft } from '@fortawesome/fontawesome-free-solid';

export default {
    props: ['loading', 'localItemCount', 'totalItemCount', 'currentIndex'],

    components: {
        FontAwesomeIcon
    },

    computed: {
        chevronLeft() {
            return faChevronLeft;
        },

        chevronRight() {
            return faChevronRight;
        },

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
