//#Used for generate: 
//#include in package.json "apollo-fetch": "^0.7.0",
//const { createApolloFetch } = require('apollo-fetch');

module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Blood N Thunder',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Patrick\' Blog' },
            { hid: 'keywords', name: 'keywords', content: 'programming, psychology, meditation, lifestyle, fitness, buddhism' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },

    /*
    generate: {
        interval: 2,

        routes: function () {
            const staticRoutes = [
            ];

            const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/cjdm4mxr02iq10184m7cnd65i';
            const apolloFetch = createApolloFetch({ uri: GRAPHCMS_API })
            const query = `
            query allPostIdentifiers {
                posts:allPosts {
                    id
                    slug
                }
                tags:allTags {
                    name
                }
            }
            `;

            return apolloFetch({ query }) // all apolloFetch arguments are optional 
                .then(result => {

                    const { data } = result
                    const postRoutes = data.posts.map(post => `/posts/${post.slug}?id=${post.id}`);
                    const tagRoutes =   data.tags.map(tag => `/tags/${tag.name}`);

                    return staticRoutes.concat([...postRoutes, ...tagRoutes]);
                })
                .catch(error => {
                    console.log('got error')
                    console.log(error)
                })
        }
    },
    */

    /*
     ** Build configuration
     */
    build: {
        vendor: ['moment', 'vue-directive-tooltip'],

        /*
         ** Run ESLint on save
         */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },

    plugins: ['~/plugins/vue-directive-tooltip'],

    /*
     ** Include CSS
     */
    css: [
        '~assets/css/main.scss',
    ],

    script: [
        { src: '~assets/js/graphql.js' },
        { src: '~assets/js/utility.js' }
    ],

    modules: ['@nuxtjs/apollo'],

    apollo: {
        clientConfigs: {
            default: '~/apollo/client-configs/default.js'
        }
    }
}
