
const express = require('express');
const routerUtilisateurs = require("./routers/utilisateur");
const index = express();

const db = new sqlite3.Database(); 

index.get("/", (req,res)=>{
    console.log("salut les gars");
});





index.use(express.urlencoded({ extended: true }));
index.use(express.json());

index.use("/TP_SQL_API/", routerUtilisateurs);


index.listen(3000, () => {
    console.log('Serveur API en cours d\'exécution sur le port 3000');
  });




