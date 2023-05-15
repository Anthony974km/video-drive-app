const db = require('../models');
const Produit = db.Produit;

exports.getAllProduits = async (req, res) => {
    try {
        const produits = await Produit.findAll();
        res.json(produits);
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération des produits');
    }
};

exports.createProduit = async (req, res) => {
    try {
        const newProduit = await Produit.create(req.body);
        res.status(201).json(newProduit);
    } catch (err) {
        res.status(500).send('Erreur lors de la création de l\'produit');
    }
};

exports.getProduit = async (req, res) => {
    try {
        const produit = await Produit.findByPk(req.params.id);
        if (produit) {
            res.json(produit);
        } else {
            res.status(404).send('produit non trouvé');
        }
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération de l\'produit');
    }
};

exports.updateProduit = async (req, res) => {
    try {
        const updatedProduit = await Produit.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (updatedProduit[0]) {
            res.json(updatedProduit);
        } else {
            res.status(404).send('produit non trouvé');
        }
    } catch (err) {
        res.status(500).send('Erreur lors de la mise à jour de l\'produit');
    }
};

exports.deleteProduit = async (req, res) => {
    try {
        const deletedProduit = await Produit.destroy({
            where: {
                id: req.params.id
            }
        });
        if (deletedProduit) {
            res.status(204).send();
        } else {
            res.status(404).send('produit non trouvé');
        }
    } catch (err) {
        res.status(500).send('Erreur lors de la suppression de l\'produit');
    }
};
