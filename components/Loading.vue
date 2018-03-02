<template>
    <div class="loading-icon" v-if="loading">
        <font-awesome-icon :icon="compass" class="icon-violet" size="10x" spin/>
    </div>
</template>

<script charset="utf-8">
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faCompass } from '@fortawesome/fontawesome-free-regular';

export default {

    props: ['loading'],

    components: {
        FontAwesomeIcon
    },

    computed: {
        compass() {
            return faCompass; 
        }
    }
}    
</script>

<style type="sass" scoped>
.loading-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 3;
}
</style>
