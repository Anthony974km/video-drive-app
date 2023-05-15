const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/users');
const produitRoutes = require('./routes/produits');
const db = require('./models');
const stripe = require('stripe')('sk_test_51N7udGD8fIYjfM4wWy0pXFQ1zQYLRJlNa1a1w1fAiTxmWkIUVrdzdyN9vKdEagyjhZafnoP50nmGTccDJvRJYEip00BZQltPq3');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

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
