const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/users');
const produitRoutes = require('./routes/produits');
const db = require('./models');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenue dans notre API!');
});

app.use('/users', userRoutes);
app.use('/produits', produitRoutes); // Utilisation de 'produits' au lieu de 'produit'

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Erreur de synchronisation avec la base de données :', err);
});
