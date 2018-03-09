import axios from 'axios';

exports.get = function(courseID) {
  return axios.get('http://54.215.242.105:3004/api/compare', {
    params: {
      id: courseID,
    },
  });
};
