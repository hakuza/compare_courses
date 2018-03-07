import axios from 'axios';

exports.get = function(courseID) {
  return axios.get('http://localhost:3004/api/compare', {
    params: {
      id: courseID,
    },
  });
};
