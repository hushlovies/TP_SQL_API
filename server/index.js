
const express = require('express');
const index = express();
var bodyParser = require('body-parser')

const PORT= 5000;
const db = require("./db");


index.use(express.urlencoded({ extended: true }));
index.use(express.json());
index.use(bodyParser.json());


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
    const userId = req.params.id; 
    db.query(
        `DELETE FROM archives WHERE ID = ${userId};`,
        function(err, results, fields) {
        if (err) {
          console.error('Erreur lors de la suppression de la commande :', err);
          res.status(500).json({ message: 'Erreur serveur' });
        } else {
          if (results.affectedRows === 0) {
            res.status(404).json({ message: 'archives non trouvé' });
          } else {
            res.status(200).json({ message: 'Suppression réussie' });
          }
        }
      }
    );
  });

  
//te
index.put('/archives/:id', (req, res) => {
  const userId = req.params.id; 
  const userName = req.body.Nom;
  const userType = req.body.type;
  const userQuantite = req.body.quantite;
  const userEmail = req.body.Email;

  const sql = `UPDATE archives SET Nom= '${userName}', type = '${userType}', quantite = ${userQuantite}, Email = '${userEmail}' WHERE ID = '${userId}'`;


  db.query(sql, function (err, results) {

      if (err) {
        console.error("Erreur lors de la modification de l'archive :", err);
        res.status(500).json({ message: 'Erreur serveur' });
      } else {
        res.status(200).json({ message: 'Modification réussie'});
      }
    }
  );
});


index.post('/archives', (req, res) => {
  const userName = req.body.Nom;
  const userType = req.body.type;
  const userQuantite = req.body.quantite;
  const userEmail = req.body.Email;

  const sql = `INSERT INTO archives (Nom, type, quantite, Email) VALUES ('${userName}', '${userType}', ${userQuantite}, '${userEmail}')`;

  db.query(sql, function (err, results) {
    if (err) {
      console.error("Erreur lors de la création de l'archive :", err);
      res.status(500).json({ message: 'Erreur serveur' });
    } else {
      res.status(201).json({ message: 'Création réussie'});
    }
  });
});







index.listen(PORT,
    ()=>console.log(`Server is running on http://localhost:${PORT}`)

);



