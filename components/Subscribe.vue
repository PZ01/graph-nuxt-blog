<template>
    <footer class="footer footer-subscribe">
        <div class="container">
            <div class="content">
                <label class="label text-emphasis">Stay in touch!</label>
                <email-input></email-input>
                <p class="is-size-7 has-text-info">
                    If you enjoy the content, be the first to know about new articles and get a personal write-up.
                    Newsletters generally run once a month, so don't worry about spam.<br/><br/>
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
}
</script>
