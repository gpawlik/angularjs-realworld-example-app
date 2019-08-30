import moment from 'moment';

// Dispaly format in format: August 30, 2019
// Form more options refer to: https://momentjs.com/docs/#/displaying/
export const getLongDate = date => moment(date).format('MMMM DD, YYYY');
