<template>
    <div class="tile is-child ">
        <figure>
            <img src="https://bulma.io/images/placeholders/640x320.png">
        </figure>
        <div class="box">
            <span>
                <font-awesome-icon :icon="tagCircle" transform="shrink-6" class="icon-violet"/><a href="#">Team work</a>
            </span>

            <h1 class="title">One</h1>
            <h6 class="subtitle is-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque dictum semper. Donec ornare ullamcorper velit, sagittis venenatis neque varius mattis. Suspendisse et lectus sed neque tincidunt convallis. Curabitur feugiat diam non tortor hendrerit, id mattis dui laoreet...</h6>
            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                        <font-awesome-icon :icon="iconUser" transform="shrink-3" class="icon-violet"/>
                            <a href="#">Patrick Zielinski</a>
                    </div>
                    <div class="level-item">
                        <font-awesome-icon :icon="iconClock" transform="shrink-3" class="icon-violet"/>
                            <a href="#">Today</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faDotCircle } from '@fortawesome/fontawesome-free-solid';
import { faClock } from '@fortawesome/fontawesome-free-regular';
import { faUserCircle } from '@fortawesome/fontawesome-free-solid';

export default {
    components: {
        FontAwesomeIcon,
    },

    computed: {
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
    .box {
    }

    img {
        height: 160px; 
        width: 100%;
        display: block;
        object-fit: cover;
    }
</style>
