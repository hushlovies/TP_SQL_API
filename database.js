// import mysql from 'mysql'
mysql= require('mysql2')
router= express.Router()
const db= mysql.createPool({
host:'localhost',
user:'root',
password:'',
database:'DataCommande'
})

//query test
// db.query(`select * from Utilisateurs`,
// (err,res)=>{ return console.log(res)}
// )
module.exports=connect;

