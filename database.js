import mysql from 'mysql'

const db= mysql.createPool({
host:'localhost',
user:'root',
password:'',
database:'DataCommande'
})

//query test
db.query(`select * from Utilisateurs`,
(err,res)=>{ return console.log(res)}
)

