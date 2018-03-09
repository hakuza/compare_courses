import axios from 'axios';

exports.get = function(courseID) {
  return axios.get('/compare', {
    params: {
      id: courseID,
    },
  });
};
