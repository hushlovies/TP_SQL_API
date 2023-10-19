
const client = require("../db")
const { Utilisateur } = require("../models/utilisateur");


const ajouterUtilisateur = async (req, res) => {
    try {
      let utilisateur = new Utilisateur(
        req.body.Nom,
        req.body.Prenom,
        req.body.Age,
        req.body.Email
      );
      let result = await client
        .collection("utilisateurs")
        .insertOne(utilisateur);
  
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };
  
  const getUtilisateurs = (req, res) => {
    //try {
      console.log("gneeeeeeeeee")
      client.query(
        'SELECT * FROM `utilisateurs`',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields);
          res.status(200).json('dsqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq') // fields contains extra meta data about results, if available
        }
      );

        /*.db()
        .collection("utilisateurs")
        .find()
        .sort({ Nom: 1 });
      let result = await cursor.toArray();
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(204).json({ msg: "Aucun utilisateur trouvé" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }*/
  };
  
  const getUtilisateur = async (req, res) => {
    try {
      let id = new ObjectID(req.params.id);
      let cursor = client.db().collection("utilisateurs").find({ _id: id });
      let result = await cursor.toArray();
      if (result.length > 0) {
        res.status(200).json(result[0]);
      } else {
        res.status(204).json({ msg: "Cet utilisateur n'existe pas" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };
  
  const updateUtilisateur = async (req, res) => {
    try {
      let id = new ObjectID(req.params.id);
      let Nom = req.body.Nom;
      let Prenom = req.body.Prenom;
      let Age = req.body.Age;
      let Email = req.body.Email;
      let result = await client
        .db()
        .collection("utilisateurs")
        .updateOne({ _id: id }, { $set: { Nom, Prenom, Age, Email } });
  
      if (result.modifiedCount === 1) {
        res.status(200).json({ msg: "Modification réussie" });
      } else {
        res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
      }
    } catch (error) {
      console.log(error);
      res.status(501).json(error);
    }
  };
  
  const deleteUtilisateur = async (req, res) => {
    try {
      let id = new ObjectID(req.params.id);
      let result = await client
        .db()
        .collection("utilisateurs")
        .deleteOne({ _id: id });
      if (result.deletedCount === 1) {
        res.status(200).json({ msg: "Suppression réussie" });
      } else {
        res.status(404).json({ msg: "Cet utilisateur n'existe pas" });
      }
    } catch (error) {
      console.log(error);
  
      res.status(501).json(error);
    }
  };
  
  module.exports = {
    ajouterUtilisateur,
    getUtilisateurs,
    getUtilisateur,
    updateUtilisateur,
    deleteUtilisateur,
  };