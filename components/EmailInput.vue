<template>
    <div class="field has-addons">
        <div class="control is-expanded has-icons-left has-icons-right">
            <input 
             class="input is-medium" 
             
             type="email" 
             placeholder="Enter your e-mail address" 
             v-model="email"
             required>
            <span class="icon is-medium is-left">
                <font-awesome-icon icon="envelope"/>
            </span>
            <span class="icon is-medium is-right">
                <font-awesome-icon :icon="isValidEmail ? 'check' : 'exclamation'" :class="validation"/>
            </span>
        </div>
        <div class="control">
            <button class="button is-medium is-primary" :class="classes" :disabled="cannotSubmit" @click="addSubscriber()">
                Subscribe
            </button>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { ADD_SUBSCRIBER } from '~/assets/js/graphql.js';

let validator = require('email-validator');
 
export default {
    components: {
        FontAwesomeIcon,
    },

    data() {
        return {
            email: '', 
            submitted: false,
            loading: false,
        } 
    },

    computed: {
        classes() {
            return [this.loading ? 'is-loading' : '']; 
        },

        isValidEmail() {
            return validator.validate(this.email); 
        },

        cannotSubmit() {
            return (! this.isValidEmail || this.loading); 
        },

        validation() {
            if(this.isValidEmail) {
                return 'valid-email';
            }
            return 'invalid-email';
        },
    },

    methods: {
        addSubscriber() {
            this.loading = true;

            this.$apollo.mutate({
                mutation: ADD_SUBSCRIBER,
                variables: { email: this.email },
            }).then((data) => {
                this.loading = false;
                this.$emit('email-submitted-ok');
            }).catch((error) => {
                this.loading = false;
                this.$emit('email-submitted-error');
            }); 
        } 
    }
}
</script>

<style type="sass" scoped>
    .valid-email {
        color: green;
    } 

    .invalid-email {
        color: red; 
    }
</style>
