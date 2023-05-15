module.exports = (sequelize, DataTypes) => {
    const Commande = sequelize.define('Commande', {
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    });

    return Commande;
};