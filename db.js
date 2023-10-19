const mysql = require('mysql2');
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'datacommande'
});



/*function queryDatabase(query) {
  return new Promise((resolve, reject) => {
    db.query(query, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}*/




module.exports = db;
