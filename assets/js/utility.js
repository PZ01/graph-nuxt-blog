import moment from 'moment';

function formatDate(date) {
    return moment(date).format("MMM Do YYYY");
}

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export { formatDate, isEmptyObject };
