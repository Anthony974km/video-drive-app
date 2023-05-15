const Sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    const Produit = sequelize.define('Produit', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        plateforme: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prix: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Produit;
};