<template>
    <div>
        <main class="site-content">
            <nuxt/>
            <div class="push"></div>
        </main>

        <subscribe v-if="displaySubscribe"></subscribe>
        <footer class="site-footer footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script charset="utf-8">
import Subscribe from '~/components/Subscribe.vue';

export default {
    components: {
        Subscribe,
    },

    computed: {
        displaySubscribe() {
            if(this.$route.path == '/')
                return false;
            return true;
        }

    }
}
</script>
