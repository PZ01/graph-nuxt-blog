<template>
    <footer class="footer footer-subscribe">
        <div class="container">
            <div class="content">
                <label class="label text-emphasis">Stay in touch!</label>
                <email-input @email-submitted-ok="onEmailSubmittedOk" 
                             @email-submitted-error="onEmailSubmittedError">
                </email-input>
                <p class="is-size-7 has-text-info">
                    {{statusMsg}}<br/><br/>
                    <strong>Subscription can be cancelled at anytime.</strong>
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
import EmailInput from '~/components/EmailInput.vue';

export default {
    components: {
        EmailInput,
    },

    data() {
        return {
            statusMsg: "If you enjoy the content, be the first to know about new articles and get a personal write-up. Newsletters generally run once a month, so don't worry about spam.",
        }; 
    },
    methods: {
        onEmailSubmittedOk() {
            this.statusMsg = "Thank you for subscribing! Expect a newsletter soon.";
        },

        onEmailSubmittedError() {
            this.statusMsg = "Failed to add you to the newsletter, please try again later. Perhaps this e-mail is already taken?";
        },
    }
}
</script>
