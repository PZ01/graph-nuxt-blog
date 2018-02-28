import moment from 'moment';

function formatDate(date) {
    return moment(date).format("MMM Do YYYY");
}

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function createToSlug(slug, id) {
    return { name: 'posts-slug', params: { 'slug': slug }, query: { 'id': id }};
}

export { formatDate, isEmptyObject, createToSlug };
