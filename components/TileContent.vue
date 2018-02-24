<template>
    <div :id="this.tileId" class="tile is-child">
        <figure>
            <img :src="content.cover.url">
        </figure>
        <div class="box">
            <span class="tags">
                <a class="tag" href="#" v-for="tag in content.tags" :key="tag" v-text="tag"></a>
            </span>

            <h1 class="title">
                <a href="#">
                    {{ content.title }} 
                </a>
            </h1>
            <h6 class="subtitle is-7">{{ content.summary }}</h6>
            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                        <font-awesome-icon :icon="iconUser" transform="shrink-3" class="icon-violet"/>
                        <a href="#" v-text="fullName"></a>
                    </div>
                    <div class="level-item">
                        <font-awesome-icon :icon="iconClock" transform="shrink-3" class="icon-violet"/>
                        <a href="#" v-text="formattedPostDate"></a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faClock } from '@fortawesome/fontawesome-free-regular';
import { faUserCircle } from '@fortawesome/fontawesome-free-solid';

export default {
    props: ['content'],

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
            return 'tile_' + this.content.id;
        },

        formattedPostDate() {
            return moment(this.content.createdAt).format("MMM Do YYYY");
        },

        fullName() {
            return this.content.author.firstName + ' ' + this.content.author.lastName; 
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

<style type="sass" scoped>
    img {
        height: 160px; 
        width: 100%;
        display: block;
        object-fit: cover;
    }

    .box {
        padding-bottom: 0.5em !important;
    }

    .box .title a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .box .subtitle {
        -o-text-overflow: ellipsis;
        text-overflow:    ellipsis;
        overflow: hidden;
        height: 30px;
    }

    .tags .tag {
        margin-bottom: 0em; 
    }
</style>
