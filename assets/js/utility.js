import moment from 'moment';

/*
 * Mixins
 */
var GenericHelper = {
    methods: {
        formatDate(date) {
            return moment(date).format("MMM Do YYYY");
        },

        isEmptyObject(obj) {
            return Object.keys(obj).length === 0 && obj.constructor === Object;
        }
    }
};

var RouteHelper = {
    methods: {
        createToSlug(slug, id) {
            return { name: 'posts-slug', params: { 'slug': slug }, query: { 'id': id }};
        },
        createToTag(tag) {
            return { name: 'tags-tag', params: { 'tag': tag }};
        }
    }
};

export { GenericHelper, RouteHelper };
