const express = require('express');
const sqlite3 = require('sqlite3');
const fs = require('fs');
const index = express();

const db = new sqlite3.Database(); 

index.get("/", (req,res)=>{
    console.log("salut les gars");
});




const sql = fs.readFileSync('bdd.sql', 'utf-8');
db.exec(sql, (err) => {
  if (err) {
    console.error('Erreur lors de la création de la base de données :', err);
  } else {
    console.log('Base de données créée avec succès.');
  }
});


index.listen(3000, () => {
    console.log('Serveur API en cours d\'exécution sur le port 3000');
  });



