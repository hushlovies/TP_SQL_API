
const express = require('express')
const app = express()
var cors = require('cors')


const listProduit = async(req, res) =>{
    let conn;
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM produits;')
    res.status(200).json(rows)

};

 
//récuperer le prix d'un produit
const getProduitPrix =  async (req, res)=>{
    let conn;
    let Nom = parseInt(req.params.Nom)
    conn = await pool.getConnection();
    const rows = await conn.query(`SELECT Prix FROM produits WHERE Nom = ? ${Nom};`)
    conn.release();
    if (rows.length > 0) {
        res.status(200).json({ prix: rows[0].Prix });
      } else {
        res.status(404).json({ message: "Produit non trouvé" });
      }
};

const postProduit = async (req, res)=>{
    let conn;
    conn = await pool.getConnection();
    const rows = await conn.query(`insert into produits(NomProduit,Prix,Stock) values `)
    conn.release();

    if (rows) {
      res.status(200).json(res);
    } else {
        res.status(404).json({ message: "Produit non ajouter" });
    }
};




module.exports = {
    getProduitPrix,
    listProduit,
};