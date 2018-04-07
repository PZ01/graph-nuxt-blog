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
                    <strong>Blood and Thunder</strong> by 
                    <a href="https://www.instagram.com/zielinskip/">Patrick Zielinski</a>. 
                    The blogs source code is available on
                    <a href="http://opensource.org/licenses/mit-license.php">github</a>. 
                    </p>
                    <div class="attributions level has-text-centered">
                        <div class="level-item">
                            <a href="https://graphcms.com/"><img src="~/assets/images/graphcms_logo.png"/></a>
                        </div>
                        <div class="level-item">
                            <a href="https://nuxtjs.org/"><img src="~/assets/images/nuxt_logo.png"/></a>
                        </div>
                        <div class="level-item">
                            <a href="https://bulma.io/"><img src="~/assets/images/bulma_logo.png"/></a>
                        </div>
                    </div>
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
