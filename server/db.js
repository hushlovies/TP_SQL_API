// import mysql from 'mysql'
mysql=require('mysql2')
const db= mysql.createPool({
host:'localhost',
user:'root',
password:'',
database:'DataCommande'
})

//query test
// db.query(`select * from Utilisateurs`,
// function(err,res){
//     console.log(res)
// }
// );

module.exports=db;

