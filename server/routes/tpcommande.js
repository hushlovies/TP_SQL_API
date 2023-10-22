const express = require("express");

const {
    getProduitPrix ,
    listProduit,
  } = require("../controllers/tpcommande");

const router = express.Router();

//table produit

router.route("/produits/:Nom").get(getProduitPrix);
router.route("/produits").get(listProduit);

module.exports = router;