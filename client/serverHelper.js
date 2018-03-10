import axios from 'axios';

exports.get = function(query) {
  return axios.get('/compare' + query);
};
