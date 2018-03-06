<template>
    <div :id="this.tileId" class="tile tile-as-content is-child">
        <figure>
            <img :src="post.cover.url">
        </figure>
        <div class="box">
            <span class="tags">
                <nuxt-link :to="createToTag(tag.name)" v-for="tag in post.tags" :key="tag.name" class="tag">{{ tag.name }}</nuxt-link>
            </span>

            <h1 class="title">
                <nuxt-link :to="createToSlug(this.post.slug, this.post.id)">{{ post.title }}</nuxt-link>
            </h1>
            
            <h6 class="subtitle is-7">{{ post.summary }}</h6>

            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                        <font-awesome-icon :icon="iconUser" transform="shrink-3" class="icon-violet"/>
                        <a href="#" v-text="fullName"></a>
                    </div>
                    <div class="level-item">
                        <font-awesome-icon :icon="iconClock" transform="shrink-3" class="icon-violet"/>
                        <a href="#" v-text="formatDate(this.post.createdAt)"></a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import { GenericHelper, RouteHelper } from '~/assets/js/utility.js';

import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faClock } from '@fortawesome/fontawesome-free-regular';
import { faUserCircle } from '@fortawesome/fontawesome-free-solid';

export default {
    props: ['post'],
    mixins: [GenericHelper, RouteHelper],

    components: {
        FontAwesomeIcon,
    },

    mounted() {
        this.$nextTick(function() {
            let el = document.querySelector(`#${this.tileId} .subtitle.is-7`);
            this.ellipsizeTextBox(el);
        });
    },

    methods: {
        ellipsizeTextBox(el) {
            var wordArray = el.innerHTML.split(' ');
            while(el.scrollHeight > el.offsetHeight) {
                wordArray.pop();
                el.innerHTML = wordArray.join(' ') + '...';
            }
        }
    },

    computed: {

        tileId() {
            return 'tile_' + this.post.id;
        },

        fullName() {
            return this.post.author.firstName + ' ' + this.post.author.lastName; 
        },

        tagCircle() {
            return faDotCircle;
        },

        iconUser() {
            return faUserCircle;
        },

        iconClock() {
            return faClock;
        },
    },
}
</script>
