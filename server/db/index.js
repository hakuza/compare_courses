var mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'compare',
});

const sendQuery = function(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, function(err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
};

exports.connection = connection;
exports.query = sendQuery;
