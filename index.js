
const express = require('express');
const routerUtilisateurs = require("./routes/utilisateur");
const index = express();
var bodyParser = require('body-parser')

const PORT= 3000;
const db = require("./db");

//const db = new sqlite3.Database(); 

index.get("/commandes/", (req,res)=>{
    db.query('SELECT * FROM commandes',
    function(err,results){
        console.log(results)
        res.status(200).json(results)
    }
    );
    
});
index.get('/archives', (req, res) => {
    //try {
       db.query(
        'SELECT * FROM `archives`',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields);
          res.status(200).json(results) // fields contains extra meta data about results, if available
        })
      });



//

//

index.delete('/archives/:id', (req, res) => {
    const userId = req.params.id; // Utilisez req.params.id pour obtenir l'ID de l'URL
    db.query(
        `DELETE FROM archives WHERE ID = ${userId};`, // Utilisez userId
        function(err, results, fields) {
        if (err) {
          console.error('Erreur lors de la suppression de la commande :', err);
          res.status(500).json({ message: 'Erreur serveur' });
        } else {
          if (results.affectedRows === 0) {
            res.status(404).json({ message: 'commande non trouvé' });
          } else {
            res.status(200).json({ message: 'Suppression réussie' });
          }
        }
      }
    );
  });

  
//te

index.post('/archives', (req, res) => {
  
    db.query(
        'INSERT INTO archives (Nom, type, quantite, Email) VALUES (?, ?, ?, ?)',
        [Nom, type, quantite, Email],
        function (err, results) {
            if (err) {
                console.error("Erreur lors de la création de l'archive :", err);
                res.status(500).json({ message: 'Erreur serveur' });
            } else {
                res.status(201).json({ message: 'Création réussie', insertId: results.insertId });
            }
        }
    );
});



index.use(express.urlencoded({ extended: true }));
index.use(express.json());
index.use(bodyParser.json())

index.use("/TP_SQL_API", routerUtilisateurs);


index.listen(PORT,
    ()=>console.log(`Server is running on http://localhost:${PORT}`)

);



