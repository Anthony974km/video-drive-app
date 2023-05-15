'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const produits = [];

    for (let i = 0; i < 5; i++) {
      const produit = {
        nom: "The Legend of Zelda: Tears of the Kingdo",
        photo: "https://gaming-cdn.com/images/products/4860/380x218/the-legend-of-zelda-tears-of-the-kingdom-switch-switch-game-nintendo-eshop-europe-cover.jpg?v=1684087200",
        description: "Une aventure épique à travers les terres et les cieux d'Hyrule vous attend dans The Legend of Zelda: Tears of the Kingdom sur Nintendo Switch. Créez votre propre aventure dans un monde où vous pouvez donner libre cours à votre imagination. Dans cette suite de The Legend of Zelda: Breath of the Wild, c'est à vous de décider du chemin que vous voulez suivre à travers les immenses terres d'Hyrule et les vastes cieux qui les surplombent. Saurez-",
        plateforme: "Switch",
        prix: "66",
        stock: "1"
      };
      produits.push(produit);
    }

    await queryInterface.bulkInsert('Produits', produits, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Produits', null, {});
  }
};
