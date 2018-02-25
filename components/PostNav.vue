<template>
    <nav class="navbar">
        <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io/">
                    <font-awesome-icon :icon="circle" class="icon-violet"/>
                </a>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                    <a class="navbar-item" href="https://bulma.io/">
                        <font-awesome-icon :icon="chevronLeft" class="icon-violet"/>
                    </a>
                    <a class="navbar-item" href="https://bulma.io/">
                        <font-awesome-icon :icon="chevronRight" class="icon-violet"/>
                    </a>
            </div>
        </div>
    </nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faTimesCircle } from '@fortawesome/fontawesome-free-regular';
import { faChevronRight } from '@fortawesome/fontawesome-free-solid';
import { faChevronLeft } from '@fortawesome/fontawesome-free-solid';

export default {
    components: {
        FontAwesomeIcon,
    },

    computed: {
        circle() {
            return faTimesCircle;
        },
        chevronRight() {
            return faChevronRight;
        },
        chevronLeft() {
            return faChevronLeft;
        },
    },
}
</script>
