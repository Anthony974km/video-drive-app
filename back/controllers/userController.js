const db = require('../models');
const User = db.User;

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération des utilisateurs');
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).send('Erreur lors de la création de l\'utilisateur');
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('Utilisateur non trouvé');
        }
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (updatedUser[0]) {
            res.json(updatedUser);
        } else {
            res.status(404).send('Utilisateur non trouvé');
        }
    } catch (err) {
        res.status(500).send('Erreur lors de la mise à jour de l\'utilisateur');
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.destroy({
            where: {
                id: req.params.id
            }
        });
        if (deletedUser) {
            res.status(204).send();
        } else {
            res.status(404).send('Utilisateur non trouvé');
        }
    } catch (err) {
        res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
    }
};
