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
                <font-awesome-icon :icon="envelope"/>
            </span>
            <span class="icon is-medium is-right">
                <font-awesome-icon :icon="isValidEmail ? check : exclamation" :class="validation"/>
            </span>
        </div>
        <div class="control">
            <button class="button is-medium is-primary" :disabled="! isValidEmail">
                Subscribe
            </button>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faCheck } from '@fortawesome/fontawesome-free-solid';
import { faExclamation } from '@fortawesome/fontawesome-free-solid';

let validator  = require('email-validator');
 
validator.validate("test@email.com"); // true 
export default {
    components: {
        FontAwesomeIcon,
    },

    data() {
        return {
            email: '', 
        } 
    },

    computed: {
        envelope() {
            return faEnvelope;
        },

        check() {
            return faCheck;
        },

        exclamation() {
            return faExclamation;
        },

        isValidEmail() {
            return validator.validate(this.email); 
        },

        validation() {
            if(this.isValidEmail) {
                return 'valid-email';
            }
            return 'invalid-email';
        }
    },
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
