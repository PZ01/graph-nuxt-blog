<template>
    <div id="modal" class="modal" :class="isActive ? 'is-active' : ''">
        <div class="modal-background" @click="closeModal()"></div>
        <div class="modal-content">
            <div class="box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img class="image is-48x48 is-rounded" :src="post.author.thumbnail.url" alt="Author's Picture"/>
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                            <strong>{{ post.author.firstName }} says...</strong>
                            <br>
                            I'm glad you enjoyed this article. I write them with specific values in mind. Each article is
                            written with an attention to detail, a sense of duty, purpose and care. By sharing this, you
                            make me happy.
                            </p>
                        </div>
                    </div>
                    <div id="share">
                        <!-- facebook -->
                        <a class="facebook" :href="facebookUrl" target="blank">
                            <font-awesome-icon :icon="facebook"/>
                        </a>

                        <!-- twitter -->
                        <a class="twitter" href="https://twitter.com/intent/tweet?status=title+url" target="blank">
                            <font-awesome-icon :icon="twitter"/>
                        </a>

                        <!-- pinterest -->
                        <a class="pinterest" href="https://pinterest.com/pin/create/bookmarklet/?media=media&url=url&is_video=false&description=title" 
                                             target="blank">
                            <font-awesome-icon :icon="pinterest"/>
                        </a>
                    </div>
                </article>
            </div>
        </div>
        <button class="modal-close is-large" @click="closeModal()"></button>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faPinterest } from '@fortawesome/fontawesome-free-brands';

    export default {
        props: ['isActive', 'post'],

        components: {
            FontAwesomeIcon,         
        },

        computed: {
            facebook() {
                return faFacebook; 
            },

            twitter() {
                return faTwitter; 
            },
            
            pinterest() {
                return faPinterest; 
            },

            url() {
                return "http://127.0.0.1" + this.$route.fullPath; 
            },

            facebookUrl() {
                return "http://www.facebook.com/sharer/sharer.php?u=" + this.url +"&title='" + this.post.title + "'";
            }
        },

        methods: {
            closeModal() {
                this.$emit('modal-closed');
            },
        }
    }
</script>

<style type="sass" scoped>
    #share {
  	text-align: center;
}

/* buttons */

#share a {
	width: 50px;
  	height: 50px;
  	display: inline-block;
  	margin: 8px;
  	border-radius: 50%;
  	font-size: 24px;
  	color: #fff;
	opacity: 0.75;
	transition: opacity 0.15s linear;
}

#share a:hover {
	opacity: 1;
}

/* icons */

#share svg {
  	position: relative;
  	top: 20%;
  	transform: translateY(-15%);
}

/* colors */

.facebook {
 	background: #3b5998;
}

.twitter {
  	background: #55acee;
}

.googleplus {
  	background: #dd4b39;
}

.linkedin {
  	background: #0077b5;
}

.pinterest {
  	background: #cb2027;
}
</style>
